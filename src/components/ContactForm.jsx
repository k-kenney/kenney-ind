import React, { useState } from "react";
import { useNavigate } from "react-router";


const ContactForm = () => {
  const [company, setCompany] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Submit the form to Netlify
      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ 'form-name': 'contact', company, name, number, email, message }).toString(),
      });
      // After a successful submission, navigate to the success page
      navigate('/success');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  

  return (
    <div className="flex flex-column justify-center m-auto items-center">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
    </div>
  );
};

export default ContactForm;
