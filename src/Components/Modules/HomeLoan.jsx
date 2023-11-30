import React, { useEffect, useState } from "react";
// import "./About.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "bootstrap";

const HomeLoan = () => {
  useEffect(() => {
    // Initialize the Tiny Slider
    const slider = tns({
      container: ".sliderFirst",
      items: 1,
      controlsContainer: "#sliderFirstControls",
      prevButton: ".prev",
      nextButton: ".next",
    });
    document.querySelector(".tns-nav").style.display = "none";
    // Clean up on component unmount
    return () => {
      slider.destroy();
    };
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const [formData, setFormData] = useState(
    {
    name: "",
    email: "",
    phone: "",
    password: "",
    application_no: "",
    salary: "",
    loan_type: "",
    user_loan_type:'',
    employment_type: "null",
    address: "",
    business_address: "",
    bank_name: "",
    account_type: "",
    account_number: "",
    ifsc_code: "",
    branch_name: "",
    pan_no: "",
    adhar_no: "",
    dob: "",
    voter_id: "",
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
    reference_name: "null",
    // need to this data add
    bank_nbfc: "",
    emi: "",
    pandding: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field
  };



  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    // Ensure the selected file is a PDF file
    if (file && file.type === "application/pdf") {
      // Update the specific field in formData
      setFormData({
        ...formData,
        [fieldName]: file,
      });
    } else {
      // Handle the case where the selected file is not a PDF
      alert("Please select a PDF file.");
      e.target.value = null; // Clear the input field
    }
  };
 
  
  const validateForm = () => {
    const newErrors = {};

    // Add your validation logic here
    if (!formData.name) {
      newErrors.name = "Name is Requried";
    }
    if (!formData.email) {
      newErrors.email = "Email is Requried";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is Requried";
    }
    if (!formData.application_no) {
      newErrors.application_no = "Application is Requried";
    }

    if (!formData.password) {
      newErrors.password = "Password is Requried";
    }
  
    if (!formData.loan_type) {
      newErrors.loan_type = "Select Loan Types is Requried";
    }

    if (!formData.employment_type) {
      newErrors.employment_type = "Employment is Requried";
    }
    if (!formData.address) {
      newErrors.address = "Address is Requried";
    }
    
    if (!formData.business_address) {
      newErrors.business_address = "Business_Address is Requried";
    }
    if (!formData.bank_name) {
      newErrors.bank_name = " Bank name is Requried";
    }
    if (!formData.account_type) {
      newErrors.account_type = "account type  is Requried";
    }
    if (!formData.user_loan_type) {
      newErrors.user_loan_type= "Loan Type  is Requried";
    }
    if (!formData.account_number) {
      newErrors.account_number = "Account Number is Requried";
    }
    if (!formData.ifsc_code) {
      newErrors.ifsc_code = "Ifsc_code is Requried";
    }
    if (!formData.branch_name) {
      newErrors.branch_name = "Branch_name is Requried";
    }
    if (!formData.salary) {
      newErrors.salary = "Salary is Requried";
    }
    if (!formData.bank_nbfc) {
      newErrors.bank_nbfc = "Bank_nbfc is Requried";
    }
    if (!formData.emi) {
      newErrors.emi = "EMI is Requried";
    }
    if (!formData.pandding) {
      newErrors.pandding = "Pending is Requried";
    }
    if (!formData.pan_no) {
      newErrors.pan_no = "Pancard is Requried";
    }
    if (!formData.adhar_no) {
      newErrors.adhar_no = "Adhar_no is Requried";
    }
    if (!formData.dob) {
      newErrors.dob = "dob is Requried";
    }
    if (!formData.voter_id) {
      newErrors.voter_id = "VoterId is Requried";
    }
    if (!formData.three_month_salary) {
      newErrors.three_month_salary = "Files is Requried";
    }
    if (!formData.itr) {
      newErrors.itr = "ITR Files is Requried";
    }
    if (!formData.income_proof) {
      newErrors.income_proof = "Income Files is Requried";
    }
    if (!formData.registration_proof) {
      newErrors.registration_proof = "Regproof is Requried";
    }

    // Add more validations for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData)

    setFormData(
      {
      name: "",
      email: "",
      phone: "",
      password: "",
      application_no: "",
      salary: "",
      loan_type: "",
      user_loan_type:'',
      employment_type: "null",
      address: "",
      business_address: "",
      bank_name: "",
      account_type: "",
      account_number: "",
      ifsc_code: "",
      branch_name: "",
      remark: "null",
      pan_no: "",
      adhar_no: "",
      dob: "",
      voter_id: "",
      three_month_salary: null,
      itr: null,
      income_proof: null,
      registration_proof: null,
      // need to this data add
      bank_nbfc: "",
      emi: "",
      pandding: "",
    })
    if (validateForm()) {
     console.log(formData)
      // If form validation fails, do not submit
      return;
    }

   
    const formBody = new FormData();
    for (const key in formData) {
      formBody.append(key, formData[key]);
    }
    formBody.append("reference_name","null")

    // Make the API call
    fetch("http://192.168.1.19:8000/loan/api/formLoan/", {
      method: "POST",
      body: formBody,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        // Handle the API response as needed
         alert("sussefully stored")
        console.log("Form Data:", formData);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });

  };
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
                <div className="py-22 businessloan-banner-one">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div>
                          {/* slider-captions */}
                          <h1 className="display-2 text-white fw-bold">
                            Hassle free Small Home loan up to $2000.00
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
                <div className="py-22 businessloan-banner-two ">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9 col-md-12 col-sm-12 col-12">
                        <div>
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
                <div className="py-22 businessloan-banner-three">
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

        <section className="pt-3 pb-6 ">
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

                  <section className="" id="section-apply">
                    <div className="container">
                      <div className="my-2">
                        <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                          <div className="mb-4 text-center">
                            {/* section title start*/}
                            <h1 className="mb-0">Loan Application Form </h1>
                            <p>
                              Now apply for a Home Loan online, All you need to
                              do is provide your details below application form.
                            </p>
                          </div>
                        </div>
                        <form>
                          <div>
                            {/* Text input*/}
                            <div className="row">
                              <h3> User Details </h3>

                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  >
                                    name
                                  </label>
                                  <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className="form-control"
                                  />
                                     {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="email"
                                  >
                                    Email
                                  </label>
                                  <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="form-control"
                                  />
                                   {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Phone
                                  </label>
                                  <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone"
                                    className="form-control"
                                  />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  ></label>
                                  <input
                                    id="application_no"
                                    name="application_no"
                                    type="text"
                                    value={formData.application_no}
                                    onChange={handleInputChange}
                                    placeholder="Application No"
                                    className="form-control"
                                  />
                                    {errors.application_no && <div className="text-danger">{errors.application_no}</div>}
                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pasword
                                  </label>
                                  <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                    className="form-control"
                                  />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}

                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select
                                    id="user_loan_type"
                                    name="user_loan_type"
                                    className="form-select"                               
                                    value={formData.user_loan_type}
                                    onChange={handleInputChange}

                                  >
                                   
                                    <option value="" disabled selected>
                                      Select a Type of Loan
                                    </option>
                                    <option value="home">Home Loan</option>
                                    <option value="student">
                                      Student Loan
                                    </option>
                                    <option value="personal">
                                      Personal Loan
                                    </option>
                                    <option value="Car">Car Loan</option>
                                    <option value="Education">
                                      Education Loan
                                    </option>
                                    <option value="Gold">Gold Loan</option>
                                    <option value="Business">
                                      Business Loan
                                    </option>
                                    <option value="Refinance">
                                      Refinance Loan
                                    </option>
                                  </select>
                                  {errors.user_loan_type && <div className="text-danger">{errors.user_loan_type}</div>}
                                </div>
                              </div>
                              {/* <div className="py-2">
                                <span className="mx-4">
                                  Are you Salaried or Self Employed?
                                  <span className="mx-2">
                                    <input
                                      type="radio"
                                      id=""
                                      name=""
                                      className="m-2"
                                      value="Yes"
                                      checked={selectedLanguage === "Yes"}
                                      onChange={handleLanguageChange}
                                    />
                                    <label htmlFor="html">Yes</label>
                                  </span>
                                  <span className="mx-2">
                                    <input
                                      type="radio"
                                      id="chexk"
                                      name=""
                                      className="m-2"
                                      value="No"
                                      checked={selectedLanguage === "No"}
                                      onChange={handleLanguageChange}
                                    />
                                    <label htmlFor="css">No</label>
                                  </span>
                                  <br />
                                </span>
                             

                              </div> */}

                              {/* Select Basic */}

                              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="message"
                                  ></label>
                                  <textarea
                                    className="form-control"
                                    id="address"
                                    rows={3}
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Residence Address"
                                    defaultValue={""}
                                  />
                                  {errors.address && <div className="text-danger">{errors.address}</div>}

                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="message"
                                  ></label>
                                  <textarea
                                    className="form-control"
                                    id="business_address"
                                    rows={3}
                                    name="business_address"
                                    value={formData.business_address}
                                    onChange={handleInputChange}
                                    placeholder="Business Address"
                                    defaultValue={""}
                                  />
                                  {errors.business_address && <div className="text-danger">{errors.business_address }</div>}

                                </div>
                              </div>

                              <h3> Banking Details </h3>

                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  >
                                    Name of Bank
                                  </label>
                                  <input
                                    id="bank_name"
                                    name="bank_name"
                                    type="text"
                                    value={formData.bank_name}
                                    onChange={handleInputChange}
                                    placeholder="Name of Bank"
                                    className="form-control"
                                  />
                                  {errors.bank_name && <div className="text-danger">{errors.bank_name }</div>}

                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select
                                    id="account_type"
                                    name="account_type"
                                    className="form-select"
                                    value={formData.account_type}
                                    onChange={handleInputChange}
                                  >
                                    <option value="" disabled selected>
                                      Types of Account
                                    </option>
                                    <option value="home">
                                      Current Account
                                    </option>
                                    <option value="student">
                                      Saving Account
                                    </option>
                                    <option value="personal">
                                      Salary Account
                                    </option>
                                    <option value="Car">
                                      Fixed Deposit Account
                                    </option>
                                    <option value="Education">
                                      NRI Account
                                    </option>
                                    <option value="Gold">DEMAT Account</option>
                                  </select>
                                  {errors.account_type && <div className="text-danger">{errors.account_type }</div>}

                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="phone"
                                  >
                                    Account Number
                                  </label>
                                  <input
                                    id="account_number"
                                    name="account_number"
                                    type="text"
                                    value={formData.account_number}
                                    onChange={handleInputChange}
                                    placeholder="Account Number"
                                    className="form-control"
                                  />
                                  {errors.account_number && <div className="text-danger">{errors.account_number}</div>}

                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="name"
                                  ></label>
                                  <input
                                    id="ifsc_code"
                                    name="ifsc_code"
                                    type="text"
                                    value={formData.ifsc_code}
                                    onChange={handleInputChange}
                                    placeholder="IFSC Code"
                                    className="form-control"
                                  />
                                  {errors.ifsc_code && <div className="text-danger">{errors.ifsc_code}</div>}

                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Branch Name
                                  </label>
                                  <input
                                    id="branch_name"
                                    name="branch_name"
                                    type="text"
                                    value={formData.branch_name}
                                    onChange={handleInputChange}
                                    placeholder="Branch Name"
                                    className="form-control"
                                  />
                                  {errors.branch_name && <div className="text-danger">{errors.branch_name}</div>}

                                </div>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Salary
                                  </label>
                                  <input
                                    id="salary"
                                    name="salary"
                                    type="text"
                                    value={formData.salary}
                                    onChange={handleInputChange}
                                    placeholder="Salary"
                                    className="form-control"
                                  />
                                  {errors.salary && <div className="text-danger">{errors.salary}</div>}

                                </div>
                              </div>

                              <h3>Loan Repyment Details </h3>

                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Name Of Bank NBFC
                                  </label>
                                  <input
                                    id="bank_nbfc"
                                    name="bank_nbfc"
                                    type="text"
                                    value={formData.bank_nbfc}
                                    onChange={handleInputChange}
                                    placeholder="Name OfBank NBFC"
                                    className="form-control"
                                  />
                                  {errors.bank_nbfc && <div className="text-danger">{errors.bank_nbfc}</div>}

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <select
                                    id="loan_type"
                                    name="loan_type"
                                    className="form-select"
                                    value={formData.loan_type}
                                    onChange={handleInputChange}
                                  >
                                    <option value="" disabled selected>
                                      Type of Loan
                                    </option>
                                    <option value="home">Home Loan</option>
                                    <option value="student">
                                      Student Loan
                                    </option>
                                    <option value="personal">
                                      Personal Loan
                                    </option>
                                    <option value="Car">Car Loan</option>
                                    <option value="Education">
                                      Education Loan
                                    </option>
                                    <option value="Gold">Gold Loan</option>
                                    <option value="Business">
                                      Business Loan
                                    </option>
                                    <option value="Refinance">
                                      Refinance Loan
                                    </option>
                                  </select>
                                  {errors.loan_type && <div className="text-danger">{errors.loan_type}</div>}

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    EMI
                                  </label>
                                  <input
                                    id="emi"
                                    name="emi"
                                    type="text"
                                    value={formData.emi}
                                    onChange={handleInputChange}
                                    placeholder="EMI"
                                    className="form-control"
                                  />
                                  {errors.emi && <div className="text-danger">{errors.emi}</div>}

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Pending
                                  </label>
                                  <input
                                    id="pandding"
                                    name="pandding"
                                    type="text"
                                    value={formData.pandding}
                                    onChange={handleInputChange}
                                    placeholder="Pending"
                                    className="form-control"
                                  />
                                  {errors.pandding && <div className="text-danger">{errors.pandding}</div>}

                                </div>
                              </div>

                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Applicant Pan No.
                                  </label>
                                  <input
                                    id="pan_no"
                                    name="pan_no"
                                    type="text"
                                    value={formData.pan_no}
                                    onChange={handleInputChange}
                                    placeholder="Applicant Pan No."
                                    className="form-control"
                                  />
                                  {errors.pan_no && <div className="text-danger">{errors.pan_no}</div>}

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Adhar No.
                                  </label>
                                  <input
                                    id="adhar_no"
                                    name="adhar_no"
                                    type="text"
                                    value={formData.adhar_no}
                                    onChange={handleInputChange}
                                    placeholder="Adhar No."
                                    className="form-control"
                                  />
                                  {errors.adhar_no && <div className="text-danger">{errors.adhar_no}</div>}

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Applicant DOB
                                  </label>
                                  <input
                                    id="dob"
                                    name="dob"
                                    type="text"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    placeholder="Applicant DOB"
                                    className="form-control"
                                  />
                                  {errors.dob && <div className="text-danger">{errors.dob}</div>}

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  >
                                    Voter Id No.
                                  </label>
                                  <input
                                    id="voter_id"
                                    name="voter_id"
                                    type="text"
                                    value={formData.voter_id}
                                    onChange={handleInputChange}
                                    placeholder="Voter Id No."
                                    className="form-control"
                                  />
                                  {errors.voter_id && <div className="text-danger">{errors.voter_id}</div>}

                                </div>
                              </div>

                              <h3>Details of Profession </h3>

                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Three Month Salary Slip
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                 
                                  <input
                                    id="three_month_salary"
                                    name="three_month_salary"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e,"three_month_salary")
                                    }
                                    className="form-control"
                                  />
                                    {errors.three_month_salary && <div className="text-danger">{errors.three_month_salary}</div>}
                                  {formData.three_month_salary && (
                                    <p>
                                      Selected File:{" "}
                                      {formData.three_month_salary.name}
                                    </p>
                                    
                                  )}
                                

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Last Two Year ITR
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="itr"
                                    name="itr"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "itr")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                  {errors.itr && <div className="text-danger">{errors.itr}</div>}
                                    {formData.itr && (
                                    <p>
                                      Selected File:{" "}
                                      {formData.itr.name}
                                    </p>
                                  )}
                                  

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Other Income Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="income_proof"
                                    name="income_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "income_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                      {errors.income_proof && <div className="text-danger">{errors.income_proof}</div>}
                                    {formData.income_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData.income_proof.name}
                                    </p>
                                  )}
                              

                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className="mb-3">
                                  <h6 className="text-center">
                                    Business Registration Proof
                                  </h6>
                                  <label
                                    className="sr-only form-label mb-0"
                                    htmlFor="text"
                                  ></label>
                                  <input
                                    id="registration_proof"
                                    name="registration_proof"
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, "registration_proof")
                                    }
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                  />
                                     {errors.registration_proof && <div className="text-danger">{errors.registration_proof}</div>}
                                   {formData.registration_proof && (
                                    <p>
                                      Selected File:{" "}
                                      {formData.registration_proof.name}
                                    </p>
                                  )}
                               

                                </div>
                              </div>

                              {/* Button */}
                              <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                                <button
                                 onClick={handleClick}
                                  type="submit"
                                  className="btn btn-primary mb-4"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
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
