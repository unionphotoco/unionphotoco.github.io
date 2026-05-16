import { BlogPostMeta, getAllTags, getPostsByTagSlug } from "@utils/blog";

import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import BlogCard from "@components/blog/blog-card";

interface TopicPageProps {
  topic: string;
  topicSlug: string;
  posts: BlogPostMeta[];
}

const TopicPage: React.FC<TopicPageProps> = ({ topic, topicSlug, posts }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const displayTopic = topic
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <NextSeo
        title={`${displayTopic} | Blog | Union Photo Co.`}
        description={`Browse all blog posts about "${displayTopic}" from Union Photo Co.`}
        canonical={`https://unionphotoco.com/topics/${topicSlug}`}
        noindex={posts.length < 3}
        openGraph={{
          url: `https://unionphotoco.com/topics/${topicSlug}`,
          title: `${displayTopic} | Blog | Union Photo Co.`,
          description: `Browse all blog posts about "${displayTopic}" from Union Photo Co.`,
        }}
      />
      <chakra.main>
        <Box bg="#EBE7DE" pt={[28, 28, 32]} pb={12}>
          <Container maxW="container.xl">
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
                  <Text as="span" color={metaText} fontSize="sm">
                    {displayTopic}
                  </Text>
                </BreadcrumbItem>
              </Breadcrumb>

              <Text
                fontSize="xs"
                fontWeight={700}
                letterSpacing="0.05em"
                textTransform="uppercase"
                color={metaText}
              >
                Topics
              </Text>

              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={headingColor}
                lineHeight="1.25"
              >
                {displayTopic}
              </Heading>

              <Text fontSize="lg" color={bodyText}>
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </Text>
            </VStack>
          </Container>
        </Box>

        <Box py={16} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = getAllTags();
  return {
    paths: topics.map(({ slug }) => ({ params: { topic: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TopicPageProps> = async ({
  params,
}) => {
  const topicSlug = params?.topic as string;
  const result = getPostsByTagSlug(topicSlug);
  if (!result) return { notFound: true };
  return { props: { topic: result.tag, topicSlug, posts: result.posts } };
};

export default TopicPage;
