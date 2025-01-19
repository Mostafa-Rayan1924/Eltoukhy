"use client";
import Link from "next/link";
import MainTitle from "../sharable/MainTitle";
import ServBox from "./ServBox";
import { buttonVariants } from "../ui/button";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ServicesFunc } from "@/store/HomeSlices/servicesSlice";
import ServicesSkeleton from "../sharable/ServicesSkeleton";

const Services = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.services);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ServicesFunc());
  }, []);
  return (
    <section className="container">
      <MainTitle title={"Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {isLoading && <ServicesSkeleton />}
        {data.map((item) => (
          <ServBox key={item._id} item={item} />
        ))}
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
