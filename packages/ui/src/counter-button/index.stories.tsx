import { CounterButton } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'UI/CounterButton',
  component: CounterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CounterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
  },
};

export const Incremented: Story = {
  args: {
    count: 5,
    onIncrement: () => {},
    onDecrement: () => {},
  },
};

export const Decremented: Story = {
  args: {
    count: -3,
    onIncrement: () => {},
    onDecrement: () => {},
  },
};

export const Disabled: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    disabled: true,
  },
};

export const CustomIncrement: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    incrementBy: 10,
  },
};

export const CustomDecrement: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    decrementBy: 5,
  },
};

export const CustomStyles: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    style: { backgroundColor: 'lightblue', color: 'darkblue' },
  },
};

export const WithIcons: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    incrementIcon: '➕',
    decrementIcon: '➖',
  },
};

export const WithLongText: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    incrementText: 'Click to increment the count by 1',
    decrementText: 'Click to decrement the count by 1',
  },
};

export const WithLoadingState: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    loading: true,
  },
};

export const WithErrorState: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    error: 'An error occurred while updating the count',
  },
};

export const WithCustomLabels: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    incrementLabel: 'Increase Count',
    decrementLabel: 'Decrease Count',
  },
};

export const WithAccessibilityLabels: Story = {
  args: {
    count: 0,
    onIncrement: () => {},
    onDecrement: () => {},
    incrementAriaLabel: 'Increment the count',
    decrementAriaLabel: 'Decrement the count',
  },
};
