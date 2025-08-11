import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormSignin } from "./FormSignin";
import { fn } from "storybook/test";

const meta = {
  title: 'Organisms/Forms/FormSignin',
  component: FormSignin,
  tags: ['autodocs'],
} satisfies Meta<typeof FormSignin>;

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
    <FormSignin {...args} />
  ),
};
