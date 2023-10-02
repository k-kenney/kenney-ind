import React from 'react'

const ServiceCards = () => {
    return (   
      <div className="flex flex-col md:flex-row pb-12">
        <div className="w-full">
          <div className="services-card1 homepage-card-text lg:h-64">
            <h2 className="homepage-card-h2">CNC Machining</h2>
            {/* <h3 className="homepage-card-h3">
              <span className="homepage-span">60,000+</span> Square feet under one roof
            </h3> */}
          </div>
          <div className="services-card2 homepage-card-text md:border-none lg:h-64">
            <h2 className="homepage-card-h2">Welding</h2>
            {/* <h3 className="homepage-card-h3">
              <span className="homepage-span">52+</span> CNC machines in operation
            </h3> */}
          </div>
        </div>
        <div className="w-full">
          <div className="services-card3 homepage-card-text md:border-l-1 md:border-white lg:h-64">
            <h2 className="homepage-card-h2">Sheet Metal Fabrication</h2>
            {/* <h3 className="homepage-card-h3">
              <span className="homepage-span">ASME</span> code stampes{" "}
              <span className="homepage-span">ASME</span> certified
            </h3> */}
          </div>
          <div className="services-card4 homepage-card-text md:border-l-1 md:border-white lg:h-64">
            <h2 className="homepage-card-h2">Design & Assemble</h2>
            {/* <h3 className="homepage-card-h3">
              <span className="homepage-span">15+</span> years of ISO quality
              certification
            </h3> */}
          </div>
        </div>
      </div>
    );
  };

export default ServiceCards