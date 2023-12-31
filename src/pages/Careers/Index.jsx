import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import CareersHeader from "./components/CareersHeader";
import CareersOpenings from "./components/CareersOpenings";
import CareersTeam from "./components/CareersTeam";
import ContactTitle from "../../components/ContactTitle";


const Careers = () => {
  return (
    <>
    <Fade top distance="20%" duration={2000}>
      <div className="flex flex-col">
        <Header />
        <CareersHeader />
        <CareersTeam />
        <CareersOpenings />
        <ContactTitle />
        <ContactForm />
        <Footer />
      </div>
    </Fade>
  </>
  )
}

export default Careers