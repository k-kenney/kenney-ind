const HomepageCards = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 ">
      <div className="w-full">
        <button className="group homepage-card1 homepage-card-text lg:h-64 md:border-r-1 md:border-t-1">
          <div
            className="group group-hover:invisible transition duration-300 delay-150 hover:delay-300 cursor-pointer
"
          >
            <h2 className="homepage-card-h2">CNC Machining</h2>
          </div>

          <div className="hidden group-hover:block scale-in-center">
            <h2 className="homepage-card-h2-hover">
              <ul>
                <li>Over 50 CNCs</li>
                <li>Tolerances of .0001”</li>
                <li>1/8” up to 48” diam.</li>
              </ul>
            </h2>
          </div>
        </button>
        <button className="group homepage-card3 homepage-card-text lg:h-64 md:border-r-1">
          <div
            className="group group-hover:invisible transition duration-300 delay-150 hover:delay-300 cursor-pointer
"
          >
            <h2 className="homepage-card-h2">Welding</h2>
          </div>

          <div className="hidden group-hover:block scale-in-center">
            <h2 className="homepage-card-h2-hover">
              <ul>
                <li>Steel, Aluminum, Stainless Steel</li>
                <li>Qualified WPS</li>
                <li>GMAC, GTAW, FCAW, +</li>
              </ul>
            </h2>
          </div>
        </button>
      </div>
      <div className="w-full">
        <button className="group homepage-card2 homepage-card-text lg:h-64 md:border-t-1">
          <div
            className="group group-hover:invisible transition duration-300 delay-150 hover:delay-300 cursor-pointer
"
          >
            <h2 className="homepage-card-h2">sheet metal fabrication</h2>
          </div>

          <div className="hidden group-hover:block scale-in-center">
            <h2 className="homepage-card-h2-hover">
              <ul>
                <li>Laser, Punch, Bend</li>
                <li>Hardware Ins.</li>
                <li>Spot Weld</li>
                <li>Powder / Paint</li>
              </ul>
            </h2>
          </div>
        </button>
        <button className="group homepage-card4 homepage-card-text lg:h-64 md:border-b-1">
          <div className="group group-hover:invisible transition duration-300 delay-150 hover:delay-300 cursor-pointer
" >
            <h2 className="homepage-card-h2">Assembly</h2>
          </div>
 
          <div className="hidden group-hover:block scale-in-center">
            <h2 className="homepage-card-h2-hover">
              <ul>
                <li> Create Procedures</li>
                <li>Turnkey Manufacturing</li>
                <li>Full CAD/CAM Design & Support</li>
              </ul>
            </h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomepageCards;
