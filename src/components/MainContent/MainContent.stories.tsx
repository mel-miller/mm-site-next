import type { Meta, StoryObj } from '@storybook/react';

import { MainContent } from './MainContent';

const meta = {
  title: 'Layout/Main Content',
  component: MainContent,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    containerWidth: {
      control: {
        type: 'select',
      },
    },
  },
  args: {},
} satisfies Meta<typeof MainContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pathname: '/blog',
    showBreadcrumb: true,
    pageTitle: 'Hello!',
  },
};
