import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import '../styles/FormAnimations.css';

const initialFormData = {
  fullName: '',
  flatNumber: '',
  purpose: '',
  mobileNumber: '',
};

const VisitorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const purposes = [
    { value: '', label: 'Select purpose' },
    { value: 'Delivery', label: 'Delivery' },
    { value: 'Guest', label: 'Guest' },
    { value: 'Maintenance', label: 'Maintenance' },
    { value: 'Other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.flatNumber.trim()) {
      newErrors.flatNumber = 'Flat number is required';
    }
    
    if (!formData.purpose) {
      newErrors.purpose = 'Purpose of visit is required';
    }
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For mobile number, only allow digits
    if (name === 'mobileNumber' && value !== '') {
      const digits = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: digits });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      setFormSubmitted(true);
      
      // Reset form after brief delay for animation
      setTimeout(() => {
        setFormData(initialFormData);
        setFormSubmitted(false);
      }, 800);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="Enter your full name"
          />
          
          <FormInput
            label="Flat Number"
            name="flatNumber"
            type="text"
            value={formData.flatNumber}
            onChange={handleChange}
            error={errors.flatNumber}
            placeholder="Enter flat number (e.g. A-101)"
          />
          
          <SelectInput
            label="Purpose of Visit"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            options={purposes}
            error={errors.purpose}
          />
          
          <FormInput
            label="Mobile Number"
            name="mobileNumber"
            type="tel"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={errors.mobileNumber}
            placeholder="10-digit mobile number"
            maxLength={10}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <CSSTransition
            in={formSubmitted}
            timeout={500}
            classNames="button-submit"
            unmountOnExit
          >
            <div className="absolute">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </CSSTransition>

          <button
            type="submit"
            className={`w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md 
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:ring-opacity-50 transform transition-all duration-300 
            hover:scale-105 shadow-md ${formSubmitted ? 'opacity-0' : 'opacity-100'}`}
          >
            Register Visit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisitorForm;