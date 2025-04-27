import React from 'react';

const FormInput = ({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  error, 
  placeholder,
  maxLength 
}) => {
  return (
    <div className="form-group">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
        transition-all duration-300 ${
          error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 transition-all duration-300">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;