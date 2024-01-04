import React, { useState } from "react";
import "./About.css";

const GoldLoan1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    application_no: "",
    dob: "",
    password: "",
    adhar_no: "",
    voter_id: "",
    address: "",
    business_address: "",
    pan_no: "",
    spouse_name: '',
    spouse_dob: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null }); // Clear errors for the changed field Spouse_dob
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
    if (!formData.pan_no) {
      newErrors.pan_no = " pancard no is Requried";
    }
    if (!formData.password) {
      newErrors.password = "Password is Requried";
    }
    if (!formData.address) {
      newErrors.address = "Address is Requried";
    }

    if (!formData.business_address) {
      newErrors.business_address = "Business_Address is Requried";
    }
    if (!formData.dob) {
      newErrors.dob = "DOB is Requried";
    }
    if (!formData.voter_id) {
      newErrors.voter_id = "VoterId is Requried";
    }
    if (!formData.adhar_no) {
      newErrors.adhar_no = "Adhar no is Requried";
    }
    if (!formData.spouse_name) {
      newErrors.spouse_name = "Spouse Name is Requried";
    }
    if (!formData.spouse_dob) {
      newErrors.spouse_dob = "Spouse DOB is Requried";
    }

    // Add more validations for other fields spouse_name

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // You can perform additional actions here, such as submitting the form data
      // For example: submitFormData(formData);
      
      // Reset the form data after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        application_no: "",
        dob: "",
        password: "",
        adhar_no: "",
        voter_id: "",
        address: "",
        business_address: "",
        pan_no: "",
        spouse_name:"",
        Spouse_dob: '',
      });
    }
  };



  return (
    <>
      <main>
        {/* hero-wrapper */}
        <section className="refinancel-header-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                {/* hero-caption */}
                <div className="py-20 ">
                  <h1 className="display-3 fw-bold text-white">
                    Easily  gold Loan
                  </h1>
                  <p className="text-white mb-5">
                    Average lifetime savings of 5,767 when members Gold Loan to
                    a shorter term.
                  </p>
                </div>
                {/* /.hero-caption */}
              </div>
              <div className="offset-xl-2 col-xl-5 offset-lg-2 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-end justify-content-end">
                <div className="d-flex bg-dark rounded-top-md text-white p-4"></div>
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
                  <h1>Why Refinance gold Loan ?</h1>
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
              ></div>
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
            <div className="col-lg-6 d-none d-md-block d-lg-block py-lg-22 refinancel-buttom-page"></div>
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
                    Now apply for a Gold Loan online, All you need to do is
                    provide your details below application form.
                  </p>
                </div>
              </div>
              <form>
                <div>
                  {/* Text input*/}
                  <div className="row">
                    <h3> User Details </h3>

                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
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
                        {errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
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
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
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
                        {errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
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
                        {errors.application_no && (
                          <div className="text-danger">
                            {errors.application_no}
                          </div>
                        )}
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
                          placeholder=" Pan Card No."
                          className="form-control"
                        />
                        {errors.pan_no && (
                          <div className="text-danger">{errors.pan_no}</div>
                        )}
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
                        {errors.adhar_no && (
                          <div className="text-danger">{errors.adhar_no}</div>
                        )}
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
                        {errors.dob && (
                          <div className="text-danger">{errors.dob}</div>
                        )}
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
                        {errors.voter_id && (
                          <div className="text-danger">{errors.voter_id}</div>
                        )}
                      </div>
                    </div>
                
                    <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        >
                      Spouse Name 
                        </label>
                        <input
                          id="spouse_name"
                          name="spouse_name"
                          type="text"
                          value={formData.spouse_name}
                          onChange={handleInputChange}
                          placeholder="spouse_name."
                          className="form-control"
                        />
                        {errors.spouse_name && (
                          <div className="text-danger">{errors.spouse_name}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        >
                           Spouse DOB
                        </label>
                        <input
                          id="spouse_dob"
                          name="spouse_dob"
                          type="text"
                          value={formData.spouse_dob}
                          onChange={handleInputChange}
                          placeholder="Sopouse DOB"
                          className="form-control"
                        />
                        {errors.spouse_dob && (
                          <div className="text-danger">{errors.spouse_dob}</div>
                        )}
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
                          id="address"
                          rows={5}
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Residence Address"
                          defaultValue={""}
                        />
                        {errors.address && (
                          <div className="text-danger">{errors.address}</div>
                        )}
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
                          rows={5}
                          name="business_address"
                          value={formData.business_address}
                          onChange={handleInputChange}
                          placeholder="Business Address"
                          defaultValue={""}
                        />
                        {errors.business_address && (
                          <div className="text-danger">
                            {errors.business_address}
                          </div>
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

export default GoldLoan1;
