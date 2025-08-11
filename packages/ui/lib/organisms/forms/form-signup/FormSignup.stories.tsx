import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormSignup } from "./FormSignup";
import { fn } from "storybook/test";

const meta = {
  title: 'Organisms/Forms/FormSignup',
  component: FormSignup,
  tags: ['autodocs'],
} satisfies Meta<typeof FormSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
    onResetPassword: fn(),
    onSignUp: fn(),
    error: "There was an error signing up. Please try again.",
  },
  render: (args) => (
    <FormSignup {...args} />
  ),
};
