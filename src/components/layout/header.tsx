import { Menu, X } from 'lucide-react';

import { LumaButton } from '@/components/common/luma-button';
import { Container } from '@/components/layout/container';
import { LumaLogo } from '../common/luma-logo-svg';

const navigationLinks = ['Courses', 'For Teams', 'Community', 'About'];

export function Header() {
  return (
    <header className="relative z-50 w-full border bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <LumaLogo className="text-foreground" />

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((label) => (
              <span
                key={label}
                className="text-sm text-foreground/75 transition-colors hover:text-brand-blue"
              >
                {label}
              </span>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LumaButton variant="ghost" className="text-foreground/75" label="Log in" />

            <LumaButton label="Start learning" />
          </div>

          <details className="group relative md:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
              <X className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="absolute top-full right-0 flex min-w-90 flex-col gap-5 rounded-md border-t border-border bg-background p-6 shadow-lg md:hidden"
            >
              {navigationLinks.map((label) => (
                <span
                  key={label}
                  className="text-sm font-medium text-foreground transition-colors hover:text-brand-blue"
                >
                  {label}
                </span>
              ))}

              <LumaButton variant="ghost" label="Log in" />

              <LumaButton label="Start learning" />
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
