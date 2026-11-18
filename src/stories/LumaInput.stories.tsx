
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Search, User } from 'lucide-react';
import { fn } from 'storybook/test';

import { LumaInput } from '@/components/common/luma-input';

const meta = {
  title: 'Components/LumaInput',
  component: LumaInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
  },
  args: {
    onChange: fn(),
  },
  render: (args) => (
    <div className="w-100">
      <LumaInput {...args} />
    </div>
  ),
} satisfies Meta<typeof LumaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Enter your name',
    name: 'fullName',
  },
};

export const Filled: Story = {
  args: {
    label: 'Full name',
    defaultValue: 'Alex Morgan',
    name: 'fullName',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    description: 'We will only use your email to contact you.',
    name: 'email',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
    name: 'email',
    type: 'email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Enter your name',
    disabled: true,
    name: 'fullName',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search courses...',
    leftIcon: <Search size={18} />,
    name: 'search',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    rightIcon: <User size={18} />,
    name: 'username',
  },
};
