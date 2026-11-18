'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { LumaButton } from '@/components/common/luma-button';
import { Container } from '@/components/layout/container';
import { LumaLogo } from '../common/luma-logo-svg';

const navigationLinks = ['Courses', 'For Teams', 'Community', 'About'];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <LumaButton
            type="button"
            variant="ghost"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </LumaButton>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col gap-5 border-t border-border py-6 md:hidden"
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
        )}
      </Container>
    </header>
  );
}
