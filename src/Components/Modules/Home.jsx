import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Home.css";
import Logoimg from "../../assets/images/brand/logo/logo.svg";
import Mortgageimg from "../../assets/images/svg/mortgage.svg";
import Loanimg from "../../assets/images/svg/loan.svg";
import Carimg from "../../assets/images/svg/car.svg";
import Creditcard from "../../assets/images/svg/credit-card.svg";
import Loanimg2 from "../../assets/images/svg/loan.svg";
import Mortgageimg2 from "../../assets/images/svg/mortgage.svg";
import Piggyimg from "../../assets/images/svg/piggy-bank.svg";
import Avatarimg from "../../assets/images/avatar/avatar-1.jpg";
import Avatarimg2 from "../../assets/images/avatar/avatar-2.jpg";
import Avatarimg3 from "../../assets/images/avatar/avatar-4.jpg";
import Logoimg2 from "../../assets/images/brand/company-logo/logo-1.jpg";
import Logoimg3 from "../../assets/images/brand/company-logo/logo-2.jpg";
import Logoimg4 from "../../assets/images/brand/company-logo/logo-3.jpg";
import Logoimg5 from "../../assets/images/brand/company-logo/logo-4.jpg";
import Logoimg6 from "../../assets/images/brand/company-logo/logo-5.jpg";
import Blogimg1 from "../../assets/images/blog/blog-img.jpg";
import Blogimg2 from "../../assets/images/blog/blog-img-1.jpg";
import Blogimg3 from "../../assets/images/blog/blog-img-2.jpg";
import Ftlogoimg from "../../assets/images/brand/company-logo/ft-logo.png";


