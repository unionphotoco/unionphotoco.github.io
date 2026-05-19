// @ts-check
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const DATA_DIR = path.join(process.cwd(), "data");
const LATEST_LIMIT = 5;

function readAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn("⚠ content/blog not found — skipping blog cache generation");
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ? String(data.date) : "",
        description: data.description ?? "",
        author: data.author ?? "Union Photo Co.",
        tags: Array.isArray(data.tags) ? data.tags : [],
        coverImage: data.coverImage ?? null,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function write(filename, data) {
  const dest = path.join(DATA_DIR, filename);
  fs.writeFileSync(dest, JSON.stringify(data, null, 2));
  console.log(`  → wrote ${filename}`);
}

function run() {
  console.log("Generating blog cache...");

  const posts = readAllPosts();

  // Newest N posts
  const latest = posts.slice(0, LATEST_LIMIT);
  write("blog-latest.json", latest);

  // Posts indexed by tag (each tag sorted newest-first)
  const byTag = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!byTag[tag]) byTag[tag] = [];
      byTag[tag].push(post);
    });
  });
  write("blog-by-tag.json", byTag);

  console.log(
    `Done — ${posts.length} posts, ${latest.length} latest, ${Object.keys(byTag).length} tags (${Object.keys(byTag).join(", ")})`
  );
}

run();
