import { TableCell } from "../../atoms/table-cell";
import { TableRow } from ".";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Molecules/TableRow',
  component: TableRow,
  subcomponents: { TableCell },
  tags: ['autodocs'],
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args?) => (
    <TableRow {...args}>
      <TableCell>Item 1</TableCell>
      <TableCell>Item 2</TableCell>
      <TableCell>Item 3</TableCell>
    </TableRow>
  )
};
