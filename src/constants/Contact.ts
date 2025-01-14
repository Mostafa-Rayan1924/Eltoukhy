import { ContactItem } from "@/Types/types";
import { MapPin, Phone, Clock } from "lucide-react";

export const contactForm: ContactItem[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Location",
    desc: "20th Ahmed Faheem bayoumy st.,Elnozha area _ cairo",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    desc: "+0201001843200 +0201000655068",
  },
  {
    id: 3,
    icon: Clock,
    title: "Hours",
    desc: "From 10:00 AM to 4:00 PM",
  },
];
