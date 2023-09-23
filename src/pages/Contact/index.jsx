import React from 'react'
import Header from '../About/components/Header'
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Header />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact