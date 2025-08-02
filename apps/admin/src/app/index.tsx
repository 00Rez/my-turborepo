import "./styles.css";
import { CounterButton } from "@repo/ui/lib/molecules/counter-button";
import { Link } from "@repo/ui/lib/atoms/link";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turborepo.com" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>
    </div>
  );
}

export default App;
