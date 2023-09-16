import type { JSX } from "preact/jsx-runtime";
import Navigation from "./navigation.tsx";

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
