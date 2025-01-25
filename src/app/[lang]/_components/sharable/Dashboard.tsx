"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/[lang]/_components/ui/sheet";
import { dashboardLinks } from "@/constants/DashboardLinks";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Dashboard = () => {
  let pathname = "/" + usePathname().split("/").slice(2, 4).join("/");
  let [open, setOpen] = useState(false);

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <LayoutDashboard size={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className={"border-b border-border pb-4 text-center "}>
            <SheetTitle>Welcome to Dashboard</SheetTitle>
            <SheetDescription>
              <p className="sm:text-lg text-muted-foreground ">
                Here you can manage your content
              </p>
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-4 my-6">
            {dashboardLinks.map((item) => {
              return (
                <li onClick={() => setOpen(!open)} key={item.id}>
                  <Link
                    href={item.path}
                    className={`flex gap-2 hover:bg-accent hover:text-primary ${
                      pathname === item.path ? "bg-accent text-primary" : ""
                    } p-2 rounded-md duration-300 items-center`}>
                    <item.icon className="size-6 flex-shrink-0" />
                    <h3>{item.title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;
