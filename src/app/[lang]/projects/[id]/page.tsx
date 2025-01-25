"use client";
import ServicesSkeleton from "@/app/[lang]/_components/sharable/ServicesSkeleton";
import { ProjectType } from "@/Types/types";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CheckLang from "../../_components/sharable/CheckLang";
const page = () => {
  let [data, setData] = useState<ProjectType>();
  let [loading, setLoading] = useState<boolean>(false);
  let pathName = usePathname().split("/")[3];
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/project/getone/${pathName}`
        );
        setData(res?.data?.data?.doc);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        throw new Error(error?.message);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    document.title = `${data?.title?.en || "Project"} | Altoukhy`;
  }, [data]);
  return (
    <section className="mt-[96px]">
      <h2 className="py-20 text-center text-5xl bg-accent">
        {loading && "Loading..."}
        {data?.title ? <CheckLang item={data?.title} /> : "Project"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container my-10 lg:grid-cols-3">
        {loading && <ServicesSkeleton />}
        {data?.images?.map((item) => (
          <div className="w-full relative h-[400px]" key={item}>
            <Image src={item} alt={item} fill />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
