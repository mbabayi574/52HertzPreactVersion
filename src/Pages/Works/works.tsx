import Card from "../../components/Card/card.tsx";

// Resources
import LittlePrincess from "../../assests/images/LittlePrincess.svg";
import PatriotImage from "../../assests/images/projects/patriiot.webp";

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
  {
    title: "Fullstack Developer",
    company: "Raydad",
    companyLink: "https://www.linkedin.com/company/raydad/",
    time: "Apr 2021 - Nov 2022",
    details: [
      "Building a site to introduce the company",
      "Building an intelligent system for monitoring countries' technology news, initially designed for the Iranian Embassy in Austria.",
      "Building a system for monitoring people and managing human resources using the tools collected through Linkedin.",
      "Building an MVP for a cryptocurrency management system called T-BLOCK.",
      "Aggregation and evaluation of data collected from the Crunchbase system to present a report to Iran's Nano headquarters.",
      "UX design of a system to identify people abroad on the order of the National Elite Foundation of Iran",
    ],
  },
];

const Education = [
  {
    title: "Bachelor's degree in Computer Engineering",
    company: "Iran University of Science and Technology",
    companyLink: "http://www.iust.ac.ir/en",
    time: "2018 – 2023",
    details: [
      "GPA: 2.93 / 4",
      "Thesis: Design and implementation of Internet of Things infrastructure system along with heart rate monitoring hardware",
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
          src={LittlePrincess}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
      <h2>Work experience</h2>
      <Timeline emoji="👨‍💻" events={WorkExperience} />
      <h2>Education</h2>
      <Timeline emoji="🎓" events={Education} />
      <h2>Projects</h2>
      <ul role="list" class="link-card-grid">
        <Card
          href="https://ioitiran.ir/"
          image={PatriotImage}
          title="Patriot IOT Project"
          body="
          Patriot IOT Project is a project that I started in 2023 for my bachelor's degree, Under the supervision of Professor Hosseini Monazzah at Cyber-Physical Systems (CPS) laboratory at IUST. PATRIIoT is an IoT platform that provides Web-scale infrastructure capabilities to support basic and advanced IoT solutions."
        />
      </ul>
    </>
  );
};

export default Works;
