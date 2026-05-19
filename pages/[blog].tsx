import {
  BlogPost,
  formatDate,
  getAllPostSlugs,
  getPostBySlug,
  tagToSlug,
} from "@utils/blog";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";
import remarkGfm from "remark-gfm";

import { GetStaticPaths, GetStaticProps } from "next";
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
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import BookNowSection from "@components/section/booknow";

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const codeBg = useColorModeValue("#f6f6f8", "gray.800");

  const postUrl = `https://unionphotoco.com/${post.slug}`;

  interface MarkdownDefaults extends Components {
    heading?: Components["h1"];
  }

  const markdownTheme: MarkdownDefaults = {
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
    a: ({ children, href }) => (
      <Link
        href={href}
        color={headingColor}
        textDecoration="underline"
        _hover={{ color: metaText }}
        isExternal={href?.startsWith("http")}
      >
        {children}
      </Link>
    ),
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
    code: ({ inline, children }) =>
      inline ? (
        <Code
          bg={codeBg}
          color={headingColor}
          px={1}
          borderRadius="sm"
          fontSize="sm"
        >
          {children}
        </Code>
      ) : (
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
              <Image
                src={post.coverImage}
                alt={post.title}
                w="full"
                h="auto"
                borderRadius={[0, "md", "md"]}
              />
            </Container>
          </Box>
        )}

        <Box
          pt={post.coverImage ? [10, 12, 16] : 16}
          pb={16}
          bg={useColorModeValue("white", "gray.900")}
        >
          <Container maxW="container.md">
            <ReactMarkdown
              components={ChakraUIRenderer(markdownTheme)}
              remarkPlugins={[remarkGfm]}
              skipHtml
            >
              {post.content}
            </ReactMarkdown>
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
  const post = getPostBySlug(slug);
  return { props: { post } };
};

export default BlogPostPage;
