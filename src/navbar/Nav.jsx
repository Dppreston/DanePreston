import "../navbar/nav.css";
import logo from "../assets/dplogo.png";
import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <div className="nav-wrapper">
        <Link to="/" className="link">
          <div className="logo-cont">
            <img src={logo} alt="dplogo" className="logo" id="logo" />
          </div>
        </Link>
        <div className="link-cont">
          {/* <Link to="#" className="link">
            <button className="btn" id="about">
              about
            </button>
          </Link> */}
          <Link
            to="contact-scroll"
            spy={true}
            smooth={true}
            duration={800}
            delay={100}
            isDynamic={true}
          >
            <button className="btn" id="contact">
              reach out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Nav;
