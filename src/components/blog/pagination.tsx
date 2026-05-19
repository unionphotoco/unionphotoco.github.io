import NextLink from "next/link";

import { Box, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

function getPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "ellipsis")[] = [1];
  if (current > 3) pages.push("ellipsis");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("ellipsis");
  pages.push(total);
  return pages;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath = "/blog",
}) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const metaText = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("gray.300", "gray.700");

  if (totalPages <= 1) return null;

  const hrefForPage = (p: number) =>
    p === 1 ? basePath : `${basePath}/page/${p}`;

  const pages = getPageList(currentPage, totalPages);

  const cellBase = {
    minW: "40px",
    h: "40px",
    px: 3,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "sm",
    fontWeight: 500,
    borderRadius: "md",
    borderWidth: "1px",
  } as const;

  return (
    <Box
      as="nav"
      aria-label="Pagination"
      mt={[10, 12, 14]}
      display="flex"
      justifyContent="center"
    >
      <HStack spacing={2}>
        {currentPage > 1 && (
          <Link
            as={NextLink}
            href={hrefForPage(currentPage - 1)}
            aria-label="Previous page"
            rel="prev"
            {...cellBase}
            color={headingColor}
            borderColor={borderColor}
            _hover={{
              bg: headingColor,
              color: "white",
              borderColor: headingColor,
              textDecoration: "none",
            }}
          >
            ←
          </Link>
        )}

        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <Text
              key={`e-${i}`}
              {...cellBase}
              borderColor="transparent"
              color={metaText}
            >
              …
            </Text>
          ) : p === currentPage ? (
            <Box
              key={p}
              {...cellBase}
              aria-current="page"
              bg={headingColor}
              color="white"
              borderColor={headingColor}
            >
              {p}
            </Box>
          ) : (
            <Link
              key={p}
              as={NextLink}
              href={hrefForPage(p)}
              aria-label={`Go to page ${p}`}
              {...cellBase}
              color={headingColor}
              borderColor={borderColor}
              _hover={{
                bg: headingColor,
                color: "white",
                borderColor: headingColor,
                textDecoration: "none",
              }}
            >
              {p}
            </Link>
          ),
        )}

        {currentPage < totalPages && (
          <Link
            as={NextLink}
            href={hrefForPage(currentPage + 1)}
            aria-label="Next page"
            rel="next"
            {...cellBase}
            color={headingColor}
            borderColor={borderColor}
            _hover={{
              bg: headingColor,
              color: "white",
              borderColor: headingColor,
              textDecoration: "none",
            }}
          >
            →
          </Link>
        )}
      </HStack>
    </Box>
  );
};

export default Pagination;
