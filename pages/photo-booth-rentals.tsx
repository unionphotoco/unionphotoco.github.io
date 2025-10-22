// eslint-disable-next-line import/no-unresolved
import React from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import { Center, chakra, VStack } from "@chakra-ui/react";

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

const Home1Page: React.FC = () => (
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
          <LazyBookNowSection />
        </VStack>
      </Center>
    </chakra.main>
  </>
);

export default Home1Page;
