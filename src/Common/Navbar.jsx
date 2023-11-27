import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";


import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logoimg from "../assets/images/brand/logo/logoimg.jpeg";


const Navbar = () => {

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg py-3 navbar-default fixed-top">
        <div className="container px-0">
          <a className="navbar-brand" href="index-2.html">
            <img alt="" src={Logoimg} className="logo-img" />
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
                  href="/"
                  id="navbarHome"
                >
                  Home
                </a>
                {"              "}
              </li>

              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="/about"
                  id="navbarProducts"
                >
                  About Us
                </a>
                {"              "}
              </li>

              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="/loan"
                  id="navbarBlog"
                  role="button"
                >
                  Loans <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {"              "}
                <div aria-labelledby="navbarBlog" className="dropdown-menu">
                  <a className="dropdown-item" href="/homeloan">
                    Home Loan
                  </a>

                  <a className="dropdown-item" href="businessloan">
                    Business Loan
                  </a>

                  <a className="dropdown-item" href="studentloan">
                    Student Loan
                  </a>
                  <a className="dropdown-item" href="personalloan">
                    Personal Loan
                  </a>
                  <a className="dropdown-item" href="refinanceloan">
                    Refinance Loan
                  </a>

                  <a className="dropdown-item" href="educationloan">
                    Education Loan
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
                  href="/blog"
                  id="navbarProducts"
                >
                  Blog
                </a>
                {"              "}
              </li>

              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="/gallery"
                  id="navbarProducts"
                >
                  Gallery
                </a>
                {"              "}
              </li>
              <li className="nav-item dropdown">
                {"              "}
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  href="/contact"
                  id="navbarProducts"
                >
                  Contact
                </a>
                {"              "}
              </li>
            </ul>
          </div>
        </div>
      </nav> */}


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link class="navbar-brand " to="/">
    <img src={Logoimg} className="logo-img"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item dropdown">
      
          <Link class="nav-link " to="/loan" id="navbarDropdownMenuLink" role="but" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
            Loans <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/homeloan">Home Loan</a></li>
            <li><a class="dropdown-item" href="/studentloan">Student Loan</a></li>
            <li><a class="dropdown-item" href="/carloan">Car Loan</a></li>
            <li><a class="dropdown-item" href="/educationloan">Education Loan</a></li>
            <li><a class="dropdown-item" href="/businessloan">Business Loan</a></li>
            <li><a class="dropdown-item" href="/personalloan">Personal Loan</a></li>
            <li><a class="dropdown-item" href="/refinanceloan">Refinance Loan</a></li>

          </ul>
        </li>




        
        <li class="nav-item">
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;

