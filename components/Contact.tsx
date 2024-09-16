"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import github from "@/assets/github.png";
import ig from "@/assets/insta.png";
import { bebas } from "@/assets/fonts";
import Link from "next/link";

interface DataProps {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const onSubmit = async (data: DataProps) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(await res.json());

      setIsLoading(false);
    } catch (err) {
      console.log("Something went wrong: ", err);
    }
  };

  return (
    <section
      id="contactSection"
      className="flex flex-col justify-center items-center my-32 gap-14 pb-12 px-7 lg:px-32"
    >
      <div className="overflow-hidden h-9xl">
        <motion.h3
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`text-7xl lg:text-8xl font-bold text-center ${bebas.className}`}
        >
          Contact.
        </motion.h3>
      </div>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold mb-5">
            Contact me and let&apos;s work together.
          </h3>
          <div>
            <h4 className="text-[#626fa8] font-bold">Email</h4>
            <h5>owenzeledon@icloud.com</h5>
          </div>
          <div>
            <h4 className="text-[#626fa8] font-bold">SMS message</h4>
            <h5>+1 (973) 842-5639</h5>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#626fa8] font-bold">Social Media</h4>
            <div className="invert flex gap-3">
              <Link href="https://www.instagram.com/owenr.dev">
                <Image src={ig} width={25} height={25} alt="Instagram Logo" />
              </Link>
              <Link href="https://github.com/VioletHill1">
                <Image src={github} width={25} height={25} alt="Github Logo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Name*</label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  type="text"
                  className="bg-[#131726] px-3 py-2 rounded-md text-white"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label className="font-bold">Last Name</label>
                <input
                  id="lastName"
                  {...register("lastName", { required: true })}
                  type="text"
                  className="bg-[#131726] px-3 py-2 rounded-md text-white"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label className="font-bold">Email*</label>
              <input
                id="email"
                {...register("email", { required: true })}
                type="email"
                className="bg-[#131726] px-3 py-2 rounded-md text-white"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label className="font-bold">Phone Number</label>
              <input
                id="phone"
                {...register("phone", { required: false })}
                type="text"
                className="bg-[#131726] px-3 py-2 rounded-md text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Message*</label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className="bg-[#131726] px-3 py-2 rounded-md text-white resize-none"
                rows={5}
              />
            </div>
            {errors.message && (
              <p className="text-red-500">{errors.message.type}</p>
            )}
            <div>
              <Button
                radius="full"
                variant="ghost"
                type="submit"
                disabled={isLoading}
                className="font-semibold text-[12px] text-slate-200 hover:text-black px-8"
              >
                <span>{isLoading ? "loading..." : "Submit"}</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
