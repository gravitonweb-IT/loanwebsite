import React, { useState } from "react";
import './About.css';

const RefinanceLoan = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
 


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    application_no: '',
    salary: '',
    loan_type: '',
    employment_type: '',
    address: '',
    business_address: '',
    bank_name: '',
    account_type: '',
    account_number: '',
    ifsc_code: '',
    branch_name: '',
    remark: '',
    pan_no: '',
    adhar_no: '',
    dob: '',
    voter_id: '',
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
    reference_name: '',
    
// need to this data add
    bank_nbfc: '',
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
      newErrors.name = 'Name is ';
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
  }
  return (
    <>
      <main>
        {/* hero-wrapper */}
        <section
        className="refinancel-header-page"
       
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                {/* hero-caption */}
                <div className="py-20 ">
                  <h1 className="display-3 fw-bold text-white">
                    Easily Refinance Student Loans
                  </h1>
                  <p className="text-white mb-5">
                    Average lifetime savings of $5,767 when members refinance to
                    a shorter term.
                  </p>
                  <a href="#!" className="btn btn-warning ">
                    Find my rate
                  </a>
                </div>
                {/* /.hero-caption */}
              </div>
              <div className="offset-xl-2 col-xl-5 offset-lg-2 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-end justify-content-end">
                <div className="d-flex bg-dark rounded-top-md text-white p-4">
                  <div className="me-4">
                    <span className="fs-5 fw-semi-bold text-white-50">
                      FIXED RATES
                    </span>
                    <h1 className="text-white mb-0 fw-bold">3.20–7.25%</h1>
                  </div>
                  <div>
                    <span className="fs-5 fw-semi-bold text-white-50">
                      VARIABLE RATES
                    </span>
                    <h1 className="text-white mb-0 fw-bold">2.57–7.25%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.hero-wrapper */}
        <section className="py-lg-14 py-10 bg-light">
          <div className="container">
            <div className="row">
              <div
                className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8
                        col-md-12 col-sm-12 col-12"
              >
                <div className="mb-8 text-center">
                  <h1>Why Refinance Student Loans ?</h1>
                  <p>
                    A Clear and simple path to financial freedom onsectetur
                    accumsan quam.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center px-3 mb-6">
                  <div className="mb-4">
                    <i
                      className="icon-034-loan fs-1 text-primary
                                "
                    />
                  </div>
                  <h3 className="mb-2">Lower Monthly Payments</h3>
                  <p>
                    Sed ac turpu nisl cimcursus aeget nuusce vhicula sapien
                    nuncsit amet lorem ipsum finibusas.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center px-3 mb-6">
                  <div className="mb-4">
                    {" "}
                    <i
                      className="icon-028-piggy-bank fs-1 text-primary
                                "
                    />
                  </div>
                  <h3 className="mb-2">Save money for the future</h3>
                  <p>
                    Nullam suscipielit a impediet comodo elite xfiibus mauris
                    selaoreet simple dummy content jaliquam.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center px-3 mb-6">
                  <div className="mb-4">
                    {" "}
                    <i
                      className="icon-027-laptop fs-1 text-primary
                                "
                    />
                  </div>
                  <h3 className="mb-2">No Application fee </h3>
                  <p>
                    Donec sagittis massa nulla faucibus pretium donecute ligula
                    sitamet simple dummy lentum.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center px-3 mb-6">
                  <div className="mb-4">
                    <i
                      className="icon-013-budget fs-1 text-primary
                                "
                    />
                  </div>
                  <h3 className="mb-2">Competeitive Rate</h3>
                  <p>
                    Curabitur consectetur ultrices leouis imperdiet quam
                    idaesent rhoncus tellus vel dignissim imperdiet.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center px-3 mb-6">
                  <div className="mb-4">
                    {" "}
                    <i
                      className="icon-044-bank fs-1 text-primary
                                "
                    />
                  </div>
                  <h3 className="mb-2">Federal + Private</h3>
                  <p>
                    Fusce interdum convallis eleifend. Curabitur vulputate lorem
                    orci, non ultrices est facilisis vel.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center px-3 mb-6">
                  <div className="mb-4">
                    {" "}
                    <i
                      className="icon-041-money-2 fs-1 text-primary
                                "
                    />
                  </div>
                  <h3 className="mb-2">Wealth Advisors</h3>
                  <p>
                    Donec tempor tortor sit amet elit sodalesat diam facilisis
                    quam lobortis sodales. Donec a felis nunc.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10 bg-primary">
          <div className="container">
            <div className="row">
              <div
                className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8
                        col-md-12 col-sm-12 col-12"
              >
                <div className="mb-10 text-center">
                  {/* section title start*/}
                  <h1 className="text-white mb-1">
                    Get refinanced in three easy steps
                  </h1>
                  <p className="text-white-50">
                    {" "}
                    A Clear and simple path to financial freedom. Consectetur,
                    accumsan quam.
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="d-flex">
                  <div>
                    <span className="bg-dark-primary text-white fw-semi-bold fs-3 icon-lg icon-shape rounded-circle">
                      1
                    </span>
                  </div>
                  <div className="ms-3">
                    <h2 className="text-white">Get pre-approved</h2>
                    <p className="text-white-50">
                      Pellentesque hendrerit nibh aliquet interdum purus lacinia
                      lectuurabitur in arcu nibh.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="d-flex">
                  <div>
                    {" "}
                    <span className="bg-dark-primary text-white fw-semi-bold fs-3 icon-lg icon-shape rounded-circle">
                      2
                    </span>
                  </div>
                  <div className="ms-3">
                    <h2 className="text-white">Select rate and term</h2>
                    <p className="text-white-50">
                      Nullam eget malesuada lectus. Quisque aliquam molestie
                      enim, eget luct consectetur lobortis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                <div className="d-flex">
                  <div>
                    {" "}
                    <span className="bg-dark-primary text-white fw-semi-bold fs-3 icon-lg icon-shape rounded-circle">
                      3
                    </span>
                  </div>
                  <div className="ms-3">
                    <h2 className="text-white">Verify and Get done</h2>
                    <p className="text-white-50">
                      Curabitur et magna nec sem imperdiet molestie. Nulla
                      rhoncus venenatis augue.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-4 col-12
                        text-center mt-6"
              >
                <a href="#!" className="btn btn-white">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-16 py-10 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-10 mb-lg-0">
                  <h1 className="mb-4">
                    Benefits of Borrow <br />
                    Refinance Student Loan
                  </h1>
                  <p>
                    Suspendisse quis pretium augue, ut suscipit odio. Maec enas
                    sed suscipit leo, et ultricies asellus euismod magna eget
                    lectus placerat gravida nec vitae purus.
                  </p>
                  <p>
                    In scelerisque, urna vel pellentesque varius, diam arcu
                    iaculis enim, sed mattis elit diam eu ex.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Find my rate
                  </a>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-4">
                  <div className="mb-4 d-flex">
                    <div>
                      <i className="bi bi-check-circle-fill fs-3 text-success" />
                    </div>
                    <div className="ms-3">
                      <h3>Lower Your Payments</h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin et eros eu urna venenatis viverra sed ex.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 d-flex">
                    <div>
                      <i className="bi bi-check-circle-fill fs-3 text-success" />
                    </div>
                    <div className="ms-3">
                      <h3>Simplify Your Finances</h3>
                      <p className="mb-0">
                        In scelerisque, urna vel pellentesque varius, diam arcu
                        iaculis enim, sed mattis elit diam eu ex.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 d-flex">
                    <div>
                      <i className="bi bi-check-circle-fill fs-3 text-success" />
                    </div>
                    <div className="ms-3">
                      <h3>Flexible Options</h3>
                      <p className="mb-0">
                        Nullam suscipielit a impediet comodo elite xfiibus
                        mauris selaoreet jaliquam.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 d-flex">
                    <div>
                      <i className="bi bi-check-circle-fill fs-3 text-success" />
                    </div>
                    <div className="ms-3">
                      <h3>No Originations Fees</h3>
                      <p className="mb-0">
                        Vestibulum ornare dapibus est eu luctus. Lorem ipsum
                        dolor sit amet adipiscing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="mb-6">
                  {/* section title start*/}
                  <h1>Students Loan rate</h1>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped text-center">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Term</th>
                        <th scope="col">Fixed</th>
                        <th scope="col">Variable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>5 Years</td>
                        <td>3.37%—5.55%</td>
                        <td>2.80%—4.89%</td>
                      </tr>
                      <tr>
                        <td>7 Years</td>
                        <td>4.02%—6.00%</td>
                        <td>3.30%—5.05%</td>
                      </tr>
                      <tr>
                        <td>10 Years</td>
                        <td>4.52%—6.40%</td>
                        <td>3.82%—5.32%</td>
                      </tr>
                      <tr>
                        <td>15 Years</td>
                        <td>5.05%—6.80%</td>
                        <td>4.11%—5.61%</td>
                      </tr>
                      <tr>
                        <td>20 year</td>
                        <td>5.56%—7.02%</td>
                        <td>4.40%—5.90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <a href="#!" className="btn btn-primary mt-6">
                    Check my rate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="mb-4 text-center">
                  {/* section title start*/}
                  <h1 className="mb-1">What our customer says</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
          </div>
        </section>
        <div className="bg-light-warning">
          {/* footer */}
          <div className="d-flex justify-content-between  align-items-center">
            <div className="col-lg-6 px-lg-12 px-xl-18 p-8">
              <p className="lead text-dark fw-semi-bold fst-italic">
                “Excellent, Fast and easy I m really happy. Estibulum rutrum
                aliquet sapien porta one nteueed auctor vellacus sollicitudin
                ultrienean congue vitaeeu eleife jesunes resounse”
              </p>
              <span>- Eula Hank, Company Name</span>
            </div>
            <div
              className="col-lg-6 d-none d-md-block d-lg-block py-lg-22 refinancel-buttom-page"
             
            ></div>
          </div>
        </div>
        <section className="py-lg-14 py-10 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="mb-8">
                  {/* section title start*/}
                  <h1>Frequently Asked Questions</h1>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-6">
                  <h3>How does the student loan refinancing process work?</h3>
                  <p>
                    Donec magna dolor, cursus ut euismod nec, maximus id tortor.
                    Nulla tincidunt pretium sem ut sagittis. Mauris rutrum metus
                    turpis, vitae blandit sapien elementum id.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-6">
                  <h3>Who should refinance?</h3>
                  <p>
                    Curabitur varius diam nec justo iaculis, eget egestas eros
                    interdum. Ut ut eros vitae eros tristique facilisis. Proin
                    suscipit nunc mattis, pretium arcu id, consequat quam.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-6">
                  <h3>Who raesent rhoncus tellus vel dignissim?</h3>
                  <p>
                    Praesent sodales urna enim, vel finibus mauris egestas quis.
                    Phase eros sit amet ullamcorper. Nullam eget malesuada
                    lectus. Quisque aliquam molestie enim, eget luctus mauris
                    consectetur lobortis.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-6">
                  <h3>Why should I refinance my student loan? </h3>
                  <p>
                    Morbi lectus risus, suscipit a rhoncus nec, posuere et
                    magna. Ut facilisis ex a enim luctus viverra. Suspendisse et
                    tellus et ex vehicula tristique nec sit amet nulla.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-6">
                  <h3>
                    Does the Borrow Student Loan refinance consolidate Federal
                    loans and private loans?
                  </h3>
                  <p>
                    Donec magna dolor, cursus ut euismod nec, maximus id tortor.
                    Nulla tincidunt pretium sem ut sagittis. Mauris rutrum metus
                    turpis, vitae blandit sapien elementum id.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mb-6">
                  <h3>How urabitur et magna nec sem imperdiet molestie.? </h3>
                  <p>
                    Praesent orci mauris, ultrices euismod dui at, elementum
                    maximus turpis. Vestibulum placerat luctus efficitur. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>
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
                              Now apply for a Home Loan online, All you need to
                              do is provide your details below application form.
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
                                  <select
                                    id="city"
                                    name="city"
                                    className="form-select"
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
                                    value={formData.itr}
                                    onChange={handleFileChange}
                                    placeholder="Last Three Month Salary Slip."
                                    className="form-control"
                                    
                                  />
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
                                <button
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






        <section className="py-12 bg-primary">
          <div className="container">
            <div className="row">
              <div
                className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8
                        col-md-12 col-sm-12 col-12"
              >
                <div className="text-center">
                  {/* section title start*/}
                  <h1 className="text-white">Get started in minutes</h1>
                  <p className="text-white-50 mb-4">
                    Nullam in semper leo, at elementum justo. In maximus rutrum
                    sollicitudin mauris.
                  </p>
                  <a href="#!" className="btn btn-white">
                    Check my rate
                  </a>
                </div>
                {/* /.section title start*/}
              </div>
            </div>
          </div>
        </section>



      </main>
    </>
  );
};

export default RefinanceLoan;
