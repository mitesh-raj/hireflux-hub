
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobsData } from '@/data/jobs';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundJob = jobsData.find(j => j.id === jobId);
      setJob(foundJob);
      setIsLoading(false);
    }, 500);
  }, [jobId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  if (!job) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <Link to="/jobs" className="text-primary">Back to Jobs</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <Link to="/jobs" className="text-primary mb-4 inline-block">&larr; Back to Jobs</Link>
        
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{job.company} • {job.location}</p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">Job Description</h2>
          <p className="mb-4">{job.description}</p>
          
          <h3 className="text-lg font-bold mb-2">Requirements:</h3>
          <ul className="list-disc pl-5 mb-4">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          
          <div className="mt-6 flex gap-4">
            <Link
              to={job.assessment ? `/jobs/${job.id}/assessment` : `/jobs/${job.id}/apply`}
              className="bg-primary text-white px-6 py-2 rounded"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
