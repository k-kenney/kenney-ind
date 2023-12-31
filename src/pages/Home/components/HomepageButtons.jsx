import { Link } from "react-router-dom";

const HomepageButtons = ({ mobileMenu }) => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={`h-40 absolute m-auto top-80 bottom-0 right-0 left-0 flex items-center justify-center mx-auto pt-3 gap-8 xl:gap-12 md:top-84 xl:top-96 lg:pt-5 sm:right-1/3  ${!mobileMenu && "z-50"}`}>
        <Link to="/about">
          <button className="homepage-btn">Learn more</button>
        </Link>
        {/* <Link to="/contact"> */}
        <button onClick={scrollToContact} className="homepage-btn">
          Contact us
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default HomepageButtons;
