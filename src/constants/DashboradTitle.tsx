import { Button, buttonVariants } from "@/app/[lang]/_components/ui/button";
import Link from "next/link";

const DashboradTitle = ({
  title,
  link,
  Btntitle,
}: {
  title: string;
  link: string;
  Btntitle: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-2 mb-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Link href={link}>
        <Button className={(buttonVariants({ size: "lg" }), "text-white")}>
          {Btntitle}
        </Button>
      </Link>
    </div>
  );
};

export default DashboradTitle;
