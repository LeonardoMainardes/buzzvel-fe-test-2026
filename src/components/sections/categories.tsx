import { ArrowRight } from 'lucide-react';

import { LumaCard } from '../common/luma-card';
import { Container } from '../layout/container';
import { CardContent, CardDescription, CardTitle } from '../ui/card';

export const Categories = () => {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col gap-6 pb-10">
          <p className="text-xs font-bold text-brand-blue">FIND YOUR NEXT SKILL</p>

          <h2 className="max-w-170 text-[32px] font-extrabold text-foreground md:text-5xl">
            Learn something worth knowing.
          </h2>

          <p className="max-w-140 text-base text-foreground/75 md:text-lg">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <LumaCard className="group flex h-full min-h-65 w-full flex-col justify-between rounded-2xl">
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <span className="w-fit rounded-md bg-secondary px-2 py-1 text-xs font-bold text-brand-blue">
                01
              </span>

              <CardTitle className="text-xl font-bold">Product Design</CardTitle>

              <CardDescription className="text-sm text-foreground/75">
                Turn complex problems into clear, useful experiences.
              </CardDescription>

              <div className="mt-auto flex items-center gap-3 pt-4">
                <span className="text-sm font-bold">Explore</span>

                <span className="flex size-8 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </CardContent>
          </LumaCard>

          <LumaCard className="group flex h-full min-h-65 w-full flex-col justify-between rounded-2xl">
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <span className="w-fit rounded-md bg-secondary px-2 py-1 text-xs font-bold text-brand-blue">
                02
              </span>

              <CardTitle className="text-xl font-bold">Technology</CardTitle>

              <CardDescription className="text-sm text-foreground/75">
                Build a stronger understanding of the tools shaping digital products.
              </CardDescription>

              <div className="mt-auto flex items-center gap-3 pt-4">
                <span className="text-sm font-bold">Explore</span>

                <span className="flex size-8 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </CardContent>
          </LumaCard>

          <LumaCard className="group flex h-full min-h-65 w-full flex-col justify-between rounded-2xl">
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <span className="w-fit rounded-md bg-secondary px-2 py-1 text-xs font-bold text-brand-blue">
                03
              </span>

              <CardTitle className="text-xl font-bold">Business</CardTitle>

              <CardDescription className="text-sm text-foreground/75">
                Develop practical skills for better decisions and stronger teams.
              </CardDescription>

              <div className="mt-auto flex items-center gap-3 pt-4">
                <span className="text-sm font-bold">Explore</span>

                <span className="flex size-8 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </CardContent>
          </LumaCard>

          <LumaCard className="group flex h-full min-h-65 w-full flex-col justify-between rounded-2xl">
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <span className="w-fit rounded-md bg-secondary px-2 py-1 text-xs font-bold text-brand-blue">
                04
              </span>

              <CardTitle className="text-xl font-bold">Creative</CardTitle>

              <CardDescription className="text-sm text-foreground/75">
                Explore new ways to communicate, create and tell stories.
              </CardDescription>

              <div className="mt-auto flex items-center gap-3 pt-4">
                <span className="text-sm font-bold">Explore</span>

                <span className="flex size-8 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </CardContent>
          </LumaCard>
        </div>
      </Container>
    </section>
  );
};
