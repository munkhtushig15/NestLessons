import "../App.css";
import { Link } from "react-router-dom";
import Instant from "./Main";
// import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="headerContainer">
      <header>
        <img src={require("../images/teamLogo.png")} alt="logo" />
        <div className="linkContainer">
          <Link className="colorOfLinks" to="/products">
              Products
          </Link>
          <Link className="colorOfLinks" to="/services">
              Services
          </Link>
          <Link className="colorOfLinks" to="/contact">
              Contact
          </Link>
          <Link className="colorOfLinks" to="/login">
              Log in
          </Link>
          <Link className="spclOne" to="/getAccess">
            Get Access
          </Link>
        </div>
      </header>
        <Instant title="Instant collaborations for remote teams"
          text="All in one for your remote team chats, 
          collaboration and track projects"/>
    </div>
  );
};

export default Header;
