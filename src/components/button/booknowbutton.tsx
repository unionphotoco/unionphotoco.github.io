import React from "react";

import NextLink from "next/link";

import { Button } from "@chakra-ui/react";

import Site from "@definitions/site";

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

export default BookNowButton;
