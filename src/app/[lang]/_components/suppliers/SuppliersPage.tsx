"use client";
import { SuppliersFunc } from "@/store/HomeSlices/suppliersSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../sharable/PageHeading";
import SupplierSwiper from "../sharable/SupplierSwiper";
import SuppliersSkeletion from "../sharable/SuppliersSkeletion";
import { suppliers } from "../Home/Suppliers";
import Contact from "../sharable/Contact";
const SuppliersPage = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.suppliers
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(SuppliersFunc());
  }, []);
  console.log(data);
  return (
    <div className="space-y-16 md:space-y-28">
      <div className="space-y-10">
        <PageHeading title="National Suppliers" />
        {isLoading && <SuppliersSkeletion />}
        {!isLoading && data.length > 0 ? (
          <SupplierSwiper
            items={data.filter((item) => item.type.en === "National")}
            numOFSlides={4.6}
          />
        ) : (
          <h2 className="text-center text-4xl tracking-wide mt-4 font-bold">
            No Suppliers
          </h2>
        )}
      </div>
      <div className="space-y-10">
        <PageHeading title="International Suppliers" />
        <SupplierSwiper
          items={data.filter((item) => item.type.en === "International")}
          numOFSlides={4.6}
        />
      </div>
    </div>
  );
};

export default SuppliersPage;
