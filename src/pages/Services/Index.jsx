import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import ServicesHeader from "./components/ServicesHeader";
import ServicesSlider from "../Services/components/ServicesSlider";
import { ServicesSliderData } from "../../utils/ServicesSliderData";
import ServiceCards from "./components/ServiceCards";
import ContactTitle from "../../components/ContactTitle";

const Services = () => {
  return (
    <>
      <Fade top distance="20%" duration={2000}>
        <div className="flex flex-col">
          <Header />
          <ServicesHeader />
          <ServiceCards />
          <ServicesSlider slides={ServicesSliderData} />
          <ContactTitle />
          <ContactForm />
          <Footer />
        </div>
      </Fade>
    </>
  );
};

export default Services;
