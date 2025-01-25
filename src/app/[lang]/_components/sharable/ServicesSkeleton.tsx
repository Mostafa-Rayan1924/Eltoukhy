import React from "react";

const ServicesSkeleton = () => {
  return Array.from({ length: 9 }).map((_, i) => (
    <div
      key={i}
      className="relative w-full rounded-lg border-2 border-border p-6  animate-pulse   h-[320px]">
      <div className=" w-full rounded-lg  bg-accent animate-pulse  h-[250px]"></div>
      <h2 className="bg-accent animate-pulse mt-5 h-2 w-1/2 mx-auto " />
    </div>
  ));
};

export default ServicesSkeleton;
