import React from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const LazyPageHeader = dynamic(() => import("@components/section/pageheader"));
const LazyBookNowSection = dynamic(() => import("@components/section/booknow"));

const HolidayPhotoBoothPage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Holiday Photo Booth Experiences | Union Photo Co."
        description="Professional holiday photo booth experiences for corporate events, galas, and celebrations. AI-powered customization with instant sharing and premium quality."
        canonical="https://www.unionphotoco.com/experiences/holiday-photo-booth-rental"
      />
      <chakra.main>
        <VStack align="stretch" spacing={20}>
          <HolidayHeroSection />
          <HolidayGifSection />
        </VStack>
        <Container maxW="1680" py={20}>
          <VStack spacing={20}>
            <TheExperienceSection />
            <HolidaySceneSelectionSection />
            <AICustomizationSection />
            <SelfieCaptureSection />
            <MagicalTransformationSection />
            <InstantSharingSection />
            <WhatsIncludedSection />
            <HolidayGif2Section />
            <SummarySection />
            <LazyBookNowSection />
          </VStack>
        </Container>
      </chakra.main>
    </>
  );
};

const HolidayHeroSection: React.FC = () => {
  return (
    <Box
      pos="relative"
      overflow="hidden"
      w="full"
      height="626px"
      textAlign="center"
      bg={useColorModeValue("#EBE7DE", "gray.700")}
      bgImage={"/images/Bellevue-Photo-Booth-Rentals.jpeg"}
      bgSize="cover"
      bgPosition="bottom"
    >
      <Box marginTop={["313px"]} marginLeft="auto" marginRight="auto">
        <Stack direction="row" spacing={4}>
          <Container maxW="container.sm" p="2rem" background="whiteAlpha.800">
            <Heading
              mx="auto"
              as="h1"
              textAlign="center"
              data-aos="fade-up"
              maxW="container.lg"
              mb="4"
            >
              Holiday Photo Booth Experiences
            </Heading>
            <Text mb="4">
              Professional holiday photo booth experiences designed for quality,
              presentation, and seamless execution.
            </Text>
            <ButtonGroup
              variant="outline"
              spacing="6"
              width={{ base: "100%", md: "50%" }}
              mb="4"
            >
              <Button
                colorScheme="black"
                variant="solid"
                border="1px solid black"
                borderRadius="0"
                padding="1rem"
                width="100%"
                onClick={() =>
                  document
                    .getElementById("book-now")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Now
              </Button>
            </ButtonGroup>
          </Container>
        </Stack>
      </Box>
    </Box>
  );
};

const HolidayGifSection: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("white", "gray.900")}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Experience the Magic
          </Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="full"
            maxW="800px"
            mx="auto"
          >
            <Box
              as="video"
              src="/images/gif/holiday-gif.mp4"
              autoPlay
              loop
              muted
              playsInline
              w="full"
              h="auto"
              borderRadius="lg"
              boxShadow="xl"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const HolidayGif2Section: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            See It In Action
          </Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="full"
            maxW="900px"
            mx="auto"
          >
            <Box
              as="video"
              src="/images/gif/holiday-gif-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              w="full"
              h="auto"
              borderRadius="lg"
              boxShadow="xl"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const TheExperienceSection: React.FC = () => {
  return (
    <Box id="experience" py={20}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            The Experience
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            Our Holiday Photo Booth Experience is designed for professional
            events that value quality, presentation, and seamless execution.
            Guests enjoy a refined, interactive experience that captures the
            festive spirit while maintaining the sophistication of your brand or
            celebration. Every detail is planned, tested, and delivered with
            precision to ensure a smooth and memorable event.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const HolidaySceneSelectionSection: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Holiday Scene Selection
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            Guests select from a curated collection of elegant holiday scenes.
            Options include classic studio backdrops, cozy indoor settings, or
            bright winter markets inspired by the season. Each scene is designed
            to photograph beautifully and complement a range of event styles,
            from formal galas to office celebrations.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const AICustomizationSection: React.FC = () => {
  return (
    <Box py={20}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            AI Customization
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            Our technology allows each guest to personalize their experience.
            Participants may select their age, gender, and appearance
            preferences, creating an inclusive, personalized photo that
            celebrates diversity and individuality. The result is a natural and
            flattering image that reflects each guest's unique presence.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const SelfieCaptureSection: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Selfie Capture
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            Guests use the booth's high-resolution camera to capture their
            portrait. The interface provides simple, on-screen guidance to
            ensure consistent lighting, framing, and composition. The result is
            a clean, professional-quality image that aligns with your event's
            visual standards.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const MagicalTransformationSection: React.FC = () => {
  return (
    <Box py={20}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Magical Transformation
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            Advanced AI transforms each portrait into a polished,
            holiday-inspired composition. Guests appear in their chosen setting,
            styled with festive details such as tailored attire and subtle
            seasonal accents. The integration is seamless, creating portraits
            that feel authentic and thoughtfully composed.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const InstantSharingSection: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Instant Sharing
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            Guests may instantly receive and share their images via email, text,
            or QR code. Optional on-site printing produces lab-quality keepsakes
            within seconds. Each image is delivered in your custom-branded
            layout, offering both a professional impression and a tangible
            reminder of your event.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const WhatsIncludedSection: React.FC = () => {
  return (
    <Box py={20}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            What's Included
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={8}
            maxW="6xl"
            mx="auto"
          >
            <List spacing={4}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Three hours of continuous service
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Delivery, setup, and removal handled by our professional team
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Elegant white-gloss photo booth system designed to complement
                upscale venues
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Space requirement: 10 ft wide × 10 ft deep × 8 ft high
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Pre-event creation and testing to ensure flawless performance
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Premium black backdrop for consistent image quality
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Live on-screen camera view for guest preparation
              </ListItem>
            </List>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Custom layout design tailored to your event theme
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Optional fast lab-quality printing (15-second turnaround)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Instant digital delivery via email, text, or QR code
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Unlimited usage during the rental period
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Professional on-site attendant for guest support
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Secure online gallery for event-wide access
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Optional branded activation package for marketing or sponsorship
                integration
              </ListItem>
            </List>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const SummarySection: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Summary
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="4xl" mx="auto">
            The Holiday Photo Booth Experience provides a polished,
            guest-focused activation that blends artistic presentation with
            efficient execution. It supports brand consistency, enhances guest
            engagement, and offers a reliable, visually refined centerpiece for
            any professional holiday gathering.
          </Text>
          <Divider />
          <Text
            fontSize="md"
            textAlign="center"
            maxW="4xl"
            mx="auto"
            fontStyle="italic"
          >
            Would you like me to create a version tailored for corporate pitch
            decks or vendor proposals next, formatted for B2B use (e.g.,
            planners, HR teams, and event coordinators)?
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default HolidayPhotoBoothPage;
