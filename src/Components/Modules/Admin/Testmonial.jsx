import React, { useState } from "react";
import "./testmonial.css";
import { Slide } from "react-toastify";
import Sidebar from "../UserDashbord/Sidebar";
const Testmonial = () => {
  const [form1, setForm1] = useState({
    name: "",
    testimonial: "",
    isValid: false,
  });
  const [form2, setForm2] = useState({
    name: "",
    testimonial: "",
    isValid: false,
  });
  const [form3, setForm3] = useState({
    name: "",
    testimonial: "",
    isValid: false,
  });

  const handleSubmit = (e, form, setForm) => {
    e.preventDefault();

    // Validate form fields
    if (form.name.trim() !== "" && form.testimonial.trim() !== "") {
      setForm({ ...form, isValid: true });

      // TODO: Handle form submission, e.g., send data to a server
      console.log("Name:", form.name);
      console.log("Testimonial:", form.testimonial);

      // Clear form fields after submission
      setForm({ name: "", testimonial: "", isValid: false });
    } else {
      setForm({ ...form, isValid: false });
    }
  };

  return (
    <Sidebar>
    <div>
      <h1 className="text-white mb-2">Some of our Awesome Testimonials</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
        <div className="testimonial-form">
        <h2> Testimonial (Form 1)</h2>
        <form onSubmit={(e) => handleSubmit(e, form1, setForm1)}>
          <div className="form-group">
            <label htmlFor="name1">Your Name:</label>
            <input
              type="text"
              id="name1"
              value={form1.name}
              placeholder="Name Here..."
              onChange={(e) => setForm1({ ...form1, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="testimonial1">Your Testimonial:</label>
            <textarea
              id="testimonial1"
              placeholder="Message ..."
              value={form1.testimonial}
              onChange={(e) =>
                setForm1({ ...form1, testimonial: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="testcss">Submit Testimonial</button>
        </form>

        {form1.isValid && (
          <p className="success-message">Testimonial submitted successfully!</p>
        )}

        {!form1.isValid && (
          <p className="error-message">
            Please fill out all fields before submitting.
          </p>
        )}
      </div>
        </div>
        <div className="col-md-4 mb-4">
        <div className="testimonial-form">
        <h2> Testimonial (Form 2)</h2>
        <form onSubmit={(e) => handleSubmit(e, form2, setForm2)}>
          <div className="form-group">
            <label htmlFor="name2">Your Name:</label>
            <input
              type="text"
              id="name2"
              placeholder="Name Here..."
              value={form2.name}
              onChange={(e) => setForm2({ ...form2, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="testimonial2">Your Testimonial:</label>
            <textarea
              id="testimonial2"
              placeholder="Name Here..."
              value={form2.testimonial}
              onChange={(e) =>
                setForm2({ ...form2, testimonial: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="testcss">Submit Testimonial</button>
        </form>

        {form2.isValid && (
          <p className="success-message">Testimonial submitted successfully!</p>
        )}

        {!form2.isValid && (
          <p className="error-message">
            Please fill out all fields before submitting.
          </p>
        )}
      </div>
        </div>
        <div className="col-md-4 mb-4">
        <div className="testimonial-form">
        <h2> Testimonial (Form 3)</h2>
        <form onSubmit={(e) => handleSubmit(e, form3, setForm3)}>
          <div className="form-group">
            <label htmlFor="name3">Your Name:</label>
            <input
              type="text"
              id="name3"
              placeholder="Name Here..."
              value={form3.name}
              onChange={(e) => setForm3({ ...form3, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="testimonial3">Your Testimonial:</label>
            <textarea
              id="testimonial3"
              placeholder="Name Here..."
              value={form3.testimonial}
              onChange={(e) =>
                setForm3({ ...form3, testimonial: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="testcss">
            Submit Testimonial
          </button>
        </form>

        {form3.isValid && (
          <p className="success-message">Testimonial submitted successfully!</p>
        )}

        {!form3.isValid && (
          <p className="error-message">
            Please fill out all fields before submitting.
          </p>
        )}
      </div>
        </div>
      </div>
      
    </div>
    </Sidebar>
  );
};

export default Testmonial;
