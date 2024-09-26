import React, { useState } from 'react';
import './ApplicationForm.css';  

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    startupName: '',
    ayushCategory: '',
    address: '',
    contact: '',
    description: '',
    documents: null  // Added for document upload
  });

  const [step, setStep] = useState(1); // Step tracker

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'documents') {
      setFormData({
        ...formData,
        [name]: files[0]  // For file input
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className='form-wrapper'>
      <div className="container">
        <header>
          <h1>AYUSH Startup Registration Portal</h1>
        </header>
        <main>
          <form className="application-form" onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h2>Register Your Startup</h2>
                
                <label htmlFor="startup-name">Startup Name</label>
                <input
                  type="text"
                  id="startup-name"
                  name="startupName"
                  placeholder="Enter your startup name"
                  value={formData.startupName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="ayush-category">AYUSH Category</label>
                <select
                  id="ayush-category"
                  name="ayushCategory"
                  value={formData.ayushCategory}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select AYUSH Category</option>
                  <option value="ayurveda">Ayurveda</option>
                  <option value="yoga">Yoga</option>
                  <option value="unani">Unani</option>
                  <option value="siddha">Siddha</option>
                  <option value="homeopathy">Homeopathy</option>
                </select>

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="contact">Contact Details</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Enter contact details"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="description">Description of Startup</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter a brief description of your startup"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>

{step === 1 && (
  <button type="button" className="next-button" onClick={nextStep}>Next</button>
)}
              </>
            )}

            {step === 2 && (
              <>
                <h2>Upload Necessary Documents</h2>

                <label htmlFor="documents">Founders' Agreement</label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="documents">Company's Pan Card</label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="documents">Certificate of Incorporation</label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="documents">Pitch Deck</label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  onChange={handleChange}
                  required
                />

<div className="button-group">
      <button type="button" className="back-button" onClick={prevStep}>Back</button>
      <button type="submit" className="submit-button">Submit Application</button>
    </div>
  </>
)}
              
          </form>
        </main>
      </div>
    </div>
  );
};

export default ApplicationForm;
