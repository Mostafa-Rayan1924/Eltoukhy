"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { ProjectFunc } from "@/store/HomeSlices/projectSlice";
import Loader from "@/components/sharable/Loader";
const Projects = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ProjectFunc());
  }, []);
  if (isLoading) return <Loader />;

  return (
    <div className="mt-[140px] container">
      <div className="mt-[140px] container">
        <DashboradTitle
          title="Projects"
          link="/admindashboard/projects/add"
          Btntitle="Add Project"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((item) => (
            <div className="rounded-lg border-2 border-border pt-2 px-2">
              <div key={item?._id} className="relative w-full    h-[250px]">
                <Image
                  src={item?.image}
                  alt={item?.title.en}
                  fill
                  className="object-fill"
                />

                <div className="absolute top-5 right-5 size-8 bg-red-500 rounded-full grid place-items-center">
                  <TrashIcon className="size-4 text-white font-bold cursor-pointer" />
                </div>
              </div>
              <h2 className="text-center my-1 text-xl font-semibold">
                {item?.title?.en}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
