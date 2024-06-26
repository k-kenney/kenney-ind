import { Fade } from "react-awesome-reveal";
import Header from "./components/Header";
import HomepageAbout from "./components/HomepageAbout";
import HomepageCards from "./components/HomepageCards";
import GoogleMap from "./components/Location";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../utils/SliderData";
import ContactTitle from "../../components/ContactTitle";
import Quality from "./components/Quality";
import "../../assets/css/homepage.css";

const Home = () => {
  return (
    <>
      <Fade top distance="20%" duration={2000}>
        <Header />
        <HomepageAbout />
        <HomepageCards />
        <Quality />
        <ImageSlider slides={SliderData} />
        <GoogleMap />
        <ContactTitle />
        <ContactSection />
        <Footer />
      </Fade>
    </>
  );
};

export default Home;
