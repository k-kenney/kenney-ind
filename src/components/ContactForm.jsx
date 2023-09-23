import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, message);
  return (
    <div>
      <form name="contact" method="POST" data-netlify-honeypot="bot-field" >
        <input type="hidden" name="form-name" value="contact"/>

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
