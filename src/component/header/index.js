import react from "react";
import "./styles.scss";
import Logo from "./../../assets/logo.png";

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="company logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
