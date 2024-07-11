import React from "react";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const HowItWorksSection: React.FC = () => {
  return (
    <Box
      width="full"
      mx="auto"
      style={{ marginTop: "2rem", marginBottom: "0" }}
      p="5"
      pt="0"
    >
      <Heading as="h2" size="lg" textAlign="center" mb="12">
        How it Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={10}>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            1. Book a Photo Booth
          </Heading>
          <Text>
            Choose your date and book a photo booth through our easy online
            system. Your deposit secures your date.
          </Text>
        </Box>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            2. Customize Your Experience
          </Heading>
          <Text>
            We'll contact you to customize the booth design, backdrop, and photo
            layout to match your event theme.
          </Text>
        </Box>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            3. Enjoy the Event
          </Heading>
          <Text>
            On your special day, an optional booth manager ensures a smooth
            experience. You and your guests take fun, creative photos using our
            props.
          </Text>
        </Box>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            4. Receive Your Photos
          </Heading>
          <Text>
            Guests get their photos instantly. You'll receive all images within
            48 hours.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default HowItWorksSection;
