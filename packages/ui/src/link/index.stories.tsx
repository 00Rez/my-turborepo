import { Link } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    href: 'https://example.com',
    newTab: false,
  },
};

export const NewTab: Story = {
  args: {
    children: 'Open in new tab',
    href: 'https://example.com',
    newTab: true,
  },
};
