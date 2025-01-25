"use client";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ServicesFunc } from "@/store/HomeSlices/servicesSlice";
import Loader from "@/app/[lang]/_components/sharable/Loader";
import DelLoader from "@/app/[lang]/_components/sharable/DelLoader";
import { deleteItem } from "@/app/[lang]/_components/Services/api";

const ServicesPage = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.services);
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string>("");

  useEffect(() => {
    dispatch(ServicesFunc());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    setLoading(true);
    setDeletingId(id);
    try {
      await deleteItem("subcategory", id);
      dispatch(ServicesFunc());
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
        title="Services"
        link="/admindashboard/our-services/add"
        Btntitle="Add Service"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item?._id}
              className="relative w-full rounded-lg border-2 border-border h-[250px]">
              <Image
                src={item?.image}
                alt={item?.title?.en}
                fill
                className="object-fill p-2 rounded-lg"
              />
              {loading && deletingId === item._id && <DelLoader />}
              <div
                onClick={() => handleDelete(item._id)}
                className="absolute top-5 right-5 size-8 bg-red-500 rounded-full grid place-items-center">
                <TrashIcon className="size-4 text-white font-bold cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
