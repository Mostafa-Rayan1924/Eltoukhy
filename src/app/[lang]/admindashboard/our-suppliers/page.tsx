"use client";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuppliersFunc } from "@/store/HomeSlices/suppliersSlice";
import Loader from "@/app/[lang]/_components/sharable/Loader";
import { deleteItem } from "@/app/[lang]/_components/Services/api";
import DelLoader from "@/app/[lang]/_components/sharable/DelLoader";
const SuppliersPage = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.suppliers
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(SuppliersFunc());
  }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string>("");
  const handleDelete = async (id: string) => {
    setLoading(true);
    setDeletingId(id);
    try {
      await deleteItem("supplier", id);
      dispatch(SuppliersFunc());
    } catch (error) {
      console.error("Failed to delete item:", error);
    } finally {
      setLoading(false);
      setDeletingId("");
    }
  };
  return (
    <div className="mt-[140px] w-full">
      <div className=" container">
        <DashboradTitle
          title="Suppliers"
          link="/admindashboard/our-suppliers/add"
          Btntitle="Add Supplier"
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.map((item) => (
              <div
                key={item?._id}
                className="relative w-full rounded-lg border-2 border-border   h-[250px]">
                <Image
                  src={item?.image}
                  alt={item?.title.en}
                  fill
                  className="object-fill p-2  rounded-lg"
                />
                {loading && deletingId === item._id && <DelLoader />}
                <div
                  onClick={() => handleDelete(item?._id)}
                  className="absolute top-5 right-5 size-8 bg-red-500 rounded-full grid place-items-center">
                  <TrashIcon className="size-4 text-white font-bold cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuppliersPage;
