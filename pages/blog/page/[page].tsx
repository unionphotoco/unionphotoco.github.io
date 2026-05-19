import {
  BlogPostMeta,
  getAllTags,
  getPaginatedPosts,
  getTotalPages,
} from "@utils/blog";

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
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import BlogCard from "@components/blog/blog-card";
import Pagination from "@components/blog/pagination";

interface BlogPagedProps {
  posts: BlogPostMeta[];
  topics: { tag: string; slug: string }[];
  currentPage: number;
  totalPages: number;
}

const BlogPagedPage: React.FC<BlogPagedProps> = ({
  posts,
  topics,
  currentPage,
  totalPages,
}) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const bodyText = useColorModeValue("gray.700", "gray.300");

  const canonical = `https://unionphotoco.com/blog/page/${currentPage}`;

  return (
    <>
      <NextSeo
        title={`Blog — Page ${currentPage} | Union Photo Co.`}
        description="Explore photo booth tips, event inspiration, wedding ideas, and behind-the-scenes stories from the Union Photo Co. team."
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: `Blog — Page ${currentPage} | Union Photo Co.`,
          description:
            "Photo booth tips, wedding ideas, corporate event guides, and more from the Union Photo Co. team.",
        }}
      />
      <chakra.main>
        <Box bg="#EBE7DE" pt={[24, 24, 28]} pb={[8, 10, 12]}>
          <Container maxW="container.lg">
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
                  Page {currentPage}
                </Text>
              </BreadcrumbItem>
            </Breadcrumb>

            <VStack align="start" spacing={3} maxW="900px">
              <Text fontSize="xs" textTransform="uppercase">
                From Our Team
              </Text>

              <Heading
                as="h1"
                fontSize={["3xl", "4xl", "5xl"]}
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
                Page {currentPage} of {totalPages}.
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
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </SimpleGrid>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = getTotalPages();
  const paths = [];
  for (let p = 2; p <= totalPages; p++) {
    paths.push({ params: { page: String(p) } });
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPagedProps> = async ({
  params,
}) => {
  const pageNum = Number(params?.page);
  if (!Number.isFinite(pageNum) || pageNum < 2) return { notFound: true };

  const { posts, currentPage, totalPages } = getPaginatedPosts(pageNum);
  if (currentPage !== pageNum) return { notFound: true };

  const topics = getAllTags();
  return { props: { posts, topics, currentPage, totalPages } };
};

export default BlogPagedPage;
