"use client";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";

const AboutSec = () => {
  return (
    <section className="overflow-hidden  bg-accent ">
      <div className="container sm:grid sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 md:py-12  lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-start ">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              ABOUT OUR COMPANY
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 ">
              Altoukhy Glass launched in 1998 as a specialist company in glass
              works, supply and install all types of Glass works Altoukhy Glass
              takes a keen commitment for servicing their clients and providing
              them with the highest quality of glass works with prompt
              installation and suitable prices
            </p>

            <div className="mt-4 ">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="size-full relative">
          <Image src={"/aboutsec.svg"} alt="aboutImg" fill />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSec;
