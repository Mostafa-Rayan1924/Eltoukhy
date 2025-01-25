"use client";
import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import SquareIcon from "../sharable/SquareIcon";
import Link from "next/link";
const About = ({
  Home,
}: {
  Home: {
    aboutSec: {
      title: string;
      subtitle: string;
      description: string;
      btn: string;
    };
  };
}) => {
  return (
    <section className="relative   ">
      <div className="absolute left-0 lg:-left-20 w-[150px] h-[150px] sm:w-[320px] sm:h-[320px]    opacity-40 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 top-0 " />
      <div className="container">
        <div className="max-w-[700px]  relative p-4 sm:p-6 mx-auto bg-background/90 border border-border rounded-lg">
          <SquareIcon y={"-top-5"} x={"end-0"} color={"primary"} />

          <div className="flex flex-col gap-y-4 text-start">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-semibold text-xl text-primary">
              {Home.aboutSec.title}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl font-bold text-foreground">
              {Home.aboutSec.subtitle}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className=" text-muted-foreground  leading-relaxed">
              {Home.aboutSec.description}
            </motion.p>
            <div className="text-center ">
              <Link href={"/about"} className={buttonVariants({ size: "lg" })}>
                {Home.aboutSec.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
