import { TableHeader } from "../table-header";
import { TableBody } from "../table-body";
import { Table } from ".";
import { TableRow } from "../../molecules/table-row";
import { TableCell } from "../../atoms/table-cell";

import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Organisms/Table',
  component: Table,
  subcomponents: { TableRow, TableHeader, TableCell, TableBody },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args?) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell>Header Item 1</TableCell>
          <TableCell>Header Item 2</TableCell>
          <TableCell>Header Item 3</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
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
    </Table>
  )
};
