"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { ProjectFunc } from "@/store/HomeSlices/projectSlice";
import Loader from "@/app/[lang]/_components/sharable/Loader";
import { deleteItem } from "@/app/[lang]/_components/Services/api";
import DelLoader from "@/app/[lang]/_components/sharable/DelLoader";
const Projects = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ProjectFunc());
  }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string>("");
  const handleDelete = async (id: string) => {
    setLoading(true);
    setDeletingId(id);
    try {
      await deleteItem("project", id);
      dispatch(ProjectFunc());
    } catch (error) {
      console.error("Failed to delete item:", error);
    } finally {
      setLoading(false);
      setDeletingId("");
    }
  };
  return (
    <div className="mt-[140px] container">
      <DashboradTitle
        title="Projects"
        link="/admindashboard/projects/add"
        Btntitle="Add Project"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((item) => (
            <div
              key={item?._id}
              className="rounded-lg border-2 border-border pt-2 px-2">
              <div className="relative w-full    h-[250px]">
                <Image
                  src={item?.image}
                  alt={item?.title.en}
                  fill
                  className="object-fill"
                />

                {loading && deletingId === item._id && <DelLoader />}
                <div
                  onClick={() => handleDelete(item?._id)}
                  className="absolute top-5 right-5 size-8 bg-red-500 rounded-full grid place-items-center">
                  <TrashIcon className="size-4 text-white font-bold cursor-pointer" />
                </div>
              </div>
              <h2 className="text-center my-1 text-xl font-semibold">
                {item?.title?.en}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
