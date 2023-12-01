import React from "react";
import { Link } from "react-router-dom";
// import '../Modules/Admin/admin.css'
const Admin = () => {
  return (
    <section className="py-lg-16 py-10">
      <div className="container">
        <div className="button-container">
          <div className="centered-buttons-container">
            <Link to="/adminEmail">
              <button className="btn btn-secondary m-2">Email</button>
            </Link>

            <Link to="/adminHistor">
              <button className="btn btn-primary m-2">History</button>
            </Link>


            <Link to="/adminUserData">
              <button className="btn btn-info m-2">UserData</button>
            </Link>
            <Link to="/adminPending">
              <button className="btn btn-success m-3">PendingData</button>
            </Link>

           
            <Link to="/Intrestrate">
              <button className="btn btn-warning">Intrestrate</button>
            </Link>

            <Link to="/testmonial">
              <button className="btn btn-success m-2">Testmonial</button>
            </Link>

            <Link to="/galleryimages">
              <button className="btn btn-secondary m-2">GalleryImages</button>
            </Link>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Admin;
