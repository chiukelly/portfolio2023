import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/typings";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {
    socials: Social[]
};

function ContactMe({socials}: Props) {
    // React Hook Form Library
    const { register, handleSubmit } = useForm<Inputs>();
    // const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
    // Contact form opens up as an email to send to me
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:chiukelly3@utexas.edu?${formData.subject}={formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };



  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center space-y-[150px]">
        <h3 className="headerName">
            contact.
        </h3>

        <div className="flex flex-col space-y-10">
            <div className="flex items-center justify-center indent-1 text-gray-300">
                <p>Get in touch or email me directly on <span className="text-[#B0D8A4]">chiukelly3@utexas.edu</span></p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 sm:w-screen md:w-fit mx-auto">
                <div className="flex space-x-2">
                    {/* ... means spread ?*/}
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>
                </div>

                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput"/>
                <button type="submit" className="bg-[#B0D8A4] py-5 px-10 rounded-full text-black font-bold text-lg">
                    Submit
                </button>
            </form>

            {/* Social Icons */}
            <div className="flex flex-row items-center justify-center">
                    {/* Social Icons */}
                    {socials.map((social) => (
                        <SocialIcon 
                        key={social._id}
                        url={social.url}
                        fgColor="#8281A0"
                        bgColor="transparent" 
                        />
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default ContactMe;
