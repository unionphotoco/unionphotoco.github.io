import React from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import {
  AspectRatio,
  Box,
  Center,
  chakra,
  Image as ChakraImage,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import BookNowButton from "@components/button/booknowbutton";
import Image from "@components/image";

const LazyOurWorkSection = dynamic(() => import("@components/section/ourwork"));
const LazyBookNowSection = dynamic(() => import("@components/section/booknow"));
const LazyPricingSection = dynamic(() => import("@components/section/pricing"));

const Home1Page: React.FC = () => (
  <>
    <NextSeo
      title="Bellevue Photo Booth Rentals"
      description="Union Photo Co. is a fun photo booth rental company serving Snohomish County and King County. Book now 833.360.3679."
    />
    <chakra.main>
      <VStack align="stretch" spacing={20}>
        <PageHeader />
      </VStack>
      <Center>
        <VStack spacing={20} maxW="1680">
          {/*<MoreInformationBlock />*/}
          <LazyOurWorkSection />
          <HowItWorksBlock />
          <TestimonialsBlock />
          <LazyPricingSection />
          <LazyBookNowSection />
        </VStack>
      </Center>
    </chakra.main>
  </>
);

const TestimonialsBlock = () => {
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
              src="/images/fivestars.svg"
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
              src="/images/fivestars.svg"
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
              src="/images/fivestars.svg"
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

const MoreInformationBlock = () => {
  return (
    <Box width="full" m={0}>
      <VStack width="full" spacing={[0]}>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column", "column", "row"]}
          align="center"
          m={0}
        >
          <AspectRatio
            // data-aos="fade-right"
            minW={"50%"}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={"/images/premiumphotobooth1.jpg"}
              alt="Premium Photo Booth"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
          <Flex
            // data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 10, 10]}
          >
            <VStack
              align="start"
              width="full"
              border="1px solid"
              borderColor="gray.100"
              padding={[5, 10, 10]}
            >
              <Text fontSize="xl" fontWeight="semibold">
                Why Your Event Needs a Photo Booth
              </Text>
              <Text pb="1rem">
                Our photo booths keep your guests entertained. They'll love
                choosing props, striking poses, and sharing pictures instantly.
                It's fun for everyone!.
              </Text>
              <BookNowButton />
            </VStack>
          </Flex>
        </Stack>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
          align="center"
        >
          <Flex
            // data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 10, 10]}
          >
            <VStack
              align="start"
              width="full"
              border="1px solid"
              borderColor="gray.100"
              padding={[5, 10, 10]}
            >
              <Text fontSize="xl" fontWeight="semibold">
                Our Photo Booth Experience
              </Text>
              <Text mb="1rem">
                Experience a stress-free event with our dependable team
                providing a premium photo booth experience.
              </Text>
              <ul style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
                <li>
                  Customized for your event with instant sharing and full
                  gallery. Your guests get their photos instantly.
                </li>
                <li>
                  We provide a premium photo booth and professional support.
                </li>
                <li>
                  We're commited to making your event smooth and stress-free.
                </li>
              </ul>
              <BookNowButton />
            </VStack>
          </Flex>
          <AspectRatio
            // data-aos="fade-left"
            minW={"50%"}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
          >
            <Image
              src={"/images/hero-image.jpg"}
              alt="Digital Photo Booth Experience"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </Stack>
      </VStack>
    </Box>
  );
};

const HowItWorksBlock: React.FC = () => {
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
            Book a Photo Booth
          </Heading>
          <Text>
            Choose your date and book a photo booth through our easy online
            system. Your deposit secures your date.
          </Text>
        </Box>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            Customize Your Experience
          </Heading>
          <Text>
            We'll contact you to customize the booth design, backdrop, and photo
            layout to match your event theme.
          </Text>
        </Box>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            Enjoy the Event
          </Heading>
          <Text>
            On your special day, an optional booth manager ensures a smooth
            experience. You and your guests take fun, creative photos using our
            props.
          </Text>
        </Box>
        <Box border="1px solid" borderColor="gray.100" padding={[5]}>
          <Heading as="h3" size="sm" mb="1rem">
            Receive Your Photos
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

const PageHeader: React.FC = () => {
  return (
    <Container
      maxW="100%"
      marginTop="4.3em"
      padding="1em"
    >
      <Box maxW="1680" mx="auto" pt="2em" pb="2em">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box order={{ base: 2, md: 1 }} display="flex" alignItems="center">
            <Box mr={["0", "4em", "8em"]}>
              <VStack align="start" spacing={5}>
                <Box>
                  <Heading as="h1" size={["xl", "2xl"]} lineHeight="1.5em" mb=".7em">
                    Photo Booth Rentals
                  </Heading>
                  <Text fontSize="xl" mb=".8em">
                    Our photo booths keep your guests entertained. They'll love
                    choosing props, striking poses, and sharing pictures
                    instantly. It's fun for everyone!
                  </Text>
                  <ul style={{ marginLeft: "1rem", marginBottom: "1rem", lineHeight: '2rem' }}>
                    <li>Our photo booth make you look amazing</li>
                    <li>
                      Customized for your event with instant sharing and full
                      gallery.
                    </li>
                    <li>
                      Premium photo booth experience and professional support.
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
              >
                <Image
                  src={"/images/hero-image.jpg"}
                  alt="Digital Photo Booth Experience"
                  layout="fill"
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

const PageHeader2: React.FC = () => {
  return (
    <Box>
      <Container
        maxW="1200px"
        marginTop="6em"
        padding="1em"
        borderTop="1px solid #ccc"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" justify="center" spacing={5}>
            <Heading as="h1" size="2xl">
              Photo Booth Rentals
            </Heading>
            <Text fontSize="xl">
              Union Photo Co. is a fun photo booth rental company serving
              Snohomish County and King County. Book now 833.360.3679.
            </Text>
            <BookNowButton />
          </VStack>
          <AspectRatio
            // data-aos="fade-left"
            minW={"50%"}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
          >
            <Image
              src={"/images/prophotobooth.jpg"}
              alt="Digital Photo Booth Experience"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
          <AspectRatio
            // data-aos="fade-left"
            minW={"50%"}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
          >
            <Image
              src={"/images/prophotobooth.jpg"}
              alt="Digital Photo Booth Experience"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
          <AspectRatio
            // data-aos="fade-left"
            minW={"50%"}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
          >
            <Image
              src={"/images/prophotobooth.jpg"}
              alt="Digital Photo Booth Experience"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home1Page;
