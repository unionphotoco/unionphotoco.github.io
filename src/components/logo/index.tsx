import React, { memo } from "react";

import {
  type ChakraProps,
  Image,
  type ThemingProps,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

const Logo: React.FC<ChakraProps & ThemingProps> = ({ width }) => (
  <Image
    src="/images/logo/Bellevue-Photo-Booth-Rentals.png"
    alt="Union Photo Co. photo booth rentals"
    htmlWidth={width}
  />
);

export const Logo2: React.FC<ChakraProps & ThemingProps> = ({ width }) => (
  <Image
    src="/images/logo/Union Photo Co. Small White.png"
    alt="Union Photo Co. photo booth rentals"
    htmlWidth={width}
  />
);

export default memo(Logo);
