import { Quote } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/layout/container';

export const Testimonial = () => {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.8fr_1fr]">
          <div className="flex flex-col gap-7">
            <div className="text-sm font-semibold text-brand-blue">
              <Quote aria-hidden="true" size={24} className="fill-current" />
            </div>
            <h2 className="max-w-150 text-xl font-semibold leading-tight text-foreground sm:text-3xl md:text-[30px]">
              The lessons are short enough to fit into my week, but detailed enough that I actually
              leave with something I can use.
            </h2>
            <div className="flex items-center gap-4">
              <Image src="/assets/alex-morgan.svg" alt="Alex Morgan" width={48} height={48} />

              <div className="flex flex-col">
                <p className="text-base font-semibold text-foreground">Alex Morgan</p>
                <p className="text-sm text-foreground/75">Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 pt-8 md:flex-col md:gap-5 md:border-l md:border-t-0 md:py-0 md:pl-12">
            <div>
              <h3 className="text-[40px] font-extrabold text-brand-blue md:text-[64px]">24K+</h3>
              <p className="text-sm text-foreground/75">active learners</p>
            </div>
            <div>
              <h3 className="text-[40px] font-extrabold text-brand-blue md:text-[64px]">120+</h3>
              <p className="text-sm text-foreground/75">expert-led courses</p>
            </div>
            <div>
              <h3 className="text-[40px] font-extrabold text-brand-blue md:text-[64px]">92%</h3>
              <p className="text-sm text-foreground/75">complete their first course</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
