import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export const Contact = () => {
  const { register, handleSubmit } = useForm<ContactFormInputs>();
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) =>
    console.log(data);
  return (
    <div
      className="min-h-screen relative flex flex-col text-center md:text-left 
    max-w-7xl px-10 justify-center items-center mx-auto"
    >
      <h3 className="sectionTitle">Contact</h3>
      <div className="h-44 w-44" />
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="underline decoration-[#F7ABBA]/50">Lets Talk</span>
        </h4>
        <div className="space-y-5 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7ABBA] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+447424856554</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7ABBA] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">mahsinsaifullah@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7ABBA] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">
              Apartment 121, Ladywell Point, Salford, Manchester
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto w-full"
        >
          <div className="flex space-x-2  w-full">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7ABBA] px-4 py-2 sm:py-5 sm:px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
