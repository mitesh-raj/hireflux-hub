
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JOB_APPLICATION_STATUS } from '@/lib/constants';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setApplications([
        {
          id: '1',
          jobTitle: 'Senior Frontend Developer',
          company: 'TechCo Inc.',
          appliedDate: '2023-05-15',
          status: JOB_APPLICATION_STATUS.INTERVIEW,
        },
        {
          id: '2',
          jobTitle: 'UX Designer',
          company: 'DesignHub',
          appliedDate: '2023-05-10',
          status: JOB_APPLICATION_STATUS.REVIEW,
        }
      ]);
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Applications</h1>
        
        <div className="space-y-4">
          {applications.map(app => (
            <div key={app.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{app.jobTitle}</h2>
              <p className="text-gray-600 mb-2">{app.company}</p>
              <div className="flex justify-between items-center">
                <p>Applied on: {new Date(app.appliedDate).toLocaleDateString()}</p>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{app.status}</span>
              </div>
              <div className="mt-4">
                <Link 
                  to={`/applications/${app.id}`}
                  className="text-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
