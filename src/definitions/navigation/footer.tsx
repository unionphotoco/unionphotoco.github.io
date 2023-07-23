import { FiHelpCircle, FiLifeBuoy, FiSettings } from "@react-icons";

import {
  // FaFacebookSquare,
  // FiikTok,
  // FiInstagram,
  // FioogleMyBusiness,
  // FiPinterest,
  // FiYelp,
  IconType,
} from "react-icons-all";

import CountrySelect from "@components/flags/country-select";

type T_NavItem = {
  icon?: IconType;
  title: string;
  href: string;
};

interface T_NavItems extends T_NavItem {
  subitems: T_NavItem[];
  children?: React.ReactElement;
}

const HomePageItems = [
  {
    href: "/home-1",
    title: "Homepage 1",
  },
  {
    href: "/home-2",
    title: "Homepage 2",
  },

  {
    href: "/home-3",
    title: "Homepage 3",
  },
];
const PricingPageItems = [
  {
    href: "/pricing-1",
    title: "Pricing 1",
  },
  {
    href: "/pricing-2",
    title: "Pricing 2",
  },

  {
    href: "/pricing-3",
    title: "Pricing 3",
  },
];
const BlogPageItems = [
  {
    href: "/blog-1",
    title: "Blog 1",
  },
  {
    href: "/blog-2",
    title: "Blog 2",
  },
  {
    href: "/blog-3",
    title: "Blog 3",
  },
  {
    href: "/blog-post",
    title: "Blog Post",
  },
];

const CommponPageItems = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/checkout",
    title: "Checkout",
  },
  {
    href: "/shopping-cart",
    title: "Shopping Cart",
  },
  {
    href: "/product-overview",
    title: "Product Overview",
  },
  {
    href: "/filtered-products",
    title: "Filtered Products",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/invoice",
    title: "Invoice",
  },
];

const MenuItems = [
  {
    href: "/photo-booth-rentals",
    title: "Photo Booth Rentals",
  },
  {
    href: "https://unionphotoco.pixieset.com/",
    title: "Event Gallery",
    target: "_blank",
  },
  // {
  //   href: "/lookbook",
  //   title: "Lookbook",
  // },
  // {
  //   href: "/faqs",
  //   title: "FAQs",
  // },
  // {
  //   href: "/contact",
  //   title: "Contact",
  // },
  {
    href: "/book-now",
    title: "Book Now",
  },
];

const CompanyItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
  {
    title: "Return policy",
    href: "#",
  },
];

const SocialItems = [
  {
    // icon: FiSettings,
    title: "Google My Business",
    href: "https://g.page/r/Ca4ShTG5aF9AEBI/review",
  },
  {
    // icon: FaFacebookSquare,
    title: "Facebook",
    href: "https://facebook.com/unionphotoco",
  },
  {
    // icon: FiLifeBuoy,
    title: "Instagram",
    href: "https://www.instagram.com/unionphotoco/",
  },
  // {
  //   //icon: FiSettings,
  //   title: "Pinterest",
  //   href: "https://www.pinterest.com/unionphotoco",
  // },
  // {
  //   // icon: FiSettings,
  //   title: "Tik Tok",
  //   href: "https://www.tiktok.com/@unionphotoco",
  // },
  {
    // icon: FiSettings,
    title: "Yelp",
    href: "https://www.yelp.com/biz/union-photo-bellevue-5",
  },
];

const NavigationItems: T_NavItems[] = [
  // {
  //   title: "Location Served",
  //   href: "#",
  //   subitems: HomePageItems,
  // },
  // {
  //   title: "Company",
  //   href: "",
  //   subitems: CompanyItems,
  // },
  {
    title: "Quick Links",
    href: "#",
    subitems: MenuItems,
  },
  // {
  //   title: "Services",
  //   href: "#",
  //   subitems: CommponPageItems,
  // },
  {
    title: "Social Media",
    href: "",
    subitems: SocialItems,
  },
  // {
  //   title: "Terms",
  //   href: "",
  //   subitems: CommponPageItems,
  // },
];

export default NavigationItems;
