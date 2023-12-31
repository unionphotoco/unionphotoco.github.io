import { memo } from "react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const PlusMinusIcons: React.FC<{ isExpanded: boolean }> = ({
  isExpanded,
  ...rest
}): JSX.Element => {
  return (
    <Box
      as="span"
      transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
      transition="transform 250ms linear"
      display="flex"
      width="12px"
      height="12px"
      {...rest}
    >
      {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
    </Box>
  );
};

export default memo(PlusMinusIcons);
