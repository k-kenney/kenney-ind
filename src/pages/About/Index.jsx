import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import Timeline from "./components/Timeline";
import AboutHeader from "./components/AboutHeader";

const About = () => {
  return (
    <>
      <Fade top distance="20%" duration={2000}>
        <div className="flex flex-col">
          <Header />
          <AboutHeader />
          <Timeline />
          <ContactForm />
          <Footer />
        </div>
      </Fade>
    </>
  );
};

export default About;
