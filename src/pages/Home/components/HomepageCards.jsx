
const HomepageCards = () => {
  return (   
    <div className="flex flex-col md:flex-row py-12">
      <div className="w-full">
        <div className="homepage-card1 homepage-card-text lg:h-64">
          <h2 className="homepage-card-h2 uppercase">CNC Machining</h2>
          {/* <h3 className="homepage-card-h3">
            <span className="homepage-span">60,000+</span> Square feet under one roof
          </h3> */}
        </div>
        <div className="homepage-card2 homepage-card-text md:border-none lg:h-64">
          <h2 className="homepage-card-h2 uppercase">Welding</h2>
          {/* <h3 className="homepage-card-h3">
            <span className="homepage-span">52+</span> CNC machines in operation
          </h3> */}
        </div>
      </div>
      <div className="w-full">
        <div className="homepage-card3 homepage-card-text md:border-l-1 md:border-white lg:h-64">
          <h2 className="homepage-card-h2 uppercase">Sheet Metal Fabrication</h2>
          {/* <h3 className="homepage-card-h3">
            <span className="homepage-span">ASME</span> code stampes{" "}
            <span className="homepage-span">ASME</span> certified
          </h3> */}
        </div>
        <div className="homepage-card4 homepage-card-text md:border-l-1 md:border-white lg:h-64">
          <h2 className="homepage-card-h2 uppercase">Assembly</h2>
          {/* <h3 className="homepage-card-h3">
            <span className="homepage-span">15+</span> years of ISO quality
            certification
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default HomepageCards;
