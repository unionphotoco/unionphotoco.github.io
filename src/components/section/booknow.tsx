import React from "react";

import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";

import BookNowButton from "@components/button/booknowbutton";
import Image from "@components/image";

const BookNowSection = ({ city }: { city?: string | null }) => {
  const headerSize = useBreakpointValue({ base: "lg", md: "xl" });
  const textSize = useBreakpointValue({ base: "xl", md: "lg" });
  const year = new Date().getFullYear();

  return (
    <Box as="section" width="full" m={0} style={{ marginTop: 0 }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }} gap={12} mt={0}>
        <Flex
          align={["start", "start", "center", "center"]}
          justify={["start", "start", "center", "center"]}
          width="full"
          mt={0}
        >
          <VStack align="start" width="full">
            <Box p={7}>
              {city ? (
                <Heading size={headerSize} as="h3">
                  Planning an event in {city}, WA?
                </Heading>
              ) : (
                <Heading size={headerSize} as="h3">
                  Looking to book in {year}?
                </Heading>
              )}
              <Text size={textSize} mt={3}>
                Secure your photo booth rental now. Book early, we sell out
                fast.
              </Text>
              <BookNowButton />
              <Text size={textSize} mt={3}>
                Call or Text:{" "}
                <NextLink href={`tel:${Site.phoneNumber}`}>
                  {Site.phoneNumberLabel}
                </NextLink>
              </Text>
              <Text>
                <NextLink href={`mailto:${Site.contactEmail}`}>
                  {Site.contactEmail}
                </NextLink>
              </Text>
            </Box>
          </VStack>
        </Flex>
        <Box minH={600} position="relative">
          <AspectRatio ratio={4 / 3} width="full" height="full">
            <Image
              src="/images/photo-collage.jpg"
              alt="Photo booth collage"
              width={800}
              height={600}
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </Box>
      </Grid>
    </Box>
  );
};

export default BookNowSection;
