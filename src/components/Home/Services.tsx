import Link from "next/link";
import MainTitle from "../sharable/MainTitle";
import ServBox from "./ServBox";
import { buttonVariants } from "../ui/button";

const Services = () => {
  return (
    <section className="container">
      <MainTitle title={"Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        <ServBox />
        <ServBox />
        <ServBox />
        <ServBox />
        <ServBox />
        <ServBox />
      </div>
      <div className="text-center mt-10">
        <Link className={buttonVariants({ size: "lg" })} href={"/services"}>
          See More
        </Link>
      </div>
    </section>
  );
};

export default Services;
