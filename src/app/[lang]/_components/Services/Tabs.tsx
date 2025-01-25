import Link from "next/link";
import { getCats } from "./api";
import { ServicesType } from "@/Types/types";
import Image from "next/image";
const Tabs = async () => {
  let data = await getCats();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {data.map((item: ServicesType) => (
        <Link href={`services/${item?._id}`}>
          <div className="rounded-lg bg-background border hover:-translate-y-2 border-border hover:border-primary duration-300 size-full p-6 ">
            <div className=" w-full h-[450px] relative">
              <Image
                className="rounded-lg"
                src={item?.image}
                alt={item?.title?.en}
                fill
              />
            </div>
            <h2 className="mt-5 text-center text-xl font-semibold">
              {item?.title?.en}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
