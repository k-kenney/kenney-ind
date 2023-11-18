import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import QualityHeader from "./components/QualityHeader";


const Quality = () => {
  return (
    <>
    <Fade top distance="20%" duration={2000}>
      <div className="flex flex-col">
        <Header />
        <QualityHeader />
        <ContactForm />
        <Footer />
      </div>
    </Fade>
  </>
  )
}

export default Quality