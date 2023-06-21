import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {};

function ContactMe({}: Props) {
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
            Contact
        </h3>

        <div className="flex flex-col space-y-10">
            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    {/* ... means spread ?*/}
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>
                </div>

                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput"/>
                <button type="submit" className="bg-[#B0D8A4] py-5 px-10 rounded-md text-black font-bold text-lg">
                    Submit
                </button>
            </form>

            <div className="space-y-1">
                <div className="flex items-center justify-center indent-1">
                    <PhoneIcon className="text-[#B0D8A4] h-7 w-7"/>
                    <p>281-787-9569</p>
                </div>
                
                <div className="flex items-center justify-center indent-1">
                    <EnvelopeIcon className="text-[#B0D8A4] h-7 w-7"/>
                    <p>chiukelly3@utexas.edu</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactMe;
