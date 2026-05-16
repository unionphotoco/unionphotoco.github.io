import { BlogPostMeta, getAllPosts, getAllTags } from "@utils/blog";

import { GetStaticProps } from "next";
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
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import BlogCard from "@components/blog/blog-card";

interface BlogIndexProps {
  posts: BlogPostMeta[];
  topics: { tag: string; slug: string }[];
}

const BlogIndexPage: React.FC<BlogIndexProps> = ({ posts, topics }) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const bodyText = useColorModeValue("gray.700", "gray.300");

  return (
    <>
      <NextSeo
        title="Blog | Photo Booth Tips, Ideas & Inspiration"
        description="Explore photo booth tips, event inspiration, wedding ideas, and behind-the-scenes stories from the Union Photo Co. team."
        canonical="https://unionphotoco.com/blog"
        openGraph={{
          url: "https://unionphotoco.com/blog",
          title: "Blog | Union Photo Co.",
          description:
            "Photo booth tips, wedding ideas, corporate event guides, and more from the Union Photo Co. team.",
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
                <BreadcrumbItem isCurrentPage>
                  <Text as="span" color={metaText} fontSize="sm">
                    Blog
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
                From Our Team
              </Text>

              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={headingColor}
                lineHeight="1.25"
              >
                The Blog
              </Heading>

              <Text fontSize="lg" color={bodyText} maxW="540px">
                Tips, inspiration, and behind-the-scenes stories from the Union
                Photo Co. team.
              </Text>

              {topics.length > 0 && (
                <Wrap spacing={4} pt={1}>
                  {topics.map(({ tag, slug }) => (
                    <WrapItem key={slug}>
                      <Link
                        as={NextLink}
                        href={`/topics/${slug}`}
                        fontSize="xs"
                        fontWeight={700}
                        letterSpacing="0.05em"
                        textTransform="uppercase"
                        color={metaText}
                        _hover={{ color: headingColor, textDecoration: "none" }}
                      >
                        {tag}
                      </Link>
                    </WrapItem>
                  ))}
                </Wrap>
              )}
            </VStack>
          </Container>
        </Box>

        <Box py={16} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW="container.xl">
            {posts.length === 0 ? (
              <VStack spacing={4} py={20} textAlign="center">
                <Heading size="md" color="gray.500">
                  No posts yet — check back soon.
                </Heading>
              </VStack>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </SimpleGrid>
            )}
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();
  const topics = getAllTags();
  return { props: { posts, topics } };
};

export default BlogIndexPage;
