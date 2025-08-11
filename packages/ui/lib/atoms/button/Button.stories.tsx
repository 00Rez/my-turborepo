import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Button {...args}>Button</Button>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Button {...args} disabled>Disabled Button</Button>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <Button {...args}>Loading Button</Button>
  ),
};

export const Icon: Story = {
  args: {
    icon: 'home',
  },
  render: (args) => (
    <Button {...args} icon={args.icon}>Icon Button</Button>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} variant="primary">Primary Button</Button>
      <Button {...args} variant="secondary">Secondary Button</Button>
      <Button {...args} variant="danger">Danger Button</Button>
      <Button {...args} variant="success">Success Button</Button>
      <Button {...args} variant="warning">Warning Button</Button>
      <Button {...args} variant="info">Info Button</Button>
    </div>
  ),
};

export const VariantsDisabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} disabled variant="primary">Primary Button</Button>
      <Button {...args} disabled variant="secondary">Secondary Button</Button>
      <Button {...args} disabled variant="danger">Danger Button</Button>
      <Button {...args} disabled variant="success">Success Button</Button>
      <Button {...args} disabled variant="warning">Warning Button</Button>
      <Button {...args} disabled variant="info">Info Button</Button>
    </div>
  ),
};

export const Styling: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} styling="outlined">Outlined Button</Button>
      <Button {...args} styling="filled">Filled Button</Button>
      <Button {...args} styling="text">Text Button</Button>
    </div>
  ),
};

export const StylingDisabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} disabled styling="outlined">Outlined Button</Button>
      <Button {...args} disabled styling="filled">Filled Button</Button>
      <Button {...args} disabled styling="text">Text Button</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button {...args} variant="primary" styling="outlined">Primary Outlined</Button>
      <Button {...args} variant="secondary" styling="filled">Secondary Filled</Button>
      <Button {...args} variant="danger" styling="text">Danger Text</Button>
      <Button {...args} variant="success" styling="outlined">Success Outlined</Button>
      <Button {...args} variant="warning" styling="filled">Warning Filled</Button>
      <Button {...args} variant="info" styling="text">Info Text</Button>
    </div>
  ),
};
