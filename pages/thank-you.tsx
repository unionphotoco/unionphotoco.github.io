import { useContext } from "react";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import terms from "@definitions/data/terms";
import { useScrollSpy } from "@definitions/hooks/useScrollSpy";

import PageTitle from "@components/page-title";

const TermsPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);

  const headingStyle = {
    fontSize: "lg",
    fontFamily: "body",
    fontWeight: "700",
    mb: 5,
  };

  interface Defaults extends Components {
    heading?: Components["h1"];
  }

  return (
    <>
      <NextSeo
        title="Union Photo Co."
        description="Thank you for contacting Union Photo Co. We will be in touch shortly."
        noindex={true}
      />
      <chakra.main>
        <PageTitle {...headingStyle} body=" " title="Thank you for booking." />
      </chakra.main>
    </>
  );
};

export default TermsPage;
