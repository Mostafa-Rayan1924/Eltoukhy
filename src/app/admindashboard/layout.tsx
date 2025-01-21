"use client";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let { user } = useSelector((state: RootState) => state.login);
  let router = useRouter();
  useEffect(() => {
    if (!user?.token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
