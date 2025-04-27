import React, { useRef, useEffect } from 'react';

const VisitorDisplay = ({ visitor }) => {
  const displayRef = useRef(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visitor]);

  return (
    <div 
      ref={displayRef}
      className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm animate-fade-in"
    >
      <h2 className="text-xl font-semibold text-blue-800 mb-4">
        Visit Registered Successfully
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Full Name</p>
          <p className="text-gray-800 font-medium">{visitor.fullName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Flat Number</p>
          <p className="text-gray-800 font-medium">{visitor.flatNumber}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Purpose of Visit</p>
          <p className="text-gray-800 font-medium">{visitor.purpose}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Mobile Number</p>
          <p className="text-gray-800 font-medium">{visitor.mobileNumber}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm text-gray-500">Registration Time</p>
          <p className="text-gray-800 font-medium">{visitor.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VisitorDisplay;