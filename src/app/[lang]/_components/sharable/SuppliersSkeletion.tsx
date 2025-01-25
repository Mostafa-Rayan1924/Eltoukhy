import React from "react";

const SuppliersSkeletion = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          <div className="relative bg-accent w-full h-[150px] rounded-lg mb-5    animate-pulse   "></div>
          <h2 className="bg-accent animate-pulse  h-2 w-1/2 mx-auto " />
        </div>
      ))}
    </div>
  );
};

export default SuppliersSkeletion;
