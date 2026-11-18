import { LumaLogo } from '@/components/common/luma-logo-svg';
import { Container } from './container';

export const Footer = () => {
  return (
    <footer className="bg-foreground pt-20 pb-10 text-brand-light">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr] md:gap-8">
          <div>
            <LumaLogo className="text-white" />

            <p className="mt-2 text-sm leading-6 text-white/80 md:max-w-56">
              Practical learning for curious people.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-8 md:contents">
              <div className="flex flex-col gap-3">
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-white">EXPLORE</h3>

                <a
                  href="#categories"
                  className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Courses
                </a>

                <a
                  href="#categories"
                  className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Categories
                </a>

                <a
                  href="#people"
                  className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Instructors
                </a>

                <a
                  href="#contact"
                  className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  For Teams
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-white">SUPPORT</h3>

                <a
                  href="#contact"
                  className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Help Center
                </a>

                <a
                  href="#contact"
                  className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Contact
                </a>

                <span className="text-sm text-white/80">Terms</span>
                <span className="text-sm text-white/80">Privacy</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="mb-1 text-xs font-semibold tracking-wider text-white">COMPANY</h3>

              <a
                href="#how-it-works"
                className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                About
              </a>

              <span className="text-sm text-white/80">Careers</span>
              <span className="text-sm text-white/80">Journal</span>
            </div>
          </nav>
        </div>

        <div className="mt-16 border-t border-white/30 pt-6">
          <p className="text-[13px] text-white/80">© 2026 Luma Learning</p>
        </div>
      </Container>
    </footer>
  );
};
