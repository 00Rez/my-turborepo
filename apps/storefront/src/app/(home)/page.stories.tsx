import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./page";

const meta = {
  title: 'Page/Home',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
