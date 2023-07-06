import React from "react";

import { motion } from "framer-motion";
import { MdAttachEmail } from "react-icons/md";
import { BsPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aabhasgrg46@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Lets <span className="decoration-[#F7AB0A] underline">Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <BsFillTelephoneFill
              className="text-[#F7AB0A] animate-pulse"
              size={25}
            />
            <p className="text-2xl">+977</p>
          </div>
          <div className="flex items-center space-x-5">
            <BsPinMapFill className="text-[#F7AB0A] animate-pulse" size={25} />
            <p className="text-2xl">Kathmandu</p>
          </div>
          <div className="flex items-center space-x-5">
            <MdAttachEmail className="text-[#F7AB0A] animate-pulse" size={25} />
            <p className="text-2xl">@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB09] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
