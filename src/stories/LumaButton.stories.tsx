
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ArrowRight, Sparkles } from 'lucide-react';
import { fn } from 'storybook/test';

import { LumaButton } from '@/components/common/luma-button';

const meta = {
  title: 'Components/LumaButton',
  component: LumaButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'white'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    hover: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['start', 'end'],
    },
  },
  args: {
    onClick: fn(),
    children: 'Get started',
  },
} satisfies Meta<typeof LumaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    icon: <Sparkles size={16} />,
    iconPosition: 'start',
  },
};

export const WithEndIcon: Story = {
  args: {
    icon: <ArrowRight size={16} />,
    iconPosition: 'end',
  },
};
