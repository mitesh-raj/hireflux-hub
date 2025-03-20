
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobAssessment = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  // In a real app, these would be fetched from an API
  const questions = [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A programming language",
        "A database system",
        "A design tool"
      ],
      correctAnswer: 0
    }
  ];
  
  const handleComplete = () => {
    navigate(`/jobs/${jobId}/apply`);
  };
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Skills Assessment</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="mb-6">
            Complete this assessment to continue with your application. You need to score at least 60% to proceed.
          </p>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Sample Question:</h2>
            <p className="mb-2">{questions[0].question}</p>
            
            <div className="space-y-2">
              {questions[0].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input 
                    type="radio" 
                    id={`option-${index}`} 
                    name="question" 
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleComplete}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Complete Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAssessment;
