import * as React from "react";

import {
  Box,
  ChakraProps,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  ThemingProps,
  UnorderedList, useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons';
import BookNowButton from "@components/button/booknowbutton";

export const PricingSection: React.FC<ChakraProps & ThemingProps> = () => {
  return (
    <Box
      as="section"
      width="full"
      mx="auto"
      padding={[5, 10, 10]}
      style={{ marginTop: 0 }}
      background={useColorModeValue("#EBE7DE", "gray.700")}
    >
      <Heading as="h2" size="lg" textAlign="center" mb="2rem">
        Pricing
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          p={6}
          background="white"
        >
          <Heading as="h3" mb={4} size="md">
            Self Service Digital Photo Booth
          </Heading>
          <Text mb={4}>Digital only photo booth</Text>
          <UnorderedList mb={4}>
            <ListItem mb="1">Starting at $350</ListItem>
            <ListItem mb="1">24 hour rental</ListItem>
            <ListItem mb="1">Unlimited photo and GIF sessions</ListItem>
            <ListItem mb="1">Instant sharing via Airdrop or QR code</ListItem>
            <ListItem mb="1">Set up, tear down and delivery is extra</ListItem>
            <ListItem mb="1">Online gallery of event photos after 48 hours</ListItem>
            <ListItem mb="1">$150 to secure your date</ListItem>
          </UnorderedList>
          <BookNowButton />
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          p={6}
          background="white"
        >
          <Heading mb={4} as="h3" size="md">
            Pro Package (MOST POPULAR)
          </Heading>
          <Text mb={4}>Ideal for corporate events and larger parties.</Text>
          <UnorderedList mb={4}>
            <ListItem mb="1">Starting at $895</ListItem>
            <ListItem mb="1">3 hours included</ListItem>
            <ListItem fontWeight="bold" mb="1">Studio quality photos and lighting</ListItem>
            <ListItem fontWeight="bold" mb="1">Booth Manager</ListItem>
            <ListItem mb="1">Unlimited photo and GIF sessions</ListItem>
            <ListItem mb="1">Instant sharing via Airdrop or QR code</ListItem>
            <ListItem mb="1">Set up, tear down and delivery included</ListItem>
            <ListItem mb="1">Online gallery of event photos after 48 hours</ListItem>
            <ListItem fontWeight="bold" mb="1">Backdrop and props included</ListItem>
            <ListItem mb="1">$150 to secure your date</ListItem>
          </UnorderedList>
          <BookNowButton />
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          p={6}
          background="white"
        >
          <Heading as="h3" mb={4} size="md">
            Pro Package with Printing
          </Heading>
          <Text mb={4}>Perfect for large weddings and events.</Text>
          <UnorderedList mb={4}>
            <ListItem mb="1">Starting at $1095</ListItem>
            <ListItem fontWeight="bold" mb="1">4 hours included</ListItem>
            <ListItem mb="1">Studio quality photos and lighting</ListItem>
            <ListItem mb="1">Booth Manager</ListItem>
            <ListItem fontWeight="bold" mb="1">Near unlimited prints</ListItem>
            <ListItem mb="1">Unlimited photo and GIF sessions</ListItem>
            <ListItem mb="1">Instant sharing via Airdrop or QR code</ListItem>
            <ListItem mb="1">Set up, tear down and delivery included</ListItem>
            <ListItem fontWeight="bold" mb="1">Custom print template design</ListItem>
            <ListItem fontWeight="bold" mb="1">Backdrop and props included</ListItem>
            <ListItem mb="1">$150 to secure your date</ListItem>
          </UnorderedList>
          <BookNowButton />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PricingSection;
