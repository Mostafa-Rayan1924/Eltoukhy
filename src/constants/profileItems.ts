import { profileTypeItem } from "@/Types/types";
import { BookImage, Building2, FolderKanban } from "lucide-react";

const data: profileTypeItem[] = [
  {
    icon: Building2,
    title: "Altoukhy Portfolio",
    description:
      "Explore our completed projects showcasing our expertise across various industries.",
    link: "https://drive.google.com/file/d/1hkaEVPQQY8kbhgNv7e5NcDUvGNKT3BEg/view?usp=drive_link",
  },
  {
    icon: BookImage,
    title: "Altuokhy Catalog",
    description:
      "View our catalog for detailed product and service specifications.",
    link: "https://drive.google.com/file/d/1wKYARilQmNY-tLpFn7y3R5ECt2OXXBLS/view?usp=drive_link",
  },
  {
    icon: FolderKanban,
    title: "Altuokhy Pre Qualification",
    description:
      "Check the pre-qualification criteria for working with us and collaborating effectively.",
    link: "https://drive.google.com/file/d/1Jf-RSfhnnroH954FpJnHaSAO_bgnCK6a/view?usp=drive_link",
  },
];

export default data;
