"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  let pathname = usePathname();

  return (
    <div className="size-[80px]  relative">
      <Link href={`/${pathname?.split("/")[1]}`}>
        <Image
          src={
            "https://res.cloudinary.com/dlaeaq6is/image/upload/v1738001781/logowhite_tc2yy8.png"
          }
          alt="logo"
          className="object-contain flex dark:hidden"
          fill
        />
        <Image
          src={
            "https://res.cloudinary.com/dlaeaq6is/image/upload/v1738001779/logoDark_nir0ko.png"
          }
          alt="logo"
          className="object-contain hidden dark:flex"
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
