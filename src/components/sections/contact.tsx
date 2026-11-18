import { Clock, MessageCircleMore } from 'lucide-react';
import dynamic from 'next/dynamic';

import { LumaCard } from '@/components/common/luma-card';
import { Container } from '@/components/layout/container';
import { CardDescription, CardTitle } from '@/components/ui/card';

const ContactForm = dynamic(() => import('./contact-form').then((mod) => mod.ContactForm), {
  loading: () => <div className="min-h-149 w-full animate-pulse rounded-xl bg-muted/50" />,
});

export const Contact = () => {
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
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
