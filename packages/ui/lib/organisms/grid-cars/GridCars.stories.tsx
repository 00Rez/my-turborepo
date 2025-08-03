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
    <div style={{ height: '400px', width: '100%' }}>
      <GridCars {...args} />
    </div>
  ),
};

export const Lazy: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => (
    <div style={{ height: '400px', width: '100%' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <GridCarsLazy {...args} />
      </Suspense>
    </div>
  ),
};
