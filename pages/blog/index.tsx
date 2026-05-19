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
        <Box bg="#EBE7DE" pt={[24, 24, 28]} pb={[8, 10, 12]}>
          <Container maxW="container.xl">
            <Breadcrumb
              fontSize="sm"
              color={metaText}
              separator="/"
              mb={[5, 6, 8]}
            >
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

            <VStack align="start" spacing={3} maxW="900px">
              <Text fontSize="xs" textTransform="uppercase">
                From Our Team
              </Text>

              <Heading
                as="h1"
                fontSize={["4xl", "5xl", "6xl"]}
                color={headingColor}
              >
                The Blog
              </Heading>

              <Text
                fontSize={["lg", "lg", "xl"]}
                color={bodyText}
                maxW="560px"
                lineHeight="1.5"
              >
                Tips, inspiration, and behind-the-scenes stories from the Union
                Photo Co. team.
              </Text>
            </VStack>

            {topics.length > 0 && (
              <Box
                mt={[6, 8]}
                pt={[4, 5]}
                borderTopWidth="1px"
                borderColor="blackAlpha.200"
              >
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color={metaText}
                  mb={3}
                >
                  Browse by topic
                </Text>
                <Wrap spacing={2}>
                  {topics.map(({ tag, slug }) => (
                    <WrapItem key={slug}>
                      <Link
                        as={NextLink}
                        href={`/topics/${slug}`}
                        fontSize="sm"
                        fontWeight={500}
                        color={headingColor}
                        px={3}
                        py={1}
                        borderWidth="1px"
                        borderColor="blackAlpha.300"
                        borderRadius="full"
                        transition="all 0.15s"
                        _hover={{
                          bg: headingColor,
                          color: "#EBE7DE",
                          borderColor: headingColor,
                          textDecoration: "none",
                        }}
                      >
                        {tag}
                      </Link>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            )}
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
