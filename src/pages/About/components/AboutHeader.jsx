const AboutHeader = () => {
  return (
    <div>
      <div className="absolute top-52 bottom-0 left-0 right-40 lg:right-0 z-20">
        <h1 className="sm:leading-12 lg:text-4xl lg:leading-15 uppercase text-3xl m-auto w-48 lg:w-80 py-4 text-center leading-10 font-bold border-t border-b">
          About
        </h1>
      </div>
      <div className="absolute top-96 bottom-0 left-0 right-0 z-20 my-14 space-y-5 w-2/3 lg:w-2/3 text-md m-auto text-left leading-7">
        <p>
          At the core of who we are, you’ll find a responsive and innovative
          group of people who care deeply about what they do.
        </p>
        <p>Our operations
          have been carefully developed to meet the precise quality requirements
          of our customers.</p>
          <p>We are committed to quality, attention to detail and
          continually improving our company.</p>
      </div>
    </div>
  );
};

export default AboutHeader;
