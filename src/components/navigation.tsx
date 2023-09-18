import type { JSX } from "preact/jsx-runtime";
import { Link } from "wouter";
import ThemeIcon from "./ThemeIcon/themeicon.tsx";

const Navigation = (): JSX.Element => {
  return (
    <div className="nav-bar">
      <div className="title-link">
        <div className="unselectable">52Hertz 🐋</div>
      </div>

      <div className="nav-links one-line-wrapper">
        <Link to="/">Home</Link>
        <Link to="/works/">Works</Link>
        <Link to="/blog/">Blog</Link>
        <ThemeIcon />
      </div>
    </div>
  );
};

export default Navigation;
