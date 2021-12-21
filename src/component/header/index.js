import react from "react";
import "./styles.scss";
import Logo from "./../../assets/logo.png";

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="company logo" data-test="logoImg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
