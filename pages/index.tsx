import React, { memo, useContext, useRef } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Center,
  chakra,
  type ChakraProps,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  type TextProps,
  type ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { useCountdown } from "@definitions/hooks/useCountdown";
import Site from "@definitions/site";

import ChakraCarousel from "@components/carousel/carousel";
import {
  FreeShippingIcon,
  PackageReturnIcon,
  SecurePaymentIcon,
} from "@components/icons";
import Image from "@components/image";
import ProductBox from "@components/product-box";
import ProductBoxAddToCart from "@components/product-box/product-box-add-to-cart";
import Showcase, { GridShowcase, TripleShowcase } from "@components/showcase";

const Home1Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const bannerItems = [
    {
      title: "Secure checkout",
      body: "Guaranteed safe checkout",
      icon: <SecurePaymentIcon width={"auto"} height={16} />,
    },
    {
      title: "30 Days return",
      body: "We offer you a full refund within 30 days of purchase.",
      icon: <PackageReturnIcon width={"auto"} height={16} />,
    },
    {
      title: "Free shipping",
      body: "Automatically receive free standard shipping on every order.",
      icon: <FreeShippingIcon width={"auto"} height={12} />,
    },
  ];

  return (
    <>
      <NextSeo
        title="Bellevue Photo Booth Rentals"
        description="Union Photo Co. is a photo booth rental company serving Snohomish County and King County. Book now 833.360.3679."
      />
      <chakra.main>
        <VStack align="stretch" spacing={20}>
          <MainSlideshow
            bg={useColorModeValue("#EBE7DE", "gray.700")}
            bgImage="/images/glamphotobooth.jpg"
            bgSize="cover"
            bgPosition="bottom"
          />
        </VStack>
      </chakra.main>
    </>
  );
};

const MoreInformationBlock = () => {
  return (
    <Box width="full">
      <VStack width="full" spacing={[5, 10, 20]}>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column", "column", "row"]}
        >
          <AspectRatio
            data-aos="fade-right"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={"/images/home-2/product-0-silver.jpeg"}
              alt="Senco product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              borderEndRadius={["none", "none", "2xl", "2xl"]}
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Audio Technology
              </Text>
              <Text>
                Prima luce, cum quibus mons aliud consensu ab eo. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium
                purus sit amet fermentum.
              </Text>
              <Link variant="underline">Read More</Link>
            </VStack>
          </Flex>
        </Stack>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Compatibility
              </Text>
              <Text>
                Prima luce, cum quibus mons aliud consensu ab eo. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium
                purus sit amet fermentum.
              </Text>
              <Link variant="underline">Read More</Link>
            </VStack>
          </Flex>
          <AspectRatio
            data-aos="fade-left"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
            borderStartRadius={["none", "none", "2xl", "2xl"]}
          >
            <Image
              src={"/images/home-2/product-0-silver-1.jpeg"}
              alt="Senco product image"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </AspectRatio>
        </Stack>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column", "column", "row"]}
        >
          <AspectRatio
            data-aos="fade-right"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={"/images/home-2/product-0-silver.jpeg"}
              alt="Senco product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              borderEndRadius={["none", "none", "2xl", "2xl"]}
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Audio Technology
              </Text>
              <Text>
                Prima luce, cum quibus mons aliud consensu ab eo. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium
                purus sit amet fermentum.
              </Text>
              <Link variant="underline">Read More</Link>
            </VStack>
          </Flex>
        </Stack>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Compatibility
              </Text>
              <Text>
                Prima luce, cum quibus mons aliud consensu ab eo. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium
                purus sit amet fermentum.
              </Text>
              <Link variant="underline">Read More</Link>
            </VStack>
          </Flex>
          <AspectRatio
            data-aos="fade-left"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
            borderStartRadius={["none", "none", "2xl", "2xl"]}
          >
            <Image
              src={"/images/home-2/product-0-silver-1.jpeg"}
              alt="Senco product image"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </AspectRatio>
        </Stack>
      </VStack>
    </Box>
  );
};

const BlockTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack w="full" align="center" direction={["column", "column", "row"]}>
      <Divider display={["none", "none", "initial"]} />
      <Text flexShrink={0} fontWeight="semibold" fontSize="xl">
        {children}
      </Text>
      <Divider />
    </Stack>
  );
};

