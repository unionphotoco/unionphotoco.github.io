import React, { memo } from "react";

import { type ChakraProps, Image, type ThemingProps } from "@chakra-ui/react";

const Logo: React.FC<ChakraProps & ThemingProps> = ({ width, display }) => (
  <Image
    src="/images/logo/UnionPhotoCo.png"
    alt="Union Photo Co. photo booth rentals"
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    htmlWidth={width}
    display={display}
  />
);

export const Logo2: React.FC<ChakraProps & ThemingProps> = ({
  width,
  display,
}) => (
  <Image
    src="/images/logo/UnionPhotoCo.png"
    alt="Union Photo Co. photo booth rentals"
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    htmlWidth={width}
    display={display}
  />
);

export default memo(Logo);
