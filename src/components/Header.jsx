import triangle from "../assets/img/triangle.png";
import Navbar from "./NavBar/Navbar";

const Header = () => {
  return (
    <div className="w-full mb-0 relative">
      <div className="bg-right float-right bg-no-repeat m-auto w-1/2 md:w-1/3">
        <img
          src={triangle}
          alt="red triangle"
          className="w-screen h-screen z-0 "
        />
      </div>
      <div className="absolute m-auto top-0 bottom-0 right-0 left-0 z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
