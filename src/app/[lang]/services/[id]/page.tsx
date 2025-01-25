"use client";
import { usePathname } from "next/navigation";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ServicesFunc } from "@/store/HomeSlices/servicesSlice";
import { ServicesType } from "@/Types/types";
import ServBox from "@/app/[lang]/_components/Home/ServBox";
import ServicesSkeleton from "@/app/[lang]/_components/sharable/ServicesSkeleton";

const page = () => {
  let [title, setTitle] = useState<string>("");
  let pathName = usePathname();
  let pathNameId = pathName.split("/")[pathName.split("/").length - 1];
  let pathNameLang = pathName.split("/")[1];
  useEffect(() => {
    if (pathNameLang == "en" && pathNameId == "678d9cb50255a46ffcfbdf0b") {
      setTitle("Glass Works");
    } else if (
      pathNameLang == "en" &&
      pathNameId !== "678d9cb50255a46ffcfbdf0b"
    ) {
      setTitle("Aluminum Works");
    } else if (
      pathNameLang == "ar" &&
      pathNameId == "678d9cb50255a46ffcfbdf0b"
    ) {
      setTitle("أعمال الزجاج");
    } else {
      setTitle("أعمال الألومنيوم");
    }
  }, [pathNameLang, pathNameId]);
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
          ?.filter((item) => item?.category == pathNameId)
          .map((item) => (
            <ServBox key={item?._id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default page;
