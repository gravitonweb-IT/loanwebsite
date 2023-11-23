import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
// import "./Navbar.css"

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Logoimg from "../assets/images/brand/logo/logo.svg";

const Navbar = () => {

   
  return (
  <>
  
       <nav className="navbar navbar-expand-lg py-3 navbar-default">
  
        <div className="container px-0">

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

                  <a
                    className="dropdown-item"
                    href="businessloan"
                  >
                  Business Loan
                  </a>

                  <a
                    className="dropdown-item"
                    href="studentloan"
                  >
                    Student Loan
                  </a>
                  <a
                    className="dropdown-item"
                    href="personalloan"
                  >
                    Personal Loan
                  </a>
                  <a
                    className="dropdown-item"
                    href="refinanceloan"
                  >
                    Refinance  Loan
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
                  href="/gallary"
                  id="navbarProducts"
                >
        Gallary 
                 
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

      </nav>    
   
  


  {/* <nav>
<Link to="main" className="logo">
<img src="https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-long-shadow-glyph-icon-of-selfeducation-in-yellow-flat-design-vector-png-image_32872310.png" alt="logo" />
</Link>
<input className="menu-btn" type="checkbox" id="menu-btn" />
<label className="menu-icon" for="menu-btn">
<span className="nav-icon"></span>
</label>
<ul className="menu">
<li><Link to='main' className="active">Home</Link></li>
<li><Link to='Courses' >Courses</Link></li>
<li><Link to='Teachers'>Teachers</Link></li>
<li><Link to='Price' >Price</Link></li>
<li><Link to='Testmonial'>Testmonial</Link></li>
<li><Link to='Blog' >Blog</Link></li>
<li><Link to='Facts' >Facts</Link></li>
<li><Link to='Contact'>Contact</Link></li>
</ul>
</nav> */}
  </>
  )
}

export default Navbar