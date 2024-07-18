import logo1 from "@images/clients/bellevuecollege.png";
import logo2 from "@images/clients/chateaustmichelle.png";
import logo3 from "@images/clients/FHFlogo.png";
import logo4 from "@images/clients/filam.png";
import logo5 from "@images/clients/navy.png";
import logo6 from "@images/clients/nektar.jpg";

import React from "react";

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import Image from "@components/image";

const OurClients = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box textAlign="center">
      <Heading as="h2" size="lg" textAlign="center" mt="0" mb="2em">
        Our Clients Love Us
      </Heading>
      {isMobile ? (
        <Flex overflowX="scroll" justifyContent="left" mt="0" pb="4em">
          <Box flex="0 0 auto" mx="2">
            <Image
              src={logo2}
              alt="Client 2"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box flex="0 0 auto" mx="2">
            <Image
              src={logo1}
              alt="Client 1"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box flex="0 0 auto" mx="2">
            <Image
              src={logo3}
              alt="Client 3"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box flex="0 0 auto" mx="2">
            <Image
              src={logo4}
              alt="Client 4"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box flex="0 0 auto" mx="2">
            <Image
              src={logo5}
              alt="Client 5"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box flex="0 0 auto" mx="2">
            <Image
              src={logo6}
              alt="Client 6"
              height="125"
              objectFit="contain"
            />
          </Box>
        </Flex>
      ) : (
        <SimpleGrid columns={[2, null, 6]} spacing={4} pb="6em" mt="0" px="4em">
          <Box justifyContent="center" alignItems="center">
            <Image
              src={logo2}
              alt="Client 2"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Image
              src={logo1}
              alt="Client 1"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Image
              src={logo3}
              alt="Client 3"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Image
              src={logo4}
              alt="Client 4"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Image
              src={logo5}
              alt="Client 5"
              height="125"
              objectFit="contain"
            />
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Image
              src={logo6}
              alt="Client 6"
              height="125"
              objectFit="contain"
            />
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default OurClients;
