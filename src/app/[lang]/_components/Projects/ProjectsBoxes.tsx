"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { ProjectFunc } from "@/store/HomeSlices/projectSlice";
import { ProjectType } from "@/Types/types";
import Image from "next/image";
import Link from "next/link";
import ServicesSkeleton from "../sharable/ServicesSkeleton";

const ProjectsBoxes = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.projects as { data: ProjectType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ProjectFunc());
  }, []);
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading && <ServicesSkeleton />}
      {data?.map((item) => (
        <Link
          href={`/projects/${item?._id}`}
          className="border-2 border-border hover:-translate-y-2.5 duration-300 cursor-pointer even:bg-accent overflow-hidden  rounded-lg">
          <div key={item?._id} className="w-full h-[250px] relative  shadow-md">
            <Image
              src={item?.image}
              alt={item?.title.en}
              fill
              className="object-fill"
            />
          </div>
          <div className="p-4">
            <h2 className="text-center capitalize text-xl font-semibold">
              {item?.title.en}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsBoxes;
