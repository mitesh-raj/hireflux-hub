
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOB_APPLICATION_STATUS } from '@/lib/constants';

const ApplicationDetail = () => {
  const { applicationId } = useParams();
  const [application, setApplication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setApplication({
        id: applicationId,
        jobId: '1',
        jobTitle: 'Senior Frontend Developer',
        company: 'TechCo Inc.',
        appliedDate: '2023-05-15',
        status: JOB_APPLICATION_STATUS.INTERVIEW,
        timeline: [
          {
            date: '2023-05-15',
            status: JOB_APPLICATION_STATUS.APPLIED,
            notes: 'Application submitted'
          },
          {
            date: '2023-05-18',
            status: JOB_APPLICATION_STATUS.REVIEW,
            notes: 'Application under review'
          },
          {
            date: '2023-05-22',
            status: JOB_APPLICATION_STATUS.INTERVIEW,
            notes: 'Interview scheduled for May 30'
          }
        ]
      });
      setIsLoading(false);
    }, 500);
  }, [applicationId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  if (!application) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Application Not Found</h1>
          <Link to="/applications" className="text-primary">Back to Applications</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <Link to="/applications" className="text-primary mb-4 inline-block">&larr; Back to Applications</Link>
        
        <h1 className="text-3xl font-bold mb-2">{application.jobTitle}</h1>
        <p className="text-xl text-gray-600 mb-6">{application.company}</p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-600">Applied on: {new Date(application.appliedDate).toLocaleDateString()}</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{application.status}</span>
          </div>
          
          <h2 className="text-xl font-bold mb-4">Application Timeline</h2>
          <div className="space-y-4">
            {application.timeline.map((event, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
                <p className="font-bold">{event.status} - {new Date(event.date).toLocaleDateString()}</p>
                <p className="text-gray-600">{event.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
