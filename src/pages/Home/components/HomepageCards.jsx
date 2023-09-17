import React from "react";

const HomepageCards = () => {
  return (
    <div className="grid-cols-1">
      <div className="homepage-card1">
        <h2>Manufacturing</h2>
        <h3>
          <span className="text-red">60,000+</span> Square feet under one roof
        </h3>
      </div>
      <div className="homepage-card2">
        <h2>Machining</h2>
        <h3>
          <span className="text-red">52+</span> CNC machines in operation
        </h3>
      </div>
      <div className="homepage-card3">
        <h2>Welding</h2>
        <h3>
          <span className="text-red">ASME</span> code stampes{" "}
          <span className="text-red">ASME</span> certified
        </h3>
      </div>
      <div className="homepage-card4">
        <h2>Quality</h2>
        <h3>
          <span className="text-red">15+</span> years of ISO quality
          certification
        </h3>
      </div>
    </div>
  );
};

export default HomepageCards;
