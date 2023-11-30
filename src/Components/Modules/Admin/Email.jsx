 

import React, { useState } from 'react';
import './admin.css';  

const Email = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Email submitted:', formData);
  };

  return (
    <section className='py-lg-16 py-10'>
    <div>
      <h2 className='heading'>Email Panel</h2>
      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className='btn'>Send Email</button>
      </form>
    </div>
    </section>
  );
};

export default Email;
