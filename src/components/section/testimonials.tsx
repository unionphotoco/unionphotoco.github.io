import fivestars from "@images/fivestars.svg";

import React from "react";

import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import Image from "@components/image";

const Testimonials = () => {
  return (
    <Box width="full" background="gray.100" padding={[5, 10, 10]}>
      <VStack width="full" spacing={[5, 10, 10]} align="stretch">
        <Center>
          <Image
            src="/images/fivestars.svg"
            width="300"
            height="78"
            alt="See why people choose Union Photo Co - Five Star Photo Booth Rental"
          />
        </Center>
        <Heading as="h2" size="lg" textAlign="center" style={{ margin: 0 }}>
          See why people choose Union Photo Co.
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          wrap="wrap"
        >
          <Box
            w={{ base: "100%", md: "30%" }}
            p={5}
            shadow="md"
            bg="white"
            m={[0, 3]}
            mb={[3, 0]}
            borderRadius="md"
          >
            <Heading size="md" mb={3}>
              Karen
            </Heading>
            <Image
              src={fivestars}
              width="128"
              height="33"
              alt="Five Star Photo Booth Rental"
            />
            <Text fontSize="sm">
              "Union Photo Co. was the best! We had fun, photos and friendship.
              Union photo Co. is the only photographer I will use for my future
              events!"
            </Text>
          </Box>

          <Box
            w={{ base: "100%", md: "30%" }}
            p={5}
            shadow="md"
            bg="white"
            m={[0, 3]}
            mb={[3, 0]}
            borderRadius="md"
          >
            <Heading size="md" mb={3}>
              Alex
            </Heading>
            <Image
              src={fivestars}
              width="128"
              height="33"
              alt="Five Star Photo Booth Rental"
            />
            <Text fontSize="sm">
              "Union Photo Co.'s service was impressive! The booth manager
              ensured a smooth experience. Our guests couldn't get enough of the
              photo booth."
            </Text>
          </Box>

          <Box
            w={{ base: "100%", md: "30%" }}
            p={5}
            shadow="md"
            bg="white"
            m={[0, 3]}
            mb={[3, 0]}
            borderRadius="md"
          >
            <Heading size="md" mb={3}>
              Sarah & Mark
            </Heading>
            <Image
              src={fivestars}
              width="128"
              height="33"
              alt="Five Star Photo Booth Rental"
            />
            <Text fontSize="sm">
              "The photo booth was a hit, everyone had a great time, and the
              pictures were excellent! Perfect photo booth for our wedding!"
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Testimonials;
