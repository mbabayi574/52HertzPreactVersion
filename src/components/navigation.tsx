/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-confusing-arrow */
import type { JSX } from "preact/jsx-runtime";
import { Link } from "wouter";
import MobileNav from "./mobile-nav.tsx";
import ThemeIcon from "./ThemeIcon/themeicon.tsx";
import styled from "styled-components";
import { useState } from "preact/hooks";

const Hamburger = styled.div`
  span:nth-child(1) {
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
  }
`;

const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <div className="title-link">
          <div className="unselectable">52Hertz 🐋</div>
        </div>

        <div
          className={`nav-links one-line-wrapper ${isMenuOpen ? "show" : ""}`}
        >
          <Link to="/">Home</Link>
          <Link to="/works/">Works</Link>
          <Link to="/blog/">Blog</Link>
        </div>
        <div className="icons-wrapper">
          <Hamburger
            $isMenuOpen={isMenuOpen}
            className="hamburger"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <span />
            <span />
            <span />
          </Hamburger>
          <ThemeIcon />
          <MobileNav isShow={isMenuOpen} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
