"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const ServBox = () => {
  return (
    <motion.div className="rounded-lg bg-background border hover:-translate-y-2 border-border hover:border-primary duration-300 size-full p-6 ">
      <div className=" w-full h-[300px] relative">
        <Image
          className="rounded-lg"
          src="https://glassteceg.com/wp-content/uploads/2023/12/Shower-Cabins.jpg"
          alt="img1"
          fill
        />
      </div>
      <h2 className="mt-5 text-center text-xl font-semibold">Shower Cabins </h2>
    </motion.div>
  );
};

export default ServBox;
