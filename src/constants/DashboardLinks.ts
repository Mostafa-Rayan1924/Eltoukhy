import { FolderKanban, LucideBookImage, Server, User2 } from "lucide-react";
export let dashboardLinks: {
  id: number;
  title: string;
  icon: React.ElementType;
  path: string;
}[] = [
  // home links
  {
    id: 1,
    title: "Banners",
    icon: LucideBookImage,
    path: "/admindashboard/banners",
  },
  {
    id: 2,
    icon: Server,
    title: "Services",
    path: "/admindashboard/our-services",
  },
  {
    id: 3,
    icon: User2,
    title: "Suppliers",
    path: "/admindashboard/our-suppliers",
  },
  {
    id: 4,
    icon: FolderKanban,
    title: "Projects",
    path: "/admindashboard/projects",
  },
];
