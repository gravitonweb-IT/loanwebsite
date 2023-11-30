import React from "react";
import "./Blog.css"

import Blogimg1 from "../../assets/images/blog/blog-post-1.jpg";
import Blogimg2 from "../../assets/images/blog/blog-post-2.jpg";
import Blogimg3 from "../../assets/images/blog/blog-post-3.jpg";
import Blogimg4 from "../../assets/images/blog/blog-post-4.jpg"
import Recentimg1 from "../../assets/images/blog/recent-img-1.jpg"
import Recentimg2 from "../../assets/images/blog/recent-img-2.jpg"
import  Recentimg3 from "../../assets/images/blog/recent-img-3.jpg"
const Blog = () => {
  return (
    <>
      <main>
        <section
          className="pt-18 pb-10 blog-banner-img"
       
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <h1 className="mb-0">Blog</h1>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
                        <a href="/contact" className="btn btn-primary">
                          How To Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </section>
        {/* content start */}
        <section>
          <div className="container">
            <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm p-5">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 mb-8 mb-lg-0">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-6 border-bottom pb-6">
                        <div className="mb-4">
                          <a href="blog-single.html" className="imghover">
                            <img
                              src={Blogimg1}
                              alt="Borrow - Loan Company Website Template"
                              className="img-fluid rounded-3"
                            />
                          </a>
                        </div>
                        <div>
                          <h2 className="mb-2">
                            <a href="blog-single.html" className="text-inherit">
                              Bigger home still the goal
                            </a>
                          </h2>
                          <p className="fs-6 text-uppercase fw-bold">
                            <span className="border-end pe-2 me-2 border-2">
                              Jan 25, 2020
                            </span>
                            <span className="border-end pe-2 me-2 border-2">
                              By<a href="#!">Admin</a>
                            </span>
                            <span>
                              05<a href="#!"> Comments</a>
                            </span>
                          </p>
                          <p>
                            Morbi accumsan, lectus eu maximus placerat, lacus
                            justo gravida dolor, vel vehicula dui magna sed leo.
                            Sed porttitor ante lacus, quis tincidunt felis
                            pretium sit amet lorem Pellentesque libero nulla,
                            consectetur et lectus at commodo cursus urna.{" "}
                          </p>
                          <a
                            href="blog-single.html"
                            className="btn-link fw-bold border-bottom border-2 border-primary fs-5"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-6 border-bottom pb-6">
                        <div
                          id="carouselExampleControls"
                          className="carousel slide mb-4"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src={Blogimg2}
                                className="d-block w-100 rounded-3"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={Blogimg3}
                                className="d-block w-100 rounded-3"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={Blogimg4}
                                className="d-block w-100 rounded-3"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                        <div>
                          <h2 className="mb-2">
                            <a href="blog-single.html" className="text-inherit">
                              5 Essential financial habits
                            </a>
                          </h2>
                          <p className="fs-6 text-uppercase fw-bold">
                            <span className="border-end pe-2 me-2 border-2">
                              Jan 26, 2020
                            </span>
                            <span className="border-end pe-2 me-2 border-2">
                              By<a href="#!">Admin</a>
                            </span>
                            <span>
                              05<a href="#!"> Comments</a>
                            </span>
                          </p>
                          <p>
                            Lorem ipsum dolor sitamet consectetur adipiscing
                            elitras molestie nunceu urna mattis vitae
                            scelerisque felis viveullaeu bibendum nismalesuada
                            tellus. Integer nisl ante efficitur rhoncus its
                            sagittis eudignissim hendrerit.
                          </p>
                          <a
                            href="blog-single.html"
                            className="btn-link fw-bold border-bottom border-2 border-primary fs-5"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      {/* blog post */}
                      <div className="mb-6 border-bottom pb-6">
                        <div className="mb-4">
                          <a href="blog-single.html" className="imghover">
                            <img
                              src={Blogimg1}
                              alt="Borrow - Loan Company Website Template"
                              className="img-fluid rounded-3"
                            />
                          </a>
                        </div>
                        <div>
                          <h2>
                            <a href="blog-single.html" className="text-inherit">
                              Choosing right education loan
                            </a>
                          </h2>
                          <p className="fs-6 text-uppercase fw-bold">
                            <span className="border-end pe-2 me-2 border-2">
                              Jan 26, 2020
                            </span>
                            <span className="border-end pe-2 me-2 border-2">
                              By<a href="#!">Admin</a>
                            </span>
                            <span>
                              05<a href="#!"> Comments</a>
                            </span>
                          </p>
                          <p>
                            Integer tincidunt quam a nulla aliquet placeratd
                            dictum tellus augueac pretium nisl elementum acam
                            iaculis lectus eu enim lacinia tincidunt diam
                            suscipit estibulum ut tincidunt antequis semper
                            diamed Iortor etest variond.
                          </p>
                          <a
                            href="blog-single.html"
                            className="btn-link fw-bold border-bottom border-2 border-primary fs-5"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="mb-6 border-bottom pb-6">
                        <div className="mb-4">
                          <a href="blog-single.html" className="imghover">
                            <img
                              src={Blogimg4}
                              alt="Borrow - Loan Company Website Template"
                              className="img-fluid rounded-3"
                            />
                          </a>
                        </div>
                        <div>
                          <h2>
                            <a href="blog-single.html" className="text-inherit">
                              {" "}
                              Consider loan consolidation
                            </a>
                          </h2>
                          <p className="fs-6 text-uppercase fw-bold">
                            <span className="border-end pe-2 me-2 border-2">
                              Jan 28, 2020
                            </span>
                            <span className="border-end pe-2 me-2 border-2">
                              By<a href="#!">Admin</a>
                            </span>
                            <span>
                              05<a href="#!"> Comments</a>
                            </span>
                          </p>
                          <p>
                            Nullam nonnibh sit amet nisl sollicitudin
                            sollicitudin orbi bibendum dignissim sapien
                            veltincidunt diam feugiat roin sagittis hendrerit
                            diam at hendreriam commodo molestie eroaliquet sem
                            lacinia sit ameton lacommiam.
                          </p>
                          <a
                            href="blog-single.html"
                            className="btn-link fw-bold border-bottom border-2 border-primary fs-5"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="post-holder">
                        <div className="mb-6 border-bottom pb-6">
                          <div className="bg-white">
                            <h2>
                              <a
                                href="blog-single.html"
                                className="text-inherit"
                              >
                                How to get a scholarship
                              </a>
                            </h2>
                            <p className="fs-6 text-uppercase fw-bold">
                              <span className="border-end pe-2 me-2 border-2">
                                Jan 28, 2020
                              </span>
                              <span className="border-end pe-2 me-2 border-2">
                                By<a href="#!">Admin</a>
                              </span>
                              <span>
                                05<a href="#!"> Comments</a>
                              </span>
                            </p>
                            <p>
                              Amet consectetur psum dolor sit adipiscing elitras
                              molestie nunceu urna mattis vitae scelerisque
                              nunceu urna mattis vitaefelis viverra ullam
                              eulorem bibendum nislvel malesuadat amet
                              consectetur adipiscing elitras molestie.{" "}
                            </p>
                            <a
                              href="blog-single.html"
                              className="btn-link fw-bold border-bottom border-2 border-primary fs-5"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div>
                        {/* post-holder */}
                        <div className=" bg-light-primary mb-4 p-5">
                          {/* quote-block */}
                          <h2>Quote of the day</h2>
                          <p className="text-uppercase fs-6 text-dark fw-bold mb-4">
                            Jan 28, 2020
                          </p>
                          <blockquote className="border-start border-4 border-primary">
                            <p className="ms-4 lead fst-italic mb-0">
                              “The blockquote element is used to indicate the
                              sector quotation of a large section of text from
                              lorem another source.”
                            </p>
                          </blockquote>
                        </div>
                        {/* /.quote-block */}
                      </div>
                      {/* /.post-holder */}
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      {/*st-pagination*/}
                      <nav aria-label="...">
                        <ul className="pagination ">
                          <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <span className="page-link">2</span>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                      {/*/.st-pagination*/}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="card bg-light mb-4">
                    <div className="card-body">
                      <h3 className="mb-3">Search</h3>
                      <form>
                        <input
                          type="search"
                          className="form-control"
                          id="loansearchform"
                          placeholder="Search here"
                        />
                      </form>
                    </div>
                    {/* /input-group */}
                  </div>
                  <div className="card bg-light mb-4">
                    <div className="card-body">
                      <h3 className="mb-3">Categories</h3>
                      <ul className="list-unstyled mb-0 fs-5">
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            Personal Loan
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            Education Loan
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            Car Loan
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            Home Loan
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            Business Loan
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            Debt Consolidation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card bg-light mb-4">
                    <div className="card-body">
                      <h3 className="mb-3">Recent post</h3>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <div className="d-flex mb-4">
                            <div>
                              <a href="#!">
                                <img
                                  src={Recentimg1}
                                  alt="Borrow - Loan Company Website Template"
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                            <div className="ms-3">
                              <h4 className="mb-2">
                                <a href="#!" className="text-inherit">
                                  Bigger home still the goal
                                </a>
                              </h4>
                              {/* post meta */}
                              <span className="fs-6 text-uppercase fw-bold text-primary">
                                Aug 22, 2020{" "}
                              </span>
                            </div>
                            {/* /.post meta */}
                          </div>
                        </li>
                        <li>
                          <div className="d-flex mb-4">
                            <div>
                              <a href="#!">
                                <img
                                  src={Recentimg2}
                                  alt="Borrow - Loan Company Website Template"
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                            <div className="ms-3">
                              <h4>
                                <a href="#!" className="text-inherit">
                                  5 Essential Financial Habits
                                </a>
                              </h4>
                              {/* post meta */}
                              <span className="fs-6 text-uppercase fw-bold text-primary">
                                Aug 24, 2020
                              </span>
                            </div>
                            {/* /.post meta */}
                          </div>
                        </li>
                        <li>
                          <div className="d-flex">
                            <div>
                              <a href="#!">
                                <img
                                  src={Recentimg3}
                                  alt="Borrow - Loan Company Website Template"
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                            <div className="ms-3">
                              <h4>
                                <a href="#!" className="text-inherit">
                                  Choosing right loan
                                </a>
                              </h4>
                              {/* post meta */}
                              <span className="fs-6 text-uppercase fw-bold text-primary">
                                Aug 24, 2020
                              </span>
                            </div>
                            {/* /.post meta */}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card bg-light mb-4">
                    <div className="card-body">
                      <h3 className="mb-3">Archives</h3>
                      <ul className="list-unstyled mb-0 fs-5">
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            August 2020
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            July 2020
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            June 2020
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            May 2020
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-inherit">
                            <i className="bi bi-arrow-right-circle me-2 text-muted fs-6" />
                            April 2020
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  tags */}
                  <div className="card bg-light ">
                    <div className="card-body">
                      <h3 className="mb-3">Tags</h3>
                      {/* widget title */}
                      <a
                        href="#!"
                        title="Car Loan"
                        className="btn btn-primary btn-xs mb-2"
                      >
                        Car Loan
                      </a>{" "}
                      <a
                        href="#!"
                        title="Education"
                        className="btn btn-primary btn-xs mb-2"
                      >
                        Education
                      </a>{" "}
                      <a
                        href="#!"
                        title="Home"
                        className="btn btn-primary btn-xs mb-2"
                      >
                        Home
                      </a>{" "}
                      <a
                        href="#!"
                        title="Debt Consolidation"
                        className="btn btn-primary btn-xs mb-2"
                      >
                        Debt Consolidation
                      </a>{" "}
                      <a
                        href="#!"
                        title="Business"
                        className="btn btn-primary btn-xs mb-2"
                      >
                        Business
                      </a>{" "}
                      <a
                        href="#!"
                        title="Education"
                        className="btn btn-primary btn-xs mb-2"
                      >
                        Education
                      </a>
                    </div>
                  </div>
                  {/* /.widget well bg */}
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

export default Blog;
