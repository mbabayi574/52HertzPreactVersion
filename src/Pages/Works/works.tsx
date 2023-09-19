import Card from "../../components/Card/card.tsx";
import PatriotImage from "../../../public/images/projects/patriiot.webp";

import type { JSX } from "preact";
import Timeline from "./Timeline/timeline.tsx";

const WorkExperience = [
  {
    title: "Software Engineer (Java)",
    company: "Pasargad Electronic Payment",
    companyLink: "https://pep.co.ir/en/",
    time: "Mar 2023 - Present",
    details: [
      "The Paypod Payment Super App is a popular payment app in Iran with over 5 million installs.",
      "My responsible is the development and maintenance of the app's payment functionalities.",
      "Integrated payment systems with 3 third-party platforms; developed utility for C2B payment modules.",
    ],
  },
  {
    title: "Frontend Track Owner",
    company: "Quera.org",
    companyLink: "https://quera.org/",
    time: "Nov 2022 - Mar 2023",
    details: [
      "In this position, I managed the training team, whose task was web design and development.",
      "Management of educational boot camps.",
      "Management of existing courses and design of new training courses.",
      "Monitoring and improving existing educational processes.",
    ],
  },
];

const Works = (): JSX.Element => {
  return (
    <>
      <div className="logo">
        <img
          width="150"
          height="150"
          alt="Little Princess Logo"
          src="/images/LittlePrincess.svg"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
      <h2>Work experience</h2>
      <Timeline emoji="👨‍💻" events={WorkExperience} />
      <h2>Projects</h2>
      <ul role="list" class="link-card-grid">
        <Card
          href="https://ioitiran.ir/"
          image={PatriotImage}
          title="Patriot IOT Project"
          body="
          Patriot IOT Project is a project that I started in 2023 for my bachelor's degree, This is a IoT Devices Management System."
        />
      </ul>
    </>
  );
};

export default Works;
