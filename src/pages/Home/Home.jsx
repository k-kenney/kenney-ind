import { Fade } from "react-awesome-reveal";
import Header from "./components/Header";
import HomepageAbout from "./components/HomepageAbout";
import HomepageButtons from "./components/HomepageButtons";
import HomepageCards from "./components/HomepageCards";

const Home = () => {
  return (
    <>
    <Fade top distance="20%" duration={1500}>
      <Header />
      <HomepageAbout />
      <HomepageButtons />
      <HomepageCards />
    </Fade>
    </>
  );
};

export default Home;