const LimitedTimeOfferBlock: React.FC<ChakraProps & ThemingProps> = memo(
  (props) => {
    const now = useRef(new Date());
    const deadline = useRef(now.current.setDate(now.current.getDate() + 13));

    const [days, hours, minutes, seconds, isDone] = useCountdown(
      deadline.current,
    );

    return (
      <Box width="full" {...props}>
        <Container maxW="container.xl">
          <Stack
            width="full"
            align="center"
            direction={["column-reverse", "column-reverse", "row"]}
            pt={[20, 20, 0]}
            spacing={[20]}
          >
            <AspectRatio
              flex="1"
              width="full"
              rounded="md"
              ratio={3 / 4}
              maxHeight={400}
            >
              <Image
                transitionProperty="common"
                transitionDuration="1s"
                transitionTimingFunction="ease-in-out"
                src="/images/sports.png"
                alt="Limited time offer"
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
              />
            </AspectRatio>

            <VStack
              flex="1"
              pos="relative"
              zIndex="1"
              align={["center", "center", "start"]}
              spacing={3}
            >
              <Text color="pink.400" fontSize="sm" fontWeight="bold">
                Limited Time Only
              </Text>
              <Text lineHeight={1} fontSize="2xl" fontWeight={600}>
                60% Discount
              </Text>
              <Text
                textAlign={["center", "center", "start"]}
                lineHeight={1}
                fontSize="5xl"
                fontWeight={800}
              >
                Sportswear Products
              </Text>
              {!isDone && (
                <Wrap>
                  <WrapItem>
                    <CountdownValue value={days} title="Days" />
                  </WrapItem>
                  <WrapItem>
                    <CountdownValue value={hours} title="Hours" />
                  </WrapItem>
                  <WrapItem>
                    <CountdownValue value={minutes} title="minutes" />
                  </WrapItem>
                  <WrapItem>
                    <CountdownValue value={seconds} title="seconds" />
                  </WrapItem>
                </Wrap>
              )}
              {/* {!!isDone && <Text>DONE</Text>} */}
              <Button size="lg" rounded="full" colorScheme="white">
                Start shopping
              </Button>
            </VStack>
          </Stack>
        </Container>
      </Box>
    );
  },
);

const CountdownValue: React.FC<{ value: number | boolean; title: string }> =
  memo(({ value, title }) => {
    const valueStyle = {
      fontFamily: "mono",
      fontWeight: 500,
      fontSize: "6xl",
      lineHeight: 1,
    };
    const titleStyle = {
      fontWeight: "bold",
      fontSize: "xs",
      textTransform: "uppercase",
    };
    const boxStyle = {
      borderWidth: "0",
      borderColor: "blackAlpha.100",
      px: 2,
      py: 2,
      minW: 20,
      rounded: "xl",
    };
    return (
      <Box {...boxStyle}>
        <VStack spacing={0}>
          <Text {...valueStyle}>{value}</Text>
          <Text {...(titleStyle as TextProps)}>{title}</Text>
        </VStack>
      </Box>
    );
  });

interface MainSlideshowProps extends ChakraProps, ThemingProps {
  items: {
    image: string;
    subtitle: string;
    title: string;
    footer: {
      href: string;
      body: string;
      title: string;
    };
    price: number;
    body: string;
  }[];
}

const MainSlideshow: React.FC<MainSlideshowProps> = ({ ...rest }) => {
  const width = useBreakpointValue({ base: "100%", sm: "auto" });
  return (
    <Box
      pos="relative"
      overflow="hidden"
      w="full"
      height="100vh"
      textAlign="center"
      {...rest}
    >
      <Box marginTop={["33vh", "50vh"]} marginLeft="auto" marginRight="auto">
        <Stack direction="row" spacing={4}>
          <Container maxW="container.sm" bgImage="/images/whitebg.svg" p="2rem">
            <Heading
              mx="auto"
              as="h1"
              textAlign="center"
              data-aos="fade-up"
              maxW="container.lg"
              mb="4"
            >
              Photo Booth Rentals
            </Heading>
            <Text mb="4">
              Union Photo Co. is a photo booth rental company serving Snohomish
              County and King County.
            </Text>
            <ButtonGroup variant="outline" spacing="6" width={width}>
              <NextLink href="/photo-booth-rentals" passHref>
                <Button
                  colorScheme="white"
                  variant="solid"
                  as="a"
                  border="0"
                  borderRadius="0"
                >
                  Learn More
                </Button>
              </NextLink>
              <NextLink href={Site.bookNow} passHref>
                <Button
                  colorScheme="black"
                  variant="solid"
                  as="a"
                  borderRadius="0"
                >
                  Book Now
                </Button>
              </NextLink>
            </ButtonGroup>
          </Container>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home1Page;
