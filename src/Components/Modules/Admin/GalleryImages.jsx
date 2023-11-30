import React, { useState } from 'react';
import './galleryimg.css'
 
const GalleryImages = () => {
  const [imageForms, setImageForms] = useState([
    { id: 1, imageFile: null },
    { id: 2, imageFile: null },
    { id: 3, imageFile: null },
    { id: 4, imageFile: null },
    { id: 5, imageFile: null },
    { id: 6, imageFile: null },
  ]);
 
  const handleImageChange = (id, file) => {
   
    setImageForms((prevForms) =>
      prevForms.map((form) => (form.id === id ? { ...form, imageFile: file } : form))
    );
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
   
    imageForms.forEach((form) => {
      console.log(`Image ${form.id}:`, form.imageFile);
    });
 
   
    setImageForms((prevForms) =>
      prevForms.map((form) => ({ ...form, imageFile: null }))
    );
  };
 
  return (
<>

    <section className='py-lg-10 py-8'>
    <div className="image-form-container">
      <h2>Image Input Form</h2>
      <form onSubmit={handleSubmit}>
        {imageForms.map((form) => (
          <div key={form.id} className="form-group">
            <label htmlFor={`image${form.id}`}>Image {form.id}:</label>
            <input
              type="file"
              id={`image${form.id}`}
              accept="image/*"
              onChange={(e) => handleImageChange(form.id, e.target.files[0])}
            />
          </div>
        ))}
        <button type="submit" className='buttonUSer'>Submit</button>
      </form>
    </div>
    </section>
    </>
  );
};
 
export default GalleryImages;