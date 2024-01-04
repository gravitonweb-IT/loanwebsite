import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username: formData.email,
        password: formData.password,
        userType: "user",
      });
      const data = response.data.data;
      if (data.status == "success") {
        toast(data.message, "success");
      } else {
        toast(data.message, "error");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <>
      <section className="py-lg-12 py-10">
        <div className="container ">
          <div className=" mx-auto py-10">
            <div className=" col-lg-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="card card-body border-0">
                <h3 className="mb-3">Login Here</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p>User Name</p>
                    <label className="form-label sr-only" htmlFor="email">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="E-mail"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p> Password</p>
                    <label className="form-label sr-only" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-4">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
