import type { Meta, StoryObj } from '@storybook/react';

import { MainMenu } from './MainMenu';

const meta = {
  title: 'Components/Main Menu',
  component: MainMenu,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {},
  args: {},
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'var(--mm-color-neutral-darkest)' }}>
        <Story />
      </div>
    ),
  ],
};
