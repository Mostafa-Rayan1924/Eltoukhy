import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="size-[80px]  relative">
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
  );
};

export default Logo;
