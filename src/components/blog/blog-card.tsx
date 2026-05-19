import { BlogPostMeta, tagToSlug } from "@utils/blog";

import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  AspectRatio,
  Box,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import imageManifest from "../../../data/blog-image-manifest.json";

type ImageVariant = { src: string; width: number };
type ImageEntry = { fallback: string; webp: ImageVariant[] };
const manifest = imageManifest as Record<string, ImageEntry>;
const CARD_SIZES = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw";

const BlogCard: React.FC<{ post: BlogPostMeta }> = ({ post }) => {
  const router = useRouter();
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "white");
  const bodyText = useColorModeValue("gray.600", "gray.300");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const imageBg = useColorModeValue("gray.100", "gray.700");

  const firstTag = post.tags[0];
  const postHref = `/${post.slug}`;
  const imageEntry = post.coverImage ? manifest[post.coverImage] : null;

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) return;
    router.push(postHref);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(postHref);
    }
  };

  return (
    <Box
      as="article"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      bg={cardBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="md"
      overflow="hidden"
      h="full"
      display="flex"
      flexDirection="column"
      transition="border-color 0.15s"
      cursor="pointer"
      _hover={{
        borderColor: headingColor,
        "& .blog-card-title": { textDecoration: "underline" },
      }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: headingColor,
        outlineOffset: "2px",
      }}
    >
      {post.coverImage && (
        <AspectRatio ratio={4 / 3} bg={imageBg}>
          <Box as="picture" display="block">
            {imageEntry && (
              <source
                type="image/webp"
                srcSet={imageEntry.webp
                  .map((v) => `${v.src} ${v.width}w`)
                  .join(", ")}
                sizes={CARD_SIZES}
              />
            )}
            <Box
              as="img"
              src={imageEntry?.fallback ?? post.coverImage}
              alt={post.title}
              loading="lazy"
              decoding="async"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </AspectRatio>
      )}

      <Box p={6} display="flex" flexDirection="column" flex="1">
        {firstTag && (
          <Box mb={3}>
            <Link
              as={NextLink}
              href={`/topics/${tagToSlug(firstTag)}`}
              fontSize="xs"
              fontWeight={700}
              letterSpacing="0.05em"
              textTransform="uppercase"
              color={metaText}
              _hover={{ color: headingColor }}
            >
              {firstTag}
            </Link>
          </Box>
        )}

        <Heading as="h2" size="md" color={headingColor} mb={3} lineHeight="1.4">
          <Link
            as={NextLink}
            href={postHref}
            className="blog-card-title"
            _hover={{ textDecoration: "underline" }}
          >
            {post.title}
          </Link>
        </Heading>

        <Text color={bodyText} fontSize="sm" mb={5} flex="1">
          {post.description.length > 128
            ? post.description.slice(0, 128).trimEnd() + "…"
            : post.description}
        </Text>

        <Text
          fontSize="sm"
          fontWeight={600}
          color={headingColor}
          mt="auto"
          aria-hidden="true"
        >
          Read more →
        </Text>
      </Box>
    </Box>
  );
};

export default BlogCard;
