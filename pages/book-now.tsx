// eslint-disable-next-line import/no-unresolved
import { addForm } from "@utils/honeybook";

import React, { useEffect } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const BookABooth = () => {
  useEffect(() => {
    const scriptId = addForm("63632202e0a3290007104a56");

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        delete window?._HB_;
        existingScript.remove();
      }
    };
  }, []);
  return (
    <Box>
      <div className="hb-p-63632202e0a3290007104a56-1"></div>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=63632202e0a3290007104a56"
      />
    </Box>
  );
};

const ContactPage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Book Now"
        description="Book a photo booth with Union Photo Co."
      />
      <chakra.main
        // bg="gray.50"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          pt={[24, 32, 164]}
          pb={[24, 32]}
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Container maxW={850}>
            <VStack textAlign="center">
              <Heading
                as="h1"
                lineHeight={[1.5, 1, 1]}
                fontSize={["1.5em", "2.5em", "3em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
                maxW="container.lg"
                mb="4"
              >
                Book a Photo Book
              </Heading>
            </VStack>
          </Container>
        </Box>
        <Container mt={-20} maxW="container.lg">
          <Box
            rounded="2xl"
            p={[4, 8, 10, 0]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <BookABooth />
          </Box>
          <Box
            rounded="2xl"
            p={[4, 8, 10, 20]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <p>Call or Text: TOLL FREE: (833) 360-3679</p>
            <p>
              By submitting your phone number, you are consenting to receive
              text messages from us. You can opt-out at any time by texting
              STOP.
            </p>
          </Box>
        </Container>
      </chakra.main>
    </>
  );
};

export default ContactPage;
