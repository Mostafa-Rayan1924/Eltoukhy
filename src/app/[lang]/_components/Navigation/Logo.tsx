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
          src={"/logowhite.png"}
          alt="logo"
          className="object-contain flex dark:hidden"
          fill
        />
        <Image
          src={"/logoDark.png"}
          alt="logo"
          className="object-contain hidden dark:flex"
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
