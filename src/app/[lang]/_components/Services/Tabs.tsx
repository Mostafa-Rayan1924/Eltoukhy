"use client";
import Link from "next/link";
import { servicesMain, ServicesType } from "@/Types/types";
import Image from "next/image";
import CheckLang from "../sharable/CheckLang";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ServicesGetFunc } from "@/store/ServicesSlices/getAllServices";
import ServicesSkeleton from "../sharable/ServicesSkeleton";
const Tabs = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.getServices as { data: servicesMain[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ServicesGetFunc());
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {isLoading && <ServicesSkeleton />}
      {data.map((item: servicesMain) => (
        <Link key={item?._id} href={`services/${item?._id}`}>
          <div className="rounded-lg bg-background border hover:-translate-y-2 border-border hover:border-primary duration-300 size-full p-6 ">
            <div className=" w-full h-[450px] relative">
              <Image
                className="rounded-lg"
                src={item?.image}
                alt={item?.title?.en}
                fill
              />
            </div>
            <h2 className="mt-5 text-center text-xl font-semibold">
              <CheckLang item={item?.title} />
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
