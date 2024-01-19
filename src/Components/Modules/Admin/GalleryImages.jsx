import React, { useState } from 'react';
import './galleryimg.css';
import Sidebar from '../UserDashbord/Sidebar';

const GalleryImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (file) => {
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
    }

    // Reset the selected image
    setSelectedImage(null);
  };

  return (
    <>
      <Sidebar>
        <section className=''>
          <div className="image-form-container">
            <h1>Image Input Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-4">
                <label htmlFor="selectedImage ">Select Image:</label>
                <input
                  type="file"
                  id="selectedImage"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e.target.files[0])}
                />
              </div>
              <button type="submit" className='buttonUSer'>Submit</button>
            </form>
          </div>
        </section>
      </Sidebar>
    </>
  );
};

export default GalleryImages;
