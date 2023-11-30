import React from "react";
import { Link } from 'react-router-dom'; 
import '../Modules/Admin/admin.css'
const Admin = () => {
    return (
      

<section className="py-lg-16 py-10">
  <div className="container">
  <div className="button-container">
    <div className="centered-buttons-container">
      <Link to="/adminEmail">
        <button className="button" style={{ backgroundColor: 'red' }}>Email</button>
      </Link>

      <Link to="/adminHistor">
        <button className="button" style={{ backgroundColor: 'blue' }}>History</button>
      </Link>

      <Link to="/adminPending">
        <button className="button" style={{ backgroundColor: 'green' }}>PendingData</button>
      </Link>

      <Link to="/adminUserData">
        <button className="button" style={{ backgroundColor: 'yellow' }}>UserData</button>
      </Link>
      <Link to="/Intrestrate">
        <button className="button" style={{ backgroundColor: 'yellow' }}>Intrestrate</button>
      </Link>

      <Link to="/testmonial">
        <button className="button" style={{ backgroundColor: 'red' }}>Testmonial</button>
      </Link>

      <Link to="/galleryimages">
        <button className="button" style={{ backgroundColor: 'blue' }}>GalleryImages</button>
      </Link>
    </div>
  </div></div>

</section>

    );
  };
  
  export default Admin;
  