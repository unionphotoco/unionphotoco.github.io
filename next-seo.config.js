export default {
  titleTemplate: "%s | Union Photo Co.",
  defaultTitle: "Union Photo Co.",
  defaultOpenGraphImage:
    "https://unionphotoco.com/images/logo/unionphotocoicon.svg",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unionphotoco.com/",
    site_name: "Union Photo Co.",
    images: [
      {
        url: "https://unionphotoco.com/images/logo/unionphotocoicon.svg",
        width: 128,
        height: 128,
        alt: "Union Photo Co.",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    image: "https://unionphotoco.com/images/logo/unionphotocoicon.svg",
  },
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Union Photo Co.",
    },
  ],
};
