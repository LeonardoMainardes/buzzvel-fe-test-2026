'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { LumaButton } from '@/components/common/luma-button';
import { LumaCard } from '@/components/common/luma-card';
import { LumaInput } from '@/components/common/luma-input';
import { LumaTextarea } from '@/components/common/luma-textarea';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { type ContactFormData, contactSchema } from '@/lib/schemas/contact-schema';

export const ContactForm = () => {
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <LumaCard className="flex min-h-149 w-full p-5 shadow-sm">
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
  );
};
