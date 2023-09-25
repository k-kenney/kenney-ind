import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const SuccessMessage = () => {
  const navigate = useNavigate();

  // Use useEffect to trigger the redirection after a delay (e.g., 3 seconds)
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/'); // Redirect to the homepage
    }, 1500); // 3000 milliseconds (3 seconds)

    // Cleanup the timeout in case the component unmounts before redirection
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <Fade top distance="20%" duration={1500}>
    <div className='text-center pt-40'>
      <p className='text-3xl'>Message successfully sent!</p>
      {/* You can add any additional content or styling here */}
    </div>
    </Fade>
  );
};

export default SuccessMessage;
