import { Fade } from "react-awesome-reveal";

const HomepageAbout = () => {
  return (
    <Fade>
    <div className="m-auto flex items-center justify-center flex-col w-2/3 pt-9 pb-28">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white p-9">Who We Are</h1>
      <p className="text-lg md:text-xl text-white w-5/6 pt-5">
        Kenney Industries is full of responsive and innovative people making
        complex parts in an organized and well-maintained facility. Our Core
        focus is turnkey machined, welded, and assembled components.
      </p>
    </div>
    </Fade>
  );
};

export default HomepageAbout;
