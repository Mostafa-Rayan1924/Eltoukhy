"use client";
import { RootState } from "@/store/store";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const DashboardLink = () => {
  let { user } = useSelector((state: RootState) => state.login);
  let pathname = usePathname();
  return (
    user?.token &&
    !pathname.includes("dashboard") && (
      <Link
        href={"/admindashboard/banners"}
        className="fixed left-4 hidden  cursor-pointer bottom-6 z-50 w-10 h-10 text-white rounded-full bg-primary md:flex items-center justify-center">
        <LayoutDashboard size={20} />
      </Link>
    )
  );
};

export default DashboardLink;
