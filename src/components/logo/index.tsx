import React, { memo } from "react";

import { type ChakraProps, Image, type ThemingProps } from "@chakra-ui/react";

const Logo: React.FC<ChakraProps & ThemingProps> = ({ width }) => (
  <Image
    src="/images/logo/Bellevue-Photo-Booth-Rentals.png"
    alt="Union Photo Co. photo booth rentals"
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    htmlWidth={width}
  />
);

export const Logo2: React.FC<ChakraProps & ThemingProps> = ({ width }) => (
  <Image
    src="/images/logo/Union Photo Co. Small White.png"
    alt="Union Photo Co. photo booth rentals"
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    htmlWidth={width}
  />
);

export default memo(Logo);
