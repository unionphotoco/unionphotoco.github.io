import NextImage from "next/image";

import {
  Box,
  type ChakraProps,
  SimpleGrid,
  type ThemingProps,
  useBreakpointValue,
} from "@chakra-ui/react";

const imageUrls = [
  "/images/photo-booth - 9.jpeg",
  "/images/Promo-Pics - 10.jpeg",
  "/images/photo-booth - 32.jpeg",
  "/images/Promo-Pics - 42.jpeg",
  "/images/Promo-Pics - 39.jpeg",
  "/images/photo-booth-7.jpeg",
  "/images/Promo-Pics - 1 .jpeg",
  "/images/photo-booth - 20.jpeg",
  "/images/photo-booth - 16.jpeg",
  "/images/Promo-Pics - 20.jpeg",
  "/images/photo-booth - 22.jpeg",
  "/images/Promo-Pics - 25.jpeg",
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
                alt="Photo Booth Rental Sample Images"
                sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
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

export const OurWorkSection: React.FC<ChakraProps & ThemingProps> = () => {
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

export default OurWorkSection;
