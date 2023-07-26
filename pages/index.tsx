import React from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";

const Home1Page: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Bellevue Photo Booth Rentals"
        description="Union Photo Co. is a photo booth rental company serving Snohomish County and King County. Book now 833.360.3679."
      />
      <chakra.main>
        <VStack align="stretch" spacing={20}>
          <MainSlideshow />
        </VStack>
      </chakra.main>
    </>
  );
};

const MainSlideshow: React.FC = () => {
  return (
    <Box
      pos="relative"
      overflow="hidden"
      w="full"
      height="100vh"
      textAlign="center"
      bg={useColorModeValue("#EBE7DE", "gray.700")}
      bgImage={"/images/bellevue-photo-booth-experience.jpg"}
      bgSize="cover"
      bgPosition="bottom"
    >
      <Box marginTop={["50vh"]} marginLeft="auto" marginRight="auto">
        <Stack direction="row" spacing={4}>
          <Container maxW="container.sm" p="2rem" background="white">
            <Heading
              mx="auto"
              as="h1"
              textAlign="center"
              data-aos="fade-up"
              maxW="container.lg"
              mb="4"
            >
              Photo Booth Rentals
            </Heading>
            <Text mb="4">
              Lights, Camera, Action: Your Photobooth Journey Begins!
            </Text>
            <ButtonGroup
              variant="outline"
              spacing="6"
              width={{ base: "100%", md: "50%" }}
            >
              <NextLink href="/photo-booth-rentals" passHref>
                <Button
                  colorScheme="white"
                  variant="solid"
                  as="a"
                  border="1px solid black"
                  borderRadius="0"
                  width="100%"
                >
                  Learn More
                </Button>
              </NextLink>
              <NextLink href={Site.bookNow} passHref>
                <Button
                  colorScheme="black"
                  variant="solid"
                  as="a"
                  border="1px solid black"
                  borderRadius="0"
                  padding="1rem"
                  width="100%"
                >
                  Book Now
                </Button>
              </NextLink>
            </ButtonGroup>
          </Container>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home1Page;
