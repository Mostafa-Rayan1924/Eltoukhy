"use client";
import DashboradTitle from "@/constants/DashboradTitle";
import Loader from "../../_components/sharable/Loader";
import DelLoader from "../../_components/sharable/DelLoader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { ServicesGetFunc } from "@/store/ServicesSlices/getAllServices";
import { deleteItem } from "../../_components/Services/api";
import Image from "next/image";
import { TrashIcon } from "lucide-react";

const page = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.getServices
  );
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string>("");
  useEffect(() => {
    dispatch(ServicesGetFunc());
  }, [dispatch]);
  const handleDelete = async (id: string) => {
    setLoading(true);
    setDeletingId(id);
    try {
      await deleteItem("category", id);
      dispatch(ServicesGetFunc());
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
        link="/admindashboard/main-services/add"
        Btntitle="Add main Service"
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
              <div className="absolute bottom-0 left-0 w-full py-4  text-center text-white  bg-gradient-to-t from-black">
                <h2>{item?.title?.en}</h2>
              </div>
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

export default page;
