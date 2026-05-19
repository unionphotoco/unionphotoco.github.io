// @ts-check
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const sharp = require("sharp");

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content/blog");
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "data");
const MANIFEST_FILE = path.join(DATA_DIR, "blog-image-manifest.json");

const WIDTHS = [400, 800, 1200, 1600];
const QUALITY = 75;

function readCoverImages() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const seen = new Set();
  fs.readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .forEach((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      if (data.coverImage && typeof data.coverImage === "string") {
        seen.add(data.coverImage);
      }
    });
  return Array.from(seen);
}

function variantPath(coverImage, width) {
  const ext = path.extname(coverImage);
  const base = coverImage.slice(0, -ext.length);
  return `${base}-${width}w.webp`;
}

function shouldRegenerate(sourceAbs, outputAbs) {
  if (!fs.existsSync(outputAbs)) return true;
  const srcStat = fs.statSync(sourceAbs);
  const outStat = fs.statSync(outputAbs);
  return srcStat.mtimeMs > outStat.mtimeMs;
}

async function generateForCover(coverImage) {
  const sourceAbs = path.join(PUBLIC_DIR, coverImage);
  if (!fs.existsSync(sourceAbs)) {
    console.warn(`  ⚠ missing source: ${coverImage}`);
    return null;
  }

  const { width: sourceWidth = 0 } = await sharp(sourceAbs).metadata();
  const targetWidths = WIDTHS.filter((w) => w < sourceWidth);
  if (
    targetWidths.length === 0 ||
    targetWidths[targetWidths.length - 1] < sourceWidth
  ) {
    targetWidths.push(sourceWidth);
  }

  const variants = [];
  for (const width of targetWidths) {
    const outRel = variantPath(coverImage, width);
    const outAbs = path.join(PUBLIC_DIR, outRel);

    if (shouldRegenerate(sourceAbs, outAbs)) {
      fs.mkdirSync(path.dirname(outAbs), { recursive: true });
      await sharp(sourceAbs)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outAbs);
      console.log(`  → ${outRel}`);
    }

    variants.push({ src: outRel, width });
  }

  return { fallback: coverImage, webp: variants };
}

async function run() {
  console.log("Generating blog thumbnails...");
  const covers = readCoverImages();
  const manifest = {};

  for (const cover of covers) {
    const entry = await generateForCover(cover);
    if (entry) manifest[cover] = entry;
  }

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  console.log(
    `Done — ${Object.keys(manifest).length} images, ${
      Object.keys(manifest).length * WIDTHS.length
    } variants`,
  );
}

run().catch((err) => {
  console.error("Thumbnail generation failed:", err);
  process.exit(1);
});
