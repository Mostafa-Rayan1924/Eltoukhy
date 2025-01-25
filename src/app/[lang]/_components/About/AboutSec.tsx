"use client";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const AboutSec = ({
  About,
}: {
  About: { title: string; desc: string; btn: string };
}) => {
  let locale = usePathname().split("/")[1];

  return (
    <section className="overflow-hidden  bg-accent ">
      <div className="container sm:grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 md:py-12  lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-start ">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {About?.title}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 ">
              {About?.desc}
            </p>

            <div className="mt-4 ">
              <Link href={`/${locale}/contact`}>
                <button className={buttonVariants({ size: "lg" })}>
                  {About?.btn}
                </button>
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
