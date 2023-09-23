import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit your form data (e.g., using Axios, fetch, etc.)

    // Redirect to the success page
    navigate("/success");
  };
  return (
    <div>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify-honeypot="bot-field"
          action="/#/success"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div>
            <label htmlFor="name">Name</label>
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
