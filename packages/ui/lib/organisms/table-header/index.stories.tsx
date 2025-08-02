import { TableRow } from "../../molecules/table-row";
import { TableHeaderCell } from "../../molecules/table-header-cell";
import { TableHeader } from ".";

import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Organisms/TableHeader',
  component: TableHeader,
  subcomponents: { TableRow, TableHeaderCell },
  tags: ['autodocs'],
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args?) => (
    <TableHeader {...args}>
      <TableRow>
        <TableHeaderCell>Header Item 1</TableHeaderCell>
        <TableHeaderCell>Header Item 2</TableHeaderCell>
        <TableHeaderCell>Header Item 3</TableHeaderCell>
      </TableRow>
    </TableHeader>
  )
};
