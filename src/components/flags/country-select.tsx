import { memo, useState } from "react";

import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
  useBoolean,
  useToken,
  VStack,
} from "@chakra-ui/react";

import { US } from "./index";

const CountryList = [
  {
    id: "us",
    flag: US,
    symbol: "US",
    lang: "English",
  },
];

const CountrySelect = () => {
  const [isEditing, setIsEditing] = useBoolean();
  const [selected, setSelected] = useState("us");
  const Active = CountryList.find(({ id }) => id === selected);

  const darkBtnStyle = {
    colorScheme: "gray",
    borderColor: "gray.600",
    _hover: {
      bg: "whiteAlpha.300",
    },
    _active: {
      bg: "whiteAlpha.500",
    },
  };
  const borderColor = useToken("colors", "gray.600");
  const darkPopupStyle = {
    bg: "gray.900",
    borderColor,
  };

  return (
    <Popover
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
      // closeOnBlur={false}
      isLazy
      lazyBehavior="keepMounted"
      arrowShadowColor={borderColor}
    >
      <PopoverTrigger>
        <Button
          leftIcon={<Icon as={Active.flag} />}
          variant="outline"
          size="sm"
          rounded="md"
          width="fit-content"
          {...darkBtnStyle}
        >
          <Text as="span" fontSize="xs">
            {Active.lang} {Active.symbol && `(${Active.symbol})`}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width="full"
        maxW={200}
        borderColor="transparent"
        p={2}
        {...darkPopupStyle}
      >
        <PopoverArrow {...darkPopupStyle} />
        {/* <PopoverCloseButton /> */}
        <VStack align="stretch">
          {CountryList.map((item) => (
            <Button
              key={`language-${item.lang}-${item.id}`}
              leftIcon={<Icon as={item.flag} />}
              variant="ghost"
              rounded="md"
              size="sm"
              onClick={() => {
                setIsEditing.off();
                setSelected(item.id);
              }}
              {...darkBtnStyle}
            >
              {item.lang} {item.symbol && `(${item.symbol})`}
            </Button>
          ))}
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default memo(CountrySelect);
