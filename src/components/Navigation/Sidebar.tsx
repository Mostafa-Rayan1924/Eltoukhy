"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/constants/navLinks";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
const Sidebar = () => {
  let pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className="border border-input cursor-pointer bg-background size-10 rounded-md grid place-items-center
        ">
          <Menu className="size-6 " />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="text-xl text-center">
            Welcome to Eltouky Website
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {links.map((link) => (
            <Link
              className={`${
                pathname === link.url ? "bg-accent text-primary" : ""
              } hover:bg-accent p-2
             rounded-lg`}
              href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <div className="flex items-center justify-center mx-auto mt-10 gap-4">
            {socialLinks.map((link) => (
              <div
                className={` hover:-translate-y-2 duration-200  relative size-12 grid place-items-center rounded-lg`}>
                <Link
                  className={`p-2  rounded-lg text-white `}
                  href={link.path}
                  key={link.id}>
                  <Image fill alt="whatsapp" src={link.icon} />
                </Link>
              </div>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
