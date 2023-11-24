import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import "./Navbar.css"

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Logoimg from "../assets/images/brand/logo/logoimg.jpeg";

const Navbar = () => {

  return (
  <>

        <nav className="navbar navbar-expand-lg py-3 navbar-default fixed-top">

        <div className="container px-0">

          <a className="navbar-brand" href="index-2.html">
            <img alt="" src={Logoimg} className='logo-img'/>
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

      </nav>     

  </>
  )
}

export default Navbar



// import React, { useEffect, useState } from 'react'
// import './Navbar.css';
// import { GiHamburgerMenu , GiCancel } from "react-icons/gi";

// import Logoimg from "../assets/images/brand/logo/logo.svg";




// const Navbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isTop = window.scrollY < 100;
//       if (!isTop) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setShowMediaIcons(!showMediaIcons);
//   };
//   const toggleDropdown = () => {
//     setShowMediaIcons(true);
//   };

//   const closeDropdown = () => {
//     setShowMediaIcons(false);
//   };

//   return (
//    <>
//      <nav className={`main-nav ${isScrolled ? 'fixed-nav' : ''}`}>
//         <div className="logo">
//           <img src={Logoimg} alt="Logo" />
//         </div>

//         {/* 2nd menu part */}
//         <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
//           <ul>
//             <li>
//               <a href="/" onClick={toggleMenu}>
//                 Home
//               </a>
//             </li>
//             <li>
//             <a href ="/about" onClick={toggleMenu}>
//                 About
//               </a>
//             </li>
//             <li onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} className="dropdown-container">
//               <a href='/loan' to="/loan">Loan</a>
//               {showMediaIcons && (
//                 <div className="dropdown-content">
//                   <a href='/homeloan' to="/loan/page1" onClick={toggleMenu}>
//                    Home Loan
//                   </a>
//                   <a href='/studentloan' to="/loan/page2" onClick={toggleMenu}>
//                  Student Loan
//                   </a>
//                   <a href='/carloan' to="/loan/page3" onClick={toggleMenu}>
//                 Carloan
//                   </a>
//                   {/* Add other pages as needed */}
//                 </div>
//               )}
//             </li>
//             <li>
//             <a href ="/about" onClick={toggleMenu}>
//                 About
//               </a>
//             </li>
//             <li>
//             <a href ="/about" onClick={toggleMenu}>
//                 About
//               </a>
//             </li>
//             <li>
//             <a href ="/about" onClick={toggleMenu}>
//                 About
//               </a>
//             </li>
          
//           </ul>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//           {/* hamburger or close menu start */}
//           <div className="hamburger-menu">
//             <a href="#" onClick={toggleMenu}>
//               {showMediaIcons ? <GiCancel /> : <GiHamburgerMenu />}
//             </a>
//           </div>
//         </div>
//       </nav>


//    </>
//   )
// }

// export default Navbar