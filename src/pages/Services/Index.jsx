import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import ServicesHeader from "./components/ServicesHeader";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/SliderData";


const Services = () => {
  return (
    <>
    <Fade top distance="20%" duration={1500}>
      <div className="flex flex-col">
        <Header />
        <ServicesHeader />
        <ImageSlider slides={SliderData} />
        <ContactForm />
        <Footer />
      </div>
    </Fade>
  </>
  )
}

export default Services