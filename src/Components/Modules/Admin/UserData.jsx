
import React, { useState } from 'react';
import './admin.css'


const UserData = () => {
  const users = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phoneNumber: '123-456-7890', 
      applicantNo: 'A123', 
      password: '******', 
      loanType: 'Personal', 
      address: '123 Main St', 
      businessAddress: '456 Business Ave',
      bankDetails: {
        name: 'Bank of ABC',
        accountType: 'Savings',
        accountNumber: '1234567890',
        ifscCode: 'ABC123456',
        branchName: 'Main Branch',
      },
      loanRepayment: {
        bankName: 'Bank of XYZ',
        loanType: 'Home Loan',
        emiPending: '10',
        applicantNo: 'A123',
        panNumber: 'ABCPN1234',
        aadharNumber: 'AADHAR5678',
        applicantDOB: '01-01-1990',
        voterId: 'VOTERID123',
      },
    },
    { 
      id: 2, 
      name: 'Jane Doe', 
      email: 'jane@example.com', 
      phoneNumber: '987-654-3210', 
      applicantNo: 'A456', 
      password: '******', 
      loanType: 'Home', 
      address: '789 Oak St', 
      businessAddress: '789 Business Blvd',
      bankDetails: {
        name: 'Bank of DEF',
        accountType: 'Current',
        accountNumber: '9876543210',
        ifscCode: 'DEF987654',
        branchName: 'Business Branch',
      },
      loanRepayment: {
        bankName: 'Bank of LMN',
        loanType: 'Car Loan',
        emiPending: '5',
        applicantNo: 'A456',
        panNumber: 'DEFPN5678',
        aadharNumber: 'AADHAR9012',
        applicantDOB: '02-02-1985',
        voterId: 'VOTERID456',
      },
      
    },
    { 
        id: 3, 
        name: 'John Doe', 
        email: 'john@example.com', 
        phoneNumber: '123-456-7890', 
        applicantNo: 'A123', 
        password: '******', 
        loanType: 'Personal', 
        address: '123 Main St', 
        businessAddress: '456 Business Ave',
        bankDetails: {
          name: 'Bank of ABC',
          accountType: 'Savings',
          accountNumber: '1234567890',
          ifscCode: 'ABC123456',
          branchName: 'Main Branch',
        },
        loanRepayment: {
          bankName: 'Bank of XYZ',
          loanType: 'Home Loan',
          emiPending: '10',
          applicantNo: 'A123',
          panNumber: 'ABCPN1234',
          aadharNumber: 'AADHAR5678',
          applicantDOB: '01-01-1990',
          voterId: 'VOTERID123',
        },
      },
      { 
        id: 4, 
        name: 'John Doe', 
        email: 'john@example.com', 
        phoneNumber: '123-456-7890', 
        applicantNo: 'A123', 
        password: '******', 
        loanType: 'Personal', 
        address: '123 Main St', 
        businessAddress: '456 Business Ave',
        bankDetails: {
          name: 'Bank of ABC',
          accountType: 'Savings',
          accountNumber: '1234567890',
          ifscCode: 'ABC123456',
          branchName: 'Main Branch',
        },
        loanRepayment: {
          bankName: 'Bank of XYZ',
          loanType: 'Home Loan',
          emiPending: '10',
          applicantNo: 'A123',
          panNumber: 'ABCPN1234',
          aadharNumber: 'AADHAR5678',
          applicantDOB: '01-01-1990',
          voterId: 'VOTERID123',
        },
      },
   
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const openPopup = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  return (
    <section className='py-lg-16 py-10'>
    <div className='container'>
      <h2 className='heading'>User Data</h2>
      <div className="custom-cards">
        {users.map((user) => (
          <div key={user.id} className="custom-card" onClick={() => openPopup(user)}>
            <p>{user.name}</p>
     
          </div>
        ))}
      </div>

      {selectedUser && (
        <Popup user={selectedUser} onClose={closePopup} />
      )}
    </div>
    </section>
  );
};

const Popup = ({ user, onClose }) => {
  return (
    <section className='py-lg-20 py-10'>
      <div className="container">
    <div className="popup-overlay">
      <div className="popup1">
        <h2 className='popUpheading'>Applicant Data</h2>
  
        {/* User Table */}
        
      <div className='container'>
        <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="table-container">
      <table className="responsive-table">
        <h3>User Details</h3>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td><strong>Phone Number:</strong></td>
            <td>{user.phoneNumber}</td>
          </tr>
          <tr>
            <td><strong>Applicant No:</strong></td>
            <td>{user.applicantNo}</td>
          </tr>
          <tr>
            <td><strong>Password:</strong></td>
            <td>{user.password}</td>
          </tr>
          <tr>
            <td><strong>Type of Loan:</strong></td>
            <td>{user.loanType}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td><strong>Business Address:</strong></td>
            <td>{user.businessAddress}</td>
          </tr>
        </tbody>
      </table>
        </div>
        </div>
  
        {/* Bank Table */}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <table className="responsive-table">
          <h3>Bank Details</h3>
          <tbody className=''>
            <tr>
              <td><strong>Name of Bank:</strong></td>
              <td>{user.bankDetails.name}</td>
            </tr>
            <tr>
              <td><strong>Account Type:</strong></td>
              <td>{user.bankDetails.accountType}</td>
            </tr>
            <tr>
              <td><strong>Account Number:</strong></td>
              <td>{user.bankDetails.accountNumber}</td>
            </tr>
            <tr>
              <td><strong>IFSC Code:</strong></td>
              <td>{user.bankDetails.ifscCode}</td>
            </tr>
            <tr>
              <td><strong>Branch Name:</strong></td>
              <td>{user.bankDetails.branchName}</td>
            </tr>
          </tbody>
        </table>
        </div>
  
        {/* Loan Repayment Table */}
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <table className="responsive-table">
          <h3>Loan Repayment</h3>
          <tbody className='py-5'>
            <tr>
              <td><strong>Bank Name:</strong></td>
              <td>{user.loanRepayment.bankName}</td>
            </tr>
            <tr>
              <td><strong>Loan Type:</strong></td>
              <td>{user.loanRepayment.loanType}</td>
            </tr>
            <tr>
              <td><strong>EMI Pending:</strong></td>
              <td>{user.loanRepayment.emiPending}</td>
            </tr>
            <tr>
              <td><strong>Applicant No:</strong></td>
              <td>{user.loanRepayment.applicantNo}</td>
            </tr>
            <tr>
              <td><strong>PAN Number:</strong></td>
              <td>{user.loanRepayment.panNumber}</td>
            </tr>
            <tr>
              <td><strong>Aadhar Number:</strong></td>
              <td>{user.loanRepayment.aadharNumber}</td>
            </tr>
            <tr>
              <td><strong>Applicant DOB:</strong></td>
              <td>{user.loanRepayment.applicantDOB}</td>
            </tr>
            <tr>
              <td><strong>Voter ID:</strong></td>
              <td>{user.loanRepayment.voterId}</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
        </div>
  
        <button onClick={onClose}>Close</button>
      </div>
    </div>
    </div>
  </section>
  
  
  );
};

export default UserData;
