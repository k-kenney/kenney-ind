import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Fade } from "react-awesome-reveal";
import QuoteHeader from "./components/QuoteHeader";
import QuoteTitle from "./components/QuoteTitle";
// import QuoteForm from "./components/QuoteForm";


const Quote = () => {
  return (
    <>
    <Fade top distance="20%" duration={2000}>
      <div className="flex flex-col">
        <Header />
        <QuoteHeader />
        <QuoteTitle />
        {/* <QuoteForm /> */}
        <ContactSection />
        <Footer />
      </div>
    </Fade>
  </>
  )
}

export default Quote