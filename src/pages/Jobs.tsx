
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '@/data/jobs';
import { JOB_STATUS } from '@/lib/constants';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const openJobs = jobsData.filter(job => job.status === JOB_STATUS.OPEN);
      setJobs(openJobs);
      setIsLoading(false);
    }, 500);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
        
        <div className="space-y-4">
          {jobsData.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
              <p className="mb-4">{job.description.substring(0, 150)}...</p>
              <Link 
                to={`/jobs/${job.id}`}
                className="bg-primary text-white px-4 py-2 rounded inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
