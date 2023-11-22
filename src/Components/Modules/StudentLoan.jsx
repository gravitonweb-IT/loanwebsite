import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import './Studenloan.css'
import Avatarimg1 from "../../assets/images/avatar/avatar-1.jpg";
import Avatarimg2 from "../../assets/images/avatar/avatar-2.jpg";
import Avatarimg3 from "../../assets/images/avatar/avatar-4.jpg"

const StudentLoan = () => {
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
            <ul className="controls " id="sliderFirstControls">
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
                  className="py-22 studentloan-buttom-one"
              
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Helping Student Build a Stronger Tomorrow
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white">
                            The low rate you need for the need you want! Call
                            <br /> (555) 123-4567
                          </p>
                          <a
                            href="loan-listing-image.html"
                            className="btn btn-primary "
                          >
                            Get started today
                          </a>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="py-22 studentloan-buttom-two"
                 
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-9 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Award winning Education loans{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white">
                            Award winning car loans with low fixed rates and{" "}
                            <br /> no ongoing fees.
                          </p>
                          <a
                            href="loan-listing-image.html"
                            className="btn btn-primary "
                          >
                            View products
                          </a>
                        </div>
                        {/* /.slider-captions */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="py-22 studentloan-buttom-three"
                 
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Education Loan Rate Low Of Interest.{" "}
                          </h1>
                          <p className=" d-none d-xl-block d-lg-block d-sm-block text-white">
                            Education Loan From Avanse At An Attractive Rate Of
                            Interest. <br /> Apply Now!
                          </p>
                          <a
                            href="loan-listing-image.html"
                            className="btn btn-primary"
                          >
                            View products
                          </a>
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
        <section className="py-lg-16 py-10 bg-white border-bottom">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-8 text-center">
                  {/* section title start*/}
                  <h1 className="mb-1">Features &amp; Benefits of Loans</h1>
                  <p className="lead">
                    Here is an exhaustive list of all the fees and charges to be
                    paid for the education loan.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-card-text text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3>High valueable loans</h3>
                    <p>
                      Max loan up to Rs. 10 lakh for studies in any university
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-arrow-clockwise text-primary"
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
                    <p>
                      Maximum tenure up to 10 years for loans up to Rs. 7.50
                      lakhs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-cup-straw text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" />
                    </svg>
                  </div>
                  <div>
                    <h3>100% Transparency</h3>
                    <p>
                      Donec accumsax tincidunt, ipsum nulla vulputro equcorper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-gear text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Quick and Easy Disbursals</h3>
                    <p>
                      Nulla vulputate elit, non rh liberoe qutpat lnd orper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-lock text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Secure your loan</h3>
                    <p>
                      Donec accumsax tincidunt, ipsum nulla vulputro equcorper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="mb-7">
                  <div className="icon-shape bg-light icon-xl rounded-circle mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      className="bi bi-percent text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Attractive Rates of Interest</h3>
                    <p>
                      Nulla vulputate elit, non rhoncus liber oequtpa tlndorper
                      nulla.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>About Education Loan</h1>
                  <p className="lead">
                    No matter how long the educational path is, ease it with
                    Borrow Education Loan. Borrow Bank Education Loan provides
                    you with quick and completely transparent loans to fuel your
                    future aspirations and dreams.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-3">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body">
                    <h3 className="mb-3">Eligibility Criteria</h3>
                    <ul className="list-unstyled  mb-0">
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Resident Of country
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Required age of 16 and 35
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Your post completion of Certifiace
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Write your eligibility criteria
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Write your eligibility criteria Content
                      </li>
                      <li className="mb-0">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Write your eligibility criteria
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-3">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body">
                    <h3 className="mb-3">Documentes needs</h3>
                    <ul className="list-unstyled  mb-0">
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Passport
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Voter ID card
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Driving license
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        PAN card
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Bank account statement
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Latest electricity bill
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Latest mobile/telephone bill
                      </li>
                      <li className="mb-1">
                        <i className="bi bi-check-circle me-2 text-success" />
                        Existing house lease agreement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-4 col-12">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body">
                    <h3 className="mb-3">Download Forms</h3>
                    <ul className="list-unstyled  mb-0">
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Education Loan Application form
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Education Loan Agreement
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Income Certificate Issuing Authority
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Download Form Link
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#!" className="text-inherit">
                          <i className="bi bi-file-pdf me-2 text-danger" />
                          Download Form Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10 bg-white border-bottom border-top">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Education Interest Rates &amp; Charges</h1>
                  <p className="lead">
                    Here is an exhaustive list of all the fees and charges to be
                    paid for the education loan. Sollicitudin um placerat
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 mb-3 mb-lg-0">
                <div className="card card-body mb-1 lh-1">
                  <h2 className="fw-bold mb-0">8.75%</h2>
                  <p className="mb-0 fs-6">Min apr</p>
                </div>
                <div className="card card-body mb-1 lh-1">
                  <h2 className="fw-bold mb-0">10.75%</h2>
                  <p className="mb-0 fs-6">Max apr</p>
                </div>
                <div className="card card-body mb-1 lh-1">
                  <h2 className="fw-bold mb-0">12.10%</h2>
                  <p className="mb-0 fs-6">Avg apr</p>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                <div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item active">
                      <div className="row">
                        <div className="col-lg-6">Description of Charges</div>
                        <div className="col-lg-6 ">Education Loan</div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-6">
                          Loan Processing Charges
                          <span className="text-danger">*</span>
                        </div>
                        <div className="col-lg-6 text-muted">
                          Maximum up to 1%
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-6">
                          Pre-payment charges
                          <span className="text-danger">*</span>
                        </div>
                        <div className="col-lg-6 text-muted">Nil</div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-6">No Due Certificate</div>
                        <div className="col-lg-6 text-muted">Nil</div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-6">Solvency Certificate</div>
                        <div className="col-lg-6 text-muted">Nil</div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-lg-6">
                          Penalty Interest on delayed / overdue EMI
                        </div>
                        <div className="col-lg-6 text-muted">
                          Write here your % of delayed payment
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p className="mb-0 fs-5">
                    For further details, please <a href="#!">Click here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-lg-16 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1>Some of our Awesome Testimonials</h1>
                  <p>
                    {" "}
                    You won’t be the only one lorem ipsu mauris diam mattises.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-6 mb-lg-0  ">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold">
                      {" "}
                      “I loved the customer service you guys provided me. That
                      was very nice and patient with questions I had. I would
                      really like definitely come back here”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div>
                    {" "}
                    <img
                      src={Avatarimg1}
                      alt="Borrow - Loan Company Website Template"
                      className="avatar avatar-md rounded-3"
                    />
                  </div>
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 ">Donny J. Griffin</h4>
                    <span className="fs-6">Personal Loan</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-6 mb-lg-0  ">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold">
                      {" "}
                      “I had a good experience with Insight Loan Services. I am
                      thankful to insight for the help you guys gave me. My loan
                      was easy and fast. thank you Insigtht”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div>
                    {" "}
                    <img
                      src={Avatarimg2}
                      alt="Borrow - Loan Company Website Template"
                      className="avatar avatar-md rounded-3"
                    />
                  </div>
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 ">Mary O. Randle</h4>
                    <span className="fs-6">Education Loan</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 mb-6 mb-lg-0  ">
                <div className="card border-0 smooth-shadow-sm">
                  <div className="card-body p-5">
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold">
                      {" "}
                      “We came out of their offices very happy with their
                      service. They treated us very kind. Definite will come
                      back. The waiting time was very appropriate.”
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div>
                    {" "}
                    <img
                      src={Avatarimg3}
                      alt="Borrow - Loan Company Website Template"
                      className="avatar avatar-md rounded-3"
                    />
                  </div>
                  <div className="ms-3 lh-1">
                    <h4 className="mb-0 ">Lindo E. Olson</h4>
                    <span className="fs-6">Car Loan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="py-lg-16 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="mb-10 text-center ">
                  {/* section title start*/}
                  <h1 className="mb-1">Frequently Asked Questions</h1>
                  <p className="mb-0">
                    {" "}
                    Cras sollicitudin neque eget bibendum placerat. Praesent
                    dignissim id ligula sed ornare. Duis pretium purus vitae
                    quam aliquet tempus.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                <div className="accordion" id="faqExample">
                  <div className="card mb-2">
                    <div
                      className="card-header rounded-3 border-bottom-0"
                      id="faqOne"
                    >
                      <h4 className="mb-0">
                        <a
                          href="#!"
                          className="text-inherit"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseOne"
                          aria-expanded="true"
                          aria-controls="faqcollapseOne"
                        >
                          <i className="fa fa-plus-circle me-2" />
                          How much can I borrow?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="faqcollapseOne"
                      className="collapse show"
                      aria-labelledby="faqOne"
                      data-bs-parent="#faqExample"
                    >
                      <div className="card-body border-top">
                        <p>
                          Cliche reprehenderit, enim eiusmod high life accusamus
                          terry richardson ad squid. 3 wolf moon officia aute,
                          non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </p>
                        <p>
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div
                      className="card-header rounded-3 border-bottom-0"
                      id="faqTwo"
                    >
                      <h4 className="mb-0">
                        <a
                          href="#!"
                          className="collapsed text-inherit"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseTwo"
                          aria-expanded="false"
                          aria-controls="faqcollapseTwo"
                        >
                          <i className="fa fa-plus-circle me-2" />
                          Can I pay off my loan early?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="faqcollapseTwo"
                      className="collapse"
                      aria-labelledby="faqTwo"
                      data-bs-parent="#faqExample"
                    >
                      <div className="card-body border-top">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div
                      className="card-header rounded-3 border-bottom-0"
                      id="faqThree"
                    >
                      <h4 className="mb-0">
                        <a
                          href="#!"
                          className="collapsed text-inherit"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseThree"
                          aria-expanded="false"
                          aria-controls="faqcollapseThree"
                        >
                          <i className="fa fa-plus-circle me-2" />
                          Do you offering refinancing ?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="faqcollapseThree"
                      className="collapse"
                      aria-labelledby="faqThree"
                      data-bs-parent="#faqExample"
                    >
                      <div className="card-body border-top">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header rounded-3 border-bottom-0"
                      id="faqfour"
                    >
                      <h4 className="mb-0">
                        <a
                          href="#!"
                          className="collapsed text-inherit"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapsefour"
                          aria-expanded="false"
                          aria-controls="faqcollapsefour"
                        >
                          <i className="fa fa-plus-circle me-2" />
                          When should i apply?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="faqcollapsefour"
                      className="collapse"
                      aria-labelledby="faqfour"
                      data-bs-parent="#faqExample"
                    >
                      <div className="card-body border-top">
                        Ad vegan excepteur butcher vice lomo. Leggings occaecat
                        craft beer farm-to-table, raw denim aesthetic synth
                        nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dual-gradient py-lg-16 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1 className="text-white mb-1">
                    Just take 2 minute for your loan
                  </h1>
                  <p className="text-white-50 lead">
                    Fill up the form below and loan executive would get in touch
                    with you
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="offset-xl-2 col-xl-8  col-md-12 col-12">
                <div className="students-request-form">
                  <form
                    method="post"
                    action="https://easetemplate.com/borrow/pages/get-quote.php"
                  >
                    <div className="row g-2">
                      {/* Text input*/}
                      <div className="mb-3 col-md-6 col-12">
                        <label className="form-label sr-only" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Name"
                          className="form-control border-0 "
                          required
                        />
                      </div>
                      {/* Text input*/}
                      <div className="mb-3 col-md-6 col-12">
                        <label className="form-label sr-only" htmlFor="email">
                          E-Mail
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="E-mail"
                          className="form-control border-0 "
                          required
                        />
                      </div>
                      {/* Text input*/}
                      <div className="mb-3 col-md-6 col-12">
                        <label className="form-label sr-only" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Phone"
                          className="form-control border-0 "
                          required
                        />
                      </div>
                      {/* Select Basic */}
                      <div className="mb-3 col-md-6 col-12">
                        <label className="form-label sr-only" htmlFor="city">
                          City
                        </label>
                        <select
                          id="city"
                          name="city"
                          className="form-select border-0 "
                        >
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Surat">Surat</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Bhavnagar">Bhavnagar</option>
                        </select>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                        <div className="steps-slider" />
                        <input
                          type="text"
                          className="form-control mt-3 input-with-keypress-0"
                        />
                      </div>
                      {/* Button */}
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
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
      </main>
    </>
  );
};

export default StudentLoan;
