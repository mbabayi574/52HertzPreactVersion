import "./timeline.scss";

import type { JSX } from "preact/jsx-runtime";

interface TimelineProps {
  emoji: string;
  events: Array<{
    title: string;
    company: string;
    companyLink: string;
    time: string;
    details: string[];
  }>;
}

const Timeline = (props: TimelineProps): JSX.Element => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {/* Work experience */}
        <ul className="timeline-events">
          <li className="timeline-event">
            <div className="timeline-content-circle">
              <span className="emoji">{props.emoji}</span>
            </div>
          </li>
          {props.events.map((event, index) => {
            return (
              <li key={index} className="timeline-event">
                <div className="timeline-content">
                  <p className="timeline-title">{event.title}</p>
                  <div className="timeline-company">
                    <a
                      href={event.companyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {event.company}
                    </a>
                  </div>
                  <div className="timeline-time">
                    <p>{event.time}</p>
                  </div>
                  <div className="timeline-details">
                    <ul>
                      {event.details.map((detail, childrenIndex) => {
                        return <li key={childrenIndex}>{detail}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
