import React, { useEffect } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const BookABooth = () => {
  useEffect(() => {
    const scriptId = "honeybook";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.innerHTML =
        '(function(h,b,s,n,i,p,e,t) {\r\n    h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;\r\n    t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;\r\n    e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);\r\n})(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","63632202e0a3290007104a56")';
      document.body.appendChild(script);
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        delete window?._HB_;
        existingScript.remove();
      }
    };
  }, []);
  return (
    <Box>
      <div className="hb-p-63632202e0a3290007104a56-2"></div>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=63632202e0a3290007104a56"
      />
    </Box>
  );
};

const ContactPage: React.FC = () => {
  const linkStyle = {
    transitionProperty: "common",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",
    textDecoration: "underline",
    color: useColorModeValue("whiteAlpha.700", "whiteAlpha.600"),
    _hover: {
      color: "white",
    },
  };
  return (
    <>
      <NextSeo title="Contact Us" description="Contact Union Photo Co." />
      <chakra.main
        // bg="gray.50"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          pt={[24, 32, 164]}
          pb={32}
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Container maxW={850}>
            <VStack textAlign="center">
              <Heading
                as="h1"
                lineHeight={[1.5]}
                fontSize={["1.5em", "2.5em", "3em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
                maxW="container.lg"
                mb="4"
              >
                Contact Us
              </Heading>
              <Heading
                as="h2"
                lineHeight={[1.5]}
                fontWeight={400}
                fontSize={["1em", "1.3em", "1.7em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
                maxW="container.md"
                mb="4"
              >
                We're excited to hear about your event and we look forward
                making your experience unforgettable.
              </Heading>

              <Heading
                as="h3"
                lineHeight={[1.5]}
                fontWeight={400}
                fontSize={[".9em", "1.1em", "1.4em"]}
                data-aos="fade-up"
                data-aos-delay="50"
                textAlign="center"
                maxW="container.md"
                pt="1em"
                mb="1em"
              >
                Call or Text:{" "}
                <Link style={linkStyle} href={`tel:8333603679`}>
                  833.360.3679
                </Link>
              </Heading>
            </VStack>
          </Container>
        </Box>
        <Container mt={-20} maxW="container.lg">
          <Box
            rounded="2xl"
            p={[4, 8, 10, 0]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <BookABooth />
          </Box>
          <Box
            rounded="2xl"
            p={[4, 8, 10, 20]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <p>Call or Text: TOLL FREE: (833) 360-3679</p>
            <p>
              By submitting your phone number, you are consenting to receive
              text messages from us. You can opt-out at any time by texting
              STOP.
            </p>
          </Box>
        </Container>
      </chakra.main>
    </>
  );
};

export default ContactPage;
