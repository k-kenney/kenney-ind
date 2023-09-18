import React from "react";

const HomepageCards = () => {
  return (
    <div className="grid-cols-1">
      <div className="homepage-card1 homepage-card-text">
        <h2 className="homepage-card-h2">Manufacturing</h2>
        <h3 className="homepage-card-h3">
          <span className="homepage-span">60,000+</span> Square feet under one roof
        </h3>
      </div>
      <div className="homepage-card2 homepage-card-text">
        <h2 className="homepage-card-h2">Machining</h2>
        <h3 className="homepage-card-h3">
          <span className="homepage-span">52+</span> CNC machines in operation
        </h3>
      </div>
      <div className="homepage-card3 homepage-card-text">
        <h2 className="homepage-card-h2">Welding</h2>
        <h3 className="homepage-card-h3">
          <span className="homepage-span">ASME</span> code stampes{" "}
          <span className="homepage-span">ASME</span> certified
        </h3>
      </div>
      <div className="homepage-card4 homepage-card-text">
        <h2 className="homepage-card-h2">Quality</h2>
        <h3 className="homepage-card-h3">
          <span className="homepage-span">15+</span> years of ISO quality
          certification
        </h3>
      </div>
    </div>
  );
};

export default HomepageCards;
