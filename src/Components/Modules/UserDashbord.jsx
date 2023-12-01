import React from 'react'
import { Link } from 'react-router-dom'
const UserDashbord = () => {
 
  
  return (
    <>
 <section className="py-lg-16 py-10">
      <div className="container">
        <div className="button-container">
          <div className="centered-buttons-container">
            <Link to="/bankform">
              <button className="btn btn-secondary m-2">AddBank</button>
            </Link>

          

        
          </div>
        </div>
      </div>
     
    </section>

  
   </>
  )
}

export default UserDashbord