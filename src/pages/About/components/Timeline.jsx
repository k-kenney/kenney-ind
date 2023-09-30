import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineElements from "./TimelineElements";

const Timeline = () => {

  return (
    <div className="pt-32 pb-32 md:pt-20 w-3/4 lg:w-5/6 m-auto">
      <h1 className="uppercase text-2xl w-60 text-center m-auto py-12">
        A brief history of kenney ind
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const backgroundClass = `background-image-${element.backgroundImage}`;
          return (
            <VerticalTimelineElement
              key={element.id}
              year={element.year}
              yearClassName="year"
              className={`text-blue ${backgroundClass}`}
            >
              <div className="w-5/6 m-auto">
                <h3 className="pb-4 pt-3 verticle-timeline-element-title">
                  {element.year}
                </h3>
                <p className="vertical-element-timeline-subtitle">
                  {element.description}
                </p>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
