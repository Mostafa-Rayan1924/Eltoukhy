import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="top-0 left-0 z-50 fixed size-full grid place-items-center bg-background/80">
      <Loader2 className="animate-spin size-10 text-primary" />
    </div>
  );
};

export default Loader;
