import { Fade } from "react-awesome-reveal";
import triangle from "../../../assets/img/triangle.png";
import Navbar from "../../../components/Navbar";

const Header = () => {
  return (
    <Fade>
      <div className="w-full pb-12">
        <div className="relative z-0 bg-right float-right bg-no-repeat m-auto w-1/2 md:w-1/3">
          <img src={triangle} alt="red triangle" className="w-screen h-screen" />
        </div>
        <div className="absolute m-auto top-0 bottom-0 right-0 left-0 z-20">
          <Navbar />
        </div>
        <h1 className="absolute top-48 sm:text-3xl sm:leading-12 lg:text-4xl lg:leading-15 bottom-0 left-0 right-0 z-20 uppercase text-xl m-auto text-center w-1/2 leading-10 font-bold">
          Something awesome coming soon
        </h1>
      </div>
    </Fade>
  );
};

export default Header;
