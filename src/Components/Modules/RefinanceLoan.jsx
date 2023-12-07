import React, { useState } from "react";
import './About.css';

const RefinanceLoan = () => {


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
    employment_type: "",
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
    reference_name: "",
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
      employment_type: null,
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
                    Average lifetime savings of 5,767 when members refinance to
                    a shorter term.
                  </p>
                 
                </div>
                {/* /.hero-caption */}
              </div>
              <div className="offset-xl-2 col-xl-5 offset-lg-2 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-end justify-content-end">
                <div className="d-flex bg-dark rounded-top-md text-white p-4">
                  
                 
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
        <section className="py-4 bg-white">
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






        



      </main>
    </>
  );
};

export default RefinanceLoan;
