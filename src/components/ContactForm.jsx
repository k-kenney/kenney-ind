import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const navigate = useNavigate();

  // const handleSubmit = event => {
  //   event.preventDefault();
  
  //   // 👇️ redirect
  //   navigate('/', {replace: true});
  // };

  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      // After successful submission, redirect to your homepage
      window.location.href = '/';
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <form
          // onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify-honeypot="bot-field"
          action="/"
          onSubmit={handleSubmit}
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
              value={formData.name} 
              onChange={handleChange}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message} 
              onChange={handleChange}
              // onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
    </div>
  );
};

export default ContactForm;
