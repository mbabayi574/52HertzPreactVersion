import type { JSX } from "preact/jsx-runtime";
import ThemeIcon from "./ThemeIcon/themeicon.tsx";

const Navigation = (): JSX.Element => {
  return (
    <div className="nav-bar">
      <div className="title-link">
        <div className="unselectable">52Hertz 🐋</div>
      </div>

      <div className="nav-links one-line-wrapper">
        <a href="/">Home</a>
        <a href="/works/">Works</a>
        <a href="/blog/">Blog</a>
        <ThemeIcon />
      </div>
    </div>
  );
};

export default Navigation;
