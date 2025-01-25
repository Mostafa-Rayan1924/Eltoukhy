"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckOnline = () => {
  let router = useRouter();
  function updateOnlineStatus() {
    if (navigator.onLine) {
    } else {
      router.push("/offline");
    }
  }
  useEffect(() => {
    // إضافة المستمع للأحداث
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // التحقق من الحالة الحالية عند التحميل
    updateOnlineStatus();

    // تنظيف المستمع عند تدمير المكون
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);
  return <div></div>;
};

export default CheckOnline;
