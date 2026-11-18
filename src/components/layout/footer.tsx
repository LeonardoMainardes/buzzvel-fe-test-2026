import { LumaLogo } from '../common/luma-logo-svg';
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

          <nav className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-8 md:contents">
              <div className="flex flex-col gap-3">
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-white">EXPLORE</h3>
                <span className="text-sm text-white/80">Courses</span>
                <span className="text-sm text-white/80">Categories</span>
                <span className="text-sm text-white/80">Instructors</span>
                <span className="text-sm text-white/80">For Teams</span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-white">SUPPORT</h3>
                <span className="text-sm text-white/80">Help Center</span>
                <span className="text-sm text-white/80">Contact</span>
                <span className="text-sm text-white/80">Terms</span>
                <span className="text-sm text-white/80">Privacy</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="mb-1 text-xs font-semibold tracking-wider text-white">COMPANY</h3>
              <span className="text-sm text-white/80">About</span>
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
