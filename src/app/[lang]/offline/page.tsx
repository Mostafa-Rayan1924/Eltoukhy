"use client";
import { buttonVariants } from "@/app/[lang]/_components/ui/button";
import { useRouter } from "next/navigation";

export default function Offline() {
  const router = useRouter();

  const handleCheck = () => {
    if (navigator.onLine) {
      // إذا كان الجهاز متصلًا بالإنترنت، توجيه المستخدم للصفحة الرئيسية
      router.push("/");
    } else {
      // إذا لم يكن متصلًا، عرض رسالة في الكونسول أو إعلام المستخدم
      console.log("الجهاز لا يزال غير متصل بالإنترنت");
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 grid place-items-center bg-background size-full"
      style={{ textAlign: "center", padding: "2rem" }}>
      <div className="space-y-4">
        <h1 className="text-3xl">⚠️ لا يوجد اتصال بالإنترنت</h1>
        <p className="text-lg">
          .يرجى التحقق من الاتصال بالشبكة والمحاولة مرة أخرى
        </p>
        <button onClick={handleCheck} className={buttonVariants()}>
          اعاده التحميل
        </button>
      </div>
    </div>
  );
}
