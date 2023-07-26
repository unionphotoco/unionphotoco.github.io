import {
  Box,
  Flex,
  Grid,
  Heading, Text,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import Site from "@definitions/site";
import React from "react";
import BookNowButton from "@components/button/booknowbutton";

const BookNowSection = () => {
  const headerSize = useBreakpointValue({ base: "lg", md: "xl" });
  const textSize = useBreakpointValue({ base: "xl", md: "lg" });
  const year = new Date().getFullYear();

  return (
    <Box as="section" width="full" m={0} style={{ marginTop: 0 }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }} gap={12} mt={0}>
        <Flex
          //data-aos="fade-left"
          align={["start", "start", "center", "center"]}
          justify={["start", "start", "center", "center"]}
          width="full"
          mt={0}
        >
          <VStack align="start" width="full">
            <Box p={7}>
              <Heading size={headerSize} as="h3">
                Looking to book in {year}?
              </Heading>
              <Text size={textSize} mt={3}>
                Secure your photo booth rental now. We book up fast!
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
        <Box
          bgImage="url('/images/photo-collage.jpg')"
          bgPosition="center"
          bgSize="contain"
          minH={600}
        />
      </Grid>
    </Box>
  );
};

export default BookNowSection;
