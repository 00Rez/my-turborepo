import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GridCars } from "./GridCars";
import { mockItems } from "./GridCars.mocks";
import { Suspense } from "react";
import { GridCarsLazy } from "./GridCarsLazy";

const meta = {
  title: 'Organisms/GridCars',
  component: GridCars,
  tags: ['autodocs'],
} satisfies Meta<typeof GridCars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => (
    <GridCars {...args} />
  ),
};

export const Lazy: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => (
    <Suspense fallback={<div>Loading...</div>}>
      <GridCarsLazy {...args} />
    </Suspense>
  ),
};
