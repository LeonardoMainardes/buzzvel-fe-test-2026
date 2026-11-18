import { Star } from 'lucide-react';
import Image from 'next/image';

import { LumaButton } from '@/components/common/luma-button';
import { LumaCard } from '@/components/common/luma-card';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Container } from '../layout/container';

export const Hero = () => {
  return (
    <section className="relative flex w-full justify-center bg-background">
      <Container>
        <div className="flex flex-col-reverse gap-6 py-16 md:flex-row md:gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <p className="text-xs font-semibold text-brand-blue">LEARN AT YOUR OWN PACE</p>

            <h1 className="text-[40px] font-extrabold text-foreground sm:text-6xl md:text-[64px]">
              Build skills that actually move you forward.
            </h1>

            <p className="max-w-120 text-base text-foreground/75 md:text-lg">
              Practical courses taught by people who do the work every day. Learn design,
              technology, business and more — one focused lesson at a time.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <LumaButton className="px-7 font-bold" label="Explore courses" />
              <LumaButton className="px-7 font-bold" variant="white" label="See how it works" />
            </div>

            <div className="flex w-full items-center justify-center gap-2 self-start sm:justify-start">
              <div className="flex items-center justify-center -space-x-2 sm:justify-center">
                <Image
                  src="/assets/person-1.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/assets/person-2.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/assets/person-3.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
              </div>

              <p className="text-sm ">
                <b>Trusted by 24,000+</b> learners
              </p>
            </div>
          </div>

          <div id="image-area" className="relative min-w-0 flex-1">
            <LumaCard
              variant="floating"
              size="sm"
              className="absolute top-3 left-[-4%] z-10 max-w-[calc(100%-1rem)] rounded-xl shadow-lg md:-left-5"
            >
              <CardContent className="flex flex-row items-center gap-2 text-center sm:gap-4">
                <CardTitle className="shrink-0 rounded-md bg-secondary p-1 text-sm font-bold text-brand-blue">
                  120+
                </CardTitle>

                <CardDescription className="text-sm text-foreground">
                  expert-led courses
                </CardDescription>
              </CardContent>
            </LumaCard>

            <LumaCard
              variant="floating"
              size="sm"
              className="absolute right-[-3%] bottom-3 z-10 max-w-[calc(100%-1rem)] rounded-xl shadow-lg md:right-[-1%] md:bottom-9"
            >
              <CardContent className="flex flex-row items-center gap-2 sm:gap-3">
                <div
                  className="flex shrink-0 items-center gap-1 text-brand-yellow"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {['star-1', 'star-2', 'star-3', 'star-4', 'star-5'].map((star) => (
                    <Star key={star} className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                  ))}
                </div>

                <p className="whitespace-nowrap text-sm font-medium text-foreground">
                  4.9 avg rating
                </p>
              </CardContent>
            </LumaCard>

            <div className="absolute bottom-5 left-[-4%] z-0 size-16 rounded-full bg-brand-lavender sm:left-[-7%] sm:size-26 md:size-26" />

            <div className="absolute inset-y-3 right-[-3%] z-0 w-14 rounded-2xl bg-brand-peach sm:inset-y-5 sm:w-18 md:right-[2%] md:w-22" />

            <Image
              src="/assets/hero-optimized.webp"
              alt="Learner studying at a laptop"
              width={500}
              height={520}
              className="relative z-1 rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
