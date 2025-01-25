"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Languages } from "@/Types/types";
const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const path =
      pathname?.replace(`/${pathname.split("/")[1]}`, `/${newLocale}`) ??
      `/${newLocale}`;
    router.push(path);
  };
  return (
    <div className="flex">
      {pathname.split("/")[1] === Languages.ARABIC ? (
        <div
          className="cursor-pointer"
          onClick={() => switchLanguage(Languages.ENGLISH)}>
          <img
            src="/en.png"
            className="size-9 rounded-md object-cover"
            alt="en language"
          />
        </div>
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => switchLanguage(Languages.ARABIC)}>
          <img
            src="/ar.png"
            className="size-9 rounded-md object-cover"
            alt="ar language"
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
