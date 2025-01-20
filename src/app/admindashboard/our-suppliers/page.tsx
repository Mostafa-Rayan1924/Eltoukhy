"use client";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuppliersFunc } from "@/store/HomeSlices/suppliersSlice";
import Loader from "@/components/sharable/Loader";
const SuppliersPage = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.suppliers
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(SuppliersFunc());
  }, []);
  if (isLoading) return <Loader />;
  return (
    <div className="mt-[140px]">
      <div className="mt-[140px] container">
        <DashboradTitle
          title="Suppliers"
          link="/admindashboard/our-suppliers/add"
          Btntitle="Add Supplier"
        />
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
              <div className="absolute top-5 right-5 size-8 bg-red-500 rounded-full grid place-items-center">
                <TrashIcon className="size-4 text-white font-bold cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuppliersPage;
