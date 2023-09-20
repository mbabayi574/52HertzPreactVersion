import "./mobile-nav.scss";
import type { JSX } from "preact/jsx-runtime";
import { Link } from "wouter";

interface MobileNavProps {
  isShow: boolean;
}

const MobileNav = (props: MobileNavProps): JSX.Element => {
  return (
    <nav className={`mobile-nav ${props.isShow ? "show" : ""}`}>
      <Link className="mobilelink" to="/">
        Home
      </Link>
      <Link className="mobilelink" to="/works/">
        Works
      </Link>
      <Link className="mobilelink" to="/blog/">
        Blog
      </Link>
    </nav>
  );
};

export default MobileNav;
