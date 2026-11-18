
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Sparkles } from 'lucide-react';

import { LumaCard } from '@/components/common/luma-card';

const meta = {
  title: 'Components/LumaCard',
  component: LumaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'floating', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
  render: (args) => (
    <div className="w-90">
      <LumaCard {...args}>
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">Discover your potential</h3>
          <p className="text-sm text-muted-foreground">
            Explore new skills and take the next step in your learning journey.
          </p>
        </div>
      </LumaCard>
    </div>
  ),
} satisfies Meta<typeof LumaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};

export const Floating: Story = {
  args: {
    variant: 'floating',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Sparkles size={22} />,
    iconClassName: 'text-brand-blue',
  },
};
