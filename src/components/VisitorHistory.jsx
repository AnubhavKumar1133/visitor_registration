import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const VisitorHistory = ({ visitors }) => {
  const [expandedVisitor, setExpandedVisitor] = useState(null);

  const toggleExpand = (id) => {
    setExpandedVisitor(expandedVisitor === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <TransitionGroup>
        {visitors.map((visitor) => (
          <CSSTransition key={visitor.id} timeout={500} classNames="visitor-item">
            <div className="border-b border-gray-100 last:border-b-0">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleExpand(visitor.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">{visitor.fullName}</h3>
                    <p className="text-sm text-gray-500">{visitor.timestamp}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm text-gray-600">
                      {visitor.purpose}
                    </span>
                    <span className={`transform transition-transform duration-300 ${
                      expandedVisitor === visitor.id ? 'rotate-180' : ''
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              
              <CSSTransition 
                in={expandedVisitor === visitor.id} 
                timeout={300} 
                classNames="detail-expand"
                unmountOnExit
              >
                <div className="bg-gray-50 p-4 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-500">Flat Number</p>
                      <p className="text-sm">{visitor.flatNumber}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Mobile Number</p>
                      <p className="text-sm">{visitor.mobileNumber}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Purpose of Visit</p>
                      <p className="text-sm">{visitor.purpose}</p>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default VisitorHistory;