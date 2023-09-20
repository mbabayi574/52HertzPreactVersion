import "./blog.scss";
import type { JSX } from "preact";

// Resources
import Astronaut from "../../assests/images/Astrounat.svg";

const Works = (): JSX.Element => {
  return (
    <>
      <div className="blog">
        <div className="blog-logo">
          <img
            width="150"
            height="150"
            alt="Astronaut"
            src={Astronaut}
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
