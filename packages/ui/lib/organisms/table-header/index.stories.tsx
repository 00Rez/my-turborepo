import { TableRow } from "../../molecules/table-row";
import { TableCell } from "../../atoms/table-cell";
import { TableHeader } from ".";

import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Organisms/TableHeader',
  component: TableHeader,
  subcomponents: { TableRow, TableCell },
  tags: ['autodocs'],
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args?) => (
    <TableHeader {...args}>
      <TableRow>
        <TableCell>Header Item 1</TableCell>
        <TableCell>Header Item 2</TableCell>
        <TableCell>Header Item 3</TableCell>
      </TableRow>
    </TableHeader>
  )
};
