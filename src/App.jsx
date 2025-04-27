import React, { useState, useEffect } from 'react';
import VisitorForm from './components/VisitorForm';
import VisitorDisplay from './components/VisitorDisplay';
import VisitorHistory from './components/VisitorHistory';
import './styles/App.css';

function App() {
  const [currentVisitor, setCurrentVisitor] = useState(null);
  const [visitorHistory, setVisitorHistory] = useState([]);
  const [showSubmissionAnimation, setShowSubmissionAnimation] = useState(false);

  useEffect(() => {
    const storedVisitors = localStorage.getItem('visitorHistory');
    if (storedVisitors) {
      setVisitorHistory(JSON.parse(storedVisitors));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('visitorHistory', JSON.stringify(visitorHistory));
  }, [visitorHistory]);

  const handleFormSubmit = (visitorData) => {
    const visitorWithTimestamp = {
      ...visitorData,
      timestamp: new Date().toLocaleString(),
      id: Date.now()
    };
    
    setCurrentVisitor(visitorWithTimestamp);
    
    setVisitorHistory([visitorWithTimestamp, ...visitorHistory]);
    
    setShowSubmissionAnimation(true);
    setTimeout(() => setShowSubmissionAnimation(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Visitor Registration</h1>
          <p className="text-gray-600">Please fill the form to register your visit</p>
        </header>

        <div className={`transition-all duration-500 ${showSubmissionAnimation ? 'scale-105' : 'scale-100'}`}>
          <VisitorForm onSubmit={handleFormSubmit} />
        </div>

        {currentVisitor && (
          <div className="mt-8 animate-fade-in">
            <VisitorDisplay visitor={currentVisitor} />
          </div>
        )}

        {visitorHistory.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Visitor History</h2>
            <VisitorHistory visitors={visitorHistory} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;