const Home = () => {
  return (
    <>
      <div className="bg-primary py-1">
        <div className="container px-md-0">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-5 col-12">
              <div className="fs-6 text-uppercase text-white fw-semi-bold">
                Borrow Loan Website Templates{"            "}
              </div>
            </div>

            <div className="col-xl-8 col-lg-7 col-md-7 col-12 text-md-end">
              <div className="fs-6 text-uppercase text-white fw-semi-bold">
                {"              "}
                <a className="text-white" href="#!">
                  View Locations
                </a>
                <span className="ms-2 ms-md-4">
                  <a className="text-white" href="#!">
                    +1800-123-4567
                  </a>
                </span>
                {"              "}
                <span className="ms-2 ms-md-4">
                  <a className="text-white" href="#!">
                    EMI calculator
                  </a>
                </span>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </div>
        {"    "}
      </div>

      <nav className="navbar navbar-expand-lg py-3 navbar-default">
        {"      "}
        <div className="container px-0">
          {"        "}
          <a className="navbar-brand" href="index-2.html">
            <img alt="" src={Logoimg} />
          </a>

          <button
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler collapsed"
            data-bs-target="#navbar-default"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="icon-bar top-bar mt-0" />

            <span className="icon-bar middle-bar" />

            <span className="icon-bar bottom-bar" />
            {"        "}
          </button>

          <div className="collapse navbar-collapse" id="navbar-default">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  href="#"
                  id="navbarHome"
                >
                  Home  <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {"              "}
                <ul
                  aria-labelledby="navbarHome"
                  className="dropdown-menu dropdown-menu-arrow dropdown-menu-lg"
                >
                  <li>
                    {"                  "}
                    <div className="row g-0">
                      {"                    "}
                      <div className="col-12 col-lg-6">
                        {"                                            "}
                        <h6 className="dropdown-header text-primary">
                          Homepage
                        </h6>
                        {"                                            "}
                        <a
                          className="dropdown-item"
                          href="pages/home-modern.html"
                        >
                          {"                        "}Home Modern
                          {"                        "}
                          <span className="badge bg-primary ms-1">New</span>
                          {"                      "}
                        </a>
                        {"                                            "}
                        <a className="dropdown-item" href="index-2.html">
                          {"                        "}Homepage
                          {"                      "}
                        </a>
                        {"                      "}
                        <a className="dropdown-item" href="pages/index-1.html">
                          {"                        "}Homepage 1
                          {"                      "}
                        </a>
                        {"                      "}
                        <a className="dropdown-item" href="pages/index-2.html">
                          {"                        "}Homepage 2
                          {"                      "}
                        </a>
                        {"                      "}
                        <a className="dropdown-item" href="pages/index-3.html">
                          {"                        "}Homepage 3
                          {"                      "}
                        </a>
                        {"                      "}
                        <h6 className="dropdown-header text-primary mt-2">
                          {"                        "}Advance Pages
                          {"                      "}
                        </h6>
                        {"                                            "}
                        <a
                          className="dropdown-item"
                          href="pages/index-4-students-loan.html"
                        >
                          {"                        "}Student Loan
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/index-5-business-loan.html"
                        >
                          {"                        "}Business Loan
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item mb-lg-0"
                          href="pages/index-6.html"
                        >
                          {"                        "}Home Tabbed
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item mb-lg-0"
                          href="pages/index-7-borrow-bank.html"
                        >
                          {"                        "}Bank Homepage
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item mb-lg-0"
                          href="pages/index-8-compare-shop.html"
                        >
                          {"                        "}Compare & Shop
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item mb-lg-0"
                          href="pages/index-forex.html"
                        >
                          {"                        "}Forex
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/index-creditcards.html"
                        >
                          {"                        "}Credit Card
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/index-creditscore.html"
                        >
                          {"                        "}Credit Score
                          {"                      "}
                        </a>
                        {"                    "}
                      </div>
                      {"                    "}
                      <div className="col-12 col-lg-6">
                        {"                                            "}
                        <h6 className="dropdown-header text-primary">
                          {"                        "}Landing pages
                          {"                      "}
                        </h6>
                        {"                                            "}
                        <a
                          className="dropdown-item"
                          href="pages/landing-page-car-loan.html"
                        >
                          {"                        "}Car Loan
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/landing-page-home-loan.html"
                        >
                          {"                        "}Home Loan
                          {"                      "}
                        </a>
                        {"                                            "}
                        <a
                          className="dropdown-item"
                          href="pages/landing-page-refinancing.html"
                        >
                          {"                        "}Refinance Loan
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/landing-page-lead-generator.html"
                        >
                          {"                        "}Lead Generator
                          {"                      "}
                        </a>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/landing-page-card.html"
                        >
                          {"                        "}Card Landing Page
                          {"                      "}
                        </a>
                        {"                                          "}
                      </div>
                      {"                  "}
                    </div>
                  </li>
                  {"              "}
                </ul>
              </li>

              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="#"
                  id="navbarProducts"
                >
                  Products   <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {"              "}
                <ul
                  aria-labelledby="navbarProducts"
                  className="dropdown-menu dropdown-menu-arrow"
                >
                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Loans{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/loan-listing-image.html"
                        >
                          {"                        "}Loan List Image
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/loan-listing-icon.html"
                        >
                          {"                        "}Loan List Icon
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a className="dropdown-item" href="pages/car-loan.html">
                          {"                        "}Car Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/home-loan.html"
                        >
                          {"                        "}Home Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/personal-loan.html"
                        >
                          {"                        "}Personal Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/education-loan.html"
                        >
                          {"                        "}Education Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Credit Card{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/credit-card-listing.html"
                        >
                          {"                        "}Credit Card List
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/credit-card-single.html"
                        >
                          {"                        "}Credit Card Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>
                  {"              "}
                </ul>
                {"              "}
                <ul
                  aria-labelledby="navbarProducts"
                  className="dropdown-menu dropdown-menu-arrow"
                >
                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Loans{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/loan-listing-image.html"
                        >
                          {"                        "}Loan List Image
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/loan-listing-icon.html"
                        >
                          {"                        "}Loan List Icon
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a className="dropdown-item" href="pages/car-loan.html">
                          {"                        "}Car Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/home-loan.html"
                        >
                          {"                        "}Home Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/personal-loan.html"
                        >
                          {"                        "}Personal Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/education-loan.html"
                        >
                          {"                        "}Education Loan Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Credit Card{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/credit-card-listing.html"
                        >
                          {"                        "}List
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/credit-card-single.html"
                        >
                          {"                        "}Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Landers{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/lender-listing.html"
                        >
                          {"                        "}List
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/lender-single.html"
                        >
                          {"                        "}Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Bank Account{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/personal-bank-account.html"
                        >
                          {"                        "}Account
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/personal-bank-account-list.html"
                        >
                          {"                        "}Account List
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/personal-bank-account-single.html"
                        >
                          {"                        "}Account Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Compare Page{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/compare-credit-card.html"
                        >
                          {"                        "}Compare Credit Card
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/compare-personal-loan.html"
                        >
                          {"                        "}Compare Personal
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/compare-student-loan.html"
                        >
                          {"                        "}Compare Student Loan
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/compare-loan.html"
                        >
                          {"                        "}Compare Loan
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Forex Page{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/forex-list.html"
                        >
                          {"                        "}Forex List
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/forex-list-single.html"
                        >
                          {"                        "}Forex Single
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li>
                    {"                  "}
                    <a
                      className="dropdown-item"
                      href="pages/loan-calculator.html"
                    >
                      {"                    "}Loan Calculator
                      {"                  "}
                    </a>
                  </li>

                  <li>
                    {"                  "}
                    <a
                      className="dropdown-item"
                      href="pages/loan-eligibility.html"
                    >
                      {"                    "}Eligibility Calculator
                      {"                  "}
                    </a>
                  </li>
                  {"              "}
                </ul>
              </li>

              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="#"
                  id="navbarBlog"
                  role="button"
                >
                  Blog <FontAwesomeIcon icon={faChevronDown} /> 
                </a>
                {"              "}
                <div aria-labelledby="navbarBlog" className="dropdown-menu">
                  <a className="dropdown-item" href="pages/blog-listing.html">
                    Blog Listing
                  </a>

                  <a
                    className="dropdown-item"
                    href="pages/blog-two-column.html"
                  >
                    Two Column
                  </a>

                  <a
                    className="dropdown-item"
                    href="pages/blog-three-column.html"
                  >
                    Three Column
                  </a>

                  <a className="dropdown-item" href="pages/blog-single.html">
                    Blog Single
                  </a>
                  {"              "}
                </div>
              </li>

              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="#"
                  id="navbarFeatures"
                  role="button"
                >
                  Features <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {"              "}
                <ul aria-labelledby="navbarFeatures" className="dropdown-menu">
                  <li>
                    {"                  "}
                    <a className="dropdown-item" href="pages/about.html">
                      About Us
                    </a>
                  </li>

                  <li>
                    {"                  "}
                    <a className="dropdown-item" href="pages/team.html">
                      Team
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="pages/faq.html">
                      FAQ
                    </a>
                  </li>

                  <li>
                    {"                  "}
                    <a className="dropdown-item" href="pages/error.html">
                      404 error
                    </a>
                  </li>

                  <li className="dropdown-submenu dropstart-lg">
                    {"                  "}
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      {"                    "}Gallery{"                  "}
                    </a>
                    {"                  "}
                    <ul className="dropdown-menu">
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/gallery-filter-2.html"
                        >
                          {"                        "}Two Column
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/gallery-filter-3.html"
                        >
                          {"                        "}Three Column
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/gallery-masonry.html"
                        >
                          {"                        "}Masonry
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                    "}
                      <li>
                        {"                      "}
                        <a
                          className="dropdown-item"
                          href="pages/gallery-zoom.html"
                        >
                          {"                        "}Zoom
                          {"                      "}
                        </a>
                        {"                    "}
                      </li>
                      {"                  "}
                    </ul>
                  </li>

                  <li>
                    {"                  "}
                    <a className="dropdown-item" href="pages/contact-us.html">
                      Contact{"                  "}
                    </a>
                  </li>
                  {"              "}
                </ul>
              </li>

              <li className="nav-item">
                {"              "}
                <a className="nav-link" href="docs/index.html">
                  {" "}
                  Docs{" "}
                </a>
              </li>
            </ul>

            <div className="ms-lg-3 mt-3 d-grid mt-lg-0">
              <a
                className="btn btn-primary btn-sm"
                href="https://1.envato.market/xJB55"
              >
                Buy Now
              </a>
            </div>
            {"        "}
          </div>
          {"      "}
        </div>
        {"    "}
      </nav>

      <main>
        {"      "}
        <section>
          {"        "}
          <div className="position-relative">
            <ul className="controls" id="sliderFirstControls">
              <li className="prev">
                {"              "}
                <i className="fas fa-angle-left" />
              </li>

              <li className="next">
                {"              "}
                <i className="fas fa-angle-right" />
              </li>
            </ul>

            <div className="sliderFirst">
              <div className="item">
                {"              "}
                <div
                  className="py-20 home-banner-one"

                  
                   
                >
                  <div className="container">
                    {"                  "}
                    <div className="row">
                      {"                    "}
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        {"                      "}
                        <div>
                          {"                                                "}
                          <h1 className="display-3 text-white fw-bold mb-3">
                            {"                          "}Personal Loan to Suit
                            Your Needs.{"                        "}
                          </h1>
                          {"                        "}
                          <p className="text-white d-none d-xl-block d-lg-block d-sm-block">
                            {"                          "}The low rate you need
                            for the need you want! Call
                            {"                          "}
                            <br />
                            {"                          "}
                            <strong>(555) 123-4567</strong>
                            {"                        "}
                          </p>
                          {"                        "}
                          <a className="btn btn-primary" href="#!">
                            Loan Products
                          </a>
                          {"                      "}
                        </div>
                        {"                                          "}
                      </div>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="item">
                {"              "}
                <div
                  className="py-20 home-banner-two"
                
                >
                  <div className="container">
                    {"                  "}
                    <div className="row">
                      {"                    "}
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        {"                      "}
                        <div>
                          {"                                                "}
                          <h1 className="display-3 text-white fw-bold mb-3">
                            {"                          "}Lowest Car Loan Rate
                            {"                          "}
                            <strong className="text-warning">9.60%</strong>
                            {"                        "}
                          </h1>
                          {"                        "}
                          <p className="text-white d-none d-xl-block d-lg-block d-sm-block">
                            {"                          "}We provide an
                            excellent service Loan company. Lorem ipsum simple
                            dummy content goes here.{"                        "}
                          </p>
                          {"                        "}
                          <a className="btn btn-primary" href="#!">
                            Check eligibility
                          </a>
                          {"                      "}
                        </div>
                        {"                                          "}
                      </div>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="item">
                {"              "}
                <div
                  className="py-20 home-banner-three"
                
                >
                  <div className="container">
                    {"                  "}
                    <div className="row">
                      {"                    "}
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        {"                      "}
                        <div>
                          {"                                                "}
                          <h1 className="display-3 text-white fw-bold mb-3">
                            {"                          "}Loan with Great Rates.
                            <strong className="text-warning">11.00%</strong>
                            {"                        "}
                          </h1>
                          {"                        "}
                          <p className="text-white d-none d-xl-block d-lg-block d-sm-block">
                            {"                          "}We provide an
                            excellent service for all types of loans in <br />
                            {"                          "}ahmedabad and offer
                            service, advice and direction.
                            {"                        "}
                          </p>
                          {"                        "}
                          <a className="btn btn-primary" href="#!">
                            View Products
                          </a>
                          {"                      "}
                        </div>
                        {"                                          "}
                      </div>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="bg-white smooth-shadow-sm">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                {"              "}
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Mortgageimg}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    {"                  "}
                    <h2 className="mb-0 fw-bold">3.74%</h2>
                    {"                  "}
                    <p className="mb-0">Home Loans</p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
                {"              "}
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Loanimg}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    {"                  "}
                    <h2 className="mb-0 fw-bold">8.96%</h2>
                    {"                  "}
                    <p className="mb-0">Personal Loans</p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
                {"              "}
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Carimg}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    {"                  "}
                    <h2 className="mb-0 fw-bold">6.70%</h2>
                    {"                  "}
                    <p className="mb-0">Car Loans</p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-6 border-start-lg">
                {"              "}
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="icon-svg-1x"
                      src={Creditcard}
                    />
                  </div>

                  <div className="ms-4 lh-1">
                    {"                  "}
                    <h2 className="mb-0 fw-bold">9.00%</h2>
                    {"                  "}
                    <p className="mb-0">Credit card</p>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="py-lg-16 py-10">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-8 text-center">
                  {"                                "}
                  <h1 className="mb-3">Find Loan Products We Offers</h1>

                  <p className="lead px-md-8">
                    {"                  "}We will match you with a loan program
                    that meet your financial need. In short term liquidity, by
                    striving to make funds available to them
                    {"                  "}
                    <strong>within 24 hours of application.</strong>
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="position-relative">
              <ul
                className="controls controls-bottom"
                id="sliderSecondControls"
              >
                {"              "}
                <li className="prev">
                  <i className="fas fa-angle-left" />
                  {"              "}
                </li>
                {"              "}
                <li className="next">
                  <i className="fas fa-angle-right" />
                  {"              "}
                </li>
              </ul>

              <div className="sliderSecond">
                {"              "}
                <div className="item">
                  <div className="card smooth-shadow-sm border-0 m-2">
                    {"                  "}
                    <div className="card-body p-5">
                      {"                    "}
                      <div className="mb-5">
                        {"                      "}
                        <img
                          alt="Borrow - Loan Company Website Template"
                          className="icon-xxl"
                          src={Loanimg2}
                        />
                        {"                    "}
                      </div>
                      {"                    "}
                      <h3>
                        <a className="text-inherit" href="#!">
                          Personal Loan
                        </a>
                      </h3>
                      {"                    "}
                      <p>
                        {"                      "}Lorem ipsum dolor sit
                        ameectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor.{"                    "}
                      </p>
                      {"                    "}
                      <a
                        className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                        href="#!"
                      >
                        Read More
                      </a>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="item">
                  <div className="card smooth-shadow-sm border-0 m-2">
                    {"                  "}
                    <div className="card-body p-5">
                      {"                    "}
                      <div className="mb-5">
                        {"                      "}
                        <img
                          alt="Borrow - Loan Company Website Template"
                          className="icon-xxl"
                          src={Mortgageimg2}
                        />
                        {"                    "}
                      </div>
                      {"                    "}
                      <h3>
                        <a className="text-inherit" href="#!">
                          Home Loan
                        </a>
                      </h3>
                      {"                    "}
                      <p>
                        {"                      "}Sed ut perspiciatis unde omnis
                        rror sit voluptatem accusan tium remque laudantium
                        lkoremn totam.{"                    "}
                      </p>
                      {"                    "}
                      <a
                        className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                        href="#!"
                      >
                        Read More
                      </a>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="item">
                  <div className="card smooth-shadow-sm border-0 m-2">
                    {"                  "}
                    <div className="card-body p-5">
                      {"                    "}
                      <div className="mb-5">
                        {"                      "}
                        <img
                          alt="Borrow - Loan Company Website Template"
                          className="icon-xxl"
                          src={Piggyimg}
                        />
                        {"                    "}
                      </div>
                      {"                    "}
                      <h3>
                        {"                      "}
                        <a className="text-inherit" href="#!">
                          Education Loan
                        </a>
                        {"                    "}
                      </h3>
                      {"                    "}
                      <p>
                        {"                      "}Consectetuer adipiscing elmodo
                        ligula eget dolor ociis natoque sit amet le polo konsog.
                        {"                    "}
                      </p>
                      {"                    "}
                      <a
                        className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                        href="#!"
                      >
                        Read More
                      </a>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="item">
                  <div className="card smooth-shadow-sm border-0 m-2">
                    {"                  "}
                    <div className="card-body p-5">
                      {"                    "}
                      <div className="mb-5">
                        {"                      "}
                        <img
                          alt="Borrow - Loan Company Website Template"
                          className="icon-xxl"
                          src={Loanimg}
                        />
                        {"                    "}
                      </div>
                      {"                    "}
                      <h3>
                        <a className="text-inherit" href="#!">
                          Business Loan
                        </a>
                      </h3>
                      {"                    "}
                      <p>
                        {"                      "}Dolor sit nean commodo ligula
                        eget dolor simple dummyum sociis nat nsectetuer
                        adipiscing elit.{"                    "}
                      </p>
                      {"                    "}
                      <a
                        className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                        href="#!"
                      >
                        Read More
                      </a>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="item">
                  <div className="card smooth-shadow-sm border-0 m-2">
                    {"                  "}
                    <div className="card-body p-5">
                      {"                    "}
                      <div className="mb-5">
                        {"                      "}
                        <img
                          alt="Borrow - Loan Company Website Template"
                          className="icon-xxl"
                          src={Carimg}
                        />
                        {"                    "}
                      </div>
                      {"                    "}
                      <h3>
                        <a className="text-inherit" href="#!">
                          Car Loan
                        </a>
                      </h3>
                      {"                    "}
                      <p>
                        {"                      "}Aenean commodo ligula eget
                        dolor. Cum sociis ipsum dolor sit amet, consectetuer
                        adipiscing elit..{"                    "}
                      </p>
                      {"                    "}
                      <a
                        className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                        href="#!"
                      >
                        Read More
                      </a>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="py-lg-16 py-10 bg-white border-bottom border-top">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-10 text-center">
                  {"                                "}
                  <h1>Fast & Easy Application Process.</h1>

                  <p>
                    {"                  "}Suspendisse aliquet varius nunc
                    atcibus lacus sit amet coed portaeri sque mami luctus viveed
                    congue lobortis faucibus.{"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                {"              "}
                <div className="card text-center mb-6 mt-4">
                  <div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
                    {"                  "}
                    <span className="fs-3 fw-bold">1</span>
                  </div>

                  <div className="card-body p-6">
                    {"                  "}
                    <h3 className="mb-2">Choose Loan Amount</h3>
                    {"                  "}
                    <p className="mb-0">
                      {"                    "}Suspendisse accumsan imperdue
                      ligula dignissim sit amet vestibulum in mollis etfelis.
                      {"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                {"              "}
                <div className="card text-center mb-6 mt-4">
                  <div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
                    {"                  "}
                    <span className="fs-3 fw-bold">2</span>
                  </div>

                  <div className="card-body p-6">
                    {"                  "}
                    <h3 className="mb-2">Approved Your Loan</h3>
                    {"                  "}
                    <p className="mb-0">
                      {"                    "}Fusce tempor sstibulum varius sem
                      nec mi luctus viverra edcongue lobortis faucibus.
                      {"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                {"              "}
                <div className="card text-center mb-6 mt-4">
                  <div className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
                    {"                  "}
                    <span className="fs-3 fw-bold">3</span>
                  </div>

                  <div className="card-body p-6">
                    {"                  "}
                    <h3 className="mb-2">Get Your Cash</h3>
                    {"                  "}
                    <p className="mb-0">
                      {"                    "}Get your money in minutes
                      simtibulm varius semnec mluctus gue lobortis faucibus.
                      {"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12 text-center">
                {"              "}
                <a className="btn btn-primary" href="#!">
                  Start Today
                </a>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="py-lg-16 py-10">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-10 text-center">
                  {"                                "}
                  <h1 className="mb-2">Why People Choose Us</h1>

                  <p className="">
                    {"                  "}Quisque gravida, mi sit amet lacinia
                    maximus ulla rutrum tellus vel mauris tristique gravida odio
                    lacus convallis est, vel pharetra leo massa ut sapien.
                    {"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row g-0">
              <div className="col-xl-4 col-md-4 col-12">
                {"              "}
                <div className="card text-center rounded-0">
                  <div className="card-body p-6">
                    {"                  "}
                    <div className="mb-4">
                      {"                    "}
                      <svg
                        className="bi bi-people text-primary"
                        fill="currentColor"
                        height="58"
                        viewBox="0 0 16 16"
                        width="58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h3>Dedicated Specialists</h3>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Duis eget diam quis elit erdiet
                      alidvolutp terdum tfanissim non intwesollis eu mauris.
                      {"                  "}
                    </p>
                    {"                  "}
                    <a className="btn btn-outline-primary btn-sm" href="#!">
                      Meet the team
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-md-4 col-12">
                {"              "}
                <div className="card text-center rounded-0">
                  <div className="card-body p-6">
                    {"                  "}
                    <div className="mb-4">
                      {"                    "}
                      <svg
                        className="bi bi-trophy text-primary"
                        fill="currentColor"
                        height="58"
                        viewBox="0 0 16 16"
                        width="58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h3>Success Stories Rating</h3>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Integer facilisis fringilla dolor
                      ut luctus lvinar felis miat velitliquam at lorem fermentum
                      orci.{"                  "}
                    </p>
                    {"                  "}
                    <a className="btn btn-outline-primary btn-sm" href="#!">
                      View Client Review
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-md-4 col-12">
                {"              "}
                <div className="card text-center rounded-0">
                  <div className="card-body p-6">
                    {"                  "}
                    <div className="mb-4">
                      {"                    "}
                      <svg
                        className="bi bi-calculator text-primary"
                        fill="currentColor"
                        height="58"
                        viewBox="0 0 16 16"
                        width="58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        {"                      "}
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h3>No front Appraisal Fees!</h3>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Integer faisis fringilla dolor ut
                      luctus nisi eneinar felis viverra dignissim fermentum
                      orci.{"                  "}
                    </p>
                    {"                  "}
                    <a className="btn btn-outline-primary btn-sm" href="#!">
                      Why choose us
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="bg-dark py-lg-16 py-10">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-10 text-center">
                  {"                                "}
                  <h1 className="text-white mb-2">
                    {"                  "}Some of our Awesome Testimonials
                    {"                "}
                  </h1>

                  <p className="text-white text-white-50">
                    {"                  "}You won’t be the only one lorem ipsu
                    mauris diam mattises.{"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-12 mb-6 mb-lg-0">
                {"              "}
                <div className="card border-0">
                  <div className="card-body p-5">
                    {"                  "}
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                      {"                    "}“I loved the customer service you
                      guys provided me. That was very nice and patient with
                      questions I had. I would really like definitely come back
                      here”{"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="d-flex align-items-center mt-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="avatar avatar-md rounded-3"
                      src={Avatarimg}
                    />
                  </div>

                  <div className="ms-3 lh-1">
                    {"                  "}
                    <h4 className="mb-0 text-white">Donny J. Griffin</h4>
                    {"                  "}
                    <span className="fs-6 text-white-50 fw-bold">
                      Personal Loan
                    </span>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-md-4 col-12 mb-6 mb-lg-0">
                {"              "}
                <div className="card border-0">
                  <div className="card-body p-5">
                    {"                  "}
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                      {"                    "}“I had a good experience with
                      Insight Loan Services. I am thankful to insight for the
                      help you guys gave me. My loan was easy and fast. thank
                      you Insigtht”{"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="d-flex align-items-center mt-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="avatar avatar-md rounded-3"
                      src={Avatarimg2}
                    />
                  </div>

                  <div className="ms-3 lh-1">
                    {"                  "}
                    <h4 className="mb-0 text-white">Mary O. Randle</h4>
                    {"                  "}
                    <span className="fs-6 text-white-50 fw-bold">
                      Education Loan
                    </span>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-md-4 col-12 mb-6 mb-lg-0">
                {"              "}
                <div className="card border-0">
                  <div className="card-body p-5">
                    {"                  "}
                    <p className="mb-0 fs-4 fst-italic fw-semi-bold text-dark">
                      {"                    "}“We came out of their offices very
                      happy with their service. They treated us very kind.
                      Definite will come back. The waiting time was very
                      appropriate.”{"                  "}
                    </p>
                  </div>
                  {"              "}
                </div>
                {"              "}
                <div className="d-flex align-items-center mt-4">
                  <div>
                    {"                  "}
                    <img
                      alt="Borrow - Loan Company Website Template"
                      className="avatar avatar-md rounded-3"
                      src={Avatarimg3}
                    />
                  </div>

                  <div className="ms-3 lh-1">
                    {"                  "}
                    <h4 className="mb-0 text-white">Lindo E. Olson</h4>
                    {"                  "}
                    <span className="fs-6 text-white-50 fw-bold">Car Loan</span>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <div className="py-4 bg-white shadow-sm">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg2}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg3}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg4}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg5}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg6}
                />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                {"              "}
                <img
                  alt="Borrow - Loan Company Website Template"
                  className="img-fluid"
                  src={Logoimg2}
                />
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </div>
        {"      "}
        <section className="py-lg-16 py-10">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                {"              "}
                <div className="mb-10 text-center">
                  {"                                "}
                  <h1 className="mb-1">Latest News from Loan Company</h1>

                  <p>
                    {"                  "}Our mission is to deliver reliable,
                    latest news and opinions.{"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-4 mb-lg-0">
                  <div>
                    {"                  "}
                    <a href="blog-single.html">
                      <img
                        alt="Borrow - Loan Company Website Template"
                        className="img-fluid rounded-top-md"
                        src={Blogimg1}
                      />
                    </a>
                  </div>

                  <div className="card-body p-5">
                    {"                  "}
                    <h3 className="mb-2">
                      {"                    "}
                      <a className="text-inherit" href="blog-single.html">
                        Couples Buying New Home Loan
                      </a>
                      {"                  "}
                    </h3>
                    {"                  "}
                    <p className="fs-6 text-uppercase fw-bold">
                      {"                    "}
                      <span className="border-end pe-2 me-2 border-2">
                        Augest 25, 2022
                      </span>
                      <span>
                        By
                        <a href="#!"> Admin</a>
                      </span>
                      {"                  "}
                    </p>
                    {"                  "}
                    <p>
                      {"                    "}Fusce sed erat libasellus id orci
                      quis ligula pret do lectus velit, a malesuada urna sodales
                      eu.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="blog-single.html"
                    >
                      Read More
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-4 mb-lg-0">
                  <div>
                    {"                  "}
                    <a className="imghover" href="blog-single.html">
                      <img
                        alt="Borrow - Loan Company Website Template"
                        className="img-fluid"
                        src={Blogimg2}
                      />
                    </a>
                  </div>

                  <div className="card-body p-5">
                    {"                  "}
                    <h3>
                      {"                    "}
                      <a className="text-inherit" href="blog-single.html">
                        Business Man Thinking for Loan
                      </a>
                      {"                  "}
                    </h3>
                    {"                  "}
                    <p className="fs-6 text-uppercase fw-bold">
                      {"                    "}
                      <span className="border-end pe-2 me-2 border-2">
                        Aug 24, 2022
                      </span>
                      <span>
                        By
                        <a href="#!"> Admin</a>
                      </span>
                      {"                  "}
                    </p>
                    {"                  "}
                    <p>
                      {"                    "}Nulla vehicula nibh vel malesuada
                      dapibus ringilla nunc mi sit amet fbendum sapierttitor
                      nibh.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="blog-single.html"
                    >
                      Read More
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-4 mb-lg-0">
                  <div>
                    {"                  "}
                    <a className="imghover" href="blog-single.html">
                      <img
                        alt="Borrow - Loan Company Website Templates"
                        className="img-fluid"
                        src={Blogimg3}
                      />
                    </a>
                  </div>

                  <div className="card-body p-5">
                    {"                  "}
                    <h3>
                      {"                    "}
                      <a className="text-inherit" href="blog-single.html">
                        Are you students looking for loan ?
                      </a>
                      {"                  "}
                    </h3>
                    {"                  "}
                    <p className="fs-6 text-uppercase fw-bold">
                      {"                    "}
                      <span className="border-end pe-2 me-2 border-2">
                        Aug 23, 2022
                      </span>
                      <span>
                        By
                        <a href="#!"> Admin</a>
                      </span>
                      {"                  "}
                    </p>
                    {"                  "}
                    <p>
                      {"                    "}Malesuada urna sodales euusce sed
                      erat libasellus id orci quis ligula pretium co ctus velit.
                      {"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="blog-single.html"
                    >
                      Read More
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"      "}
        <section className="py-lg-16 py-10 bg-white border-top">
          {"        "}
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 col-md-12 col-sm-12 col-12">
                {"              "}
                <div className="mb-8 text-center">
                  {"                                "}
                  <h1 className="mb-1">We are Here to Help You</h1>

                  <p>
                    {"                  "}Nulla rutrum tellus vel mauris
                    tristique gravida in vulputate velit. Nulla dictum porttitor
                    diam, ut molestie lorem mattis.{"                "}
                  </p>
                  {"              "}
                </div>
                {"                          "}
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    {"                  "}
                    <div className="mb-6">
                      {"                    "}
                      <svg
                        className="bi bi-calendar3 text-primary"
                        fill="currentColor"
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        {"                      "}
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      {"                    "}Apply For Loan
                      {"                  "}
                    </h4>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Looking to buy a car or home loan?
                      then apply for loan now.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="#!"
                    >
                      Get Appointment
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    {"                  "}
                    <div className="mb-6">
                      {"                    "}
                      <svg
                        className="bi bi-telephone text-primary"
                        fill="currentColor"
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      Call us at
                    </h4>
                    {"                  "}
                    <h1 className="fs-3 mb-0">800-123-456 / 789</h1>
                    {"                  "}
                    <p>
                      <a className="fs-5" href="#">
                        lnfo@loanadvisor.com
                      </a>
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="#!"
                    >
                      Contact us
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {"              "}
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    {"                  "}
                    <div className="mb-6">
                      {"                    "}
                      <svg
                        className="bi bi-people text-primary"
                        fill="currentColor"
                        height="32"
                        viewBox="0 0 16 16"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        {"                    "}
                      </svg>
                      {"                  "}
                    </div>
                    {"                  "}
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      {"                    "}Talk to Advisor
                      {"                  "}
                    </h4>
                    {"                  "}
                    <p className="mb-4">
                      {"                    "}Need to loan advise? Talk to our
                      Loan advisors.{"                  "}
                    </p>
                    {"                  "}
                    <a
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                      href="#!"
                    >
                      Meet The Advisor
                    </a>
                  </div>
                  {"              "}
                </div>
              </div>
            </div>
            {"        "}
          </div>
          {"      "}
        </section>
        {"    "}
      </main>

      <div className="footer bg-dark pt-8">
        <div className="container">
          {"        "}
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
              <div className="mb-4 mb-lg-0">
                {"                            "}
                <img
                  alt="Borrow            - Loan Company Website Templates"
                  src={Ftlogoimg}
                />
              </div>
              {"                      "}
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <form
                action="https://easetemplate.com/borrow/newsletter.php"
                className="row g-0 align-items-center"
                method="post"
              >
                {"              "}
                <div className="col-md-4 col-12 mb-3 mb-md-0">
                  <h3 className="text-white mb-0">Signup Our Newsletter</h3>
                  {"              "}
                </div>
                {"              "}
                <div className="col-md-8 col-12">
                  <div className="input-group">
                    {"                  "}
                    <input
                      aria-describedby="basic-addon2"
                      className="form-control border-0 shadow-none"
                      id="newsletter"
                      placeholder="Write email address"
                      required
                      type="email"
                    />
                    {"                  "}
                    <a className="btn btn-primary" href="#" id="basic-addon2">
                      Go!
                    </a>
                  </div>
                  {"              "}
                </div>
              </form>
              {"                      "}
            </div>
            {"        "}
          </div>
          {"        "}
          <hr className="my-6 opacity-25" />
          {"        "}
          <div className="row mb-8">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="text-white-50 mb-3">
                {"                            "}
                <p>
                  Our goal at Borrow Loan Company is to provide access to
                  personal loans and education loan, car loan, home loan at
                  insight competitive interest rates lorem ipsums. We are the
                  loan provider, you can use our loan product.{"              "}
                </p>
                {"              "}
                <div className="row mt-6">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    {"                  "}
                    <div className="d-flex">
                      {"                    "}
                      <svg
                        className="bi bi-geo-alt text-white mt-1"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 16 16"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        {"                      "}
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        {"                    "}
                      </svg>
                      {"                    "}
                      <div className="ms-3">
                        3895 Sycamore Road Arlington, 97812
                      </div>
                      {"                  "}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3 mt-md-0">
                    {"                  "}
                    <div className="d-flex">
                      {"                    "}
                      <svg
                        className="bi bi-telephone text-white mt-1"
                        fill="currentColor"
                        height="20"
                        viewBox="0 0 16 16"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {"                      "}
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        {"                    "}
                      </svg>
                      {"                    "}
                      <div className="ms-3 fs-3">800-123-456</div>
                      {"                  "}
                    </div>
                  </div>
                  {"              "}
                </div>
              </div>
              {"                      "}
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="mb-3">
                {"                            "}
                <ul className="list-unstyled text-muted">
                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Home
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Services
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      About Us
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      News
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Faq
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Contact Us
                    </a>
                  </li>
                  {"              "}
                </ul>
              </div>
              {"                      "}
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="mb-3">
                {"                            "}
                <ul className="list-unstyled text-muted">
                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Car Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Personal Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Education Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Business Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Home Loan
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit fs-5" href="#">
                      {"                    "}
                      <i className="bi bi-chevron-right fs-6 me-2" />
                      Debt Consolidation
                    </a>
                  </li>
                  {"              "}
                </ul>
              </div>
              {"                      "}
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="mb-3">
                {"                            "}
                <ul className="list-unstyled text-muted">
                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit" href="#!">
                      {"                    "}
                      <FontAwesomeIcon icon={faFacebook} />
                      Facebook
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit" href="#!">
                    <FontAwesomeIcon icon={faGoogle} />
                      Google{"                  "}
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit" href="#!">
                    <FontAwesomeIcon icon={faTwitter} />
                      Twitter
                    </a>
                  </li>

                  <li className="d-flex">
                    {"                  "}
                    <a className="text-inherit" href="#!">
                    <FontAwesomeIcon icon={faLinkedin} className="" />
                      Linked In
                    </a>
                  </li>
                  {"              "}
                </ul>
              </div>
              {"                      "}
            </div>
            {"        "}
          </div>
          {"        "}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <p className="fs-6 text-muted">
                {"              "}© Copyright 2022 | Borrow Loan Company
                {"            "}
              </p>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-md-end">
              <p className="fs-6 text-muted">
                {"              "}
                <a className="text-inherit" href="#">
                  Terms of use
                </a>{" "}
                |{"              "}
                <a className="text-inherit" href="#">
                  Privacy Policy
                </a>
              </p>
            </div>
            {"        "}
          </div>
          {"      "}
        </div>
        {"    "}
      </div>
    </>
  );
};

export default Home;
