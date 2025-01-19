"use client";
import { slides } from "@/components/Home/Hero";
import DashboradTitle from "@/constants/DashboradTitle";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const SuppliersPage = () => {
  return (
    <div className="mt-[140px]">
      <div className="mt-[140px] container">
        <DashboradTitle
          title="Suppliers"
          link="/admindashboard/our-suppliers/add"
          Btntitle="Add Supplier"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full rounded-lg border-2 border-border   h-[250px]">
              <Image
                src={slide.image}
                alt={slide.title}
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
