import { Fade } from "react-awesome-reveal";
import Header from "./components/Header";
import HomepageAbout from "./components/HomepageAbout";
import HomepageCards from "./components/HomepageCards";
import GoogleMap from "./components/Location";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/SliderData";


const Home = () => {
  return (
    <>
      <Fade top distance="20%" duration={2000}>
        <Header /> 
        <HomepageAbout />
        
        <HomepageCards />
        <ImageSlider slides={SliderData} />
        <GoogleMap />
        <ContactForm />
        <Footer />
      </Fade>
    </>
  );
};

export default Home;
