"use client";
import { formSchema } from "@/components/validation/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { loginFunc } from "@/store/AuthSlices/loginSlice";
import { useEffect } from "react";
const Admin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const { user, loading } = useSelector(
    (state: RootState) =>
      state.login as { user: { token: null; userData: null }; loading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();

  const { reset, formState } = form;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    let params = {
      email: values.email,
      password: values.password,
    };
    let res = await dispatch(loginFunc(params));
    if (res.meta.requestStatus === "fulfilled") {
      reset();
    }
  }
  return (
    <section className="mt-[150px] container">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-[600px] mx-auto border border-border p-4 rounded-lg">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Email"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Password"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={formState.isSubmitting}
            className={`${
              formState.isSubmitting ? "opacity-5" : "opacity-100 "
            } w-full`}
            type="submit">
            {formState.isSubmitting ? "loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Admin;
