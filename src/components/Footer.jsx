import altlogo from "../assets/dplogoalt.png";

const linkedIn = "https://www.linkedin.com/in/dane-preston-a34588133/";
const git = "https://github.com/Dppreston?tab=repositories";

function Footer() {
  const handleClick = (e) => {
    window.open(e.currentTarget.value);
  };
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-img-cont">
          <img src={altlogo} alt="" className="footer-logo" id="footer-logo" />
          <h3 className="h3">
            Thank you for visiting my site while I embark on this journey.
          </h3>
        </div>
        <div className="footer-link-cont">
          <button onClick={handleClick} className="btn" value={git}>
            <i className="fa-brands fa-github"></i>
          </button>
          <button onClick={handleClick} className="btn" value={linkedIn}>
            <i className="fa-brands fa-linkedin"></i>
          </button>
        </div>
        <div className="footer-copyright">
          <p className="p">
            <i className="fa-solid fa-copyright"></i> 2023 Dane Preston. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
