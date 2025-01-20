"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServicesType } from "@/Types/types";
const ServBox = ({ item }: { item: ServicesType }) => {
  return (
    <Link href={`/services/serv/${item?._id}`}>
      <motion.div className="rounded-lg bg-background border hover:-translate-y-2 border-border hover:border-primary duration-300 size-full p-6 ">
        <div className=" w-full h-[300px] relative">
          <Image className="rounded-lg" src={item?.image} alt="img1" fill />
        </div>
        <h2 className="mt-5 text-center text-xl font-semibold">
          {item?.title?.en}
        </h2>
      </motion.div>
    </Link>
  );
};

export default ServBox;
