import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <Fade top distance="20%" duration={1500}>
        <div className="flex flex-col">
          <Header />
          <ContactForm />
          <Footer />
        </div>
      </Fade>
    </>
  );
};

export default About;
