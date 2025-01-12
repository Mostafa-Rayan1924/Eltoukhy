import { ContactItem } from "@/Types/types";
import { MapPin, Phone, Clock } from "lucide-react";

export const contactForm: ContactItem[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Location",
    desc: "Ismailia, Elshohada street between 1 and 2",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    desc: "01002721298 ",
  },
  {
    id: 3,
    icon: Clock,
    title: "Hours",
    desc: "From 9:00 AM to 6:00 PM",
  },
];
