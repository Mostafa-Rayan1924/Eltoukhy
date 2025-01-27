"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "@/Types/types";
import Image from "next/image";
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
          <Image
            width={45}
            height={45}
            src="/en.png"
            className=" rounded-md object-cover"
            alt="en language"
          />
        </div>
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => switchLanguage(Languages.ARABIC)}>
          <Image
            width={45}
            height={45}
            src="/ar.png"
            className="rounded-md object-cover"
            alt="ar language"
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
