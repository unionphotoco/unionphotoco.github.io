import { useEffect } from "react";

import { NextSeo } from "next-seo";

import { chakra, Container, Text } from "@chakra-ui/react";

import PageTitle from "@components/page-title";

const ThankYou: React.FC = (): JSX.Element => {
  const headingStyle = {
    fontSize: "lg",
    fontFamily: "body",
    fontWeight: "700",
    mb: 5,
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "Requested Booking",
      });
    }
  }, []);

  return (
    <>
      <NextSeo
        title="Union Photo Co."
        description="Thank you for contacting Union Photo Co. We will be in touch shortly."
        noindex={true}
      />
      <chakra.main>
        <Container maxW="container.lg" paddingBottom="4rem">
          <PageTitle {...headingStyle} body=" " title="Thank you" />
          <Text textAlign="center">
            Thank you for contacting Union Photo Co. We will be in touch
            shortly.
          </Text>
        </Container>
      </chakra.main>
    </>
  );
};

export default ThankYou;
