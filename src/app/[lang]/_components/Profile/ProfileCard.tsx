"use client";
import { buttonVariants } from "@/app/[lang]/_components/ui/button";
import { profileTypeItem } from "@/Types/types";
import { BookImage, Building2, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
const ProfileCard = ({
  Profile,
}: {
  Profile: {
    btn: string;
    portfolio: { title: string; desc: string };
    catalog: { title: string; desc: string };
    preQualification: { title: string; desc: string };
  };
}) => {
  const data: profileTypeItem[] = [
    {
      icon: Building2,
      title: Profile.portfolio.title,
      description: Profile.portfolio.desc,
      link: "https://drive.google.com/file/d/1hkaEVPQQY8kbhgNv7e5NcDUvGNKT3BEg/view?usp=drive_link",
    },
    {
      icon: BookImage,
      title: Profile.catalog.title,
      description: Profile.catalog.desc,
      link: "https://drive.google.com/file/d/1wKYARilQmNY-tLpFn7y3R5ECt2OXXBLS/view?usp=drive_link",
    },
    {
      icon: FolderKanban,
      title: Profile.preQualification.title,
      description: Profile.preQualification.desc,
      link: "https://drive.google.com/file/d/1Jf-RSfhnnroH954FpJnHaSAO_bgnCK6a/view?usp=drive_link",
    },
  ];
  return (
    <div className="container grid grid-cols-1 mt-10 mb-20 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, i) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          key={item.title}
          className={`flex flex-col items-center  justify-center text-center gap-4 p-4 border border-border even:border-primary even:bg-accent rounded-lg`}>
          <item.icon className="size-8 flex-shrink-0 text-primary" />
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p
            className={`text-muted-foreground ${
              i % 2 !== 0 ? "text-gray-600 dark:text-muted-foreground" : ""
            }`}>
            {item.description}
          </p>
          <button
            className={"px-6 py-2 " + buttonVariants({ variant: "default" })}
            onClick={() => window.open(`${item.link}`, "_blank")}>
            {Profile.btn}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileCard;
