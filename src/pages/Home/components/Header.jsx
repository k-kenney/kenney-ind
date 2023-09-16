import heroImage from "../../../assets/img/dallasBridge.png";

const Header = () => {
  return (
    <div className="h-screen">
      
      <img
        src={heroImage}
        alt="Hero Image"
        className="w-full h-full object-cover object-left relative top-0 left-0 z-0"
      />
      
    </div>
  );
};

export default Header;
