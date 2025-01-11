import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="size-[80px]  relative">
      <Link href={"/"}>
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
