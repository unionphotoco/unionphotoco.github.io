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
  useBreakpointValue,
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
  const width = useBreakpointValue({ base: "100%", sm: "auto" });
  return (
    <Box
      pos="relative"
      overflow="hidden"
      w="full"
      height="100vh"
      textAlign="center"
      bg={useColorModeValue("#EBE7DE", "gray.700")}
      bgImage="/images/glamphotobooth.jpg"
      bgSize="cover"
      bgPosition="bottom"
    >
      <Box marginTop={["33vh", "50vh"]} marginLeft="auto" marginRight="auto">
        <Stack direction="row" spacing={4}>
          <Container maxW="container.sm" bgImage="/images/whitebg.svg" p="2rem">
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
              Union Photo Co. is a photo booth rental company serving Snohomish
              County and King County.
            </Text>
            <ButtonGroup variant="outline" spacing="6" width={width}>
              <NextLink href="/photo-booth-rentals" passHref>
                <Button
                  colorScheme="white"
                  variant="solid"
                  as="a"
                  border="0"
                  borderRadius="0"
                >
                  Learn More
                </Button>
              </NextLink>
              <NextLink href={Site.bookNow} passHref>
                <Button
                  colorScheme="black"
                  variant="solid"
                  as="a"
                  borderRadius="0"
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
