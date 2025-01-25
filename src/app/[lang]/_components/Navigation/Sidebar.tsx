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
} from "@/app/[lang]/_components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import { useState } from "react";
import { Links } from "@/Types/types";
const Sidebar = ({ Nav }: any) => {
  let pathname = usePathname();
  let locale = pathname?.split("/")[1];
  let links: Links[] = [
    {
      id: 1,
      title: Nav.home,
      url: `/${locale}`,
    },
    {
      id: 2,
      title: Nav.services,
      url: `/${locale}/services`,
    },
    {
      id: 3,
      title: Nav.projects,
      url: `/${locale}/projects`,
    },
    {
      id: 4,
      title: Nav.about,
      url: `/${locale}/about`,
    },
    {
      id: 5,
      title: Nav.suppliers,
      url: `/${locale}/suplliers`,
    },
    {
      id: 6,
      title: Nav.profile,
      url: `/${locale}/profile`,
    },
    {
      id: 7,
      title: Nav.contact,
      url: `/${locale}/contact`,
      onMobile: false,
    },
  ];
  let [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div
          className="border border-input cursor-pointer bg-background size-10 rounded-md grid place-items-center
        ">
          <Menu className="size-6 " />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader onClick={() => setOpen(!open)}>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="text-xl text-center">
            {Nav.welcome}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {links.map((link) => (
            <Link
              key={link.id}
              onClick={() => setOpen(!open)}
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
          <div className="flex items-center flex-wrap justify-center mx-auto mt-10 gap-4">
            {socialLinks.map((link) => (
              <div
                key={link.id}
                className={` hover:-translate-y-2 duration-200  relative size-9 sm:size-12 grid place-items-center rounded-lg`}>
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
