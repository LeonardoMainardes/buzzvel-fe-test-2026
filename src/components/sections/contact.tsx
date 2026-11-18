'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Clock, MessageCircleMore } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { type ContactFormData, contactSchema } from '@/lib/schemas/contact-schema';
import { LumaButton } from '../common/luma-button';
import { LumaCard } from '../common/luma-card';
import { LumaInput } from '../common/luma-input';
import { LumaTextarea } from '../common/luma-textarea';
import { Container } from '../layout/container';
import { CardDescription, CardTitle } from '../ui/card';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);

    reset();
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex max-w-120 flex-col items-start gap-5">
            <p className="text-xs font-semibold text-brand-blue">CONTACT</p>

            <h2 className="text-[32px] font-extrabold text-foreground md:text-5xl">Get in touch</h2>

            <p className="text-sm text-foreground/75 md:text-lg">
              Have a question? We’re here to help. Whether you’re looking for the right course,
              learning with your team or interested in teaching with Luma, we’d love to hear from
              you.
            </p>

            <LumaCard
              icon={<MessageCircleMore size={24} />}
              iconClassName="bg-brand-lavender text-brand-blue flex h-10 w-10 items-center justify-center rounded-md"
              className="bg-background mt-2 flex w-full p-5"
            >
              <CardTitle className="text-sm text-foreground/75">Email</CardTitle>
              <CardDescription className="text-brand-blue">contact@luma.com</CardDescription>
            </LumaCard>
            <LumaCard
              icon={<Clock size={24} />}
              iconClassName="bg-brand-lavender text-brand-blue flex h-10 w-10 items-center justify-center rounded-md"
              className="bg-background flex w-full p-5"
            >
              <CardTitle className="text-sm text-foreground/75">Response Time</CardTitle>
              <CardDescription>Up to 24 hours on business days</CardDescription>
            </LumaCard>
          </div>

          <div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <LumaCard className="flex min-h-149 w-full p-5 shadow-sm ">
                <CardTitle className="text-xl font-bold">Contact Us</CardTitle>
                <CardDescription>Fill out the fields and we will get in touch.</CardDescription>

                <LumaInput
                  type="text"
                  className="bg-background"
                  placeholder="Your Name"
                  label="Full Name"
                  {...register('name')}
                  error={errors.name?.message}
                />
                <LumaInput
                  type="email"
                  className="bg-background"
                  placeholder="youremail@example.com"
                  label="Email"
                  {...register('email')}
                  error={errors.email?.message}
                />
                <LumaTextarea
                  className="resize-none bg-background"
                  placeholder="Tell us how we can help..."
                  label="Message"
                  {...register('message')}
                  error={errors.message?.message}
                  rows={4}
                />

                <LumaButton
                  type="submit"
                  label={isSubmitting ? 'Sending...' : 'Send Message'}
                  className="font-bold"
                  disabled={isSubmitting}
                />
                {isSuccess && (
                  <LumaCard
                    icon={<Check size={24} />}
                    variant="floating"
                    className="flex items-center gap-2 text-sm font-medium text-green-600"
                    role="status"
                  >
                    Your message has been submitted successfully!
                  </LumaCard>
                )}
              </LumaCard>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
