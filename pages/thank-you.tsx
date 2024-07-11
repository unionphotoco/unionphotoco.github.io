import { Components } from "react-markdown/lib/ast-to-react";

import { NextSeo } from "next-seo";

import { chakra } from "@chakra-ui/react";

import PageTitle from "@components/page-title";

const ThankYou: React.FC = (): JSX.Element => {
  const headingStyle = {
    fontSize: "lg",
    fontFamily: "body",
    fontWeight: "700",
    mb: 5,
  };

  return (
    <>
      <NextSeo
        title="Union Photo Co."
        description="Thank you for contacting Union Photo Co. We will be in touch shortly."
        noindex={true}
      />
      <chakra.main>
        <PageTitle {...headingStyle} body=" " title="Thank you" />
      </chakra.main>
    </>
  );
};

export default ThankYou;
