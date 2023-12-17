import mail from "../../shared/icons/message-icon.svg";
import location from "../../shared/icons/location-icon.svg";
import facebook from "../../shared/icons/facebook-icon.svg";
import instagram from "../../shared/icons/instagram-icon.svg";
import vk from "../../shared/icons/vk-icon.svg";
import twitter from "../../shared/icons/twitter.svg";

export const links = [
  { id: 1, link: "Автомобили", path: "/" },
  { id: 2, link: "Услуги", path: "/" },
  { id: 3, link: "О нас", path: "/" },
  { id: 4, link: "Развлечения", path: "/" },
];

export const contacts = [
  {
    id: 1,
    contact: "example@gmail.com",
    icon: mail,
    alt: "Mail Icon",
  },
  {
    id: 2,
    contact: "+7 1031 01 11",
    icon: location,
    alt: "Location Icon",
  },
];

export const nets = [
  { id: 1, icon: facebook, alt: "Facebook Icon" },
  { id: 2, icon: instagram, alt: "Insta Icon" },
  { id: 3, icon: vk, alt: "VK Icon" },
  { id: 4, icon: twitter, alt: "Twitter Icon" },
];
