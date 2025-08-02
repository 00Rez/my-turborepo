import { TableCell } from "@repo/ui/lib/atoms/table-cell";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

const meta = {
  title: 'Atoms/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Table Cell Content',
    className: '',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Class Cell',
    className: 'custom-class',
  },
};

export const WithAttributes: Story = {
  args: {
    children: 'Cell with Attributes',
    className: '',
    style: { backgroundColor: '#f0f0f0' },
  },
};

export const EmptyCell: Story = {
  args: {
    children: null,
    className: '',
  },
};

export const LongContent: Story = {
  args: {
    children: 'This is a very long content that should wrap within the table cell to demonstrate how it handles overflow and wrapping.',
    className: '',
  },
};

export const CustomStyling: Story = {
  args: {
    children: 'Styled Cell',
    className: 'styled-cell',
  },
};

export const InteractiveCell: Story = {
  args: {
    children: 'Click Me',
    className: 'interactive-cell',
    onClick: fn(),
  },
};

export const DisabledCell: Story = {
  args: {
    children: 'Disabled Cell',
    className: 'disabled-cell',
    style: { pointerEvents: 'none', opacity: 0.5 },
  },
};

export const CellWithIcon: Story = {
  args: {
    children: (
      <>
        <span className="icon">🔍</span> Cell with Icon
      </>
    ),
    className: 'cell-with-icon',
  },
};

export const CellWithLink: Story = {
  args: {
    children: (
      <a href="https://example.com" className="cell-link">
        Visit Example
      </a>
    ),
    className: 'cell-with-link',
  },
};
