"use client";
import { AppDispatch, RootState } from "@/store/store";
import SupplierSwiper from "../sharable/SupplierSwiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SuppliersFunc } from "@/store/HomeSlices/suppliersSlice";
import SuppliersSkeletion from "../sharable/SuppliersSkeletion";
import { SupplierType } from "@/Types/types";
export let suppliers: { image: string; title: string }[] = [
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/7-5-300x300.jpg",
    title: "Suppliers 1",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/6-5-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/4-4-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/5-5-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/3-5-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/1-6-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/5-5-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/3-5-300x300.jpg",
    title: "Suppliers 2",
  },
  {
    image: "https://glassteceg.com/wp-content/uploads/2023/12/1-6-300x300.jpg",
    title: "Suppliers 2",
  },
];
const Suppliers = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.suppliers as { data: SupplierType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(SuppliersFunc());
  }, []);
  return (
    <div className="max-w-[850px] mx-auto ">
      {isLoading && <SuppliersSkeletion />}
      {!isLoading && data?.length > 0 ? (
        <SupplierSwiper items={data} numOFSlides={4} />
      ) : (
        <h2 className="text-center text-4xl tracking-wide mt-4 font-bold">
          No Suppliers
        </h2>
      )}
    </div>
  );
};

export default Suppliers;
