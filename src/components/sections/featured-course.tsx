import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { LumaButton } from '@/components/common/luma-button';
import { LumaCard } from '@/components/common/luma-card';
import { Container } from '@/components/layout/container';
import { CardContent, CardTitle } from '@/components/ui/card';

export const FeaturedCourse = () => {
  return (
    <section id="featured-course" className="bg-brand-blue py-16">
      <Container className="text-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-15">
          <div className="relative w-full">
            <LumaCard
              variant="floating"
              size="sm"
              className="absolute -top-7 -left-2 z-10 rounded-xl bg-brand-yellow md:top-[-5%] md:left-[-2%]"
            >
              <CardContent className="flex items-center gap-4 text-center">
                <CardTitle className="rounded-md text-xs font-bold">FEATURED COURSE</CardTitle>
              </CardContent>
            </LumaCard>

            <Image
              src="/assets/image-featured-course.svg"
              alt="Learner studying at a laptop"
              width={538}
              height={408}
              className="relative z-0 h-auto w-full rounded-3xl"
            />
          </div>

          <div className="flex h-full w-full flex-col">
            <p className="-translate-y-5 text-xs font-semibold">MOST POPULAR THIS MONTH</p>

            <div>
              <h2 className="text-[32px] font-extrabold md:text-5xl">
                Designing products people understand.
              </h2>

              <p className="mt-6 text-sm md:text-base">
                Learn how to turn complex workflows into simple, intentional product experiences
                through research, structure and thoughtful interaction design.
              </p>
            </div>
            <p className="mt-6 text-sm md:text-base">with Maya Chen · Senior Product Designer</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LumaButton
                hover={false}
                variant="outline"
                size="sm"
                className="text-white"
                label="8 lessons"
              />

              <LumaButton
                hover={false}
                variant="outline"
                size="sm"
                className="text-white"
                label="2h 40min"
              />

              <LumaButton
                hover={false}
                variant="outline"
                size="sm"
                className="text-white"
                label="Intermediate"
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 md:mt-auto md:flex-row md:gap-4 md:w-full">
              <LumaButton
                href="#contact"
                className="font-bold w-full md:w-auto"
                variant="link"
                label="View course"
              />

              <LumaButton
                href="#categories"
                aria-hidden="true"
                className="text-white font-bold w-full md:w-auto"
                variant="ghost"
                icon={<ArrowRight size={18} />}
                iconPosition="end"
                label="Browse all courses"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
