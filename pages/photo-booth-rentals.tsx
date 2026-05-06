// eslint-disable-next-line import/no-unresolved
import { FC } from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import {
  Box,
  Center,
  chakra,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";

import photoBoothRentalFaqQuestions from "../data/photoBoothRentalFaqQuestions";

const LazyPageHeader = dynamic(() => import("@components/section/pageheader"));

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
const LazyFAQSection = dynamic(() => import("@components/section/faq"));

const Home1Page: FC = () => (
  <>
    <NextSeo
      title="Bellevue Photo Booth Rentals"
      description="Union Photo Co. is a fun photo booth rental company serving Snohomish County and King County. Book now 833.360.3679."
    />
    <chakra.main>
      <VStack align="stretch" spacing={20}>
        <LazyPageHeader />
      </VStack>
      <Center>
        <VStack spacing={20} maxW="1680">
          <LazyOurWorkSection />
          <LazyHowItWorksSection />
          <LazyTestimonialSection />
          <LazyClientSection />
          <LazyPricingSection />
          <Container maxW="100%" px={4}>
            <Box maxW="1680" mx="auto" w="full" px={[1, 6, 10]} py={[2, 4, 6]}>
              <Heading as="h2" size="lg" mb="2rem" textAlign="center">
                Frequently Asked Questions
              </Heading>
              <LazyFAQSection
                city="seattle"
                questions={photoBoothRentalFaqQuestions}
              />
            </Box>
          </Container>
          <LazyBookNowSection />
        </VStack>
      </Center>
    </chakra.main>
  </>
);

export default Home1Page;
