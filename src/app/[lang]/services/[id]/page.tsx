"use client";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { ServicesFunc } from "@/store/HomeSlices/servicesSlice";
import { servicesMain, ServicesType } from "@/Types/types";
import ServicesSkeleton from "@/app/[lang]/_components/sharable/ServicesSkeleton";
import { usePathname } from "next/navigation";
import ServBox from "../../_components/Home/ServBox";
import CheckLang from "../../_components/sharable/CheckLang";
import { ServicesGetFunc } from "@/store/ServicesSlices/getAllServices";

const Page = () => {
  const pathName = usePathname().split("/")[3];
  const { data: servicesData, isLoading: isLoadingServices } = useSelector(
    (state: RootState) =>
      state.services as { data: ServicesType[]; isLoading: boolean }
  );
  const { data: categoriesData, isLoading: isLoadingCategories } = useSelector(
    (state: RootState) =>
      state.getServices as { data: any[]; isLoading: boolean }
  );

  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<any>("");

  useEffect(() => {
    // تحميل البيانات عند أول تشغيل
    if (!servicesData.length) dispatch(ServicesFunc());
    if (!categoriesData.length) dispatch(ServicesGetFunc());
  }, [dispatch, servicesData.length, categoriesData.length]);

  useEffect(() => {
    if (categoriesData.length) {
      const titleFilter = categoriesData.find((item) => item._id === pathName);
      setTitle(titleFilter?.title);
    }
  }, [categoriesData, pathName]);

  const filteredServices = useMemo(
    () => servicesData.filter((item) => item.category === pathName),
    [servicesData, pathName]
  );

  return (
    <section className="mt-[96px]">
      <div className="py-20 bg-accent text-center text-5xl">
        {isLoadingCategories ? (
          <ServicesSkeleton />
        ) : title ? (
          <CheckLang item={title} />
        ) : (
          "...Loading"
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container my-10 lg:grid-cols-3">
        {isLoadingServices ? (
          <ServicesSkeleton />
        ) : filteredServices.length > 0 ? (
          filteredServices.map((item) => <ServBox key={item._id} item={item} />)
        ) : (
          <h2 className="text-center col-span-3 text-4xl tracking-wide mt-4 font-bold">
            No Services
          </h2>
        )}
      </div>
    </section>
  );
};

export default Page;
