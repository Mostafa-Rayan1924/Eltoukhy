"use client";
import { Button, buttonVariants } from "../ui/button";
import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ContactItem } from "@/Types/types";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = ({
  Home,
}: {
  Home: {
    contact: {
      title: string;
      locationSub: string;
      location: string;
      Phone: string;
      Hours: string;
      time: string;
      name: string;
      email: string;
      message: string;
    };
  };
}) => {
  const contactForm: ContactItem[] = [
    {
      id: 1,
      icon: MapPin,
      title: Home.contact.location,
      desc: Home.contact.locationSub,
    },
    {
      id: 2,
      icon: Phone,
      title: Home.contact.Phone,
      desc: "+0201001843200 +0201000655068",
    },
    {
      id: 3,
      icon: Clock,
      title: Home.contact.Hours,
      desc: Home.contact.time,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    //id xqaarvpy
    try {
      const response = await fetch("https://formspree.io/f/xqaarvpy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section>
      <div className="container">
        <div className="h-full max-w-[750px] flex-wrap  mx-auto flex border border-border rounded-lg ">
          <div className="w-full md:w-[30%] min-h-full relative  ">
            <div className="bg-background space-y-6 rounded-lg md:border-2 border-border w-full lg:-start-1/2 md:absolute h-fit p-4 md:top-1/2 md:-translate-y-1/2 ">
              {contactForm.map((item, i) => {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="flex  gap-4">
                    <item.icon className="size-6 flex-shrink-0 text-blue-500 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold capitalize">
                        {item.title}
                      </h2>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.6 }}
                    className={`   relative size-8 `}>
                    <Link
                      className={`p-2  rounded-lg text-white `}
                      href={link.path}
                      key={link.id}>
                      <Image fill alt="whatsapp" src={link.icon} />
                    </Link>
                  </motion.div>
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
          <form onSubmit={handleSubmit} className="flex-1 md:w-[70%]  p-10">
            <h2 className="text-2xl mb-4 md:text-3xl lg:text-4xl font-semibold">
              {Home.contact.title}
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4">
              <div className="flex flex-col gap-1">
                <label>{Home.contact.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="border border-border p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>{Home.contact.email}</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="border border-border p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={Home.contact.message}
                  className="border border-border h-[150px] resize-none p-2 w-full bg-accent outline-none  rounded"
                />
              </div>
            </motion.div>
            <Button
              disabled={status === "success"}
              className={
                (buttonVariants({ size: "lg" }), "w-full mt-6 text-xl")
              }>
              {status === "submitting"
                ? "loading..."
                : status === "success"
                ? "sent successfully"
                : "submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
