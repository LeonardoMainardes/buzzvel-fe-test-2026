import Image from 'next/image';

import { LumaButton } from '../common/luma-button';
import { Container } from '../layout/container';

export const People = () => {
  return (
    <section className="overflow-hidden bg-background py-16">
      <Container>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 md:gap-8">
          <div className="flex flex-col items-start gap-3 md:gap-5">
            <p className="text-xs font-semibold text-brand-blue">THE PEOPLE</p>

            <h2 className="max-w-lg text-[32px] font-extrabold text-foreground md:text-5xl">
              Meet international students & teachers
            </h2>

            <p className="max-w-lg text-body leading-relaxed text-foreground/75 md:text-lg">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel,
              velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.
              Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
            </p>

            <LumaButton variant="outline" className="mt-1 border-border bg-white font-bold">
              Explore teachers and students
            </LumaButton>
          </div>
          <div className="relative mx-auto flex h-110 w-full max-w-125 justify-center">
            <div className="absolute left-1/2 top-1/2 size-82.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lavender md:size-122" />
            <div className="absolute left-1/2 top-1/2 z-10 flex w-max -translate-x-1/2 -translate-y-1/2 items-center gap-1 scale-[0.78] md:scale-105">
              <div className="flex shrink-0 flex-col gap-2">
                <Image
                  src="/assets/people.svg"
                  alt=""
                  width={102}
                  height={154}
                  className="h-38.5 w-25.5 rounded-md object-cover translate-x-8"
                />
                <Image
                  src="/assets/people-1.svg"
                  alt=""
                  width={138}
                  height={207}
                  className="h-51.75 w-34.5 rounded-md object-cover"
                />
              </div>

              <div className="flex shrink-0 flex-col gap-2">
                <Image
                  src="/assets/people-2.svg"
                  alt=""
                  width={102}
                  height={170}
                  className="h-42.5 w-25.5 rounded-md object-cover"
                />
                <Image
                  src="/assets/people-3.svg"
                  alt=""
                  width={102}
                  height={172}
                  className="h-43 w-25.5 rounded-md object-cover"
                />
                <Image
                  src="/assets/people-4.svg"
                  alt=""
                  width={102}
                  height={128}
                  className="h-32 w-25.5 rounded-md object-cover"
                />
              </div>

              <div className="flex shrink-0 flex-col gap-2">
                <Image
                  src="/assets/people-5.svg"
                  alt=""
                  width={102}
                  height={137}
                  className="h-34.25 w-25.5 rounded-md object-cover"
                />
                <Image
                  src="/assets/people-6.svg"
                  alt=""
                  width={102}
                  height={138}
                  className="h-34.5 w-25.5 rounded-md object-cover"
                />
                <Image
                  src="/assets/people-7.svg"
                  alt=""
                  width={102}
                  height={154}
                  className="h-38.5 w-25.5 rounded-md object-cover"
                />
              </div>

              <div className="flex shrink-0 flex-col justify-center gap-2 pt-12">
                <Image
                  src="/assets/people-8.svg"
                  alt=""
                  width={128}
                  height={204}
                  className="h-51 w-32 rounded-md object-cover"
                />

                <Image
                  src="/assets/people-9.svg"
                  alt=""
                  width={102}
                  height={132}
                  className="h-33 w-25.5 rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
