import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import ServicesHeader from "./components/ServicesHeader";
import ServicesSlider from "../Services/components/ServicesSlider";
import { ServicesSliderData } from "../Services/components/ServicesSliderData"
import ServiceCards from "./components/ServiceCards";


const Services = () => {
  return (
    <>
    <Fade top distance="20%" duration={1500}>
      <div className="flex flex-col">
        <Header />
        <ServicesHeader />
        <ServiceCards />
        <ServicesSlider slides={ServicesSliderData} />
        <ContactForm />
        <Footer />
      </div>
    </Fade>
  </>
  )
}

export default Services