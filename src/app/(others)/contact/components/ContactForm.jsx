'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { promise, z } from 'zod';

import { Card } from '@/components/common/atoms/card';

function FormItem({ label, children, error }) {
  return (
    <>
      <div className="animation-element appear flex flex-col gap-2">
        <span className={`text-base ${error ? 'text-red-500' : 'text-[#F3DFD8]'}`}>{label}</span>
        {children}
        {error && <span className="text-red-500 text-sm">{error.message}</span>}
      </div>
    </>
  );
}

const FormSchema = z
  .object({
    firstname: z.string().min(2, 'Too short').max(15, 'Too long'),
    lastname: z.string().min(2, 'Too short').max(15, 'Too long'),
    jobtitle: z.string().min(2, 'Too short').max(15, 'Too long'),
    companyname: z.string().min(2, 'Too short').max(15, 'Too long'),
    email: z.string().email(),
    phone: z.string().min(8, 'Invalid Phone Number').max(15, 'Too long'),
    message: z.string().min(50, 'Message mut be at least 50 characters').max(1500, 'Too long'),
    agreeterms: z.boolean(),
  })
  .refine((data) => data.agreeterms, {
    message: 'Must agree to our Terms and Policy',
    path: ['agreeterms'],
  });

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    // reset,
    // TODO: Add reset function to clear form after submission
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const validData = FormSchema.parse(data, promise);
      console.log(validData);
      alert('Form Submitted Successfully, Validated data: ' + JSON.stringify(validData));
    } catch (error) {
      console.error(error.errors);
    }
  };
  return (
    <div className="gap-[25px] bg-black px-[60px] py-[100px] pt-[100px] pb-[600px] flex flex-col font-sans">
      <Card bodyClassName="animation-element appear p-[40px] flex flex-col justify-end">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-16 gap-y-16 p-16 ">
            <FormItem label={'First Name'} error={errors.firstname}>
              <input
                {...register('firstname')}
                className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F] p-4 text-white"
                type="text"
                placeholder="ENTER FIRST NAME"
              />
            </FormItem>
            <FormItem label={'First Name'} error={errors.lastname}>
              <input
                {...register('lastname')}
                className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4 text-white"
                type="text"
                placeholder="ENTER LAST NAME"
              />
            </FormItem>
            <FormItem label={'JOB TITLE'} error={errors.jobtitle}>
              <input
                className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4 text-white"
                {...register('jobtitle')}
                type="text"
                placeholder="ENTER JOB TITLE"
              />
            </FormItem>
            <FormItem label={'COMPANY NAME'} error={errors.companyname}>
              <input
                {...register('companyname')}
                className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4 text-white"
                type="text"
                placeholder="ENTER COMPANY NAME"
              />
            </FormItem>
            <FormItem label={'EMAIL'} error={errors.email}>
              <input
                {...register('email')}
                className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4 text-white"
                type="text"
                placeholder="ENTER EMAIL"
              />
            </FormItem>
            <FormItem label={'PHONE NUMBER'} error={errors.phone}>
              <input
                {...register('phone')}
                className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4 text-white"
                type="text"
                placeholder="ENTER PHONE NUMBER"
              />
            </FormItem>
            <div className="animation-element appear flex flex-col gap-4 col-span-2">
              <span className=" text-base text-[#F3DFD8] ">MESSAGE</span>
              <input
                {...register('message')}
                className="border-[1px] border-gray-700 rounded-xl bg-[#1F1F1F] pl-[20px] pt-[20px] pb-[100px]  w-full text-white"
                type="text"
                placeholder="ENTER MESSAGE"
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </div>
          </div>
          <div className=" flex flex-row justify-between items-center px-16 mx-8 mt-2">
            <div className="animation-element appear flex flex-col items-center gap-2">
              <div className="flex">
                <input {...register('agreeterms')} type="checkbox" id="custom-checkbox" className="hidden" />
                <label
                  htmlFor="custom-checkbox"
                  className="h-6 w-6 bg-[#333333] rounded-md cursor-pointer flex items-center justify-center"
                >
                  <svg className="hidden w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <span className="text-base text-gray-400 pl-4  ">I agree with use of term and Privacy Policy</span>
              </div>
              {errors.agreeterms && (
                <span className="text-red-500 text-sm text-start">{errors.agreeterms.message}</span>
              )}
            </div>
            <div className="animation-element appear">
              <button
                role="submit"
                disabled={isSubmitting || isSubmitSuccessful}
                className="bg-[#F51101] rounded-2xl px-6 py-4 flex flex-row items-center space-x-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SEND YOUR MESSAGE
                <Image src={'/assets/images/contact/arrow_icon.svg'} width={23} height={23} alt="" className="ml-2" />
              </button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}
