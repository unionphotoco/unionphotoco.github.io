// eslint-disable-next-line import/no-unresolved
import heroImage from "@images/hero-image.jpg";

import React from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import {
  AspectRatio,
  Box,
  Center,
  chakra,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import BookNowButton from "@components/button/booknowbutton";
import Image from "@components/image";

const LazyOurWorkSection = dynamic(() => import("@components/section/ourwork"));
const LazyBookNowSection = dynamic(() => import("@components/section/booknow"));
const LazyPricingSection = dynamic(() => import("@components/section/pricing"));
const LazyHowItWorksSection = dynamic(
  () => import("@components/section/howitworks"),
);
const LazyTestimonialSection = dynamic(
  () => import("@components/section/testimonials"),
);
const LazyClientSection = dynamic(
  () => import("@components/section/ourclients"),
);

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
          <LazyOurWorkSection />
          <LazyHowItWorksSection />
          <LazyTestimonialSection />
          <LazyClientSection />
          <LazyPricingSection />
          <LazyBookNowSection />
        </VStack>
      </Center>
    </chakra.main>
  </>
);

const PageHeader: React.FC = () => {
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
              >
                <Image
                  src={heroImage}
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

export default Home1Page;
