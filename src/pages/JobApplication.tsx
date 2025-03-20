
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/applications');
  };
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Submit Application</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Resume</label>
              <input type="file" className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Cover Letter (Optional)</label>
              <textarea 
                className="w-full p-2 border rounded" 
                rows={5}
                placeholder="Write your cover letter here..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms">
                I certify that all the information provided is accurate
              </label>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
