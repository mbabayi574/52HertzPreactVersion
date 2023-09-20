import type { JSX } from "preact";
import Typewriter from "typewriter-effect";

// Resources
import Logo52Hertz from "../../assests/images/52Hertz.svg";
import HTML5LOGO from "../../assests/images/dev-icons/html5-plain.svg";
import CSS3LOGO from "../../assests/images/dev-icons/css3-plain.svg";
import JavaScriptLOGO from "../../assests/images/dev-icons/javascript-plain.svg";
import TypeScriptLOGO from "../../assests/images/dev-icons/typescript-plain.svg";
import JavaLOGO from "../../assests/images/dev-icons/java-original.svg";
import SpringLOGO from "../../assests/images/dev-icons/spring-original.svg";
import OracleLOGO from "../../assests/images/dev-icons/oracle-original.svg";

import "./home.scss";

const Home = (): JSX.Element => {
  const jobs = [
    "a Software Engineer ...",
    "a Frontend Developer ...",
    "just a learner ...",
  ];

  return (
    <>
      <div className="home-page-style">
        <div className="logo">
          <img
            width="150"
            height="150"
            alt="52Hertz Logo"
            src={Logo52Hertz}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </div>
        <h1>52Hertz</h1>
        <small className="home-small">
          I am&nbsp;
          <Typewriter
            options={{
              strings: jobs,
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </small>
        <h2>About Me</h2>
        <p>
          I am a software engineer with a passion for Web Development. <br /> I
          am currently working as a Java Developer in PSP Co.
        </p>
        <p>
          I always like to do things to help people around me enjoy life more
          and be happier. Knowing the world of technology has always been
          attractive to me, but I wanted to help people's lives better through
          it.
        </p>
        <div className="button">
          <a
            href="https://drive.google.com/file/d/1kgsS_wOEJs7KCYY4Vmc261eY9blY3wN6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>My portfolio</button>
          </a>
        </div>
        <h2>Skills</h2>
        <div
          className="link-images"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <img width="46" height="46" alt="HTML" src={HTML5LOGO} />
          <img width="46" height="46" alt="CSS" src={CSS3LOGO} />
          <img width="46" height="46" alt="JavaScript" src={JavaScriptLOGO} />
          <img width="46" height="46" alt="TypeScript" src={TypeScriptLOGO} />
          <img width="46" height="46" alt="Java" src={JavaLOGO} />
          <img width="46" height="46" alt="Spring" src={SpringLOGO} />
          <img
            className="light-image "
            width="46"
            height="46"
            alt="Oracle"
            src={OracleLOGO}
          />
        </div>
        <h2>Interests</h2>
        <p>
          My favorite things are Teaching 👨🏻‍🏫, Video games 🎮 and Movies 🎥,
          Helping Society 🕊️, and Working with Children 🧒🏻.
          <br />
          This is how I look at work : I see a family trying to solve a series
          of problems together;
          <br />
          therefore, friendship in the workplace is a critical priority for me.
          I will be happy to talk with you and gain valuable experiences by
          meeting you; we may become good friends.
        </p>
      </div>
    </>
  );
};

export default Home;
