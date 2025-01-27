"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoalsItem } from "@/Types/types";
const Goals = ({
  About,
}: {
  About: {
    Mission: { title: string; desc: string };
    Vision: { title: string; desc: string };
  };
}) => {
  let goals: GoalsItem[] = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1738001778/vision_uszf6x.svg",
      title: About.Mission.title,
      desc: About.Mission.desc,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1738001782/mission_j2hchc.svg",
      title: About.Vision.title,
      desc: About.Vision.desc,
    },
  ];
  return (
    <section>
      <div className="container grid grid-cols-1 gap-6 md:gap-16">
        {goals.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col  h-fit md:flex-row md:even:flex-row-reverse  rounded-lg border-2 border-border`}>
            <div className="h-[250px] md:h-[345px] lg:h-[280px] w-full md:w-1/2  bg-accent relative">
              <Image src={item.img} alt={item.title} fill />
            </div>
            <div className="p-6 h-full w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl mb-3 font-semibold text-primary">
                {item.title}
              </h2>
              <p className="text-sm sm:text-[17px] leading-[30px] text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
