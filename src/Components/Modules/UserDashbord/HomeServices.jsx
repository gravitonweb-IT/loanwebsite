import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import './homeservices.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
const HomeServices = () => {
  return (
    <>
    <Sidebar>
        <div className="container mt-5 ">
            <h2 className='text-primary'>All Services</h2>
            <div className="row mt-5">
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        <FontAwesomeIcon className='loanIcon' icon={faLandmark} />
                        Home Loan</h3>

                        <p className='mt-3'>
                        Home loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/homeloan'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i className="fa-solid fa-car loanIcon"></i>
                        Car Loan</h3>

                        <p className='mt-3'>
                        Car loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/carloan'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-person loanIcon"></i>
                        Personal Loan</h3>

                        <p className='mt-3'>
                        Personal loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/personalloan'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i className="fa-solid fa-user-tie loanIcon"></i>
                        Professional Loan</h3>

                        <p className='mt-3'>
                        Professional loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/professionalloan'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-business-time loanIcon"></i>
                        Business Loan</h3>

                        <p className='mt-3'>
                        Business loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/businessloan'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-coins loanIcon"></i>
                        Gold Loan</h3>

                        <p className='mt-3'>
                        Gold loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/goldloan1'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="border border-secondary rounded p-3"> 
                        <h3 className='text-primary '> 
                        {/* <FontAwesomeIcon className='loanIcon' icon={faLandmark} /> */}
                        <i class="fa-solid fa-school loanIcon"></i>
                        School/College Loan</h3>

                        <p className='mt-3'>
                        School/College loans made easy with low rates and flexible terms.
                        </p>
                        <Link to='/studentloan'>
                        <button  className="homeServices">Apply Now</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        </Sidebar>
    </>
  )
}

export default HomeServices