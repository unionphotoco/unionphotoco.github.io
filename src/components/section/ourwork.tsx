import Image1 from "@images/photo-booth - 9.jpeg";
import Image9 from "@images/photo-booth - 16.jpeg";
import Image8 from "@images/photo-booth - 20.jpeg";
import Image11 from "@images/photo-booth - 22.jpeg";
import Image3 from "@images/photo-booth - 32.jpeg";
import Image6 from "@images/photo-booth-7.jpeg";
import Image7 from "@images/Promo-Pics - 1 .jpeg";
import Image2 from "@images/Promo-Pics - 10.jpeg";
import Image10 from "@images/Promo-Pics - 20.jpeg";
import Image12 from "@images/Promo-Pics - 25.jpeg";
import Image5 from "@images/Promo-Pics - 39.jpeg";
import Image4 from "@images/Promo-Pics - 42.jpeg";

import NextImage from "next/image";

import { useBreakpointValue } from "@chakra-ui/media-query";
import { Box, SimpleGrid } from "@chakra-ui/react";

export function ImageGrid() {
  const mobileHidden = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={0}>
        {(!mobileHidden || (mobileHidden && 0 <= 3)) && (
          <div>
            <NextImage
              src={Image1}
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
        )}
        {(!mobileHidden || (mobileHidden && 1 <= 3)) && (
          <div>
            <NextImage
              src={Image2}
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
        )}
        {(!mobileHidden || (mobileHidden && 2 <= 3)) && (
          <div>
            <NextImage
              src={Image3}
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
        )}
        {(!mobileHidden || (mobileHidden && 3 <= 3)) && (
          <div>
            <NextImage
              src={Image4}
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
        )}
        {!mobileHidden && (
          <>
            <div>
              <NextImage
                src={Image5}
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
            <div>
              <NextImage
                src={Image6}
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
            <div>
              <NextImage
                src={Image7}
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
            <div>
              <NextImage
                src={Image8}
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
            <div>
              <NextImage
                src={Image9}
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
            <div>
              <NextImage
                src={Image10}
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
            <div>
              <NextImage
                src={Image11}
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
            <div>
              <NextImage
                src={Image12}
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
          </>
        )}
      </SimpleGrid>
    </>
  );
}

export const OurWorkSection = () => {
  return (
    <Box
      as="section"
      width="full"
      mx="auto"
      p={0}
      style={{ marginTop: "0", marginBottom: "0" }}
    >
      <ImageGrid />
    </Box>
  );
};

export default OurWorkSection;
