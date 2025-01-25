"use client";

import { usePathname } from "next/navigation";

const CheckLang = ({ item }: { item: { en: string; ar: string } }) => {
  let pathName = usePathname();
  return <>{pathName.split("/")[1] === "ar" ? item.ar : item.en}</>;
};

export default CheckLang;
