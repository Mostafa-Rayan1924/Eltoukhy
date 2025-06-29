"use client";

import MainTitle from "../sharable/MainTitle";
import { motion } from "framer-motion";
import { WhyUsItem } from "@/Types/types";
import {
  Clock,
  Hammer,
  PenSquare,
  Shield,
  TrendingUp,
  Truck,
} from "lucide-react";
import OurNumbers from "./OurNumbers";
const WhyUs = ({
  Home,
}: {
  Home: {
    whyUs: {
      title: string;
      description: string;
      titleNumber: string;
      values: any;
    };
  };
}) => {
  const companyValues: WhyUsItem[] = [
    {
      id: 1,
      icon: Clock,
      title: Home?.whyUs?.values?.quality?.title,
      // desc: Home?.whyUs?.values?.quality?.desc,
    },
    {
      id: 2,
      icon: TrendingUp,
      title: Home?.whyUs?.values?.executionSpeed?.title,
      // desc: Home?.whyUs?.values?.executionSpeed?.desc,
    },
    {
      id: 3,
      icon: PenSquare,
      title: Home?.whyUs?.values?.latestDesigns?.title,
      // desc: Home?.whyUs?.values?.latestDesigns?.desc,
    },
    {
      id: 4,
      icon: Shield,
      title: Home?.whyUs?.values?.safety?.title,
      // desc: Home?.whyUs?.values?.safety?.desc,
    },
    {
      id: 5,
      icon: Truck,
      title: Home?.whyUs?.values?.supply?.title,
      // desc: Home?.whyUs?.values?.supply?.desc,
    },
    {
      id: 6,
      icon: Hammer,
      title: Home?.whyUs?.values?.installation?.title,
      // desc: Home?.whyUs?.values?.installation?.desc,
    },
  ];
  return (
    <section>
      <MainTitle title={Home?.whyUs?.title} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <p className="text-muted-foreground  leading-[2]">
          {Home?.whyUs?.description}
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {companyValues.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              key={item.id}
              className="p-4 border relative before:absolute overflow-hidden before:-z-10 before:inset-0 before:h-full before:w-0 hover:before:w-full before:duration-300 before:bg-accent  border-border rounded-lg">
              <div className="flex items-center lg:ms-10    b gap-4">
                <item.icon className="size-4 md:size-6 flex-shrink-0 text-blue-500 " />
                <div>
                  <h2 className="font-semibold lg:text-lg text-center ">
                    {item.title}
                  </h2>
                  {/* <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
