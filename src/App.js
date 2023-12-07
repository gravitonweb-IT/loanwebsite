import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./assets/css/theme.min.css";
import "./assets/fonts/flat-font-icons/css/flaticon.css";
import "./assets/fonts/fontello-icons/fontello.css";
import "./assets/libs/bootstrap-icons/font/bootstrap-icons.css";
import "./assets/libs/jquery-ui/dist/themes/base/jquery-ui.min.css";
import "./assets/libs/magnific-popup/dist/magnific-popup.css";
import "./assets/libs/nouislider/dist/nouislider.min.css";
import "./assets/libs/tiny-slider/dist/tiny-slider.css";
import Home from './Components/Modules/Home';
import About from './Components/Modules/About';
import Contact from './Components/Modules/Contact';
import Blog from './Components/Modules/Blog';
import Loan from './Components/Modules/Loan';
import RefinanceLoan from './Components/Modules/RefinanceLoan';
import StudentLoan from './Components/Modules/StudentLoan';
import HomeLoan from "./Components/Modules/HomeLoan";
import BusinessLoan from './Components/Modules/BusinessLoan';
import PersonalLoan from './Components/Modules/PersonalLoan';
import CarLoan from "./Components/Modules/CarLoan";
import Footer from './Common/Footer';
import EducationLoan from "./Components/Modules/EducationLoan";
import Navbar from './Common/Navbar';
import Gallery from './Components/Modules/Gallery';
import Career from './Components/Modules/Career';
import Login from './Components/Modules/Login';
import Admin from './Components/Modules/Admin';
import Agent from './Components/Modules/Agent';
import Termcondation from './Components/Modules/Termcondation';
import UserDashbord from './Components/Modules/UserDashbord';
import Email from './Components/Modules/Admin/Email';
import History from './Components/Modules/Admin/History';
import PendingWork from './Components/Modules/Admin/PendingWork';
import UserData from './Components/Modules/Admin/UserData';
import Intrestrate from './Components/Modules/Admin/Intrestrate';
import Testmonial from './Components/Modules/Admin/Testmonial';
import GalleryImages from './Components/Modules/Admin/GalleryImages';
import BankForm from './Components/Modules/UserDashbord/BankForm';
import { Status } from './Components/Modules/UserDashbord/Status';





function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeloan" element={<HomeLoan />} />
        <Route path="/businessloan" element={<BusinessLoan />} />
        <Route path="/carloan" element={<CarLoan/>} />
        <Route path="/educationloan" element ={<EducationLoan/>}/>
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/studentloan" element={<StudentLoan />} />
        <Route path="/refinanceloan" element={<RefinanceLoan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/userdashbord" element={<UserDashbord/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/agent" element={<Agent/>}/>
     
        <Route path="/Termcondation" element={<Termcondation/>}/>

        {/* AdminRoutes */}

        <Route path='/adminEmail' element={<Email/>}/>
        <Route path='/adminHistor' element={<History/>}/>
        <Route path='/adminPending' element={<PendingWork/>}/>
        <Route path='/adminUserData' element={<UserData/>}/>
        <Route path='/intrestrate' element={<Intrestrate/>}/>
        <Route path='/testmonial' element={<Testmonial/>}/>
        <Route path='/galleryimages' element={<GalleryImages/>}/>
        <Route path='/bankform' element={<BankForm/>}/>
        <Route path='/status' element={<Status/>}/>






      


     

        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
