import { TableCell } from "../../atoms/table-cell";
import { TableRow } from "../../molecules/table-row";
import { TableBody } from ".";

import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Organisms/TableBody',
  component: TableBody,
  subcomponents: { TableRow, TableCell },
  tags: ['autodocs'],
} satisfies Meta<typeof TableBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args?) => (
    <TableBody {...args}>
      <TableRow>
        <TableCell>Item 1</TableCell>
        <TableCell>Item 2</TableCell>
        <TableCell>Item 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Item 4</TableCell>
        <TableCell>Item 5</TableCell>
        <TableCell>Item 6</TableCell>
      </TableRow>
    </TableBody>
  )
};
