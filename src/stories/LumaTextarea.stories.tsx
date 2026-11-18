
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { LumaTextarea } from '@/components/common/luma-textarea';

const meta = {
  title: 'Components/LumaTextarea',
  component: LumaTextarea,
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
    rows: {
      control: 'number',
    },
  },
  args: {
    onChange: fn(),
  },
  render: (args) => (
    <div className="w-100">
      <LumaTextarea {...args} />
    </div>
  ),
} satisfies Meta<typeof LumaTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message...',
    name: 'message',
  },
};

export const Filled: Story = {
  args: {
    label: 'Message',
    defaultValue: 'I would like to know more about your courses.',
    name: 'message',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message...',
    description: 'Tell us a little more about what you are looking for.',
    name: 'message',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message...',
    error: 'Please enter a message.',
    name: 'message',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'This field is disabled',
    disabled: true,
    name: 'message',
  },
};
