import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormLogin } from "./FormLogin";
import { fn } from "storybook/test";

const meta = {
  title: 'Organisms/Forms/FormLogin',
  component: FormLogin,
  tags: ['autodocs'],
} satisfies Meta<typeof FormLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
    onResetPassword: fn(),
    onSignUp: fn(),
    error: "There was an error signing in. Please try again.",
  },
  render: (args) => (
    <FormLogin {...args} />
  ),
};
