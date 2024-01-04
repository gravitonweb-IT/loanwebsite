import React, { useState } from "react";
import "./About.css";

const PersonalLoan = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [dividendArr, setDividendArr] = useState([
    {
      bank_name: "",
      account_type: "",
      account_number: "",
      fast_remark: " ",
    },
  ]);

  const [textDisabld, setTextDisabld] = useState(false); // Assuming textDisabld is a state variable
  const [buyPrice, setBuyPrice] = useState(0); // Assuming buyPrice is a state variable
  const [error, setError] = useState(false); // Assuming error is a state variable
  const [errorMessage, setErrorMessage] = useState({}); // Assuming errorMessage is a state variable

  const handleAdd = () => {
    setDividendArr([
      ...dividendArr,
      {
        bank_name: "",
        account_type: "",
        account_number: "",
        fast_remark: " ",
      },
    ]);
  };
  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    console.log("value", e.target.value);
    const list = [...dividendArr];
    list[index][name] = value;
    setDividendArr(list);
  };

  const handleRemove = (index) => {
    if (dividendArr.length > 0) {
      const listArr = [...dividendArr];
      listArr.splice(index, 1);
      setDividendArr(listArr);
    }
  };





  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    application_no: "",
    salary: "",
    loan_type: "",
    user_loan_type: "",
    spouse_name: "",
    spouse_dob: "",
    address: "",
    business_address: "",
    bank_name: "",
    account_type: "",
    account_number: "",
    remark: "",
    pan_no: "",
    adhar_no: "",
    dob: "",
    voter_id: "",
    three_month_salary: null,
    itr: null,
    income_proof: null,
    registration_proof: null,
    bank_nbfc: "",
    emi: "",
    pandding: "",
    //Co_Application
    co_name: "",
    co_email: "",
    co_phone: "",
    co_application_no: "",
    co_salary: "",
    co_loan_type: "",
    co_user_loan_type: "",
    co_spouse_name: "",
    co_address: "",
    co_business_address: "",
    co_bank_name: "",
    co_account_type: "",
    co_account_number: "",
    co_remark: "",
    co_pan_no: "",
    co_adhar_no: "",
    co_dob: "",
    co_voter_id: "",
    co_bank_nbfc: "",
    co_emi: "",
    co_pandding: "",
    co_spouse_dob: "",
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
      newErrors.user_loan_type = "Loan Type  is Requried";
    }
    if (!formData.account_number) {
      newErrors.account_number = "Account Number is Requried";
    }
    if (!formData.spouse_dob) {
      newErrors.spouse_dob = "Spouse DOB is Requried";
    }
    if (!formData.spouse_name) {
      newErrors.spouse_name = "Spouse Name is Requried";
    }
    if (!formData.remark) {
      newErrors.remark = "Remark is Requried";
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

      // Co- Application
      if (!formData.co_name) {
        newErrors.co_name = "Name is Requried";
      }
      if (!formData.co_email) {
        newErrors.co_email = "Email is Requried";
      }
  
      if (!formData.co_phone) {
        newErrors.co_phone = "Phone is Requried";
      }
      if (!formData.co_application_no) {
        newErrors.co_application_no = "Application is Requried";
      }
  
      if (!formData.co_password) {
        newErrors.co_password = "Password is Requried";
      }
  
      if (!formData.co_loan_type) {
        newErrors.co_loan_type = "Select Loan Types is Requried";
      }
  
      if (!formData.co_address) {
        newErrors.co_address = "Address is Requried";
      }
  
      if (!formData.co_business_address) {
        newErrors.co_business_address = "Business_Address is Requried";
      }
      if (!formData.co_bank_name) {
        newErrors.co_bank_name = " Bank name is Requried";
      }
      if (!formData.co_account_type) {
        newErrors.co_account_type = "account type  is Requried";
      }
      if (!formData.co_user_loan_type) {
        newErrors.co_user_loan_type = "Loan Type  is Requried";
      }
      if (!formData.co_account_number) {
        newErrors.co_account_number = "Account Number is Requried";
      }
      if (!formData.co_spouse_dob) {
        newErrors.co_spouse_dob = "Spouse DOB is Requried";
      }
      if (!formData._cospouse_name) {
        newErrors.co_spouse_name = "Sopouse Name is Requried";
      }
      if (!formData.co_remark) {
        newErrors.co_remark = "Remark is Requried";
      }
      if (!formData.co_bank_nbfc) {
        newErrors.co_bank_nbfc = "Bank_nbfc is Requried";
      }
      if (!formData.co_emi) {
        newErrors.co_emi = "EMI is Requried";
      }
      if (!formData.co_pandding) {
        newErrors.co_pandding = "Pending is Requried";
      }
      if (!formData.co_pan_no) {
        newErrors.co_pan_no = "Pancard is Requried";
      }
      if (!formData.co_adhar_no) {
        newErrors.co_adhar_no = "Adhar_no is Requried";
      }
      if (!formData.co_dob) {
        newErrors.co_dob = "dob is Requried";
      }
      if (!formData.co_voter_id) {
        newErrors.co_voter_id = "VoterId is Requried";
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
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      application_no: "",
      salary: "",
      loan_type: "",
      user_loan_type: "",
      spouse_name: "",
      spouse_dob: "",
      address: "",
      business_address: "",
      bank_name: "",
      account_type: "",
      account_number: "",
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
       //Co_Application
    co_name: "",
    co_email: "",
    co_phone: "",
    co_application_no: "",
    co_salary: "",
    co_loan_type: "",
    co_user_loan_type: "",
    co_spouse_name: "",
    co_address: "",
    co_business_address: "",
    co_bank_name: "",
    co_account_type: "",
    co_account_number: "",
    co_remark: "",
    co_pan_no: "",
    co_adhar_no: "",
    co_dob: "",
    co_voter_id: "",
    co_bank_nbfc: "",
    co_emi: "",
    co_pandding: "",
    });
    if (validateForm()) {
      console.log(formData);
      // If form validation fails, do not submit
      return;
    }
  };



  return (
    <>
      <main>
        <section className="pt-18 pb-10 Personal-header-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="bg-white p-5 rounded-top-md">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-xl-8 col-sm-12 col-12">
                      <h1 className="mb-0">Personal Loan </h1>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                      <div className="text-md-end mt-3 mt-md-0">
                        <a href="/contact" className="btn btn-secondary">
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
        <section className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm position-relative">
                <div className="section-scroll p-lg-10 p-5" id="section-about">
                  <h2>About Personal Loan</h2>
                  <p className="lead">
                    Personal loan is the obvious choice if you need a finance
                    for Personal finance, Medical emergency, Wedding purposes,
                    Abroad travel, Holidays, Child education and for buying
                    consumer durable things.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <p>
                        Vestibulum accumsan, diam vitae consectetur sodales
                        sapien felis vestibulum purus,ac porttitor elit dolor
                        venenatis Cras condimacilicelerisque orci nisi sit amet
                        neque.{" "}
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
                    nequeuisque lacus mi Phasellus tellus nunc, sollicitudin
                    quist amet it simple nequeuisque lacus mi tesimly diummy
                    cintenbt mpus nec purus vitae tempor placerat leo.tesimly
                    diummy cintenbt mpus nec purus vitae tempor placerat leo.{" "}
                  </p>
                </div>
                <div className="section-scroll" id="section-typeloan">
                  <div className="bg-light p-lg-10 p-5">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="mb-5">
                          <h2>Personal Loan Products</h2>
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
                          <h4>Medical Emergency</h4>
                          <p className="mb-0">
                            Borrow Loan Company offers you personal loan for
                            your unexpected medical emergency.Get instant
                            personal loan for your all kind of medical emergency
                            expenses.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className=" mb-5">
                          <h4>Wedding Purpose</h4>
                          <p className="mb-0">
                            You can manage your deram marriage day with our
                            personal loan option. Have the wedding celebration
                            of your dreams. Apply now personal loan for wedding
                            purpose.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className=" mb-5 mb-lg-0">
                          <h4>Abroad Travel</h4>
                          <p className="mb-0">
                            Get the funds for the expenditure involved in going
                            abroad for taking up employment. Manage your
                            personal with Borrow Company for fulfill your
                            travelling to abroad.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className=" mb-5 mb-lg-0">
                          <h4>Child Educations</h4>
                          <p className="mb-0">
                            We provides child loan for pursuing higher, We given
                            the right tools to every potential child. Also,
                            grant personal loan for your child higher education.
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
                      <a href="/contact" className="btn btn-white">
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
                          <h2>Features of Personal Loan</h2>
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
                              className="bi bi-clock-history text-primary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                          </div>
                          <h4>Faster Loan</h4>
                          <p>
                            Maecenas in ultricies sem. Nunc eget orci mi. Sed
                            porttitor s, tellus fringilla condimentum eglis elit
                            dictum cerat.{" "}
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
                          <h4>Choose your amount</h4>
                          <p>
                            Pellentesque mollis, diam a viverra luctus, nisl dui
                            vehicula erat, id congue ante hicula tellus sit
                            amet.
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
                          <h4>Enjoy the best rates</h4>
                          <p>
                            Our loan rates and charges are very attractive lorem
                            ipsums sitamet uerse ipsum.Curabitulectus mattis
                            vitae.{" "}
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
                              className="bi bi-gear text-primary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                          </div>
                          <h4>Decide your tenure</h4>
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
                          <h2>Personal Loan - Eligibility</h2>
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
                            Maximum age of applicant at loan maturity: 60 years
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

                <section className="">
                  <div className="container">
                    <div className="mb-2">
                      <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="mb-4 text-center">
                          {/* section title start*/}
                          <h1 className="mb-0">Loan Application Form </h1>
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
                        {errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
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
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
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
                        {errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}
                      </div>
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
                          rows={3}
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

                    {dividendArr.map((item, index) => (
                              <div className="" key={index}>

                                <h3>
                                  {" "}
                                { index === 0 && "Banking Details" }   <span>  <button
                                          type="button"
                                          className={`add-button  ${
                                            (index === 0 && "d-none") || ""
                                          }`}
                                          onClick={() => handleRemove(index)}
                                          style={{ backgroundColor: 'blue' }}
                                          
                                        >
                                          -
                                        </button>
                                        {index === 0 && (
                                          <button
                                            type="button"
                                            className=""
                                            onClick={handleAdd}
                                            style={{ backgroundColor: 'blue' }}
                                          >
                                            +
                                          </button>
                                        )}</span>
                                        
                                </h3>
                               
                                  <div className="row" >
                                    
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <label
                                          className="sr-only form-label mb-0"
                                          htmlFor="name"
                                        >
                                          Name of Bank
                                        </label>
                                        <input
                                          // id={`dividend_stock_amount${index}`}
                                          id={`bank_name ${index}`}
                                          name="bank_name"
                                          type="text"
                                          disabled={textDisabld}
                                          value={item.bank_name}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
                                          placeholder="Name of Bank"
                                          className="form-control"
                                          required
                                        />
                                        {errors.bank_name && (
                                          <div className="text-danger">
                                            {errors.bank_name}
                                          </div>
                                        )}
                                      
                                      </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <select
                                           id={`account_type ${index}`}
                                          // id="account_type"
                                          name="account_type"
                                          className="form-select"
                                          disabled={textDisabld}
                                          value={item.account_type}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
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
                                          <option value="Gold">
                                            DEMAT Account
                                          </option>
                                        </select>
                                        {errors.account_type && (
                                          <div className="text-danger">
                                            {errors.account_type}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <label
                                          className="sr-only form-label mb-0"
                                          htmlFor="phone"
                                        >
                                          Account Number
                                        </label>
                                        <input
                                          id={`account_number ${index}`}
                                          // id="account_number"
                                          name="account_number"
                                          disabled={textDisabld}
                                          type="text"
                                          value={item.account_number}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
                                          placeholder="Account Number"
                                          className="form-control"
                                        />
                                        {errors.account_number && (
                                          <div className="text-danger">
                                            {errors.account_number}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                      <div className="mb-3">
                                        <label
                                          className="sr-only form-label mb-0"
                                          htmlFor="text"
                                        >
                                          Remarks
                                        </label>
                                        <input
                                         id={`fast_remark ${index}`}
                                          // id="fast_remark"
                                          name="fast_remark"
                                          disabled={textDisabld}
                                          type="text"
                                          value={item.fast_remark}
                                          onChange={(e) =>
                                            handleInputChange1(e, index)
                                          }
                                          // onChange={handleInputChange}
                                          placeholder="Remarks holder"
                                          className="form-control"
                                        />
                                        {errors.fast_remark && (
                                          <div className="text-danger">
                                            {errors.fast_remark}
                                          </div>
                                        )}
                                      </div>
                                   
                                    </div>

                                  
                                  </div>
                              
                              </div>
                                ))}

                    <h3>Loan Repyment Details 

                    <span>
                                <button style={{ backgroundColor: 'blue' }} className="m-2">+</button>
                                </span>
                    </h3>

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
                        {errors.bank_nbfc && (
                          <div className="text-danger">{errors.bank_nbfc}</div>
                        )}
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
                        {errors.loan_type && (
                          <div className="text-danger">{errors.loan_type}</div>
                        )}
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
                        {errors.emi && (
                          <div className="text-danger">{errors.emi}</div>
                        )}
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
                        {errors.pandding && (
                          <div className="text-danger">{errors.pandding}</div>
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
                          placeholder="Applicant Pan No."
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
                          id="spouse_name "
                          name="spouse_name"
                          type="text"
                          value={formData.spouse_name}
                          onChange={handleInputChange}
                          placeholder="Spose Name."
                          className="form-control"
                        />
                        {errors.spouse_name && (
                          <div className="text-danger">
                            {errors.spouse_name}
                          </div>
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
                          placeholder="Spouse DOB."
                          className="form-control"
                        />
                        {errors.spouse_dob && (
                          <div className="text-danger">{errors.spouse_dob}</div>
                        )}
                      </div>
                    </div>

                    <h3>Co-Applicant Details </h3>


                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        >
                          name
                        </label>
                        <input
                          id="co_name"
                          name="co_name"
                          type="text"
                          value={formData.co_name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className="form-control"
                        />
                        {errors.co_name && (
                          <div className="text-danger">{errors.co_name}</div>
                        )}
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
                          id="co_email"
                          name="co_email"
                          type="email"
                          value={formData.co_email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="form-control"
                        />
                        {errors.co_email && (
                          <div className="text-danger">{errors.co_email}</div>
                        )}
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
                          id="co_phone"
                          name="co_phone"
                          type="text"
                          value={formData.co_phone}
                          onChange={handleInputChange}
                          placeholder="Phone"
                          className="form-control"
                        />
                        {errors.co_phone && (
                          <div className="text-danger">{errors.co_phone}</div>
                        )}
                      </div>
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
                          id="co_address"
                          rows={3}
                          name="co_address"
                          value={formData.co_address}
                          onChange={handleInputChange}
                          placeholder="Residence Address"
                          defaultValue={""}
                        />
                        {errors.co_address && (
                          <div className="text-danger">{errors.co_address}</div>
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
                          id="co_business_address"
                          rows={3}
                          name="co_business_address"
                          value={formData.co_business_address}
                          onChange={handleInputChange}
                          placeholder="Business Address"
                          defaultValue={""}
                        />
                        {errors.co_business_address && (
                          <div className="text-danger">
                            {errors.co_business_address}
                          </div>
                        )}
                      </div>
                    </div>

                    <h3> Banking Details
                    <span>
                                <button style={{ backgroundColor: 'blue' }} className="m-2">+</button>
                                </span>
                      
                       </h3>

                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="name"
                        >
                          Name of Bank
                        </label>
                        <input
                          id="co_bank_name"
                          name="co_bank_name"
                          type="text"
                          value={formData.co_bank_name}
                          onChange={handleInputChange}
                          placeholder="Name of Bank"
                          className="form-control"
                        />
                        {errors.co_bank_name && (
                          <div className="text-danger">{errors.co_bank_name}</div>
                        )}
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select
                          id="co_account_type"
                          name="co_account_type"
                          className="form-select"
                          value={formData.co_account_type}
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
                        {errors.account_type && (
                          <div className="text-danger">
                            {errors.account_type}
                          </div>
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
                          Account Number
                        </label>
                        <input
                          id="co_account_number"
                          name="co_account_number"
                          type="text"
                          value={formData.co_account_number}
                          onChange={handleInputChange}
                          placeholder="Account Number"
                          className="form-control"
                        />
                        {errors.co_account_number && (
                          <div className="text-danger">
                            {errors.co_account_number}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text input*/}
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        >
                          Remarks
                        </label>
                        <input
                          id="co_remark"
                          name="co_remark"
                          type="text"
                          value={formData.co_remark}
                          onChange={handleInputChange}
                          placeholder="Remarks"
                          className="form-control"
                        />
                        {errors.co_remark && (
                          <div className="text-danger">{errors.co_remark}</div>
                        )}
                      </div>
                    </div>

                    <h3>Loan Repyment Details 

                    <span>
                                <button style={{ backgroundColor: 'blue' }} className="m-2">+</button>
                                </span>

                    </h3>

                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <label
                          className="sr-only form-label mb-0"
                          htmlFor="text"
                        >
                          Name Of Bank NBFC
                        </label>
                        <input
                          id="co_bank_nbfc"
                          name="co_bank_nbfc"
                          type="text"
                          value={formData.co_bank_nbfc}
                          onChange={handleInputChange}
                          placeholder="Name OfBank NBFC"
                          className="form-control"
                        />
                        {errors.co_bank_nbfc && (
                          <div className="text-danger">{errors.co_bank_nbfc}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="mb-3">
                        <select
                          id="co_loan_type"
                          name="co_loan_type"
                          className="form-select"
                          value={formData.co_loan_type}
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
                        {errors.co_loan_type && (
                          <div className="text-danger">{errors.co_loan_type}</div>
                        )}
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
                          id="co_emi"
                          name="co_emi"
                          type="text"
                          value={formData.co_emi}
                          onChange={handleInputChange}
                          placeholder="EMI"
                          className="form-control"
                        />
                        {errors.co_emi && (
                          <div className="text-danger">{errors.co_emi}</div>
                        )}
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
                          id="co_pandding"
                          name="co_pandding"
                          type="text"
                          value={formData.co_pandding}
                          onChange={handleInputChange}
                          placeholder="Pending"
                          className="form-control"
                        />
                        {errors.co_pandding && (
                          <div className="text-danger">{errors.co_pandding}</div>
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
                          id="co_pan_no"
                          name="co_pan_no"
                          type="text"
                          value={formData.co_pan_no}
                          onChange={handleInputChange}
                          placeholder="Applicant Pan No."
                          className="form-control"
                        />
                        {errors.co_pan_no && (
                          <div className="text-danger">{errors.co_pan_no}</div>
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
                          id="co_adhar_no"
                          name="co_adhar_no"
                          type="text"
                          value={formData.co_adhar_no}
                          onChange={handleInputChange}
                          placeholder="Adhar No."
                          className="form-control"
                        />
                        {errors.co_adhar_no && (
                          <div className="text-danger">{errors.co_adhar_no}</div>
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
                          id="co_dob"
                          name="co_dob"
                          type="text"
                          value={formData.co_dob}
                          onChange={handleInputChange}
                          placeholder="Applicant DOB"
                          className="form-control"
                        />
                        {errors.co_dob && (
                          <div className="text-danger">{errors.co_dob}</div>
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
                          id="co_voter_id"
                          name="co_voter_id"
                          type="text"
                          value={formData.co_voter_id}
                          onChange={handleInputChange}
                          placeholder="Voter Id No."
                          className="form-control"
                        />
                        {errors.co_voter_id && (
                          <div className="text-danger">{errors.co_voter_id}</div>
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
                          id="co_spouse_name "
                          name="co_spouse_name"
                          type="text"
                          value={formData.co_spouse_name}
                          onChange={handleInputChange}
                          placeholder="Spouse Name."
                          className="form-control"
                        />
                        {errors.co_spouse_name && (
                          <div className="text-danger">
                            {errors.co_spouse_name}
                          </div>
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
                          id="co_spouse_dob"
                          name="co_spouse_dob"
                          type="text"
                          value={formData.co_spouse_dob}
                          onChange={handleInputChange}
                          placeholder="Spouse DOB."
                          className="form-control"
                        />
                        {errors.co_spouse_dob && (
                          <div className="text-danger">{errors.co_spouse_dob}</div>
                        )}
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
                            handleFileChange(e, "three_month_salary")
                          }
                          className="form-control"
                        />
                        {errors.three_month_salary && (
                          <div className="text-danger">
                            {errors.three_month_salary}
                          </div>
                        )}
                        {formData.three_month_salary && (
                          <p>
                            Selected File: {formData.three_month_salary.name}
                          </p>
                        )}
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
                          onChange={(e) => handleFileChange(e, "itr")}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                        {errors.itr && (
                          <div className="text-danger">{errors.itr}</div>
                        )}
                        {formData.itr && (
                          <p>Selected File: {formData.itr.name}</p>
                        )}
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
                          onChange={(e) => handleFileChange(e, "income_proof")}
                          placeholder="Last Three Month Salary Slip."
                          className="form-control"
                        />
                        {errors.income_proof && (
                          <div className="text-danger">
                            {errors.income_proof}
                          </div>
                        )}
                        {formData.income_proof && (
                          <p>Selected File: {formData.income_proof.name}</p>
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
                        {errors.registration_proof && (
                          <div className="text-danger">
                            {errors.registration_proof}
                          </div>
                        )}
                        {formData.registration_proof && (
                          <p>
                            Selected File: {formData.registration_proof.name}
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
        </section>
      </main>
    </>
  );
};

export default PersonalLoan;
