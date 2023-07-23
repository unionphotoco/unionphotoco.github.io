import { FiMapPin } from "@react-icons";

import React from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Image from "@components/image";

import ContactForm from "@blocks/contact-form";
import CTA from "@blocks/cta";

const ContactPage: React.FC = () => {
  return (
    <>
      <NextSeo title="Contact us" description="Contact Union Photo Co." />
      <chakra.main
        // bg="gray.50"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          pt={[28, 28, 32, 210]}
          pb={32}
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Container maxW={850}>
            <VStack textAlign="center">
              <Heading
                as="h1"
                lineHeight={[1.5, 1, 1]}
                fontSize={["2em", "3em", "4em"]}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Contact
              </Heading>
            </VStack>
          </Container>
        </Box>
        <Container mt={-20} maxW="container.lg">
          <Box
            rounded="2xl"
            p={[4, 8, 10, 20]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <ContactForm />
          </Box>
        </Container>

        <Container
          zIndex={1}
          pos="relative"
          py={[5, 10, 28]}
          maxW="container.xl"
        >
          {/* <ImageLazyload
            left="50%"
            top="50%"
            transform="translateY(-50%) translateX(-50%)"
            pos="absolute"
            maxWidth="750px"
            width="full"
            zIndex={-1}
            image={useColorModeValue(WorldMapDotLight, WorldMapDotDark)}
          /> */}
          <Box
            left="50%"
            top="50%"
            transform="translateY(-50%) translateX(-50%)"
            pos="absolute"
            zIndex={-1}
          >
            <Image
              src={useColorModeValue(
                "/images/world-map-dots-light.png",
                "/images/world-map-dots-dark.png",
              )}
              width={720}
              height={405}
              alt="world map dot"
            />
          </Box>

          <Stack
            alignItems={["stretch", "stretch", "center"]}
            direction={["column", "column", "row"]}
          >
            <Flex
              data-aos="fade-up"
              data-aos-delay="50"
              justify={["center", "center", "start"]}
              flex="1"
            >
              <Box p={[2, 5, 10]}>
                <VStack align={["center", "center", "start"]}>
                  <Flex w="full" justify={["center", "center", "start"]}>
                    <Icon color="brand.400" as={FiMapPin} w={6} h={6} />
                  </Flex>
                  <Text fontSize="lg" fontWeight="600">
                    Washington, USA
                  </Text>
                  <Text>Bellevue, WA</Text>
                  <Text>(833) 360-3679</Text>
                </VStack>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </chakra.main>
    </>
  );
};

export default ContactPage;
