import React, { useState } from "react";
import "./admin.css";

const Email = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    content: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email submitted:", formData);
  };

  return (
    <section className="py-lg-16 py-10">
      <div className="container">
        <div className=" col-lg-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
        <h2 className="text-center">Email Panel</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <label htmlFor="email mb-2">Email:</label>
              <input
                id="email"
                name="email"
                type="text"
           
                className="form-control mb-2"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
            
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              
            </div>
            <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

            <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                name="content"
            
                value={formData.content}
                onChange={handleInputChange}
                required
              ></textarea>

            </div>
            <button type="submit" className="btn btn-secondary">
              Send Email
            </button>
          </form>
        </div>
        <div>





      
        </div>
      </div>
    </section>
  );
};

export default Email;
