import React, { useEffect } from "react";
import './Businessloan.css';
import { tns } from "tiny-slider/src/tiny-slider";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Logoimg1 from "../../assets/images/brand/company-logo/lender-logo-1.png";
import Logoimg2 from "../../assets/images/brand/company-logo/lender-logo-2.png";
import Logoimg3 from "../../assets/images/brand/company-logo/lender-logo-3.png";
import Logoimg4 from "../../assets/images/brand/company-logo/lender-logo-4.png";

const BusinessLoan = () => {
  useEffect(() => {
    // Initialize the Tiny Slider
    const slider = tns({
      container: ".sliderFirst",
      items: 1,
      controlsContainer: "#sliderFirstControls",
      prevButton: ".prev",
      nextButton: ".next",
    });
    document.querySelector('.tns-nav').style.display = 'none';
    // Clean up on component unmount
    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
      <main>
        <section>
          <div className="position-relative">
          <ul className="controls" id="sliderFirstControls">
              <li className="prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </li>

              <li className="next">
                <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </ul>
            <div className="sliderFirst">

              <div className="item">

                <div
                  className="py-22 businessloan-banner-one"
                  // style={{
                  //   background:
                  //     "url(../assets/images/slider/business-slider-1.jpg)no-repeat",
                  //   "background-size": "cover",
                  // }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Hassle free Small Business loan up to $2000.00
                          </h1>
                          <p className="d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                            Education Loan From Avanse At An Attractive Rate Of
                            Interest. Apply Now!
                          </p>
                          <a
                            href="loan-listing-image.html"
                            className="btn btn-primary"
                          >
                            View products
                          </a>
                          <span className="badge bg-success ms-md-3">
                            Rate of interest: Up to 16% - 32%
                          </span>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div
                  className="py-22 businessloan-banner-two "
                  // style={{
                  //   background:
                  //     "url(../assets/images/slider/business-slider-2.jpg)no-repeat",
                  //   "background-size": "cover",
                  // }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            The key to business growth with Borrow Theme{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                            The low rate you need for the need you want! Call
                            <strong>(555) 123-4567</strong>
                          </p>
                          <a
                            href="loan-listing-image.html"
                            className="btn btn-primary "
                          >
                            Get started today
                          </a>
                          <span className="badge bg-success ms-md-3">
                            Rate of interest: Up to 16% - 32%
                          </span>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div
                  className="py-22 businessloan-banner-three"
                  // style={{
                  //   background:
                  //     "url(../assets/images/slider/business-slider-3.jpg)no-repeat",
                  //   "background-size": "cover",
                  // }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Looking to set up or expand your business?{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white mb-4">
                            {" "}
                            Award winning car loans with low fixed rates and no
                            ongoing fees.
                          </p>
                          <a
                            href="loan-listing-image.html"
                            className="btn btn-primary "
                          >
                            View Products
                          </a>
                          <span className="badge bg-success ms-md-3">
                            Rate of interest: Up to 16% - 32%
                          </span>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
        <div className="py-2 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" />{" "}
                  Approval within 24 hours{" "}
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" />{" "}
                  Nominal interest rates
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" /> No
                  guarantors{" "}
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-12 ">
                <p className="mb-3 mb-lg-0 fw-semi-bold text-dark text-xl-center d-lg-flex d-xl-block">
                  <i className="bi bi-check-circle-fill text-success me-2" />{" "}
                  Minimum documentation
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-lg-16 py-10 bg-white border-bottom border-top ">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Features of business loan</h1>
                  <p className="lead">
                    Here is an exhaustive list of all the fees and charges to be
                    paid for the education loan.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card text-center mb-4 mb-lg-0">
                  <div className="card-body py-6">
                    <div className="icon-shape icon-xxxl bg-light-primary rounded-circle mb-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-lightning-fill text-dark-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Quick approval </h3>
                      <p className="mb-0">
                        Duis massa duilobortis vitae elitet acurusa felis sed
                        arcu sagittis commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card text-center mb-4 mb-lg-0">
                  <div className="card-body py-6">
                    <div className="icon-shape icon-xxxl bg-light-success rounded-circle mb-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-arrow-clockwise text-dark-success"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                        />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Easy Loan Repayment</h3>
                      <p className="mb-0">
                        Pelle ntesque habitant morbi trist ique ses uada fa mes
                        lacust lorem ispum feugiat metus.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="card text-center mb-4 mb-lg-0">
                  <div className="card-body py-6">
                    <div className="icon-shape icon-xxxl bg-light-warning rounded-circle mb-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-cup-straw text-dark-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" />
                      </svg>
                    </div>
                    <div>
                      <h3>100% Transparency</h3>
                      <p className="mb-0">
                        Aenean quis neque ac enim ferm entum feugiaro masla ndit
                        tellus non cursus varius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-md-2 col-md-8 offset-md-2 col-md-8 col-sm-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Our Business Loan Products</h1>
                  <p className="mb-0 lead">
                    If you know which productyou would like to apply for, choose
                    one from below:
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-7">
                    <div className="mb-3">
                      <i className="flaticon-get-money fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Fast Business Cash</h3>
                      <p className="mb-0">
                        Donec magna augue, mollis ac eros id, viverra facilisis
                        lectus. Aliquam erat volutpat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-7">
                    <div className="mb-3">
                      <i className="flaticon-time-is-money  fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Flexible Credit Line</h3>
                      <p className="mb-0">
                        {" "}
                        Quisque eget bibendum ipsum. Mauris eget tincidunt
                        sapien. In ut mollis metus, id dignissim ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-7">
                    <div className="mb-3">
                      <i className="flaticon-rich  fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Unsecured Term Loan</h3>
                      <p className="mb-0">
                        Mauris facilisis id est vel lobortis. Phasellus interdum
                        feugiat purus eget condimentum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-7">
                    <div className="mb-3">
                      <i className="flaticon-store-1  fs-1 text-primary" />
                    </div>
                    <div className>
                      <h3>Merchant Funding Loan</h3>
                      <p className="mb-0">
                        Donec ullamcorper magna non orci nean lectus nunlementum
                        lorem mattis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center mb-4">
                  <div className="card-body px-6 py-7">
                    <div className="mb-3">
                      <i className="flaticon-stand  fs-1 text-primary" />
                    </div>
                    <div className="loan-products-content">
                      <h3>Small Business owner</h3>
                      <p className="mb-0">
                        Quisque elementum elit tortor, at blandit ante dignissim
                        ornare rhoncus nibh in laoreet.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="card smooth-shadow-sm border-0 text-center">
                  <div className="card-body px-6 py-7">
                    <div className="mb-3">
                      <i className="flaticon-safebox-1  fs-1 text-primary" />
                    </div>
                    <div className="loan-products-content">
                      <h3>Secured Business Loan </h3>
                      <p className="mb-0">
                        Blandit ante dignissim a. Aenean ornare uisque elementum
                        elit brhoncus nibh in laoreet.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10 bg-white border-bottom border-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-8 text-center">
                  {/* section title start*/}
                  <h1>About Business Loan and How does it work</h1>
                  <p className="lead">
                    Cras nunc leo bibendum at sapien nec, tempus aliquet turpis.{" "}
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-6 mb-6 mb-lg-0">
                <p className="lead">
                  Donec ullamcorper magna non orci scele risque consect enean
                  ornare lectus nunc, elementum fermentum erat mattis id.
                </p>
                <p>
                  Mauris fermentum ipsum in dolor sollicitudin, scelerisque
                  placeed. Aliquam feugiat at odio at consectetur.
                </p>
                <p>
                  In nec lacinia nisi. Cras at orci suscipit, sodales libero
                  vitae, rhoncus lectus. Quisque congue leo pharetra sapien
                  pellentesque varius.
                </p>
                <a href="#!" className="btn btn-primary mb-3 mb-lg-0">
                  Frequently Asked Questions
                </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-6">
                <div className="section-about-video">
                  <div
                    className="about-img"
                    style={{
                      background:
                        "url(../assets/images/background/business-loan-about.jpg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      "min-height": "335px",
                      display: "flex",
                      "-webkit-box-pack": "center",
                      "-webkit-justify-content": "center",
                      "-ms-flex-pack": "center",
                      "justify-content": "center",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <a
                        className="popup-youtube text-decoration-none"
                        href="https://www.youtube.com/watch?v=JRzWRZahOVU"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={48}
                          height={48}
                          fill="currentColor"
                          className="bi bi-play-circle text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-14 py-10 bg-dual-gradient">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12">
                <div className="mb-6 mb-lg-0">
                  {/* section title start*/}
                  <h1 className="text-white mb-3">
                    Get Started Simple &amp; Securely
                  </h1>
                  <p className="text-white lead">
                    Donec ullamcorper magna non orci scelerisque consectetur.
                    Aenean ornare lectus nunc, elementum fermentum erat mattis
                    id.
                  </p>
                  <p className="text-white mb-4">
                    Aenean ornare lectus nunc, elementum fermentum erat mattis
                    id. Donec ullamcorper magna non orci scelerisque
                    consectetur.{" "}
                  </p>
                  <h3 className="text-white">Just 3 step away</h3>
                  <ul className="list-unstyled mb-0 text-white">
                    <li>1. Fill the online form. Apply Now</li>
                    <li>
                      2. Fill in the mandatory details, &amp; click Submit
                    </li>
                    <li>3. Our representative will get in touch with you</li>
                  </ul>
                </div>
                {/* /.section title start*/}
              </div>
              <div className="offset-xl-1 col-lg-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
                <div className="card card-body border-0">
                  <h3 className="mb-3">Let us help your business grow!</h3>
                  <form
                    method="post"
                    action="https://easetemplate.com/borrow/pages/get-quote.php"
                  >
                    <div className="row">
                      {/* Text input*/}
                      <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <label className="form-label sr-only" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          required
                        />
                      </div>
                      {/* Text input*/}
                      <div className="mb-2  col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <label className="form-label sr-only" htmlFor="email">
                          E-Mail
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="E-mail"
                          className="form-control"
                          required
                        />
                      </div>
                      {/* Text input*/}
                      <div className="mb-2  col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <label className="form-label sr-only" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                          required
                        />
                      </div>
                      {/* Select Basic */}
                      <div className="mb-3  col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <label className="form-label sr-only" htmlFor="city">
                          City
                        </label>
                        <select id="city" name="city" className="form-select">
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Surat">Surat</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Bhavnagar">Bhavnagar</option>
                        </select>
                      </div>
                      <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                        <div className="steps-slider" />
                        <input
                          type="text"
                          className="form-control mt-3 input-with-keypress-0"
                        />
                      </div>
                      {/* Button */}
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Send A Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 col-sm-12 col-12">
                <div className="mb-8 text-center px-lg-18">
                  {/* section title start*/}
                  <h1>Meet our lenders</h1>
                  <p className="lead">
                    Compare 60+ business funding options &amp; check eligibility
                    saving you time/ money
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg1}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                    src={Logoimg2}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg3}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg4}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg1}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="card mb-4 mb-lg-0 d-block text-center shadow border-0">
                  <div className="card-body">
                    <img
                      src={Logoimg3}
                      alt="Borrow - Loan Company Responsive Website Templates"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BusinessLoan;
