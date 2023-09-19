import { Fade } from "react-awesome-reveal";
import Header from "./components/Header";
import HomepageAbout from "./components/HomepageAbout";
import HomepageButtons from "./components/HomepageButtons";
import HomepageCards from "./components/HomepageCards";
import Location from "./components/Location";
import MapWithPin from "./components/Location";
import GoogleMap from "./components/Location";

const Home = () => {
  return (
    <>
      <Fade top distance="20%" duration={1500}>
        <Header /> 
        <HomepageButtons />
        <HomepageAbout />
        <HomepageCards />
        <GoogleMap />
      </Fade>
    </>
  );
};

export default Home;
