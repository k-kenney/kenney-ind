const QuoteHeader = () => {
  return (
    <div>
      <div className="absolute top-52 bottom-0 left-0 right-36 sm:right-64 md:right-0 z-20">
        <h1 className="sm:leading-12 lg:text-4xl lg:leading-15 uppercase text-3xl m-auto w-48 lg:w-80 py-4 text-center leading-10 font-bold border-t border-b">
          Quote
        </h1>
      </div>
      <div className="absolute top-80 sm:top-96 bottom-0 left-0 right-0 z-20 my-14 sm:my-2 space-y-12 w-2/3 lg:w-3/5 text-md md:text-lg lg:text-xl m-auto text-left leading-7 md:leading-9 lg:leading-10">
        <p>
          Want to learn more about how Kenney Industries can help you with your
          manufacturing needs?
        </p>

        <p>
          Would you like more information about Kenney Industries? Fill out the
          contact form below and a representative will get back to you within 24
          hours.
        </p>
      </div>
    </div>
  );
};

export default QuoteHeader;
