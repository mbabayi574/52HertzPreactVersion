import type { JSX } from "preact";

import "./home.scss";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="home-page-style">
        <div className="logo">
          <img
            width="150"
            alt="52Hertz Logo"
            src="/images/52Hertz.svg"
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </div>
        <h1>52Hertz</h1>
        <small className="home-small">Software Engineer</small>
        <h2>About Me</h2>
        <p>
          I am a software engineer with a passion for Web Development. <br /> I
          am currently working as a Java Developer in PSP Co.
        </p>
        <p>
          Ut at interdum dui. Donec ut ante ex. Maecenas id ex eget nibh
          consequat accumsan. Proin semper semper dui nec feugiat. Donec cursus
          neque id aliquet finibus. Morbi facilisis turpis nibh, nec dictum orci
          dictum nec. In hac habitasse platea dictumst. Maecenas mollis turpis
          vitae turpis bibendum, vitae tristique arcu eleifend.
        </p>
        <div className="button">
          <a href="/works/">
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
          Ut at interdum dui. Donec ut ante ex. Maecenas id ex eget nibh
          consequat accumsan. Proin semper semper dui nec feugiat. Donec cursus
          neque id aliquet finibus. Morbi facilisis turpis nibh, nec dictum orci
          dictum nec. In hac habitasse platea dictumst. Maecenas mollis turpis
          vitae turpis bibendum, vitae tristique arcu eleifend.
        </p>
      </div>
    </>
  );
};

export default Home;
