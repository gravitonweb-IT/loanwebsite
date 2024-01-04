import React, { useState } from "react";

const Homeloannew = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("savings");
  const [selectedAccountType2, setSelectedAccountType2] = useState("savings");
  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  const handleAccountTypeChange2 = (event) => {
    setSelectedAccountType2(event.target.value);
  };
  const [residence, setResidence] = useState("");
  const [address, setAddress] = useState("");
  const [formData, setFormData] = useState({
    fName: "",
    residenceAddress: "",
    businessAddress: "",
    mobileNumber: "",
    email: "",
    bankName: "",
    accountNumber: "",
    accountType: "",
    bankNBFC: "",
    panNumber: "",
    aadharNumber: "",
    lName: "",
    voterIdNo: "",
    typeOfLoan: "",
    NameOfBank: "",
    emi: "",
    startFrom: "",
    spouseName: "",
    spouseDOB: "",
    coApplicantName: "",
    accountHolder: "",
    fNa: " ",
    Pending: "",
    DOB: "",
    voterId: "",
    SpouseName: "",
    SpouseDOB: "",
    Remarks: "",
    apn: "",
    mobileN: "",
    emailid: "",
    emioption:"",
    startoption:"",
    typeLoanoption:"",
    Adhar:"",
    NBFC:"",
    Pan:"",
    Salaried: '',
    SelfEmployed: '',
    Salaried1: '',
    SelfEmployed1: '',
    Bank:""
  });

  // const [errors, setErrors] = useState({});

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

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleValidation = () => {
    // Add your validation logic here
    // For example, you can check if the email is valid using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Similarly, you can add validation logic for other fields

    // Return true if all fields are valid, otherwise false
    return isEmailValid;
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error when user starts typing
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted data", formData);
    // Perform form validation here

    const newErrors = {};

    if (!formData.fName.trim()) {
      newErrors.fName = "Name is required";
    }
    if (!formData.fNa.trim()) {
      newErrors.fNa = "Name of Applicant is required";
    }
    if (!formData.residenceAddress.trim()) {
      newErrors.residenceAddress = "Residence Address is required";
    }

    if (!formData.businessAddress.trim()) {
      newErrors.businessAddress = "Business Address is required";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Invalid Mobile Number";
    }
    if (!formData.mobileN.trim()) {
      newErrors.mobileN = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileN.trim())) {
      newErrors.mobileN = "Invalid Mobile Number";
    }
    if (!formData.bankName.trim()) {
      newErrors.bankName = "Name of Bank is required";
    }

    // Account Number Validation
    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Account Number is required";
    } else if (!/^\d+$/.test(formData.accountNumber.trim())) {
      newErrors.accountNumber = "Invalid Account Number";
    }
    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid Email";
    }
    if (!formData.emailid.trim()) {
      newErrors.emailid = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailid.trim())) {
      newErrors.emailid = "Invalid Email";
    }
    // Account Type Validation
    if (!formData.accountType) {
      newErrors.accountType = "Account Type is required";
    }
    if (!formData.bankNBFC) {
      newErrors.bankNBFC = "Name of Bank NBFC is required";
    }
    if (!formData.NBFC) {
      newErrors.NBFC = "Name of Bank NBFC is required";
    }
    if (!formData.Bank) {
      newErrors.Bank = "Name of Bank NBFC is required";
    }
    if (!formData.NameOfBank) {
      newErrors.NameOfBank = "Name Of Bank is required";
    }
    if (!formData.Remarks) {
      newErrors.Remarks = "Remarks is required";
    }
    if (!formData.apn) {
      newErrors.apn = "Applicant pan number is required";
    }
    if (!formData.Pan) {
      newErrors.Pan = "Applicant pan number is required";
    }
    if (!formData.voterIdNo.trim()) {
      newErrors.voterIdNo = "Voter id No is required";
    }
    // Aadhar Number Validation
    if (!formData.aadharNumber) {
      newErrors.aadharNumber = "Aadhar Number is required";
    }
    if (!formData.Adhar) {
      newErrors.Adhar = "Aadhar Number is required";
    }
    if (!formData.bankNBFC) {
      newErrors.bankNBFC = "Name of Bank NBFC is required";
    }

    // Applicant Pan Number Validation
    if (!formData.panNumber) {
      newErrors.panNumber = "Applicant Pan Number is required";
    }

    // Aadhar Number Validation
    if (!formData.aadharNumber) {
      newErrors.aadharNumber = "Aadhar Number is required";
    }
    // Pending Validation
    if (!formData.lName) {
      newErrors.lName = "Pending is required";
    }
    if (!formData.Pending) {
      newErrors.Pending = "Pending is required";
    }
    // Applicant DOB Validation
    if (!formData.fName) {
      newErrors.fName = "Applicant DOB is required";
    }

    // Voter id No Validation
    if (!formData.voterId) {
      newErrors.voterId = "Voter id No is required";
    }
    if (!formData.typeOfLoan) {
      newErrors.typeOfLoan = "Type of Loan is required";
    }
    if (!formData.typeLoanoption) {
      newErrors.typeLoanoption = "Type of Loan is required";
    }
    if (!formData.emi) {
      newErrors.emi = "Type of Loan is required";
    }

    // EMI Validation
    // if (!formData.emi) {
    //   newErrors.emi = "EMI is required";
    // } else if (isNaN(formData.emi) || formData.emi <= 0) {
    //   newErrors.emi = "EMI should be a positive number";
    // }

    // Start from Validation
    if (!formData.startFrom) {
      newErrors.startFrom = "Start from is required";
    } else if (isNaN(formData.startFrom) || formData.startFrom < 0) {
      newErrors.startFrom = "Start from should be a non-negative number";
    }
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      let newFormData = { ...formData };
  
      // Handle changes for "Salaried"
      if (name === 'Salaried') {
        // If "Salaried" is selected, disable the "Self Employed" input
        newFormData = {
          ...newFormData,
          SelfEmployed: value === 'true' ? '' : newFormData.SelfEmployed,
        };
      }
  
      // Update the form data
      newFormData = {
        ...newFormData,
        [name]: value,
      };
  
      setFormData(newFormData);
  
      // Validate the input on change
      validateInput(name, newFormData);
    };
  
    const validateInput = (inputName, formDataToValidate) => {
      let isValid = true;
      const newErrors = {};
  
      // Validation logic for "Salaried"
      if (inputName === 'Salaried') {
        if (formDataToValidate.Salaried.trim() === '') {
          newErrors.Salaried = 'Monthly Salary is required';
          isValid = false;
        }
      }
  
      // Validation logic for "Self Employed" when it is not disabled
      if (inputName === 'SelfEmployed' && formDataToValidate.Salaried !== 'true') {
        if (formDataToValidate.SelfEmployed.trim() === '') {
          newErrors.SelfEmployed = 'Yearly Business Income is required';
          isValid = false;
        }
      }
  
      setErrors(newErrors);
      return isValid;
    };
    // Spouse Name Validation
    if (!formData.spouseName) {
      newErrors.spouseName = "Spouse Name is required";
    }

    // Spouse DOB Validation
    if (!formData.spouseDOB) {
      newErrors.spouseDOB = "Spouse DOB is required";
    }
    if (!formData.coApplicantName) {
      newErrors.coApplicantName = "Name of Co-Applicant is required";
    }

    // Residence Address Validation
    if (!formData.residenceAddress) {
      newErrors.residenceAddress = "Residence Address is required";
    }

    // Business Address Validation
    if (!formData.businessAddress) {
      newErrors.businessAddress = "Business Address is required";
    }
    if (!formData.fName) {
      newErrors.fName = "Name Of Bank is required";
    }

    // Account Type Validation
    if (!formData.accountType) {
      newErrors.accountType = "Account Type is required";
    }
    if (!formData.Salaried) {
      newErrors.Salaried = "salary is required";
    }
    if (!formData.SelfEmployed1) {
      newErrors.SelfEmployed1 = "Account Type is required";
    }
    if (!formData.Salaried1) {
      newErrors.Salaried1 = "salary  is required";
    }
    if (!formData.SelfEmployed) {
      newErrors.SelfEmployed = "SelfEmployed is required";
    }
    // Account Number Validation
    if (!formData.accountNumber) {
      newErrors.accountNumber = "Account Number is required";
    }
    if (!formData.lName) {
      newErrors.lName = "Remarks is required";
    }
    if (!formData.accountHolder) {
      newErrors.accountHolder = "Name Of Bank NBFC is required";
    }

    // Applicant Pan Number Validation
    if (!formData.fName) {
      newErrors.fName = "Applicant Pan Number is required";
    }

    // Adhar Number Validation
    if (!formData.lName) {
      newErrors.lName = "Adhar Number is required";
    }
    // Type of Loan Validation
    if (!formData.typeOfLoan) {
      newErrors.typeOfLoan = "Type of Loan is required";
    }

    // EMI Validation
    if (!formData.emi) {
      newErrors.emi = "EMI is required";
    }
    if (!formData.emioption) {
      newErrors.emioption = "Name of emi is required";
    }

    // Start from Validation
    if (!formData.startFrom) {
      newErrors.startFrom = "Start from is required";
    }
    if (!formData.startoption) {
      newErrors.startoption = "Start  is required";
    }
    // Type of Loan Validation
    if (!formData.typeOfLoan) {
      newErrors.typeOfLoan = "Type of Loan is required";
    }

    // EMI Validation
    if (!formData.emi) {
      newErrors.emi = "EMI is required";
    }

    // Start from Validation
    if (!formData.startFrom) {
      newErrors.startFrom = "Start  is required";
    }
    if (!formData.Pending) {
      newErrors.Pending = "Pending  is required";
    }
    if (!formData.Pending || isNaN(formData.Pending)) {
      newErrors.Pending = "Pending should be a valid number";
    }

    // Applicant DOB Validation (You can replace this with your specific validation logic)
    if (!formData.DOB) {
      newErrors.DOB = "Applicant DOB is required";
    }

    // Voter ID Validation
    if (!formData.voterId) {
      newErrors.voterId = "  Voter ID  is required";
    }
    if (!formData.SpouseName) {
      newErrors.SpouseName = "  Spouse Name  is required";
    }
    if (!formData.SpouseDOB) {
      newErrors.SpouseDOB = "  Spouse DOB  is required";
    }
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      // Validate Pending
      if (!formData.Pending.trim()) {
        newErrors.Pending = "Pending is required";
        isValid = false;
      }

      // Validate Applicant DOB
      if (!formData.DOB.trim()) {
        newErrors.DOB = "Applicant DOB is required";
        isValid = false;
      }

      // Validate Voter id No
      if (!formData.voterIdNo.trim()) {
        newErrors.voterIdNo = "Voter id No is required";
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    // If there are errors, set them in the state  Pending
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (validateForm()) {
      // Log the form data to the console
      console.log("Form data submitted:", formData);
    } else {
      // Form validation failed
      console.log("Form validation failed");
    }

    setFormData = {
      fName: "",
      residenceAddress: "",
      businessAddress: "",
      mobileNumber: "",
      email: "",
      bankName: "",
      accountNumber: "",
      accountType: "",
      bankNBFC: "",
      panNumber: "",
      aadharNumber: "",
      lName: "",
      voterIdNo: "",
      typeOfLoan: "",
      NameOfBank: "",
      emi: "",
      startFrom: "",
      spouseName: "",
      spouseDOB: "",
      mobileN:"",
      coApplicantName: "",
      accountHolder: "",
      // voterId: '',
      Pending: "",
      DOB: "",
      voterId: "",
      SpouseName: "",
      SpouseDOB: "",
      Remarks: "",
      apn: "",
      emioption:"",
      startoption:"",
      Adhar:"",
      pan:"",
      Salaried: '',
    SelfEmployed: '',
    Salaried1: '',
    SelfEmployed1: ''
      // ... (all other fields)
    };
    setErrors({});
    // You can send the data to your backend or perform further actions here
  };
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleStatusChange = (e) => {
    setEmploymentStatus(e.target.value);
    setValidationError("");
  };

  const handleSubmit1 = () => {
    if (!employmentStatus) {
      setValidationError("Please select an employment status.");
    } else {
      // Perform other actions with the selected value
      console.log("Selected Employment Status:", employmentStatus);
    }
  };

  return (
    <>
      <div className="w-full sm:w-10/12 h-auto bg-gray-200 mt-4 mb-4">
        <div className="py-7">
          {/* Loan Application Form- Heading */}
          <h1 className="font-bold text-center mb-12 text-3xl">
            Loan Application Form
          </h1>
          <form onSubmit={handleSubmit}>
            {/* 1- Applicant Details */}
            <div className="container mt-4 mb-4">
            <div className="bg-white w-full sm:w-11/12 mx-3 sm:mx-10 px-3 py-3 mb-10 sm:mb-20">
              <div>
                <h1 className="font-bold text-xl text-center">
                  {" "}
                  Applicant Details
                </h1>
                <div className="container mt-4 mb-4">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="fName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Name of Applicant
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Name of Applicant"
                        value={formData.fName}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.fName ? "border-red-500" : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.fName && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.fName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-5">
                        <label
                          htmlFor="mobileNumber"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="mobileNumber"
                          id="mobileNumber"
                          placeholder="Mobile Number"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          className={`w-full rounded-md border ${
                            errors.mobileNumber
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {errors.mobileNumber && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.mobileNumber}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full rounded-md border ${
                            errors.email ? "border-red-500" : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {errors.email && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* typesof loan */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-5">
                          <label
                            htmlFor="accountType"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Type of Loan
                          </label>

                          <select
                            style={{ width: "100%" }}
                            className={`w-full rounded-md border ${
                              errors.account_type
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            id="account_type"
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleInputChange}
                          >
                            <option value="home">Home Loan</option>
                            <option value="business">Business Loan</option>
                            <option value="current">Current Account</option>
                            <option value="mortgage">Mortgage Loan</option>
                            <option value="professional">
                              Professional Loan
                            </option>
                            <option value="workingCapital">
                              Working Capital / CC
                            </option>
                            <option value="personal">Personal Loan</option>
                            <option value="car">Car Loan</option>
                            <option value="gold">Gold Loan</option>
                          </select>
                          {errors.accountType && (
                            <p
                              className="text-red-500"
                              style={{ color: "red", marginLeft: "28px" }}
                            >
                              {errors.accountType}
                            </p>
                          )}
                        </div>
                      </div>

                  <div className="col-md-6">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-5">
            <label
              htmlFor="Salaried1"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Salaried
            </label>
            <input
              type="text"
              name="Salaried1"
              id="Salaried1"
              placeholder="Monthly Salary"
              value={formData.Salaried1}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.Salaried1 ? 'border-red-500' : 'border-[#e0e0e0]'
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
            />
            {errors.Salaried1 && (
              <p className="text-red-500" style={{ color: 'red' }}>
                {errors.Salaried1}
              </p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-5">
            <label
              htmlFor="SelfEmployed1"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Self Employed
            </label>
            <input
              type="text"
              name="SelfEmployed1"
              id="SelfEmployed1"
              placeholder="Yearly Business Income"
              value={formData.SelfEmployed1}
              onChange={handleInputChange}
              disabled={formData.Salaried === 'true'} // Disable if "Salaried" is selected
              className={`w-full rounded-md border ${
                errors.SelfEmployed1? 'border-red-500' : 'border-[#e0e0e0]'
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
            />
            {errors.SelfEmployed1 && (
              <p className="text-red-500" style={{ color: 'red' }}>
                {errors.SelfEmployed1}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
                    </div>
                    {/* loan end */}
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="residenceAddress"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Residence Address
                      </label>
                      <textarea
                        name="residenceAddress"
                        id="residenceAddress"
                        placeholder="Residence Address"
                        value={formData.residenceAddress}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.residenceAddress
                            ? "border-red-500"
                            : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.residenceAddress && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.residenceAddress}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="businessAddress"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Business Address
                      </label>
                      <textarea
                        name="businessAddress"
                        id="businessAddress"
                        placeholder="Business Address"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.businessAddress
                            ? "border-red-500"
                            : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.businessAddress && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.businessAddress}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* bank details */}
                <div className="mb-5">
                  <h1 className="font-bold text-xl text-center">
                    Banking Details
                  </h1>

                  <div class="container">
                    <div className="row">
                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="NameOfBank"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Name Of Bank
                        </label>
                        <input
                          type="text"
                          name="NameOfBank"
                          id="NameOfBank"
                          placeholder="Name of Bank"
                          className={`w-full rounded-md border ${
                            errors.NameOfBank
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.NameOfBank}
                          onChange={handleInputChange}
                        />
                        {errors.NameOfBank && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.NameOfBank}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="accountType"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Account Type
                        </label>
                        <select
                          className={`form-select w-full mt-2 p-3 border rounded-md focus:outline-none ${
                            errors.accountType
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          }`}
                          id="account_type"
                          name="account_type"
                          value={selectedAccountType}
                          onChange={handleAccountTypeChange}
                        >
                          <option value="savings">Savings Account</option>
                          <option value="checking">Personal Account</option>
                          <option value="current">Current Account</option>
                        </select>
                        {errors.accountType && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.accountType}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="accountNumber"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Account Number
                        </label>
                        <input
                          type="text"
                          name="accountNumber"
                          id="accountNumber"
                          placeholder="Account Number"
                          className={`w-full rounded-md border ${
                            errors.accountNumber
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                        />
                        {errors.accountNumber && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.accountNumber}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="Remarks"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Remarks
                        </label>
                        <input
                          type="text"
                          name="Remarks"
                          id="Remarks"
                          placeholder="Remarks"
                          value={formData.Remarks}
                          onChange={handleInputChange}
                          className={`w-full rounded-md border ${
                            errors.Remarks
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {errors.Remarks && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.Remarks}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
</div>
                {/* bank details */}
                {/* Loan Repyment Details */}
                <div className="Loan Repyment Details">
                  <h1 style={{ textAlign: "center" }}>Loan Repyment Details</h1>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-5">
                          <label
                            htmlFor="bankNBFC"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Name OfBank NBFC
                          </label>
                          <input
                            type="text"
                            name="bankNBFC"
                            id="bankNBFC"
                            placeholder="Name OfBank NBFC"
                            className={`w-full rounded-md border ${
                              errors.bankNBFC
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.bankNBFC}
                            onChange={handleInputChange}
                          />
                          {errors.bankNBFC && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.bankNBFC}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-5">
                          <label
                            htmlFor="typeOfLoan"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Type of Loan
                          </label>
                          <input
                            type="text"
                            name="typeOfLoan"
                            id="typeOfLoan"
                            placeholder="Type of Loan"
                            className={`w-full rounded-md border ${
                              errors.typeOfLoan
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.typeOfLoan}
                            onChange={handleInputChange}
                          />
                          {errors.typeOfLoan && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.typeOfLoan}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="mb-5">
                          <label
                            htmlFor="emi"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            EMI
                          </label>
                          <input
                            type="number"
                            name="emi"
                            id="emi"
                            placeholder="EMI"
                            className={`w-full rounded-md border ${
                              errors.emi ? "border-red-500" : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.emi}
                            onChange={handleInputChange}
                          />
                          {errors.emi && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.emi}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="mb-5">
                          <label
                            htmlFor="startFrom"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Start from
                          </label>
                          <input
                            type="number"
                            name="startFrom"
                            id="startFrom"
                            placeholder="Start from"
                            className={`w-full rounded-md border ${
                              errors.startFrom
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.startFrom}
                            onChange={handleInputChange}
                          />
                          {errors.startFrom && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.startFrom}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div className="col-md-4">
                        <div className="mb-5">
                          <label
                            htmlFor="Pending"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Pending
                          </label>
                          <input
                            type="number"
                            name="Pending"
                            id="Pending"
                            placeholder="Pending"
                            className={`w-full rounded-md border ${
                              errors.Pending
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.Pending}
                            onChange={handleInputChange}
                          />
                          {errors.Pending && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.Pending}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="mb-5">
                          <label
                            htmlFor="DOB"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Applicant DOB
                          </label>
                          <input
                            type="text"
                            name="DOB"
                            id="DOB"
                            placeholder="Applicant DOB"
                            className={`w-full rounded-md border ${
                              errors.DOB ? "border-red-500" : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.DOB}
                            onChange={handleInputChange}
                          />
                          {errors.DOB && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.DOB}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-5">
                          <label
                            htmlFor="voterIdNo"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Voter id No
                          </label>
                          <input
                            type="text"
                            name="voterIdNo"
                            id="voterIdNo"
                            placeholder="Voter id No"
                            className={`w-full rounded-md border ${
                              errors.voterIdNo
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.voterIdNo}
                            onChange={handleInputChange}
                          />
                          {errors.voterIdNo && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.voterIdNo}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-5">
                          <label
                            htmlFor="spouseName"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Spouse Name
                          </label>
                          <input
                            type="text"
                            name="spouseName"
                            id="spouseName"
                            placeholder="Spouse Name"
                            className={`w-full rounded-md border ${
                              errors.spouseName
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.spouseName}
                            onChange={handleInputChange}
                          />
                          {errors.spouseName && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.spouseName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="mb-5">
                          <label
                            htmlFor="spouseDOB"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Spouse DOB
                          </label>
                          <input
                            type="text"
                            name="spouseDOB"
                            id="spouseDOB"
                            placeholder="Spouse DOB"
                            className={`w-full rounded-md border ${
                              errors.spouseDOB
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            value={formData.spouseDOB}
                            onChange={handleInputChange}
                          />
                          {errors.spouseDOB && (
                            <p
                              className="text-red-500"
                              style={{ color: "red" }}
                            >
                              {errors.spouseDOB}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Loan Repyment Details end */}

                {/* Details of Profession */}

                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>For, Salaried</h4>
                      <div className="mb-3">
                        <label
                          htmlFor="salaried"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        ></label>

                        <div className="form-group">
                          <label>Last Three Month Salary Slip:</label>
                          <input
                            type="file"
                            name="salariedSalarySlip"
                            accept=".pdf, .doc, .docx"
                          />

                          <div className="form-group">
                            <label>Last Two year Form 16:</label>
                            <input
                              type="file"
                              name="salariedForm16"
                              accept=".pdf, .doc, .docx"
                            />
                          </div>

                          <div className="form-group">
                            <label>Other Income Proof:</label>
                            <input
                              type="file"
                              name="salariedOtherIncomeProof"
                              accept=".pdf, .doc, .docx"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>For, Self Employed</h4>
                      <div className="mb-3">
                        <div className="form-group">
                          <label>Last Two Year ITR:</label>
                          <input
                            type="file"
                            name="selfEmployedITR"
                            accept=".pdf, .doc, .docx"
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Two Year Form 26AS:</label>
                          <input
                            type="file"
                            name="selfEmployedForm26AS"
                            accept=".pdf, .doc, .docx"
                          />
                        </div>
                        <div className="form-group">
                          <label>Business Registration Proof:</label>
                          <input
                            type="file"
                            name="selfEmployedBusinessProof"
                            accept=".pdf, .doc, .docx"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Co-Applicant Details */}
                <h1 className="font-bold text-xl text-center">
                  {" "}
                  Co-Applicant Details
                </h1>
                <div className="container mt-4 mb-4">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="fNa"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Name of Applicant
                      </label>
                      <input
                        type="text"
                        name="fNa"
                        id="fNa"
                        placeholder="Name of Applicant"
                        value={formData.fNa}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.fNa ? "border-red-500" : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.fNa && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.fNa}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="residenceAddress"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Residence Address
                      </label>
                      <textarea
                        name="residenceAddress"
                        id="residenceAddress"
                        placeholder="Residence Address"
                        value={formData.residenceAddress}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.residenceAddress
                            ? "border-red-500"
                            : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.residenceAddress && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.residenceAddress}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="businessAddress"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Business Address
                      </label>
                      <textarea
                        name="businessAddress"
                        id="businessAddress"
                        placeholder="Business Address"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.businessAddress
                            ? "border-red-500"
                            : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.businessAddress && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.businessAddress}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-5">
                      <label
                        htmlFor="mobileN"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        name="Number"
                        id="mobileN"
                        placeholder="Mobile Number"
                        value={formData.mobileN}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.mobileN ? "border-red-500" : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.mobileN && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.mobileN}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-5">
                      <label
                        htmlFor="emailid"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="emailid"
                        id="emailid"
                        placeholder="Email"
                        value={formData.emailid}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border ${
                          errors.emailid ? "border-red-500" : "border-[#e0e0e0]"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {errors.emailid && (
                        <p className="text-red-500" style={{ color: "red" }}>
                          {errors.emailid}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* typesof loan */}
                  <div className="row">
                    {/* <div className="col-md-6">
                        <div className="mb-5">
                          <label
                            htmlFor="accountType"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Type of Loan
                          </label>

                          <select
                           style={{ width: "100%" }}
                            className={`w-full rounded-md border ${
                              errors.bankNBFC
                                ? "border-red-500"
                                : "border-[#e0e0e0]"
                            } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            id="account_type"
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleInputChange}
                          >
                            <option value="home">Home Loan</option>
                            <option value="business">Business Loan</option>
                            <option value="current">Current Account</option>
                            <option value="mortgage">Mortgage Loan</option>
                            <option value="professional">
                              Professional Loan
                            </option>
                            <option value="workingCapital">
                              Working Capital / CC
                            </option>
                            <option value="personal">Personal Loan</option>
                            <option value="car">Car Loan</option>
                            <option value="gold">Gold Loan</option>
                          </select>
                          {errors.accountType && (
                            <p
                              className="text-red-500"
                              style={{ color: "red", marginLeft: "28px" }}
                            >
                              {errors.accountType}
                            </p>
                          )}
                        </div>
                      </div> */}

                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-5">
                            <label
                              htmlFor="Salaried"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Salaried
                            </label>
                            <input
                              type="text"
                              name="Salaried"
                              id="Salaried"
                              placeholder="Monthly Salary"
                              value={formData.Salaried}
                              onChange={handleInputChange}
                              className={`w-full rounded-md border ${
                                errors.Salaried
                                  ? "border-red-500"
                                  : "border-[#e0e0e0]"
                              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            />
                            {errors.Salaried && (
                              <p
                                className="text-red-500"
                                style={{ color: "red" }}
                              >
                                {errors.Salaried}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-5">
                            <label
                              htmlFor="SelfEmployed"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Self Employed
                            </label>
                            <input
                              type="text"
                              name="SelfEmployed"
                              id="SelfEmployed"
                              placeholder="Yearly Business Income"
                              value={formData.SelfEmployed}
                              onChange={handleInputChange}
                              className={`w-full rounded-md border ${
                                errors.SelfEmployed
                                  ? "border-red-500"
                                  : "border-[#e0e0e0]"
                              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            />
                            {errors.SelfEmployed && (
                              <p
                                className="text-red-500"
                                style={{ color: "red" }}
                              >
                                {errors.SelfEmployed}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* loan end */}
                </div>
                </div>
                {/*  Co-Applicant Details */}
                {/* salary */}

                {/* salary */}
                {/* banking */}
                <div className="mb-5">
                  <h1 className="font-bold text-xl text-center">
                    Banking Details
                  </h1>

                  {/* */}
                  <div class="container">
                    <div className="row">
                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="NameOfBank"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Name Of Bank
                        </label>
                        <input
                          type="text"
                          name="NameOfBank"
                          id="NameOfBank"
                          placeholder="Name of Bank"
                          className={`w-full rounded-md border ${
                            errors.NameOfBank
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.NameOfBank}
                          onChange={handleInputChange}
                        />
                        {errors.NameOfBank && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.NameOfBank}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="accountType"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Account Type
                        </label>
                        <select
                          className={`form-select w-full mt-2 p-3 border rounded-md focus:outline-none ${
                            errors.accountType
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          }`}
                          id="account_type"
                          name="account_type"
                          value={selectedAccountType}
                          onChange={handleAccountTypeChange}
                        >
                          <option value="savings">Savings Account</option>
                          <option value="checking">Personal Account</option>
                          <option value="current">Current Account</option>
                        </select>
                        {errors.accountType && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.accountType}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="accountNumber"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Account Number
                        </label>
                        <input
                          type="text"
                          name="accountNumber"
                          id="accountNumber"
                          placeholder="Account Number"
                          className={`w-full rounded-md border ${
                            errors.accountNumber
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                        />
                        {errors.accountNumber && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.accountNumber}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="Remarks"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Remarks
                        </label>
                        <input
                          type="text"
                          name="Remarks"
                          id="Remarks"
                          placeholder="Remarks"
                          value={formData.Remarks}
                          onChange={handleInputChange}
                          className={`w-full rounded-md border ${
                            errors.Remarks
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {errors.Remarks && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.Remarks}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* banking */}

                {/* loan  */}
                <h1 style={{ textAlign: "center" }}>Loan Repyment Details</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="Bank" className="form-label">
                        Name Of Bank NBFC
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.accountHolder ? "is-invalid" : ""
                        }`}
                        id="Bank"
                        name="Bank"
                        placeholder="Name of Bank NBFC"
                        value={formData.Bank}
                        onChange={handleInputChange}
                      />
                      {errors.Bank && (
                        <div className="invalid-feedback">
                          {errors.Bank}
                        </div>
                      )}
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="apn" className="form-label">
                        Applicant Pan Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.fName ? "is-invalid" : ""
                        }`}
                        id="apn"
                        name="apn"
                        placeholder="Applicant Pan Number"
                        value={formData.apn}
                        onChange={handleInputChange}
                      />
                      {errors.apn && (
                        <div className="invalid-feedback">{errors.apn}</div>
                      )}
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="lName" className="form-label">
                        Adhar Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.lName ? "is-invalid" : ""
                        }`}
                        id="lName"
                        name="lName"
                        placeholder="Adhar Number"
                        value={formData.lName}
                        onChange={handleInputChange}
                      />
                      {errors.lName && (
                        <div className="invalid-feedback">{errors.lName}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-5">
                        <label
                          htmlFor="typeOfLoan"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Type of Loan
                        </label>
                        <input
                          type="text"
                          name="typeOfLoan"
                          id="typeOfLoan"
                          placeholder="Type of Loan"
                          className={`w-full rounded-md border ${
                            errors.typeOfLoan
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.typeOfLoan}
                          onChange={handleInputChange}
                        />
                        {errors.typeOfLoan && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.typeOfLoan}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-5">
                        <label
                          htmlFor="emi"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          EMI
                        </label>
                        <input
                          type="number"
                          name="emi"
                          id="emi"
                          placeholder="EMI"
                          className={`w-full rounded-md border ${
                            errors.emi ? "border-red-500" : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.emi}
                          onChange={handleInputChange}
                        />
                        {errors.emi && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.emi}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-5">
                        <label
                          htmlFor="startFrom"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Start from
                        </label>
                        <input
                          type="number"
                          name="startFrom"
                          id="startFrom"
                          placeholder="Start from"
                          className={`w-full rounded-md border ${
                            errors.startFrom
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.startFrom}
                          onChange={handleInputChange}
                        />
                        {errors.startFrom && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.startFrom}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* banking */}
                <div className="mb-5">
                  <h1 className="font-bold text-xl text-center">
                    Banking Details
                  </h1>

                  {/* */}
                  <div class="container">
                    <div className="row">
                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="NameOfBank"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Name Of Bank
                        </label>
                        <input
                          type="text"
                          name="NameOfBank"
                          id="NameOfBank"
                          placeholder="Name of Bank"
                          className={`w-full rounded-md border ${
                            errors.NameOfBank
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.NameOfBank}
                          onChange={handleInputChange}
                        />
                        {errors.NameOfBank && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.NameOfBank}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="accountType"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Account Type
                        </label>
                        <select
                          className={`form-select w-full mt-2 p-3 border rounded-md focus:outline-none ${
                            errors.accountType
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          }`}
                          id="account_type"
                          name="account_type"
                          value={selectedAccountType}
                          onChange={handleAccountTypeChange}
                        >
                          <option value="savings">Savings Account</option>
                          <option value="checking">Personal Account</option>
                          <option value="current">Current Account</option>
                        </select>
                        {errors.accountType && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.accountType}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="accountNumber"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Account Number
                        </label>
                        <input
                          type="text"
                          name="accountNumber"
                          id="accountNumber"
                          placeholder="Account Number"
                          className={`w-full rounded-md border ${
                            errors.accountNumber
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                        />
                        {errors.accountNumber && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.accountNumber}
                          </p>
                        )}
                      </div>

                      <div className="col-md-3 mb-5">
                        <label
                          htmlFor="Remarks"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Remarks
                        </label>
                        <input
                          type="text"
                          name="Remarks"
                          id="Remarks"
                          placeholder="Remarks"
                          value={formData.Remarks}
                          onChange={handleInputChange}
                          className={`w-full rounded-md border ${
                            errors.Remarks
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {errors.Remarks && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.Remarks}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* banking */}

                {/* Loan Repyment Details */}
                <h1 style={{ textAlign: "center" }}>Loan Repyment Details</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="NBFC" className="form-label">
                        Name Of Bank NBFC
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.NBFC ? "is-invalid" : ""
                        }`}
                        id="NBFC"
                        name="NBFC"
                        placeholder="Name of Bank NBFC"
                        value={formData.NBFC}
                        onChange={handleInputChange}
                      />
                      {errors.NBFC && (
                        <div className="invalid-feedback">
                          {errors.NBFC}
                        </div>
                      )}
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="Pan" className="form-label">
                        Applicant Pan Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.Pan ? "is-invalid" : ""
                        }`}
                        id="Pan"
                        name="Pan"
                        placeholder="Applicant Pan Number"
                        value={formData.Pan}
                        onChange={handleInputChange}
                      />
                      {errors.Pan && (
                        <div className="invalid-feedback">{errors.Pan}</div>
                      )}
                    </div>

                    <div className="col-md-4 mb-3">
                      <label htmlFor="Adhar" className="form-label">
                        Adhar Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.Adhar ? "is-invalid" : ""
                        }`}
                        id="Adhar"
                        name="Adhar"
                        placeholder="Adhar Number"
                        value={formData.Adhar}
                        onChange={handleInputChange}
                      />
                      {errors.Adhar && (
                        <div className="invalid-feedback">{errors.Adhar}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-5">
                        <label
                          htmlFor="typeLoanoption"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Type of Loan
                        </label>
                        <input
                          type="typetext"
                          name="typeLoanoption"
                          id="typeLoanoption"
                          placeholder="Type of Loan"
                          className={`w-full rounded-md border ${
                            errors.typeLoanoption
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.typeLoanoption}
                          onChange={handleInputChange}
                        />
                        {errors.typeLoanoption && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.typeLoanoption}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-5">
                        <label
                          htmlFor="emi"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          EMI
                        </label>
                        <input
                          type="eminumber"
                          name="emioption"
                          id="emioption"
                          placeholder="EMI"
                          className={`w-full rounded-md border ${
                            errors.emioption ? "border-red-500" : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.emioption}
                          onChange={handleInputChange}
                        />
                        {errors.emioption && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.emioption}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-5">
                        <label
                          htmlFor="startoption"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Start from
                        </label>
                        <input
                          type="startnumber"
                          name="startoption"
                          id="startoption"
                          placeholder="Start from"
                          className={`w-full rounded-md border ${
                            errors.startoption
                              ? "border-red-500"
                              : "border-[#e0e0e0]"
                          } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          value={formData.startoption}
                          onChange={handleInputChange}
                        />
                        {errors.startoption && (
                          <p className="text-red-500" style={{ color: "red" }}>
                            {errors.startoption}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Loan repayment */}
              </div>
            </div>

            <div className="container mt-4 mb-4">
              <div className="row">
                <h3>Require Document </h3>

                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">PAN Card</h6>
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
                      <p>Selected File: {formData.three_month_salary.name}</p>
                    )}
                  </div>
                </div>

                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Adhar Card,</h6>
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
                    {formData.itr && <p>Selected File: {formData.itr.name}</p>}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Voter Id Card Residing</h6>
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
                      <div className="text-danger">{errors.income_proof}</div>
                    )}
                    {formData.income_proof && (
                      <p>Selected File: {formData.income_proof.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Residing Electricity Bill.</h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="Electricity"
                      name="Electricity"
                      type="file"
                      onChange={(e) => handleFileChange(e, "Electricity")}
                      placeholder="Last Three Month Salary Slip."
                      className="form-control"
                    />
                    {errors.Electricity && (
                      <div className="text-danger">{errors.Electricity}</div>
                    )}
                    {formData.Electricity && (
                      <p>Selected File: {formData.Electricity.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Passport Size Photograph</h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>

                    <input
                      id="Photograph"
                      name="Photograph"
                      type="file"
                      onChange={(e) => handleFileChange(e, "Photograph")}
                      className="form-control"
                    />
                    {errors.Photograph && (
                      <div className="text-danger">{errors.Photograph}</div>
                    )}
                    {formData.Photograph && (
                      <p>Selected File: {formData.Photograph.name}</p>
                    )}
                  </div>
                </div>

                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Adhar Card,</h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="AdharCard"
                      name="AdharCard"
                      type="file"
                      onChange={(e) => handleFileChange(e, "AdharCard")}
                      placeholder="Adhar Card."
                      className="form-control"
                    />
                    {errors.AdharCard && (
                      <div className="text-danger">{errors.AdharCard}</div>
                    )}
                    {formData.AdharCard && (
                      <p>Selected File: {formData.AdharCard.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Voter Id Card Residing</h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="Residing"
                      name="Residing"
                      type="file"
                      onChange={(e) => handleFileChange(e, "Residing")}
                      placeholder="Residing."
                      className="form-control"
                    />
                    {errors.Residing && (
                      <div className="text-danger">{errors.Residing}</div>
                    )}
                    {formData.Residing && (
                      <p>Selected File: {formData.Residing.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Current Loan.</h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="CurrentLoan"
                      name="CurrentLoan"
                      type="file"
                      onChange={(e) => handleFileChange(e, "CurrentLoan")}
                      placeholder="CurrentLoan."
                      className="form-control"
                    />
                    {errors.CurrentLoan && (
                      <div className="text-danger">{errors.CurrentLoan}</div>
                    )}
                    {formData.CurrentLoan && (
                      <p>Selected File: {formData.CurrentLoan.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">
                      If Salaried We need below Additional Documents
                    </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="Additional"
                      name="ElectAdditionalricity"
                      type="file"
                      onChange={(e) => handleFileChange(e, "Additional")}
                      placeholder="Additional."
                      className="form-control"
                    />
                    {errors.Additional && (
                      <div className="text-danger">{errors.Additional}</div>
                    )}
                    {formData.Additional && (
                      <p>Selected File: {formData.Additional.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">
                      Business Registration proof{" "}
                    </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="BusinessRegistration"
                      name="Business Registration proof "
                      type="file"
                      onChange={(e) =>
                        handleFileChange(e, "BusinessRegistration  ")
                      }
                      placeholder="Business Registration proof ."
                      className="form-control"
                    />
                    {errors.BusinessRegistration && (
                      <div className="text-danger">
                        {errors.BusinessRegistration}
                      </div>
                    )}
                    {formData.BusinessRegistration && (
                      <p>Selected File: {formData.BusinessRegistration.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Additional Document </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="AdditionalDocument"
                      name="AdditionalDocument "
                      type="file"
                      onChange={(e) =>
                        handleFileChange(e, "AdditionalDocument  ")
                      }
                      placeholder="Additional Document ."
                      className="form-control"
                    />
                    {errors.AdditionalDocument && (
                      <div className="text-danger">
                        {errors.AdditionalDocument}
                      </div>
                    )}
                    {formData.AdditionalDocument && (
                      <p>Selected File: {formData.AdditionalDocument.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Product </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="Product"
                      name="Product "
                      type="file"
                      onChange={(e) => handleFileChange(e, "Product  ")}
                      placeholder="Product ."
                      className="form-control"
                    />
                    {errors.Product && (
                      <div className="text-danger">{errors.Product}</div>
                    )}
                    {formData.Product && (
                      <p>Selected File: {formData.Product.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Working Capital Loan </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="Working"
                      name="Working "
                      type="file"
                      onChange={(e) => handleFileChange(e, "Working")}
                      placeholder="Working"
                      className="form-control"
                    />
                    {errors.Working && (
                      <div className="text-danger">{errors.Working}</div>
                    )}
                    {formData.Working && (
                      <p>Selected File: {formData.Working.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Unsecured Business Loan </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="Unsecured"
                      name="Unsecured "
                      type="file"
                      onChange={(e) => handleFileChange(e, "Unsecured")}
                      placeholder="Unsecured"
                      className="form-control"
                    />
                    {errors.Unsecured && (
                      <div className="text-danger">{errors.Unsecured}</div>
                    )}
                    {formData.Unsecured && (
                      <p>Selected File: {formData.Unsecured.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Cash Credit </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="CashCredit"
                      name="CashCredit"
                      type="file"
                      onChange={(e) => handleFileChange(e, "CashCredit")}
                      placeholder="CashCredit"
                      className="form-control"
                    />
                    {errors.CashCredit && (
                      <div className="text-danger">{errors.CashCredit}</div>
                    )}
                    {formData.CashCredit && (
                      <p>Selected File: {formData.CashCredit.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12">
                  <div className="mb-3">
                    <h6 className="text-center">Project Loan </h6>
                    <label
                      className="sr-only form-label mb-0"
                      htmlFor="text"
                    ></label>
                    <input
                      id="ProjectLoan "
                      name="ProjectLoan"
                      type="file"
                      onChange={(e) => handleFileChange(e, "ProjectLoan")}
                      placeholder="ProjectLoan"
                      className="form-control"
                    />
                    {errors.ProjectLoan && (
                      <div className="text-danger">{errors.ProjectLoan}</div>
                    )}
                    {formData.ProjectLoan && (
                      <p>Selected File: {formData.ProjectLoan.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                style={{
                  padding: "10px",
                  width: "100px",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div>
      </div>
    </div> */}
    </>
  );
};

export default Homeloannew;
