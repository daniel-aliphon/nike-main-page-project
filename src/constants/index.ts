// @ts-ignore

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  supportservice,
  info,
  customize,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "200+", label: "Stores" },
  { value: "20k", label: "Shipped Everyday" },
  { value: "50k+", label: "Brands" },
  { value: "250k+", label: "Customers" },
  { value: "15mil", label: "Sold ttl" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "R 3,000.00",
    rating: "4.8",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "R 4,400.00",
    rating: "4.6",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "R 3,500.00",
    rating: "4.9",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "R 4,100.00",
    rating: "4.5",
  },
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-11",
    price: "R 3,000.00",
    rating: "4.8",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-011",
    price: "R 4,400.00",
    rating: "4.6",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-111",
    price: "R 3,500.00",
    rating: "4.9",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-101",
    price: "R 4,100.00",
    rating: "4.5",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Blitz Shipping",
    subtext: "Count on us for swift and dependable delivery to your doorstep.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience a sense of security throughout your transactions thanks to our dependable payment options.",
  },
  {
    imgURL: support,
    label: "Ethical Sourcing",
    subtext:
      "We prioritize ethical and sustainable sourcing practices for a better world.",
  },
  {
    imgURL: supportservice,
    label: "24/7  Support",
    subtext:
      "Need assistance at any time? Our customer support is available around the clock.",
  },
  {
    imgURL: customize,
    label: "Customizable",
    subtext:
      "Tailor your shopping experience to your preferences with our customizable options.",
  },
  {
    imgURL: info,
    label: "Stay Informed",
    subtext:
      "Receive updates on the latest trends, products, and promotions by subscribing to our newsletter.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Pierre White",
    rating: 4.8,
    feedback:
      "These shoes have quickly become my go-to for outdoor activities. They're rugged, waterproof, and provide excellent ankle support. Perfect for hiking!",
  },
  {
    imgURL: customer2,
    customerName: "Anna Younge",
    rating: 4.5,
    feedback:
      "I've been wearing these shoes for weeks now, and they still look and feel brand new. The quality and durability are outstanding!",
  },
  {
    imgURL: customer3,
    customerName: "John Doe",
    rating: 4.9,
    feedback:
      "I was surprised by the product's outstanding quality and the level of attention to detail, surpassing my initial expectations.Well earned 4,9.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Product 1", link: "/" },
      { name: "Product 2", link: "/" },
      { name: "Product 3", link: "/" },
      { name: "Product 4", link: "/" },
      { name: "Product 5", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQs", link: "/" },
      { name: "About us", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
      { name: "+23452352236", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/nike/",
  },
  { src: twitter, alt: "twitter logo", link: "https://twitter.com/Nike" },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/nike/?hl=en",
  },
];
