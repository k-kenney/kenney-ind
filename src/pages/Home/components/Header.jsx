import heroImage from "../../../assets/img/dallasBridge.png";
import Navbar from "../../../components/NavBar/Navbar";
import HomepageButtons from "./HomepageButtons";

const Header = () => {
  return (
    <div className="h-screen lg:h-4/5">
      <div className="relative w-full h-full object-left top-0 left-0">
        <img
          src={heroImage}
          alt="Hero Image"
          className="w-full h-full object-cover object-left top-0 left-0 z-0 color-red"
        />
      </div>
      <div className="absolute m-auto top-0 bottom-0 right-0 left-0 md: z-50">
        <Navbar />
      </div>
      <div className="container">
        <div className="absolute z-0 h-52 m-auto top-0 bottom-0 right-0 left-0 flex items-center justify-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl md:w-3/4 lg:w-3/5 w-64 sm:w-3/4 tracking-wider text-white leading-10 md:leading-12 border-y py-7">
            Building <span className="text-red font-bold">better</span> parts,{" "}
            <span className="text-red font-bold">better</span> people, for a
            <span className="text-red font-bold"> brighter</span> future
          </h1>
        </div>
        <div>
          <HomepageButtons />
        </div>
      </div>
    </div>
  );
};

export default Header;
