// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";

// const QuoteForm = () => {
//   const [company, setCompany] = useState("");
//   const [file, setFile] = useState("");
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [rows, setRows] = useState(10); // Default number of rows

//   const navigate = useNavigate();

//   // Function to format the phone number
//   const formatPhoneNumber = (input) => {
//     // Remove all non-digit characters
//     const phoneNumber = input.replace(/\D/g, "");

//     // Format the phone number as (xxx) xxx-xxxx
//     const formattedPhoneNumber = phoneNumber.replace(
//       /(\d{3})(\d{3})(\d{4})/,
//       "($1) $2-$3"
//     );

//     return formattedPhoneNumber;
//   };

//   const handleNumberChange = (e) => {
//     // Ensure only digits and a few specific characters are allowed in the input
//     const formattedValue = formatPhoneNumber(e.target.value);
//     setNumber(formattedValue);
//   };

//   const handleFileChange = (e) => {
//     const fileValue = 
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();


//     try {
        
//         // Submit the form to Netlify
//         await fetch("/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: new URLSearchParams({
//             "form-name": "quote-form",
//             company,
//             file,
//             name,
//             number,
//             email,
//             message,
//           }).toString(),
//         });
//         // After a successful submission, navigate to the success page
//         navigate("/success");
//       } catch (error) {
//         console.error("Form submission error:", error);
//       }
//     };


//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         // Small screens
//         setRows(5);
//       } else {
//         // Medium screens and larger
//         setRows(8);
//       }
//     };

//     // Initially set the number of rows based on screen size
//     handleResize();

//     // Add a resize event listener to update rows when the window size changes
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <div id="quote-form">
//         <div>
//           <form
//             onSubmit={handleSubmit}
//             name="quote-form"
//             method="POST"
//             data-netlify-honeypot="bot-field"
//             action="/success"
//             className="w-full h-auto pt-7 md:pt-0 xl:pt-2 flex flex-col justify-center sm:flex-row m-auto items-center md:items-start"
//           >
//             <input type="hidden" name="form-name" value="contact" />

//             <div hidden>
//               <input name="bot-field" />
//             </div>
//             <div className="md:flex md:justify-center md:m-0 md:items-start md:gap-20 md:pt-8 lg:gap-32 xl:gap-44 xl:pt-12">
//               <div className="">
//                 <div className="">
//                   <div className="contact-text">
//                     <label className="" htmlFor="company">
//                       Company*
//                     </label>
//                   </div>
//                   <div>
//                     <input
//                       className="contact-input"
//                       type="text"
//                       id="company"
//                       name="company"
//                       placeholder="Company Name"
//                       value={company}
//                       onChange={(e) => setCompany(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <label>
//                   <span>Add file:</span>
//                   <input 
//                   name="file" 
//                   id="file"
//                   type="file"
//                   value={file}
//                   onChange={(e) => setFile(e.target.value)}
//                    />
//                 </label>

//                 <div>
//                   <div className="contact-text">
//                     <label htmlFor="name">Full Name*</label>
//                   </div>
//                   <div>
//                     <input
//                       className="contact-input"
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Your Name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="contact-text">
//                     <label htmlFor="number">Phone Number*</label>
//                   </div>
//                   <div>
//                     <input
//                       className="contact-input"
//                       type="tel"
//                       id="number"
//                       name="number"
//                       placeholder="(xxx)xxx-xxxx"
//                       value={number}
//                       onChange={handleNumberChange}
//                       required // Make the field required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="contact-text">
//                     <label htmlFor="email">Email*</label>
//                   </div>
//                   <div>
//                     <input
//                       className="contact-input"
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="">
//                 <div>
//                   <div className="contact-text">
//                     <label htmlFor="message">Message*</label>
//                   </div>
//                   <div>
//                     <textarea
//                       className="contact-input "
//                       name="message"
//                       id="message"
//                       placeholder="Your Message"
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       rows={rows}
//                       required
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="">
//                   <button
//                     type="submit"
//                     className="bg-copyright bg-opacity-40 border rounded-lg py-2 px-3 text-white text-lg font-special my-5 lg:py-3 lg:px-5 lg:text-xl transition-all duration-500 hover:bg-gray-600"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default QuoteForm;


import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'


function QuoteForm() {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [file, setFile] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit} action="/thank-you/">
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <h3>{status}</h3>
    </div>
  );
}

export default QuoteForm;