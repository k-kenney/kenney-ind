import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import gears from "../assets/img/contactWheels.png";

const ContactForm = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(10); // Default number of rows

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Submit the form to Netlify
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "form-name": "contact",
          company,
          name,
          number,
          email,
          message,
        }).toString(),
      });
      // After a successful submission, navigate to the success page
      navigate("/success");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Small screens
        setRows(5);
      } else {
        // Medium screens and larger
        setRows(8);
      }
    };

    // Initially set the number of rows based on screen size
    handleResize();

    // Add a resize event listener to update rows when the window size changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="relative">
          <img
            src={gears}
            alt=""
            className="object-cover w-full h-screen z-0 bg-blue"
            style={{ position: "absolute", top: 0, left: 0 }}
          />

          <div className="absolute m-0 z-20 top-0 left-0 right-0 bottom-0">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify-honeypot="bot-field"
              action="/success"
              className="w-full h-screen p-4 m-auto flex flex-col items-center md:flex-row md:justify-center md:items-start md:gap-20"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div hidden>
                <input name="bot-field" />
              </div>
              <div>
                <div className="">
                  <div className="contact-text">
                    <label className="" htmlFor="company">
                      Company
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="contact-input"
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="contact-text">
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input
                      className="contact-input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="contact-text">
                    <label htmlFor="number">Phone Number</label>
                  </div>
                  <div>
                    <input
                      className="contact-input"
                      type="number"
                      id="number"
                      name="number"
                      placeholder="Your Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="contact-text">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <input
                      className="contact-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="contact-text">
                    <label htmlFor="message">Message</label>
                  </div>
                  <div>
                    <textarea
                      className="contact-input"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={rows}
  
     
                    ></textarea>
                  </div>
                </div>

                <div className="">
                  <button type="submit" className="homepage-btn my-5 w-1/3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
