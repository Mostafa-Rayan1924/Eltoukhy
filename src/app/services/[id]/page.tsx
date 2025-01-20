"use client";
import { usePathname } from "next/navigation";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ServicesFunc } from "@/store/HomeSlices/servicesSlice";
import { ServicesType } from "@/Types/types";
import ServBox from "@/components/Home/ServBox";
import ServicesSkeleton from "@/components/sharable/ServicesSkeleton";

const page = () => {
  let pathName = usePathname();
  let pathNameEdit = pathName.replace("/services/", "");
  let title =
    pathNameEdit == "678d9cb50255a46ffcfbdf0b"
      ? "Glass Works"
      : "Aluminum Works";
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.services as { data: ServicesType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ServicesFunc());
  }, []);
  return (
    <section className="mt-[96px] ">
      <div className="py-20 bg-accent text-center text-5xl ">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container my-10 lg:grid-cols-3">
        {isLoading && <ServicesSkeleton />}
        {data
          ?.filter((item) => item?.category == pathNameEdit)
          .map((item) => (
            <ServBox key={item?._id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default page;
