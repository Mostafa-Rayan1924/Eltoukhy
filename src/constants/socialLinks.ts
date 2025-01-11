import { Facebook, Instagram, Mail } from "lucide-react";
import React from "react";

export let socialLinks = [
  {
    id: 1,
    path: "https://www.instagram.com/Nova.media.eg",
    icon: React.createElement(Instagram, { size: 28 }),
    color: "#AE1CFD",
  },
  {
    id: 2,
    path: "https://www.facebook.com/Nova.media.eg",
    icon: React.createElement(Facebook, {
      size: 28,
    }),
    color: "#0866ff",
  },
  {
    id: 3,
    path: "https://wa.me/+2001002721298",
    image: true,
    icon: "/whats.png",
  },

  {
    id: 4,
    path: "https://www.facebook.com/Nova.media.eg",
    icon: React.createElement(Mail, {
      size: 28,
    }),
    color: "#f1f5f9",
  },
];
