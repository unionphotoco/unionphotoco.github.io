import React from "react";

import {
  AspectRatio,
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import BookNowButton from "@components/button/booknowbutton";
import Image from "@components/image";

interface YoureLookingGoodSectionProps {
  cityName: string;
}

export const YoureLookingGoodSection: React.FC<
  YoureLookingGoodSectionProps
> = ({ cityName }) => {
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box backgroundColor="gray.100" p={{ base: 4, md: 4 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }}>
        <Box order={{ base: 2, md: 1 }}>
          <AspectRatio
            minW={"100%"}
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
            ratio={4 / 3}
          >
            <Image
              src="/images/wedding/seattleweddingphotobooth.png"
              alt={`${cityName} Photo Booth Experience`}
              objectFit="cover"
              objectPosition="center"
              width={800}
              height={600}
            />
          </AspectRatio>
        </Box>
        <Box order={{ base: 1, md: 1 }} display="flex" alignItems="center">
          <VStack align="start" spacing={4} px={{ base: 4, md: 4 }}>
            <Heading as="h2" size="lg" mb={4} color={textColor}>
              {cityName}, You're Looking Good
            </Heading>
            <Text size="lg" lineHeight="2rem">
              Your {cityName} event deserves quality, and we deliver it every
              time. Our modern booths combine clean design, professional
              lighting, and top-grade equipment to capture perfect photos.
            </Text>
            <Text size="lg" lineHeight="2rem" pb="4">
              It's an experience built around fun, connection, and effortless
              memories. You celebrate, we take care of everything else.
            </Text>
            <BookNowButton />
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default YoureLookingGoodSection;
