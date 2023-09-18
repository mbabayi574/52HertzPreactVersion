import Card from "../../components/Card/card.tsx";

import type { JSX } from "preact";

const Works = (): JSX.Element => {
  return (
    <>
      <div className="logo">
        <img
          width="150"
          alt="52Hertz Logo"
          src="/images/LittlePrincess.svg"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
      <h2>Projects</h2>
      <ul role="list" class="link-card-grid">
        <Card
          href="https://ioitiran.ir/"
          image="/images/projects/patriiot.webp"
          title="Patriot IOT Project"
          body="
          Patriot IOT Project is a project that I started in 2023 for my bachelor's degree, This is a IoT Devices Management System."
        />
      </ul>
    </>
  );
};

export default Works;
