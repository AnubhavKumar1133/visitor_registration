import React from 'react';

const SelectInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options, 
  error 
}) => {
  return (
    <div className="form-group">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 
        transition-all duration-300 ${
          error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500 transition-all duration-300">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectInput;