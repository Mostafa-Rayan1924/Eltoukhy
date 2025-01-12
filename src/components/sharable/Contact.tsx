import { Button, buttonVariants } from "../ui/button";
import { contactForm } from "@/constants/Contact";
import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container  ">
        <div className="h-full max-w-[750px] flex-wrap  mx-auto flex border border-border rounded-lg ">
          <div className="w-full md:w-[30%] min-h-full relative  ">
            <div className="bg-background space-y-6 rounded-lg md:border-2 border-border w-full lg:-left-1/2 md:absolute h-fit p-4 md:top-1/2 md:-translate-y-1/2 ">
              {contactForm.map((item) => {
                return (
                  <div className="flex  gap-4">
                    <item.icon className="size-6 flex-shrink-0 text-blue-500 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold capitalize">
                        {item.title}
                      </h2>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <div
                    className={` hover:-translate-y-2 duration-200  relative size-8 `}>
                    <Link
                      className={`p-2  rounded-lg text-white `}
                      href={link.path}
                      key={link.id}>
                      <Image fill alt="whatsapp" src={link.icon} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <img
              loading="lazy"
              src="https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
              alt="contact"
              className="hidden md:block object-fill h-full"
            />
          </div>
          <div className="flex-1 md:w-[70%]  p-10">
            <h2 className="text-2xl mb-4 md:text-3xl lg:text-4xl font-semibold">
              Contact Form
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-border p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-border p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Full Name</label>
                <textarea
                  placeholder="Leave a message"
                  className="border border-border h-[150px] resize-none p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
            </div>
            <Button
              className={
                (buttonVariants({ size: "lg" }), "w-full mt-6 text-xl")
              }>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
