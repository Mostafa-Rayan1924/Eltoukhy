"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import PageHeading from "@/components/sharable/PageHeading";
import { ProjectsSchema } from "@/components/validation/ProjectsSchema";

const page = () => {
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<z.infer<typeof ProjectsSchema>>({
    resolver: zodResolver(ProjectsSchema),
    mode: "onChange",
  });

  const { reset, formState } = form;

  function onSubmit(values: z.infer<typeof ProjectsSchema>) {
    console.log(values);
    reset();
    setFiles([]);
  }
  return (
    <section className="mt-[130px] container">
      <div className="mb-6">
        <PageHeading title="Add Project" />
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-[600px] mx-auto border border-border p-4 rounded-lg">
          <FormField
            control={form.control}
            name="titleEn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Name"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="titleAr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NameAr</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter  NameAr"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="fileInput">
              <div className="flex items-center gap-2 flex-wrap">
                {files.length > 0 ? (
                  files.map((file, index) => (
                    <div
                      key={index}
                      className="flex flex-col border border-border relative rounded-lg p-1 gap-1 flex-1">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        className="object-cover size-28 rounded-lg max-w-xs mx-auto"
                      />
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          setFiles(files.filter((_, i) => i !== index));
                        }}
                        className="absolute top-2  z-20 right-2 cursor-pointer bg-red-500 size-6 rounded-full grid place-items-center">
                        <X className="size-3 text-white" />
                      </div>
                      <p className="flex items-center justify-center gap-1">
                        <span>Size:</span>
                        <span className="text-primary">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-accent cursor-pointer size-28 grid place-items-center mx-auto rounded-lg">
                    <Upload />
                  </div>
                )}
              </div>
            </label>
            {files.length > 0 && (
              <div className="block w-fit mx-auto mt-4">
                <button
                  onClick={() => setFiles([])}
                  className={buttonVariants({
                    size: "sm",
                    variant: "destructive",
                  })}>
                  delete All Images
                </button>
              </div>
            )}
            <input
              type="file"
              id="fileInput"
              multiple
              accept="image/*"
              onChange={(event) => {
                if (!event.target.files) return;
                setFiles([...files, ...Array.from(event.target.files)]);
                form.setValue("image", Array.from(event.target.files));
              }}
              className="w-full max-w-xs hidden"
            />
            <p className="text-red-500 text-sm">
              {files.length == 0 && "Please select at least one image"}
            </p>
          </div>
          <Button className="w-full" type="submit">
            {formState.isSubmitting ? "Loading" : "Submit"}
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};

export default page;
