import { Loader2 } from "lucide-react";
import React from "react";

const DelLoader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
      <Loader2 className="size-8 animate-spin text-primary" />
    </div>
  );
};

export default DelLoader;
