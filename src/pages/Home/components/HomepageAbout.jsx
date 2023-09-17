import React from "react";
import { Fade } from "react-awesome-reveal";

const HomepageAbout = () => {
  return (
    <Fade>
    <div className="m-auto flex items-center justify-center flex-col w-2/3">
      <h1 className="text-xl text-white">Who We Are</h1>
      <p className="text-lg text-white">
        Kenney Industries is full of responsive and innovative people making
        complex parts in an organized and well-maintained facility. Our Core
        focus is turnkey machined, welded, and assembled components.
      </p>
    </div>
    </Fade>
  );
};

export default HomepageAbout;
