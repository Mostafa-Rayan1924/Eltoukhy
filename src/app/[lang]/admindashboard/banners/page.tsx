"use client";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { bannersFunc } from "@/store/HomeSlices/bannersSlice";
import { BannerType } from "@/Types/types";
import { useEffect, useState } from "react";
import Loader from "@/app/[lang]/_components/sharable/Loader";
import { deleteItem } from "@/app/[lang]/_components/Services/api";
import DelLoader from "@/app/[lang]/_components/sharable/DelLoader";
const page = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.banners as { data: BannerType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(bannersFunc());
  }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string>("");
  const handleDelete = async (id: string) => {
    setLoading(true);
    setDeletingId(id);
    try {
      await deleteItem("poster", id);
      dispatch(bannersFunc());
    } catch (error) {
      console.error("Failed to delete item:", error);
    } finally {
      setLoading(false);
      setDeletingId("");
    }
  };
  return (
    <section className="mt-[140px] container">
      <DashboradTitle
        title="Banners"
        link="/admindashboard/banners/add"
        Btntitle="Add Banner"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((slide) => (
            <div
              key={slide._id}
              className="relative w-full rounded-lg border-2 border-border   h-[250px]">
              <Image
                src={slide?.image}
                alt={slide?.name?.en}
                fill
                className="object-fill p-2  rounded-lg"
              />
              {loading && deletingId === slide._id && <DelLoader />}
              <div
                onClick={() => handleDelete(slide?._id)}
                className="absolute top-5 right-5 size-8 bg-red-500 rounded-full grid place-items-center">
                <TrashIcon className="size-4 text-white font-bold cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default page;
