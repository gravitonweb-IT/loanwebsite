import React, { useState } from "react";
import "./About.jsx";
import Featureimg from "../../assets/images/background/lp-feature-img.jpg";

const CarLone = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    application_no: "",
    salary: "",
    loan_type: "",
    employment_type: "",
    address: "",
    business_address: "",
    bank_name: "",
    account_type: "",
    account_number: "",
    ifsc_code: "",
    branch_name: "",
    remark: "",
    pan_no: "",
    adhar_no: "",
    dob: "",
    voter_id: "",
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
    reference_name: "",

    // need to this data add
    bank_nbfc: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field
  };

  const validateForm = () => {
    const newErrors = {};

    // Add your validation logic here
    if (!formData.name) {
      newErrors.name = "Name is ";
    }

    // Add more validations for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log(formData);
      // If form validation fails, do not submit
      return;
    }

    // Prepare FormData for file uploads
    const formBody = new FormData();
    for (const key in formData) {
      formBody.append(key, formData[key]);
    }
  };

  return (
    <>
      <main>
        <section className="py-12 Car-header-page">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0">
                <div>
                  <h2 className="display-2 text-white fw-bold mb-3">
                    Instant Approval For Car Loan{" "}
                  </h2>
                  <p className="text-white mb-5 lead ">
                    Lowest Interest Rates - Calculate EMI - Check Eligibility -
                    Instant e-Approval - Special Offers{" "}
                  </p>
                  <div className="text-white mb-5">
                    <div className="mb-3">
                      <span className="display-4 me-2">8.70%</span>
                      <small className="text-white">
                        Starting Rate for New Car
                      </small>
                    </div>
                  </div>
                  <a href="#!" className="btn btn-primary">
                    Why Choose us ?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mb-lg-0">
                <img
                  src={Featureimg}
                  alt="Borrow - Loan Company Responsive Website Templates"
                  className="img-fluid rounded-3 w-100 mb-2 mb-lg-0"
                />
              </div>
              <div className="offset-lg-1 col-lg-5 col-md-12">
                <div className="mb-8">
                  <h1>Reason to Choose us</h1>
                  <p>
                    We offer award-winning, low-rate car loans with no ongoing
                    fees,saving our customers thousands of dollars.
                  </p>
                </div>
                <div className="d-flex mb-3">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Easy Loan Approvals</h3>
                    <p>
                      {" "}
                      Cum sociis natoque penatibus et nis dis parturgnis dis
                      parturient montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Lowest Possible Prices</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consng elit estibulum
                      scelerisque imperdiet lacus.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Hassle free</h3>
                    <p>
                      Suspendisse potenti. Nunc ut tellus iquam imperdiet lacus
                      s aliquam felis tincidunt.{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="fs-3 text-primary">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <div className="ms-3">
                    <h3>Secure Loan Processs</h3>
                    <p>
                      Nulla ornare bibendum laoreteger tempus alesuada libero
                      imperdie fermentum senc a ornare risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-lg-16 py-10 bg-white border-bottom border-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="mb-8 text-center">
                  <h1>Customer Reviews</h1>
                  <p>
                    Porttitor aceseu efficitur non lorem acese its do
                    remmselorem ipusm dolro sit commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {/* testimonial simple start */}
                <div className="mb-8 mb-lg-0 text-center">
                  <p className="lead fst-italic mb-0">
                    “I loved the customer service you guys provided me. That was
                    very nice and patient with questions I had. I would really
                    like definitely come back here”
                  </p>
                  <div>
                    <div className="mt-5">
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i
                        className="bi bi-star-half text-warning
"
                      />
                    </div>
                    <span className="text-dark fw-semi-bold fs-5">
                      Donny J. Griffin (baroda)
                    </span>
                  </div>
                </div>
              </div>
              {/* /.testimonial simple start */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {/* testimonial simple start */}
                <div className="mb-8 mb-lg-0 text-center">
                  <p className="lead fst-italic mb-0">
                    “We came out of their offices very happy with their service.
                    They treated us very kind. Definite will come back. The
                    waiting time was very appropriate.”
                  </p>
                  <div>
                    <div className="mt-5">
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i
                        className="bi bi-star-fill text-warning
"
                      />
                    </div>
                    <span className="text-dark fw-semi-bold fs-5">
                      Ryder Lothian (A’bad)
                    </span>
                  </div>
                </div>
              </div>
              {/* /.testimonial simple start */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                {/* testimonial simple start */}
                <div className="mb-8 mb-lg-0 text-center">
                  <p className="lead fst-italic mb-0">
                    "I want to express my appreciation for assistance that you
                    provided over several years to help resolve a difficult
                    financial situation when my debt was out of control”
                  </p>
                  <div>
                    <div className="mt-5">
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star-fill text-warning" />{" "}
                      <i className="bi bi-star text-warning" />{" "}
                      <i
                        className="bi bi-star text-warning
"
                      />
                    </div>
                    <span className="text-dark fw-semi-bold fs-5">
                      Brock Lambrick (surat)
                    </span>
                  </div>
                </div>
              </div>
              {/* /.testimonial simple start */}
            </div>
          </div>
        </section>
        <section className="" id="section-apply">
          <div className="container">
            <div className="my-2">
              <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="mb-4 text-center">
                  {/* section title start*/}
                  <h1 className="mb-0">Loan Application Form </h1>
                  <p>
                    Now apply for a Home Loan online, All you need to do is
                    provide your details below application form.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
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
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select id="city" name="city" className="form-select">
                          <option value="" disabled selected>
                            Select a Type of Loan
                          </option>
                          <option value="home">Home Loan</option>
                          <option value="student">Student Loan</option>
                          <option value="personal">Personal Loan</option>
                          <option value="Car">Car Loan</option>
                          <option value="Education">Education Loan</option>
                          <option value="Gold">Gold Loan</option>
                          <option value="Business">Business Loan</option>
                          <option value="Refinance">Refinance Loan</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-2">
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
                    </div>

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
                          <option value="home">Current Account</option>
                          <option value="student">Saving Account</option>
                          <option value="personal">Salary Account</option>
                          <option value="Car">Fixed Deposit Account</option>
                          <option value="Education">NRI Account</option>
                          <option value="Gold">DEMAT Account</option>
                        </select>
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
                          placeholder="Remarks"
                          className="form-control"
                        />
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
                          <option value="student">Student Loan</option>
                          <option value="personal">Personal Loan</option>
                          <option value="Car">Car Loan</option>
                          <option value="Education">Education Loan</option>
                          <option value="Gold">Gold Loan</option>
                          <option value="Business">Business Loan</option>
                          <option value="Refinance">Refinance Loan</option>
                        </select>
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
                          id="number"
                          name="number"
                          type="text"
                          placeholder="EMI"
                          className="form-control"
                        />
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
                          id="number"
                          name="number"
                          type="text"
                          placeholder="Pending"
                          className="form-control"
                        />
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
                          id="number"
                          name="number"
                          type="text"
                          placeholder="Applicant Pan No."
                          className="form-control"
                        />
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
                          value={formData.three_month_salary}
                          onChange={handleFileChange}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">Last Two Year ITR</h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="itr"
                          name="itr"
                          type="file"
                          value={formData.itr}
                          onChange={handleFileChange}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <h6 className="text-center">Other Income Proof</h6>
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        ></label>
                        <input
                          id="income_proof"
                          name="income_proof"
                          type="file"
                          value={formData.income_proof}
                          onChange={handleFileChange}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
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
                          value={formData.registration_proof}
                          onChange={handleFileChange}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* Button */}
                    <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                      <button type="submit" className="btn btn-primary mb-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-lg-16 py-10">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-md-2 col-md-8 offset-md-2 col-md-8 col-sm-12 col-12">
                <div className="mb-8 text-center">
                  {/* section title*/}
                  <h1 className="mb-2">We are Here to Help You</h1>
                  <p className="lead">
                    Nulla rutrum tellus vel mauris tristique gravida in
                    vulputate lla dictum porttitor diam, ut molestie lorem
                    mattis.
                  </p>
                </div>
                {/* /.section title*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9 ">
                    <div className="mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-calendar3 text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </div>
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      Apply For Loan
                    </h4>
                    <p className="mb-4">
                      Looking to buy a car or home loan? then apply for loan
                      now.
                    </p>
                    <a
                      href="#!"
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                    >
                      Get Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card mb-3 mb-lg-0 text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    <div className="mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-telephone text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </div>
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      Call us at{" "}
                    </h4>
                    <h1 className="fs-3 mb-0">800-123-456 / 789 </h1>
                    <p>
                      {" "}
                      <a href="#" className="fs-5">
                        lnfo@loanadvisor.com
                      </a>
                    </p>
                    <a
                      href="#!"
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card mb-3 mb-lg-0  text-center smooth-shadow-sm">
                  <div className="card-body p-9">
                    <div className="mb-6">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-people text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                    </div>
                    <h4 className="mb-3 text-uppercase fw-semi-bold">
                      Talk to Advisor
                    </h4>
                    <p className="mb-4">
                      Need to loan advise? Talk to our Loan advisors.
                    </p>
                    <a
                      href="#!"
                      className="btn-link border-bottom border-primary border-2 fw-bold fs-5"
                    >
                      Meet The Advisor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarLone;
