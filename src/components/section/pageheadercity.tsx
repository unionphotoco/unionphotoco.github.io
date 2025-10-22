import heroImage from "@images/wedding/seattleweddingphotobooth2.png";

import React from "react";

import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import BookNowButton from "@components/button/booknowbutton";
import Image from "@components/image";

export const PageHeaderCitySection: React.FC<{
  cityName: string;
  cityState: string;
}> = ({ cityName, cityState }) => {
  const linkStyle = {
    textDecoration: "underline",
    cursor: "pointer",
  };
  return (
    <Container
      maxW="100%"
      marginTop="3em"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box maxW="1680" mx="auto" pb="2em">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box order={{ base: 2, md: 1 }} display="flex" alignItems="center">
            <Box mr={["0", "4em", "8em"]}>
              <VStack align="start" spacing={5}>
                <Box>
                  <Heading
                    as="h1"
                    size={["xl", "2xl"]}
                    mb="4"
                    lineHeight={["3.5rem", "3.5rem"]}
                  >
                    {cityName}'s Best Photo booth Rental Company
                  </Heading>
                  <Heading as="h2" size="md" lineHeight="2rem" mb="4">
                    Planning a wedding or party in {cityName}, WA?
                    <br />
                    We’ve got you covered.
                  </Heading>
                  <Text size="lg" lineHeight="2rem">
                    Union Photo Co. provides luxury photo booth experiences for
                    high-end weddings and events in {cityName}, {cityState} and{" "}
                    <NextLink href="/locations" passHref>
                      <span style={linkStyle}>surrounding areas.</span>
                    </NextLink>
                  </Text>
                  <BookNowButton />
                </Box>
              </VStack>
            </Box>
          </Box>
          <Box order={{ base: 1, md: 2 }}>
            <Box mb="1em">
              <AspectRatio
                // data-aos="fade-left"
                minW={"50%"}
                width="full"
                pos="relative"
                zIndex={1}
                bg="#f6f6f8"
                ratio={4 / 3}
              >
                <Image
                  src={heroImage}
                  alt={`${cityName} Photo Booth Experience`}
                  width={800}
                  height={600}
                  objectFit="cover"
                  objectPosition="center"
                />
              </AspectRatio>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};
