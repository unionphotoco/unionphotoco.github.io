import React from "react";

import { NextSeo } from "next-seo";
import NextImage from "next/image";
import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  chakra,
  type ChakraProps,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  type ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";

import Image from "@components/image";

const Home1Page: React.FC = () => (
  <>
    <NextSeo
      title="Bellevue Photo Booth Rentals"
      description="Union Photo Co. is a photo booth rental company serving Snohomish County and King County. Book now 833.360.3679."
    />
    <chakra.main>
      <VStack align="stretch" spacing={20}>
        <PageHeader />
      </VStack>
      <Center>
        <VStack spacing={20} maxW="1680">
          <MoreInformationBlock />
          <GallerySection />
          <HowItWorksBlock />
          <TestimonialsBlock />
          <BookNowSection />
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

const BookNowButton = () => {
  return (
    <NextLink href={Site.bookNow} passHref>
      <Button
        colorScheme="black"
        variant="solid"
        as="a"
        borderRadius="0"
        mt="2rem"
        mb="1rem"
        style={{ border: "1px solid black" }}
      >
        Book Now
      </Button>
    </NextLink>
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
          m={0}
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
              src={"/images/premiumphotobooth1.jpg"}
              alt="Premium Photo Booth"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 10, 10]}
          >
            <VStack align="start" width="full">
              <Text fontSize="xl" fontWeight="semibold">
                Why Choose Our Premium Photo Booths?
              </Text>
              <Text>
                1. Quality at Its Best! Choose Union Photo Co. for a
                top-quality, fun digital photo booth experience. We're known for
                our excellence. Our photo booths bring a unique, engaging vibe
                to your event.
              </Text>
              <Text>
                2. Our booths help create and capture delightful moments. From
                friends' laughter to family bonding, every moment is precious.
              </Text>
              <Text pb="1rem">
                3. Our photo booths keep your guests entertained. They'll love
                choosing props, striking poses, and sharing pictures instantly.
                It's fun for everyone!
              </Text>
              <BookNowButton />
            </VStack>
          </Flex>
        </Stack>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
          background="gray.100"
        >
          <Flex
            data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 10, 10]}
          >
            <VStack align="start" width="full">
              <Text fontSize="xl" fontWeight="semibold">
                Our Photo Booth Experience
              </Text>
              <Text pb="1rem">
                Customized for your event with instant sharing and full gallery.
                Your guests get their photos instantly.
              </Text>
              <BookNowButton />
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
          >
            <Image
              src={"/images/digitalphotoboothexperience2.jpg"}
              alt="Digital Photo Booth Experience"
              layout="fill"
              //objectFit="contain"
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
              src={"/images/support2.png"}
              alt="Senco product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 10, 10]}
          >
            <VStack align="start" width="full">
              <Text fontSize="xl" fontWeight="semibold">
                Word Class Support
              </Text>
              <Text mb="1rem">
                Experience a stress-free event with our dependable team
                providing a premium photo booth experience.
              </Text>
              <ol style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
                <li>
                  We provide a premium photo booth and professional support.
                </li>
                <li>
                  Optional booth manager oversees setup, operation, and
                  takedown.
                </li>
                <li>Focused on making your event smooth and stress-free.</li>
              </ol>
              <BookNowButton />
            </VStack>
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
};

const HowItWorksBlock: React.FC<ChakraProps & ThemingProps> = () => {
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
        <Box>
          <Heading as="h3" size="sm" mb="1rem">
            1. Book a Photo Booth
          </Heading>
          <Text>
            Choose your date and book a photo booth through our easy online
            system. Your deposit secures your date.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="sm" mb="1rem">
            2. Customize Your Experience
          </Heading>
          <Text>
            We'll contact you to customize the booth design, backdrop, and photo
            layout to match your event theme.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="sm" mb="1rem">
            3. Enjoy the Event
          </Heading>
          <Text>
            On your special day, an optional booth manager ensures a smooth
            experience. You and your guests take fun, creative photos using our
            props.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="sm" mb="1rem">
            4. Receive Your Photos
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

const BookNowSection = () => {
  const headerSize = useBreakpointValue({ base: "lg", md: "xl" });
  const textSize = useBreakpointValue({ base: "xl", md: "lg" });
  const year = new Date().getFullYear();

  return (
    <Box as="section" width="full" m={0} style={{ marginTop: 0 }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }} gap={12} mt={0}>
        <Flex
          data-aos="fade-left"
          align={["start", "start", "center", "center"]}
          justify={["start", "start", "center", "center"]}
          width="full"
          mt={0}
        >
          <VStack align="start" width="full">
            <Box p={7}>
              <Heading size={headerSize} as="h3">
                Looking to book in {year}?
              </Heading>
              <Text size={textSize} mt={3}>
                Secure your photo booth rental now. We book up fast!
              </Text>
              <BookNowButton />
              <Text size={textSize} mt={3}>
                Call or Text:{" "}
                <NextLink href={`tel:${Site.phoneNumber}`}>
                  {Site.phoneNumberLabel}
                </NextLink>
              </Text>
              <Text>
                <NextLink href={`mailto:${Site.contactEmail}`}>
                  {Site.contactEmail}
                </NextLink>
              </Text>
            </Box>
          </VStack>
        </Flex>
        <Box
          bgImage="url('/images/photo-collage.jpg')"
          bgPosition="center"
          bgSize="contain"
          minH={600}
        />
      </Grid>
    </Box>
  );
};

const PageHeader: React.FC = () => {
  return (
    <Box
      mt={[200]}
      pt={[100]}
      pb={24}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Container maxW={850}>
        <VStack textAlign="center">
          <Heading
            as="h1"
            lineHeight={[1.5, 1, 1]}
            fontSize={["2em", "3em"]}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Photo Booth Rentals
          </Heading>
        </VStack>
      </Container>
    </Box>
  );
};

const imageUrls = [
  "/images/photo-booth - 1.jpeg",
  "/images/photo-booth - 32.jpeg",
  "/images/photo-booth - 16.jpeg",
  "/images/photo-booth - 7.jpeg",
  "/images/photo-booth - 9.jpeg",
  "/images/photo-booth - 13.jpeg",
  "/images/photo-booth - 8.jpeg",
  "/images/photo-booth - 20.jpeg",
  "/images/photo-booth - 22.jpeg",
  "/images/photo-booth - 31.jpeg",
  "/images/photo-booth - 23.jpeg",
  "/images/photo-booth - 12.jpeg",
];

export function ImageGrid({ imageUrls }: { imageUrls: string[] }) {
  const mobileHidden = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={0}>
        {imageUrls.map((imageUrl, index) => {
          if (index > 3 && mobileHidden) {
            return null;
          }
          return (
            <div key={imageUrl + index}>
              <NextImage
                src={imageUrl}
                alt="Photo Booth Rental Sample Image"
                width={300}
                height={200}
                objectFit="cover"
                layout="responsive"
              />
            </div>
          );
        })}
      </SimpleGrid>
    </>
  );
}

const GallerySection: React.FC<ChakraProps & ThemingProps> = () => {
  return (
    <Box
      as="section"
      width="full"
      mx="auto"
      p={0}
      style={{ marginTop: "0", marginBottom: "0" }}
    >
      <ImageGrid imageUrls={imageUrls} />
    </Box>
  );
};

export default Home1Page;
