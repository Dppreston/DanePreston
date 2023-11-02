import About from "./About";
import { Link, animateScroll } from "react-scroll";

function Arrow() {
  return (
    <>
      <Link
        to="about-scroll"
        spy={true}
        smooth={true}
        duration={800}
        delay={100}
        isDynamic={true}
      >
        <i className="fa-solid fa-chevron-down arrow"></i>
      </Link>
    </>
  );
}
export default Arrow;
