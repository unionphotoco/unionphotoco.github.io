import * as React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import {
  CityData,
  getAllCitiesData,
  getCityBySlug,
} from "../../src/utils/cities";

const LazyPageHeaderCitySection = dynamic(
  () =>
    import("../../src/components/section/pageheadercity").then((mod) => ({
      default: mod.PageHeaderCitySection,
    })),
  { ssr: false },
);
const LazyYoureLookingGoodSection = dynamic(
  () =>
    import("../../src/components/section/yourelookinggood").then((mod) => ({
      default: mod.YoureLookingGoodSection,
    })),
  { ssr: false },
);
const LazyBookNowSection = dynamic(
  () => import("../../src/components/section/booknow"),
  { ssr: false },
);
const LazyPricingSection = dynamic(
  () => import("../../src/components/section/pricing"),
  { ssr: false },
);
const LazyImage = dynamic(() => import("../../src/components/image"), {
  ssr: false,
});

interface CityPageProps {
  city: CityData;
  citySlug: string;
}

const CityPage: React.FC<CityPageProps> = ({ city, citySlug }) => {
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <NextSeo
        title={`${city.name} Photo Booth Rentals`}
        description={`${city.name}'s best photo booth rental company serving Snohomish County and King County. Book now 833.360.3679.`}
        canonical={`https://www.unionphotoco.com/locations/${citySlug}`}
      />

      <Container maxW="100%" marginTop="4.3em" padding="0">
        <VStack spacing={12} maxW="1680" mx="auto">
          <LazyPageHeaderCitySection
            cityName={city.name}
            cityState={city.state}
          />
          <LazyYoureLookingGoodSection cityName={city.name} />
          <Box
            backgroundColor="white"
            p={{ base: 6, md: 8 }}
            textAlign="center"
          >
            <SimpleGrid
              columns={{ base: 1, md: 4 }}
              spacing={{ base: 1, md: 6 }}
              maxW="1200px"
              mx="auto"
              mb={8}
            >
              <Box>
                <AspectRatio
                  minW={"100%"}
                  width="full"
                  pos="relative"
                  zIndex={1}
                  ratio={4 / 3}
                >
                  <LazyImage
                    src="/images/dropoff-photobooth/photobooth1.png"
                    alt={`${city.name} Photo Booth Experience`}
                    width={300}
                    height={225}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </AspectRatio>
              </Box>
              <Box>
                <AspectRatio
                  minW={"100%"}
                  width="full"
                  pos="relative"
                  zIndex={1}
                  ratio={4 / 3}
                >
                  <LazyImage
                    src="/images/dropoff-photobooth/photobooth2.png"
                    alt={`${city.name} Photo Booth Services`}
                    width={300}
                    height={225}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </AspectRatio>
              </Box>
              <Box>
                <AspectRatio
                  minW={"100%"}
                  width="full"
                  pos="relative"
                  zIndex={1}
                  ratio={4 / 3}
                >
                  <LazyImage
                    src="/images/dropoff-photobooth/photobooth4.png"
                    alt={`${city.name} Photo Booth Memories`}
                    width={300}
                    height={225}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </AspectRatio>
              </Box>
              <Box>
                <AspectRatio
                  minW={"100%"}
                  width="full"
                  pos="relative"
                  zIndex={1}
                  ratio={4 / 3}
                >
                  <LazyImage
                    src="/images/dropoff-photobooth/photobooth3.png"
                    alt={`${city.name} Photo Booth Gallery`}
                    width={300}
                    height={225}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </AspectRatio>
              </Box>
            </SimpleGrid>
            <Heading as="h2" size="lg" mb={4} color={textColor}>
              Our Photo Booth Rentals in {city.name}
            </Heading>
            <Text mb={4} color={textColor} px={{ base: 4, md: 8 }}>
              We bring the fun {city.name} Photo Booth Services We make{" "}
              {city.name} events shine with professional photo booths and studio
              lighting. You get crisp, vibrant photos, instant sharing, and a
              simple, stress-free setup. Our team manages every detail so you
              can focus on having fun.
            </Text>
          </Box>
          <LazyPricingSection />
          <LazyBookNowSection city={city.name} />
        </VStack>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const citiesData = getAllCitiesData();

  const paths = Object.values(citiesData).map((city) => ({
    params: { city: city.name.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const citySlug =
    typeof params?.city === "string"
      ? params.city
      : Array.isArray(params?.city)
      ? params?.city[0]
      : "";

  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city,
      citySlug,
    },
  };
};

export default CityPage;
