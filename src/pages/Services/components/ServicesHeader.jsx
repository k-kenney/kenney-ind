const ServicesHeader = () => {
  return (
    <div className="mb-14">
      <div className="absolute top-52 bottom-0 left-0 right-36 sm:right-64 md:right-0 z-20">
        <h1 className="triangle-header-text">
          Services
        </h1>
      </div>
      <div className="absolute top-80 sm:top-96 bottom-0 left-0 right-0 z-20 mt-14 lg:mt-20 sm:my-2 space-y-12 w-2/3 lg:w-1/2 md:text-2xl m-auto text-center md:leading-12 text-xl leading-10">
        <p>
          “ Our reward for faithful service is the opportunity to provide more
          faithful service. “
        </p>
        <h4 className="text-right text-base">- Mike Kenney <span className="italic">CEO</span></h4>
      </div>
    </div>
  );
};

export default ServicesHeader;
