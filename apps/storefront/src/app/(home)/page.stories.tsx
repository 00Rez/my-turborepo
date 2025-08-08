import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./page";

const meta = {
  title: 'Pages/Home',
  component: HomePage,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
