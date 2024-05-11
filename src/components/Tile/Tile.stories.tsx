import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from './Tile';

const meta = {
	title: 'Components/Tile',
	component: Tile,
	tags: ['autodocs'],
	parameters: {},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '400px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: 'Transportation and Parking Services Website',
		image: '/images/tp/tp-garage.png',
		link: 'https://example.com',
		body: "I transformed The Ohio State University's Transportation & Parking Services website from an outdated, hand-coded site to a modern, responsive Drupal site.",
	},
};
