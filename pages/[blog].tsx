import {
  BlogPostMeta,
  formatDate,
  getAllPostSlugs,
  getPostBySlug,
  tagToSlug,
} from "@utils/blog";

import remarkGfm from "remark-gfm";

import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleJsonLd, NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  Code,
  Container,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import BookNowSection from "@components/section/booknow";

import imageManifest from "../data/blog-image-manifest.json";

type HeroImageEntry = {
  fallback: string;
  webp: { src: string; width: number }[];
};
const heroManifest = imageManifest as Record<string, HeroImageEntry>;
const HERO_SIZES = "(max-width: 992px) 100vw, 960px";

interface BlogPostPageProps {
  post: BlogPostMeta;
  mdxSource: MDXRemoteSerializeResult;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, mdxSource }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const codeBg = useColorModeValue("#f6f6f8", "gray.800");

  const postUrl = `https://unionphotoco.com/${post.slug}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mdxComponents: Record<string, React.FC<any>> = {
    p: ({ children }) => (
      <Text color={bodyText} fontSize="lg" lineHeight="1.85" mb={5}>
        {children}
      </Text>
    ),
    h2: ({ children }) => (
      <Heading
        as="h2"
        size="xl"
        color={headingColor}
        fontFamily="heading"
        mt={10}
        mb={4}
      >
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading
        as="h3"
        size="lg"
        color={headingColor}
        fontFamily="heading"
        mt={8}
        mb={3}
      >
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading
        as="h4"
        size="md"
        color={headingColor}
        fontFamily="heading"
        mt={6}
        mb={2}
      >
        {children}
      </Heading>
    ),
    a: ({ children, href }) => {
      const isInternal =
        !!href && (href.startsWith("/") || href.startsWith("#"));
      const linkProps = {
        color: headingColor,
        textDecoration: "underline",
        _hover: { color: metaText },
      };
      if (isInternal && href) {
        return (
          <NextLink href={href} passHref legacyBehavior>
            <Link {...linkProps}>{children}</Link>
          </NextLink>
        );
      }
      return (
        <Link href={href} isExternal={href?.startsWith("http")} {...linkProps}>
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <UnorderedList pl={2} mb={5} spacing={2} color={bodyText} fontSize="lg">
        {children}
      </UnorderedList>
    ),
    ol: ({ children }) => (
      <OrderedList pl={2} mb={5} spacing={2} color={bodyText} fontSize="lg">
        {children}
      </OrderedList>
    ),
    li: ({ children }) => <ListItem lineHeight="1.85">{children}</ListItem>,
    blockquote: ({ children }) => (
      <Box
        as="blockquote"
        borderLeftWidth="3px"
        borderLeftColor={dividerColor}
        pl={5}
        py={1}
        my={6}
        color={metaText}
        fontStyle="italic"
        fontSize="lg"
      >
        {children}
      </Box>
    ),
    code: ({ children }) => (
      <Code
        bg={codeBg}
        color={headingColor}
        px={1}
        borderRadius="sm"
        fontSize="sm"
      >
        {children}
      </Code>
    ),
    pre: ({ children }) => (
      <Box
        as="pre"
        bg={codeBg}
        p={5}
        borderRadius="md"
        overflowX="auto"
        my={6}
        fontSize="sm"
        fontFamily="monospace"
        color={bodyText}
      >
        {children}
      </Box>
    ),
    hr: () => <Divider borderColor={dividerColor} my={10} />,
  };

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={postUrl}
        openGraph={{
          url: postUrl,
          title: post.title,
          description: post.description,
          type: "article",
          article: {
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
          },
          ...(post.coverImage && {
            images: [{ url: post.coverImage, alt: post.title }],
          }),
        }}
      />
      <ArticleJsonLd
        url={postUrl}
        title={post.title}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author}
        description={post.description}
        images={post.coverImage ? [post.coverImage] : []}
        publisherName="Union Photo Co."
        publisherLogo="https://unionphotoco.com/images/logo/unionphotocoicon.svg"
      />

      <chakra.main>
        <Box bg="#EBE7DE" pt={[28, 28, 32]} pb={12}>
          <Container maxW="container.lg">
            <VStack align="start" spacing={4}>
              <Breadcrumb fontSize="sm" color={metaText} separator="/">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    as={NextLink}
                    href="/"
                    _hover={{ color: headingColor }}
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    as={NextLink}
                    href="/blog"
                    _hover={{ color: headingColor }}
                  >
                    Blog
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <Text
                    as="span"
                    noOfLines={1}
                    maxW="260px"
                    color={metaText}
                    fontSize="sm"
                  >
                    {post.title}
                  </Text>
                </BreadcrumbItem>
              </Breadcrumb>

              {post.tags.length > 0 && (
                <Box display="flex" gap={4} flexWrap="wrap">
                  {post.tags.map((t) => (
                    <Link
                      key={t}
                      as={NextLink}
                      href={`/topics/${tagToSlug(t)}`}
                      fontSize="xs"
                      fontWeight={700}
                      letterSpacing="0.05em"
                      textTransform="uppercase"
                      color={metaText}
                      _hover={{ color: headingColor }}
                    >
                      {t}
                    </Link>
                  ))}
                </Box>
              )}

              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={headingColor}
                lineHeight="1.25"
              >
                {post.title}
              </Heading>

              <Text fontSize="lg" color={bodyText}>
                {post.description}
              </Text>

              <Text fontSize="sm" color={metaText}>
                {post.author} · {formatDate(post.date)}
              </Text>
            </VStack>
          </Container>
        </Box>

        {post.coverImage && (
          <Box bg={useColorModeValue("white", "gray.900")} pt={[8, 10, 12]}>
            <Container maxW="container.lg" px={[0, 4, 4]}>
              <Box
                as="picture"
                display="block"
                borderRadius={[0, "md", "md"]}
                overflow="hidden"
              >
                {heroManifest[post.coverImage] && (
                  <source
                    type="image/webp"
                    srcSet={heroManifest[post.coverImage].webp
                      .map((v) => `${v.src} ${v.width}w`)
                      .join(", ")}
                    sizes={HERO_SIZES}
                  />
                )}
                <Box
                  as="img"
                  src={
                    heroManifest[post.coverImage]?.fallback ?? post.coverImage
                  }
                  alt={post.title}
                  loading="eager"
                  decoding="async"
                  w="full"
                  h="auto"
                />
              </Box>
            </Container>
          </Box>
        )}

        <Box
          pt={post.coverImage ? [10, 12, 16] : 16}
          pb={16}
          bg={useColorModeValue("white", "gray.900")}
        >
          <Container maxW="container.md">
            <MDXRemote {...mdxSource} components={mdxComponents} />
          </Container>
        </Box>
        <Container maxW="100%" px={4}>
          <Box maxW="1680" mx="auto" w="full" px={[1, 6, 10]} py={[2, 4, 6]}>
            <BookNowSection />
          </Box>
        </Container>
      </chakra.main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { blog: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = params?.blog as string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content, ...meta } = getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
    parseFrontmatter: false,
  });
  return { props: { post: meta, mdxSource } };
};

export default BlogPostPage;
