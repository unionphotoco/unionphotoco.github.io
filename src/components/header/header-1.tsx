import React, { memo, useEffect, useRef } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  type ChakraProps,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  type ThemingProps,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

// import type { ChakraProps, ThemingProps } from "@chakra-ui/react";
import MAIN_NAV_ITEMS from "@definitions/navigation/main";

import Logo, { Logo2 } from "@components/logo";
import Navbar, { MobileNav } from "@components/navbar";

function isBetweenTwoDates(
  date1Str: string,
  date2Str: string,
  today: Date = new Date(),
): boolean {
  // Parse the input dates as strings in the format 'MM-DD'
  const date1Parts = date1Str.split("-");
  const date2Parts = date2Str.split("-");

  const date1 = new Date(
    today.getFullYear(),
    parseInt(date1Parts[0], 10) - 1,
    parseInt(date1Parts[1], 10),
  );
  const date2 = new Date(
    today.getFullYear(),
    parseInt(date2Parts[0], 10) - 1,
    parseInt(date2Parts[1], 10),
  );

  return date1 <= today && today <= date2;
}
const Header1: React.FC<ChakraProps & ThemingProps> = (props) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const breakpoint = { base: "none", lg: "flex" };
  const breakpointReverse = { base: "flex", lg: "none" };
  const ref = useRef();
  const mobileMenuBG = useColorModeValue("white", "gray.900");
  const col = useColorModeValue("blackAlpha.700", "whiteAlpha.700");

  const handleRouteChange = () => onClose();
  const router = useRouter();

  const displayPromo = isBetweenTwoDates("01-01", "12-29");

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {displayPromo && (
        <Container
          background="#ebe7de"
          textAlign="center"
          textTransform="uppercase"
          width="100%"
          maxWidth="100%"
          margin="auto"
          padding=".5rem"
          fontSize={[".7em", "md"]}
        >
          <Box maxW="container.xl" textAlign="center" maxWidth="100%">
            <Text textAlign="center" width="100%" margin="auto" color="black">
              Use promo code <b>"WEDDING"</b> for $50 off.{" "}
              <NextLink href="/book-now" passHref>
                <Link>
                  <b>Book Now</b>
                </Link>
              </NextLink>
            </Text>
          </Box>
        </Container>
      )}

      <Box py={4} {...props} pb="1" bg="white">
        <Container maxW="container.xl">
          <Flex align="center" justify="space-between">
            <NextLink href="/" passHref>
              <Link _hover={{ color: col }}>
                <HStack align="center">
                  <Logo
                    width="250"
                    display={["none", "none", "block", "block"]}
                  />
                  <Logo2
                    width="200"
                    display={["block", "block", "none", "none"]}
                  />
                </HStack>
              </Link>
            </NextLink>

            <Navbar
              containerRef={ref}
              display={breakpoint}
              items={MAIN_NAV_ITEMS}
            />

            {/* Mobile Menu Button */}
            <Box display={breakpointReverse}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                colorScheme="white"
                borderRadius="0"
                aria-label="Toggle Navigation"
              />
            </Box>
          </Flex>

          {/* Mega Menu container */}
          <Box
            display={["none", "none", "none", "block"]}
            ref={ref}
            pos="relative"
            zIndex="sticky"
            width="full"
          />
        </Container>

        {/* Mobile Collapse */}
        <Collapse in={isOpen} animateOpacity>
          <Box display={breakpointReverse} mt={4} py={2} bg={mobileMenuBG}>
            <Container maxW="container.xl">
              <MobileNav items={MAIN_NAV_ITEMS} />
            </Container>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default memo(Header1);
