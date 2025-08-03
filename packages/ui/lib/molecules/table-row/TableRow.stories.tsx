import { TableCell } from "../../atoms/table-cell";
import { TableRow } from "./TableRow";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableRowLazy } from "./TableRowLazy";
import { Suspense } from "react";
import { spyOn } from "storybook/test";

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

export const LocaleAware: Story = {
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLDivElement;
    console.log('LocaleAware story is running', canvas);
    spyOn(navigator, 'language', 'get').mockReturnValue('en-UK');
    const locale = navigator.language || 'en';
    const localePrefix = locale.split('-')[0];
    console.log(`Locale: ${locale}, Prefix: ${localePrefix}`);
  },
  render: (args?) => (
    <Suspense fallback={<div>Loading...</div>}>
      <TableRowLazy {...args}>
        <TableCell>Localized Item 1</TableCell>
        <TableCell>Localized Item 2</TableCell>
        <TableCell>Localized Item 3</TableCell>
      </TableRowLazy>
    </Suspense>
  )
};
