import { CounterButton } from "@repo/ui/lib/molecules/counter-button";
import { Table } from "@repo/ui/lib/organisms/table";
import { TableHeader } from "@repo/ui/lib/organisms/table-header";
import { TableRow } from "@repo/ui/lib/molecules/table-row";
import { TableHeaderCell } from "@repo/ui/lib/molecules/table-header-cell";
import { TableBody } from "@repo/ui/lib/organisms/table-body";
import { TableCell } from "@repo/ui/lib/atoms/table-cell";

import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.test}>Home Page</h1>
      <p className={styles.subtest}>Welcome to the home page of our storefront!</p>
      <p>Test</p>
      <CounterButton />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Header Item 1</TableHeaderCell>
            <TableHeaderCell>Header Item 2</TableHeaderCell>
            <TableHeaderCell>Header Item 3</TableHeaderCell>
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
    </div>
  );
};

export default HomePage;

export const metadata = {
  title: "Storefront | Home",
};