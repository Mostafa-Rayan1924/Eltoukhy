import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="grid h-screen  place-content-center bg-background px-4">
      <div className="text-center">
        <Image src={"/error.png"} width={300} height={300} alt="error img" />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground  sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="my-4 text-muted-foreground">Error 404</p>
        <Link href={"/"}>
          <Button className={(buttonVariants({ size: "lg" }), "text-white")}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
