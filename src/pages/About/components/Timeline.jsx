import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineElements from "./TimelineElements";

const Timeline = () => {
  

  return (
    <div className="pb-14 w-3/4 m-auto">
      <h1 className="uppercase text-2xl w-60 text-center m-auto py-12">
        A brieft history of kenney ind
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              year={element.year}
              yearClassName="year"
              className="text-blue" 
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
