import React from "react";
import cnc from "../../../assets/img/cnc-services.png";
import welding from "../../../assets/img/welding-services.png";
import sheetMetal from "../../../assets/img/sheet-metal-services.png";
import design from "../../../assets/img/design-services.png";

const ServiceCards = () => {
  return (
    <div className="flex flex-col md:flex-row pb-12">
      <div className="w-full">
        <div className="services-card1 services-card homepage-card-text lg:h-64">
          <h2 className="services-title">CNC Machining</h2>
          <div className="flex justify-center m-auto">
            <div className="services-flex">
              <img className="services-image" src={cnc} />
              <ul className="services-ul">
                <li>Over 50 CNCs</li>
                <li>Tolerances of .0001”</li>
                <li>1/8” up to 48” diam.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-card2 services-card homepage-card-text md:border-none lg:h-64">
          <h2 className="services-title">Welding</h2>
          <div className="flex items-center m-auto">
            <div className="services-flex">
              <img className="services-image" src={welding} />
              <ul className="services-ul">
                <li>Steel, Alum, SS, Ti</li>
                <li>Qualified WPS</li>
                <li>GMAC, GTAW, FCAW, +</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="services-card services-card3 homepage-card-text md:border-l-1 md:border-white lg:h-64">
          <h2 className="services-title">Sheet Metal Fabrication</h2>
          <div className="flex items-center m-auto">
            <div className="services-flex">
              <img className="services-image" src={sheetMetal} />
              <ul className="services-ul">
                <li>Laser, Punch, Bend</li>
                <li>Hardware Ins.</li>
                <li>Spot Weld</li>
                <li>Powder / Paint</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-card homepage-card-text md:border-l-1 md:border-white lg:h-64">
          <h2 className="services-title">Design & Assemble</h2>
          <div className="flex items-center m-auto">
            <div className="services-flex">
              <img className="services-image" src={design} />
              <ul className="services-ul">
                <li> Create Procedures</li>
                <li>Turnkey Manufacturing</li>
                <li>Full CAD/CAM Design & Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
