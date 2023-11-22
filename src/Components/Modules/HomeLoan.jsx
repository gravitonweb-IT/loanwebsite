import React from "react";
import './About.css'

const HomeLoan = () => {
  return (
    <>
      <main>
        <section
          className="pt-18 pb-10 homeloan-header-page"
       
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-xl-8 col-sm-12 col-12">
                      <h1 className="mb-0">Home Loan</h1>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
                        <a href="#!" className="btn btn-primary">
                          Get A Call Back
                        </a>
                        <a href="#!" className="btn btn-secondary">
                          How To Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="nav nav-fill nav-pills-gray-fill">
                    <li className="nav-item">
                      <a href="#section-about" className="page-scroll nav-link">
                        About Loan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#section-typeloan"
                        className="page-scroll nav-link"
                      >
                        Types of loan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#section-feature"
                        className="page-scroll nav-link"
                      >
                        Features &amp; Benefits
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#section-eleigiblity"
                        className="page-scroll nav-link"
                      >
                        Eligibility
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#section-faq" className="page-scroll nav-link">
                        FAQ’S
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#section-apply" className="page-scroll nav-link">
                        Apply now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* content start */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm position-relative">
                  <div
                    className="section-scroll p-lg-10 p-5"
                    id="section-about"
                  >
                    <h2>About Home Loan</h2>
                    <p className="lead">
                      To make your home loan journey a smooth sail, in this
                      article we will help you to know eligibility criteria,
                      rates of interest, process, necessary documents,
                      comparison and transfer for lowest rates.
                    </p>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>
                          Vestibulum accumsan, diam vitae consectetur sodales
                          sapien felis vestibulum purus,ac porttitor elit dolor
                          venenatis Cras condimacilicelerisque orci nisi sit
                          amet neque.{" "}
                        </p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>
                          Pellentesque mollis, diam a viverra luctus, nisl dui
                          vehicula erat, id congue ante justo nec ante. Nullam
                          vehicula tellus sit amet dolor tristique, faucibus
                          rhoncus velit elementum.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p>
                      Phasellus tellus nunc, sollicitudin quist amet it simple
                      nequeuisque lacus mi tesimly diummy cintenbt mpus nec
                      purus vitae tempor placerat leo.{" "}
                    </p>
                    <a href="#!" className="btn btn-primary">
                      Apply for loan
                    </a>
                  </div>
                  <div className="section-scroll" id="section-typeloan">
                    <div className="bg-light p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-5">
                            <h2>Get financing for whatever you need now</h2>
                            <p>
                              Achieve all your goals and aspirations; with the
                              right kind of help, exactly when you need it.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5">
                            <h4>New Home Loan</h4>
                            <p className="mb-0">
                              New Home Loan at basic interest rates from
                              Borrow-Loan Company. You can apply online and
                              check your eligibility and easy EMI. Fast Approval
                              for your new home loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5">
                            <h4>Home Conversion</h4>
                            <p className="mb-0">
                              A home conversion loan is a scheme for those who
                              have already taken a housing loan. This loan
                              follow some rules and regulations.It is a part of
                              loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5 mb-lg-0">
                            <h4>Land Purchase</h4>
                            <p className="mb-0">
                              Borrow Loan offers home loan for land purchase to
                              make your dream home. You can compare home loan
                              rates with our compare loan table. Apply online
                              for Home Loan.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className=" mb-5 mb-lg-0">
                            <h4>Home Renovation</h4>
                            <p className="mb-0">
                              Get instant approval for renovation your home.
                              Borrow introduce home improvement loan. It is with
                              basic rate and flexible EMI repayment.For more
                              detail you can check our loan products.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary py-8 text-center">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 className="text-white mb-4">
                          Get financing for whatever you need now
                        </h1>
                        <a href="#!" className="btn btn-white">
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="section-scroll" id="section-feature">
                    <div className="p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-6">
                            <h2>Features of Home Loan</h2>
                            <p>
                              {" "}
                              All loans are not created equal, personal loan has
                              become a great option for people to use.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-laptop text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                              </svg>
                            </div>
                            <h4>Salaried &amp; Self Employed</h4>
                            <p>
                              Maecenas in ultricies sem. Nunc eget orci mi. Sed
                              porttitor s, tellus fringilla condimentum eglis
                              elit dictum cerat.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-lightbulb text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                              </svg>
                            </div>
                            <h4>Loan For Agriculturists</h4>
                            <p>
                              Pellentesque mollis, diam a viverra luctus, nisl
                              dui vehicula erat, id congue ante hicula tellus
                              sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-bullseye text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                              </svg>
                            </div>
                            <h4>Home Loans For NRIs</h4>
                            <p>
                              Our loan rates and charges are very attractive
                              lorem ipsums sitamet uerse ipsum.Curabitulectus
                              mattis vitae.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="feature-icon mb-4">
                            <div className="mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-currency-dollar text-primary"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                              </svg>
                            </div>
                            <h4>No Morgage</h4>
                            <p>
                              Nunc eget orci mi. Sed porttitor lacus quis
                              scelerisque dignissim. Nullam bibendu msfeus,
                              isapien dolor et dui.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-scroll" id="section-eleigiblity">
                    <div className=" bg-light p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-6">
                            <h2>Home Loan - Eligibility</h2>
                            <p>
                              {" "}
                              Any salaried, self-employed or professional Public
                              and Privat companies, Government sector employees
                              including Public Sector is eligible for a personal
                              loan.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className=" mb-4">
                            <h4>Age</h4>
                            <p>
                              Maximum age of applicant at loan maturity: 60
                              years
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className=" mb-4">
                            <h4>Income</h4>
                            <p>Minimum Net Monthly Income: Rs 15,000</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className=" mb-4">
                            <h4>Credit Rating</h4>
                            <p>
                              Applicant should have the bank specified credit
                              score.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 offset-md-3 col-md-6 col-sm-12 col-12"></div>
                      </div>
                    </div>
                  </div>
                  <div className="section-scroll" id="section-faq">
                    <div className="p-lg-10 p-5">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-8">
                            <h2>Frequently Ask Questions</h2>
                            <p>
                              If you have a question that deals with clients,
                              customers or the public in general, there is bound
                              to be a need for the FAQ page.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="accordion" id="faqExample">
                            <div className="card mb-2">
                              <div
                                className="card-header rounded-3 border-bottom-0"
                                id="faqOne"
                              >
                                <h4 className="mb-0">
                                  <a
                                    href="#!"
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
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
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
                                    className="collapsed"
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
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
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
                                    className="collapsed"
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
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
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
                                    className="collapsed"
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
                                  Ad vegan excepteur butcher vice lomo. Leggings
                                  occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't
                                  heard of them accusamus labore sustainable
                                  VHS.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-scroll" id="section-apply">
                    <div className="bg-light p-md-12 p-6">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="mb-8 text-center">
                            <h1>Get a Quote</h1>
                            <p>
                              Now apply for a Car Loan online, All you need to
                              do is provide your details below application form.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <form>
                            <fieldset>
                              {/* Text input*/}
                              <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="name"
                                    >
                                      Name
                                    </label>
                                    <input
                                      id="name"
                                      name="name"
                                      type="text"
                                      placeholder="Name"
                                      className="form-control "
                                      required
                                    />
                                  </div>
                                </div>
                                {/* Text input*/}
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                  <div className="mb-3">
                                    <label
                                      className=" form-label"
                                      htmlFor="email"
                                    >
                                      E-Mail
                                    </label>
                                    <input
                                      id="email"
                                      name="email"
                                      type="text"
                                      placeholder="E-mail"
                                      className="form-control "
                                    />
                                  </div>
                                </div>
                                {/* Text input*/}
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="phone"
                                    >
                                      Phone
                                    </label>
                                    <input
                                      id="phone"
                                      name="phone"
                                      type="text"
                                      placeholder="Phone"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                  <div className=" my-4 amountSlider" />
                                  <label
                                    htmlFor="amount"
                                    className="form-label"
                                  >
                                    Loan Amount
                                  </label>
                                  <input
                                    type="text"
                                    id="amount"
                                    className="form-control amountInput"
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                  <div className=" my-4 yearSlider" />
                                  <label htmlFor="year" className="form-label">
                                    Loan Amount
                                  </label>
                                  <input
                                    type="text"
                                    id="year"
                                    className="form-control yearInput"
                                  />
                                </div>
                                {/* Button */}
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                                  <div className="d-grid">
                                    <button
                                      id="Submit"
                                      name="Submit"
                                      className="btn btn-primary"
                                    >
                                      Submit New Quote
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.content end */}
      </main>
    </>
  );
};

export default HomeLoan;
