import React from "react";
import Featureimg from "../../assets/images/background/lp-feature-img.jpg"
const Career = () => {
  return (
    <>
      <section className="pt-18 pb-10 galary-header-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bg-white p-5 rounded-top-md">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <h1 className="mb-0">Career Upto Here</h1>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="text-md-end mt-3 mt-md-0">
                      <a href="#!" className="btn btn-primary">
                        How To Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className="nav nav-fill nav-pills-gray-fill">
                  <li className="nav-item ">
                    <a href="contact-us.html" className="nav-link">
                      Give me call back
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link">
                      Emi Caculator
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-10 py-10">
          <div className="container">
            <div className="row d-flex align-items-center gap-10">
            

              <div className=" col-lg-5 col-md-12">
                <div className="mb-2">
                  <h1>Introduction :</h1>
                  <p>
                  Embarking on a career journey often involves making important financial
                   decisions, and one crucial aspect is understanding how loans can play a role in shaping your professional path.  
                 
                  </p>
                </div>
                <div className="d-flex mb-3">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Choosing the Right Career Path:</h3>
                    <p>
                    Before delving into loans, it's essential to consider your career choices. Assess your skills,
                     interests, and long-term goals to identify a fulfilling and sustainable career path.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Financing Your Education:</h3>
                    <p>
                    Many individuals pursue higher education to enhance their career prospects. If you need 
                    financial assistance, loans can be a viable option. Explore different types of educational loans
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Managing Debt Responsibly</h3>
                    <p>
                    Taking on loans means shouldering a financial responsibility. Learn how to manage debt responsibly by 
                    creating a budget, prioritizing repayment, and exploring strategies to minimize interest accrual
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Loans for Career Advancement</h3>
                    <p>
                    As you progress in your career, you may consider additional education 
                    or certifications for professional growth. Investigate the loan options available for career advancement,
                     including personal development loans and employer-sponsored education programs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12  col-sm-12 col-12 mb-4 mb-lg-0">
                <img
                  src={Featureimg}
                  alt="Borrow - Loan Company Responsive Website Templates"
                  className="img-fluid rounded-3 w-100 mb-2 mb-lg-0"
                />
              </div>


            </div>
          </div>
        </section>
    </>
  );
};

export default Career;
