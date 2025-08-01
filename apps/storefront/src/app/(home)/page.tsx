import { CounterButton } from "@repo/ui/counter-button";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.test}>Home Page</h1>
      <p className={styles.subtest}>Welcome to the home page of our storefront!</p>
      <CounterButton />
    </div>
  );
};

export default HomePage;

export const metadata = {
  title: "Storefront | Home",
};