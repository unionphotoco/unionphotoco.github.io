import NextImage from "next/image";

import {
  Box, ChakraProps,
  SimpleGrid,
  ThemingProps,
  useBreakpointValue
} from "@chakra-ui/react";

const imageUrls = [
  "/images/photo-booth - 9.jpeg",
  "/images/photo-booth - 32.jpeg",
  "/images/photo-booth - 16.jpeg",
  "/images/photo-booth-7.jpeg",
  "/images/photo-booth - 13.jpeg",
  "/images/photo-booth - 8.jpeg",
  "/images/photo-booth - 20.jpeg",
  "/images/photo-booth-1.jpeg",
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
