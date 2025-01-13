"use client";

import { companyValues } from "@/constants/Whyus";
import MainTitle from "../sharable/MainTitle";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section>
      <MainTitle title={"Why to choose Eltoukhy"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {companyValues.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            key={item.id}
            className="p-4 border relative before:absolute overflow-hidden before:-z-10 before:inset-0 before:h-full before:w-0 hover:before:w-full before:duration-300 before:bg-accent  border-border rounded-lg">
            <div className="flex b gap-4">
              <item.icon className="size-6 flex-shrink-0 text-blue-500 " />
              <div>
                <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
