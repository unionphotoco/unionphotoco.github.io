import { IconType } from "react-icons-all";

type T_NavItem = {
  icon?: IconType;
  title: string;
  href: string;
};

interface T_NavItems extends T_NavItem {
  subitems: T_NavItem[];
  children?: React.ReactElement;
}

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
