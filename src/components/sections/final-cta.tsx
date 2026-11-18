import Image from 'next/image';

import { LumaButton } from '@/components/common/luma-button';
import { Container } from '@/components/layout/container';

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-brand-pastel py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <span className="absolute left-[1%] top-[2%] size-27 rounded-full border-2 border-[#FFCB9F]" />

        <span className="absolute left-[28%] top-[15%] size-14 rotate-12 rounded-md border border-[#FFCB9F]" />

        <span className="absolute left-[-2%] bottom-[40%] size-14 rotate-12 rounded-md bg-[#FFCB9F]" />

        <span className="absolute right-[0.5%] top-[-2%] size-28.75 rotate-12 rounded-md bg-[#FFCB9F]" />

        <span className="absolute right-[31.5%] top-[12%] size-8 rounded-full border-2 border-[#FFCB9F]" />

        <span className="absolute bottom-[-4%] left-[4%] size-30 rounded-full bg-[#FFCB9F]" />

        <span className="absolute right-[2%] bottom-[2%] size-8 rounded-full border-2 border-[#FFCB9F]" />

        <Image
          src="/assets/final-cta-message.svg"
          alt=""
          width={34}
          height={34}
          className="absolute left-[11.3%] top-[46%] h-8.5 w-8.5"
        />

        <Image
          src="/assets/final-cta-cube.svg"
          alt=""
          width={72}
          height={72}
          className="absolute right-[6.8%] top-[49%] h-20 w-20"
        />

        <Image
          src="/assets/final-cta-bulb.svg"
          alt=""
          width={60}
          height={60}
          className="absolute right-[15.5%] top-[19%] h-16 w-16"
        />

        <Image
          src="/assets/final-cta-b.svg"
          alt=""
          width={44}
          height={60}
          className="absolute left-[23.8%] bottom-[7%] h-20.5 w-20.5"
        />

        <Image
          src="/assets/final-cta-arrows.svg"
          alt=""
          width={48}
          height={34}
          className="absolute right-[25%] bottom-[10%] h-12 w-12"
        />
      </div>
      <Container>
        <div className="flex flex-col gap-6 text-center">
          <div className="flex items-center justify-center -space-x-2">
            <Image
              src="/assets/person-1.svg"
              alt=""
              width="40"
              height="40"
              className="rounded-full border-2 border-brand-yellow object-cover"
            />
            <Image
              src="/assets/person-2.svg"
              alt=""
              width="40"
              height="40"
              className="rounded-full border-2 border-brand-yellow object-cover"
            />
            <Image
              src="/assets/person-3.svg"
              alt=""
              width="40"
              height="40"
              className="rounded-full border-2 border-brand-yellow object-cover"
            />
            <Image
              src="/assets/person-4.svg"
              alt=""
              width="40"
              height="40"
              className="rounded-full border-2 border-brand-yellow object-cover"
            />
          </div>
          <h2 className="text-[36px] font-bold text-foreground md:text-[56px]">
            What will you learn next?
          </h2>
          <p className="text-body font-medium text-foreground/75 md:text-lg">
            Start with one course. Build from there.
          </p>
          <div className="flex flex-col justify-center gap-2 md:flex-row">
            <LumaButton href="#categories" label="Explore all courses" className="font-bold" />
            <LumaButton href="#contact" label="Join Luma" className="font-bold" variant="white" />
          </div>
        </div>
      </Container>
    </section>
  );
};
