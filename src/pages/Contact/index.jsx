// import React from "react";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Header />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
