import "./footer.scss";
import type { JSX } from "preact";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-style">
      <div className="footer-div">
        <small className="footer-small">
          &copy; {year} 52Hertz by Bobby. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
