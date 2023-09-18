import "./blog.scss";
import type { JSX } from "preact";

const Works = (): JSX.Element => {
  return (
    <>
      <div className="blog">
        <div className="blog-logo">
          <img
            width="150"
            alt="52Hertz Logo"
            src="/images/Astrounat.svg"
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </div>
        <p>Workers are working hard to bring this page to you...</p>
      </div>
    </>
  );
};

export default Works;
