import { getAllCitiesData } from "@utils/cities";

import * as React from "react";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import NextLink from "next/link";

import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const LazyBookNowSection = dynamic(() => import("@components/section/booknow"));

interface City {
  name: string;
  description: string;
}

interface LocationCardProps {
  city: City;
  citySlug: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ city, citySlug }) => {
  return (
    <Box
      overflow="hidden"
      background="white"
      width="100%"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="md"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "300px 1fr" }}
        templateRows={{ base: "auto 1fr", md: "1fr" }}
        width="100%"
      >
        <Box width="100%" height={{ base: "200px", md: "300px" }}>
          <NextLink href={`/locations/${citySlug}`} passHref>
            <a>
              <Image
                src="/images/photo-collage.jpg"
                alt={`${city.name} photo booth rentals`}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </a>
          </NextLink>
        </Box>

        <VStack spacing={4} align="stretch" p={{ base: 6, md: 8 }}>
          <Box>
            <Heading as="h3" size={{ base: "md", md: "lg" }} mb={2}>
              {city.name}
            </Heading>
          </Box>

          <Text fontSize="sm">{city.description}</Text>

          <NextLink href={`/locations/${citySlug}`} passHref>
            <Button
              colorScheme="black"
              variant="solid"
              as="a"
              borderRadius="0"
              mt="2rem"
              mb="1rem"
              size={{ base: "sm", md: "md" }}
              style={{ border: "1px solid black" }}
            >
              Discover {city.name} Photo Booth Rentals
            </Button>
          </NextLink>
        </VStack>
      </Grid>
    </Box>
  );
};

interface LocationsPageProps {
  cities: Record<string, City>;
}

const LocationsPage: React.FC<LocationsPageProps> = ({ cities }) => {
  return (
    <>
      <NextSeo
        title="Photo Booth Rentals Locations - Union Photo Co."
        description="Find our photo booth rentals in a city near you."
        canonical="https://www.unionphotoco.com/locations"
      />

      <Container maxW="100%" marginTop="4.3em" padding="0">
        <Center>
          <VStack maxW="1680" align="stretch" marginBottom="2rem">
            <Box pt={20} pb={[0, 10]} textAlign="center" position="relative">
              <Heading as="h2" fontSize="1.25rem" mb=".5rem" data-aos="fade-up">
                Find Photo Booth Rentals in your City.
              </Heading>
              <Heading
                as="h1"
                lineHeight={[1.5]}
                fontSize={["1.5em", "2.5em", "3em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
                mb="4"
              >
                Our Locations
              </Heading>
              <Text
                maxW="2xl"
                mx="auto"
                mb={6}
                lineHeight="1.5"
                fontWeight={400}
                fontSize={["1em", "1.1em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
              >
                Wherever your event is, we're ready to bring our photo booth
                experience.
              </Text>
              {/* <Text
                maxW="2xl"
                mx="auto"
                mb={6}
                lineHeight="1.5"
                fontWeight={400}
                fontSize={["1em", "1.1em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
              >
                We provide exceptional service wherever your event takes place.
                Whether it's a destination wedding, corporate event, or private
                celebration, we bring our photo booth experience to you.
              </Text> */}

              <Text
                maxW="2xl"
                mx="auto"
                lineHeight="1.5"
                fontWeight={400}
                fontSize={["1em", "1.1em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
              >
                If your city isn't listed, below{" "}
                <NextLink href="/contact" passHref>
                  <Text
                    as="a"
                    textDecoration="underline"
                    color="gray.600"
                    _hover={{ color: "black" }}
                  >
                    contact us
                  </Text>
                </NextLink>
                , we travel!
              </Text>
            </Box>
          </VStack>
        </Center>
        <Center>
          <VStack spacing={20} maxW="1680" paddingTop="2rem">
            <Box width="full" mx="auto">
              <VStack spacing={8} align="stretch">
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={8}
                  mb={12}
                  width="100%"
                >
                  {Object.entries(cities).map(([citySlug, city]) => (
                    <LocationCard
                      key={citySlug}
                      city={city}
                      citySlug={citySlug}
                    />
                  ))}
                </Grid>
              </VStack>
            </Box>

            <LazyBookNowSection />
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cities = getAllCitiesData();

  return {
    props: {
      cities,
    },
  };
};

export default LocationsPage;
