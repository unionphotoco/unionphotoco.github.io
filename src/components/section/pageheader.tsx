import heroImage from "@images/hero-image.jpg";

import React from "react";

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

export const PageHeader: React.FC = () => {
  return (
    <Container maxW="100%" marginTop="4.3em" padding="1em">
      <Box maxW="1680" mx="auto" pt="2em" pb="2em">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box order={{ base: 2, md: 1 }} display="flex" alignItems="center">
            <Box mr={["0", "4em", "8em"]}>
              <VStack align="start" spacing={5}>
                <Box>
                  <Heading
                    as="h1"
                    size={["xl", "2xl"]}
                    lineHeight="1.5em"
                    mb=".7em"
                  >
                    Photo Booth Rentals
                  </Heading>
                  <Text fontSize="xl" mb=".8em">
                    Our photo booths keep your guests entertained. They'll love
                    choosing props, striking poses, and sharing pictures
                    instantly. It's fun for everyone!
                  </Text>
                  <ul
                    style={{
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                      lineHeight: "2rem",
                    }}
                  >
                    <li>Our photo booth makes you look amazing</li>
                    <li>
                      Customized for your event with instant sharing and full
                      gallery
                    </li>
                    <li>
                      Premium photo booth experience and professional support
                    </li>
                    <li>Instant Photo Sharing</li>
                    <li>Online Gallery</li>
                  </ul>
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
                  alt="Digital Photo Booth Experience"
                  width={600}
                  height={450}
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

export default PageHeader;
