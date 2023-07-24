import { memo } from "react";

import { Box, type ChakraProps, type ThemingProps } from "@chakra-ui/react";

const ContactForm: React.FC<ChakraProps & ThemingProps> = () => {
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

export default memo(ContactForm);
