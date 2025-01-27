"use client";
import { Button } from "@/app/[lang]/_components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/[lang]/_components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/[lang]/_components/ui/input";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { Upload } from "lucide-react";
import { useState } from "react";
import PageHeading from "@/app/[lang]/_components/sharable/PageHeading";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { MainServ } from "@/app/[lang]/_components/validation/addMainServ";
import { addMainServFunc } from "@/store/DashboardSlices/addMainServices";

const AddMainServ = () => {
  let [file, setFile] = useState<any | null>(null);
  const form = useForm<z.infer<typeof MainServ>>({
    resolver: zodResolver(MainServ),
    mode: "onChange",
  });

  const { reset, formState } = form;

  const dispatch = useDispatch<AppDispatch>();
  async function onSubmit(values: z.infer<typeof MainServ>) {
    if (typeof window === "undefined") return;

    let formData = new FormData();
    formData.append("title.en", values.titleEn);
    formData.append("title.ar", values.titleAr);
    formData.append("image", values.image);

    let res = await dispatch(addMainServFunc(formData));
    if (res.meta.requestStatus === "fulfilled") {
      reset();
      setFile(null);
    }
  }
  return (
    <section className="mt-[130px] container">
      <div className="mb-6">
        <PageHeading title="Add Main Service" />
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
                <FormLabel>Name En</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Name En"
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
                <FormLabel>Name Ar</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter  Name Ar"
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
              {file ? (
                <div className="flex flex-col gap-1">
                  <img
                    src={URL.createObjectURL(file)}
                    className="size-[300px]  object-fill rounded-lg max-w-xs mx-auto"
                  />
                  <p className="flex items-center justify-center gap-1">
                    <span>size:</span>
                    <span className="text-primary">{`${(
                      file.size /
                      (1024 * 1024)
                    ).toFixed(2)} MB`}</span>
                  </p>
                </div>
              ) : (
                <div className="bg-accent cursor-pointer size-28 grid place-items-center mx-auto rounded-lg">
                  <Upload />
                </div>
              )}
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const selectedFile = e.target.files[0];
                  setFile(selectedFile);
                  form.setValue("image", selectedFile);
                }
              }}
              className="w-full max-w-xs hidden"
            />
            {formState.errors.image?.message && (
              <p className="text-red-500 text-sm">
                {formState.errors.image.message}
              </p>
            )}
          </div>
          <Button
            disabled={formState.isSubmitting}
            className={`w-full ${formState.isSubmitting && "opacity-50"}`}
            type="submit">
            {formState.isSubmitting ? "Loading" : "Submit"}
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};

export default AddMainServ;
