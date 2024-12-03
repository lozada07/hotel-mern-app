import { IoHome } from "react-icons/io5";
import { MdOutlineApartment, MdOutlineCabin } from "react-icons/md";
import { FaTrailer, FaHotel } from "react-icons/fa";
import { RiShipFill } from "react-icons/ri";
import { FaWifi, FaSpa } from "react-icons/fa";
import {
  MdOutlineVilla,
  MdLocalLaundryService,
  MdEmojiTransportation,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbPool } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";

export const navigationItem = [
  { title: "Home", path: "/" },
  { title: "Contact", path: "/contact" },
];

export const StepsCreateHotel = [
  { title: "STEP 1", name: "ACCOMMODATION INF" },
  { title: "STEP 2", name: "TYPE ACCOMMODATION " },
  { title: "STEP 3", name: "FACILITIES ACCOMMODATION" },
  { title: "STEP 4", name: "ACCOMMODATION DETAIL" },
  { title: "STEP 5", name: "ACCOMMODATION FILE" },
];

export const footerNavs = [
  {
    label: "Resources",
    items: [
      {
        href: "contact",
        name: "contact",
      },
      {
        href: "contact",
        name: "Support",
      },
      {
        href: "contact",
        name: "Docs",
      },
      {
        href: "contact",
        name: "Pricing",
      },
    ],
  },
  {
    label: "About",
    items: [
      {
        href: "",
        name: "Terms",
      },
      {
        href: "",
        name: "License",
      },
      {
        href: "",
        name: "Privacy",
      },
      {
        href: "",
        name: "About US",
      },
    ],
  },
];

export const Accommodationtypes = [
  {
    label: "Home",
    icon: IoHome,
  },
  {
    label: "Apartment",
    icon: MdOutlineApartment,
  },
  {
    label: "Cabin",
    icon: MdOutlineCabin,
  },
  {
    label: "Trailer",
    icon: FaTrailer,
  },
  {
    label: "Hotel",
    icon: FaHotel,
  },
  {
    label: "Yacht",
    icon: RiShipFill,
  },
];

export const Accommodationfacilities = [
  {
    label: "Wifi",
    icon: FaWifi,
  },
  {
    label: "Spa",
    icon: FaSpa,
  },
  {
    label: "Parking",
    icon: MdOutlineVilla,
  },
  {
    label: "Pool",
    icon: TbPool,
  },
  {
    label: "Gym",
    icon: CgGym,
  },

  {
    label: "Laundry",
    icon: MdLocalLaundryService,
  },

  {
    label: "Restaurant",
    icon: IoRestaurant,
  },

  {
    label: "Transport",
    icon: MdEmojiTransportation,
  },
];
