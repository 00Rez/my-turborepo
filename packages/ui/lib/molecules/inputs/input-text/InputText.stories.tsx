import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputText } from "./InputText";
import { fn } from "storybook/test";

const meta = {
  title: 'Molecules/Input/InputText',
  component: InputText,
  subcomponents: { InputText },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
  render: (args?) => (
    <InputText
      {...args}
      placeholder="Enter text"
      label="Input Text"
      onChange={args?.onChange}
      onBlur={args?.onBlur}
      onFocus={args?.onFocus}
    />
  )
};

export const Disabled: Story = {
  render: (args?) => (
    <InputText
      {...args}
      disabled={true}
      placeholder="Disabled input"
      label="Disabled Input"
    />
  )
};

export const WithValue: Story = {
  args: {
    onChange: fn(),
  },
  render: (args?) => (
    <InputText
      {...args}
      placeholder="With initial value"
      label="Input with Value"
      value="Initial Value"
      onChange={args?.onChange}
    />
  )
};

export const WithLabel: Story = {
  render: (args?) => (
    <InputText
      {...args}
      placeholder="Input with label"
      label="Labeled Input"
    />
  )
};

export const Placeholder: Story = {
  render: (args?) => (
    <InputText
      {...args}
      placeholder="This is a placeholder"
      label="Input with Placeholder"
    />
  )
};
