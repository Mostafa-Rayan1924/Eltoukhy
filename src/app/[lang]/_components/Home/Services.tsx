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
import { ServicesType } from "@/Types/types";
import { usePathname } from "next/navigation";

const Services = ({
  Home,
}: {
  Home: { servicesSec: { btn: string; title: string } };
}) => {
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.services as { data: ServicesType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ServicesFunc());
  }, []);
  let pathName = usePathname().split("/")[1];

  return (
    <section className="container">
      <MainTitle title={Home?.servicesSec?.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {isLoading && <ServicesSkeleton />}
        {data?.map((item) => (
          <ServBox key={item?._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          className={buttonVariants({ size: "lg" })}
          href={`/${pathName}/services`}>
          {Home?.servicesSec?.btn}
        </Link>
      </div>
    </section>
  );
};

export default Services;
