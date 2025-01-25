"use client";
import { Button, buttonVariants } from "@/app/[lang]/_components/ui/button";
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
import { Upload, X } from "lucide-react";
import { useEffect, useState } from "react";
import PageHeading from "@/app/[lang]/_components/sharable/PageHeading";
import { ServicesSchema } from "@/app/[lang]/_components/validation/ServicesSchema";
import { category } from "@/Types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addServicesFunc } from "@/store/DashboardSlices/addServices";

const ServicesPageAdd = () => {
  const [files, setFiles] = useState<any[]>([]);
  const form = useForm<z.infer<typeof ServicesSchema>>({
    resolver: zodResolver(ServicesSchema),
    mode: "onChange",
  });
  const { islodaing } = useSelector(
    (state: RootState) => state.addServices as { islodaing: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  const { reset, formState } = form;

  async function onSubmit(values: z.infer<typeof ServicesSchema>) {
    if (files.length === 0) return;
    let formData = new FormData();
    formData.append("title.en", values.titleEn);
    formData.append("title.ar", values.titleAr);
    formData.append("category", values.category);
    formData.append("image", values.images[0]);
    values.images.forEach((file: File) => {
      formData.append("images", file);
    });
    let res = await dispatch(addServicesFunc(formData));
    if (res.meta.requestStatus === "fulfilled") {
      reset();
      setFiles([]);
      form.setValue("category", "");
    }
  }
  return (
    <section className="mt-[130px] container">
      <div className="mb-6">
        <PageHeading title="Add Service" />
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
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Title"
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
                <FormLabel>titleAr</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter  titleAr"
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>category</FormLabel>
                <FormControl>
                  <select
                    className="w-full bg-background  p-1 outline-none rounded-lg border border-border"
                    {...field}>
                    <option className="hidden ">selcet category</option>
                    <option value={category.GlassWork}>
                      {Object.keys(category)[0]}
                    </option>
                    <option value={category.AluminumWork}>
                      {Object.keys(category)[1]}
                    </option>
                  </select>
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
                  onClick={() => {
                    setFiles([]);
                    form.setValue("images", []);
                  }}
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
                form.setValue("images", Array.from(event.target.files));
              }}
              className="w-full max-w-xs hidden"
            />
            <p className="text-red-500 text-sm">
              {files.length == 0 && "Please select at least one image"}
            </p>
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

export default ServicesPageAdd;
