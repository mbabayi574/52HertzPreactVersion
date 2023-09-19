import type { JSX } from "preact";
import Typewriter from "typewriter-effect";

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
            src="/images/52Hertz.svg"
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
          <img
            width="46"
            height="46"
            alt="HTML"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          />
          <img
            width="46"
            height="46"
            alt="CSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          />
          <img
            width="46"
            height="46"
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          />
          <img
            width="46"
            height="46"
            alt="TypeScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          />
          <img
            width="46"
            height="46"
            alt="Java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
          <img
            width="46"
            height="46"
            alt="Spring"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          />
          <img
            className="light-image "
            width="46"
            height="46"
            alt="Oracle"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
          />
        </div>
        <h2>Interests</h2>
        <p>
          My favorite things are Teaching 👨🏻‍🏫, Video games 🎮 and Movies 🎥,
          Helping Society 🕊️, and Working with Children 🧒🏻.
          <br />
          This is how I look at work : I see a family trying to solve a series
          of problems together; therefore, friendship in the workplace is a
          critical priority for me. I will be happy to talk with you and gain
          valuable experiences by meeting you; we may become good friends.
        </p>
      </div>
    </>
  );
};

export default Home;
