import { Container } from '../layout/container';

export const HowItWorks = () => {
  return (
    <section className="bg-background py-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
          <p className="text-xs font-semibold text-brand-blue">HOW LUMA WORKS</p>

          <h2 className="text-[32px] font-extrabold text-foreground md:text-5xl">
            Less browsing. More learning.
          </h2>
        </div>

        <div
          className="
            relative mt-8 grid grid-cols-1 gap-12
            md:mt-20 md:grid-cols-3 md:gap-10
            md:before:absolute
            md:before:left-[4%]
            md:before:right-[30%]
            md:before:top-7
            md:before:h-px
            md:before:bg-border
          "
        >
          <div className="relative z-10 flex flex-col gap-2">
            <div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue text-xs text-white" />
              </div>

              <p className="mt-5 text-xs font-semibold tracking-wider text-muted-foreground md:mt-8">
                STEP 01
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground">Choose your focus</h3>

            <p className="mt-2 text-sm text-foreground/75 md:mt-4 md:text-base">
              Find courses based on the skill you want to build, not endless content categories.
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-2 before:absolute before:-top-12 before:left-7 before:h-12 before:w-px before:bg-border md:mt-0 md:before:hidden">
            <div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-md rotate-12 bg-brand-peach">
                <span className="absolute right-0.5 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-xs text-white" />
              </div>

              <p className="mt-5 text-xs font-semibold tracking-wider text-muted-foreground md:mt-8">
                STEP 02
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground">Learn from experience</h3>

            <p className="mt-2 text-sm text-foreground/75 md:mt-4 md:text-base">
              Follow concise lessons created by professionals who use these skills.
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-2 before:absolute before:-top-12 before:left-7 before:h-12 before:w-px before:bg-border md:mt-0 md:before:hidden">
            <div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-md bg-brand-pastel">
                <span className="absolute left-2 bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-corn text-xs text-white" />
              </div>

              <p className="mt-5 text-xs font-semibold tracking-wider text-muted-foreground md:mt-8">
                STEP 03
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground">Put it into practice</h3>

            <p className="mt-2 text-sm text-foreground/75 md:mt-4 md:text-base">
              Every course includes practical exercises designed to turn knowledge into action.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
