
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JOB_APPLICATION_STATUS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, Clock, Building, ChevronRight } from 'lucide-react';

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
          location: 'San Francisco, CA',
          appliedDate: '2023-05-15',
          status: JOB_APPLICATION_STATUS.INTERVIEW,
          interviewDate: '2023-05-22',
          logo: 'https://api.dicebear.com/6.x/initials/svg?seed=TC'
        },
        {
          id: '2',
          jobTitle: 'UX Designer',
          company: 'DesignHub',
          location: 'Remote',
          appliedDate: '2023-05-10',
          status: JOB_APPLICATION_STATUS.REVIEW,
          logo: 'https://api.dicebear.com/6.x/initials/svg?seed=DH'
        },
        {
          id: '3',
          jobTitle: 'Product Manager',
          company: 'InnovateX',
          location: 'New York, NY',
          appliedDate: '2023-05-05',
          status: JOB_APPLICATION_STATUS.APPLIED,
          logo: 'https://api.dicebear.com/6.x/initials/svg?seed=IX'
        },
        {
          id: '4',
          jobTitle: 'Full Stack Developer',
          company: 'WebSolutions Inc.',
          location: 'Austin, TX',
          appliedDate: '2023-04-28',
          status: JOB_APPLICATION_STATUS.REJECTED,
          logo: 'https://api.dicebear.com/6.x/initials/svg?seed=WS'
        }
      ]);
      setIsLoading(false);
    }, 500);
  }, []);
  
  // Helper function to determine badge color based on status
  const getStatusBadgeStyles = (status) => {
    switch (status) {
      case JOB_APPLICATION_STATUS.APPLIED:
        return "bg-blue-100 text-blue-800";
      case JOB_APPLICATION_STATUS.REVIEW:
        return "bg-purple-100 text-purple-800";
      case JOB_APPLICATION_STATUS.INTERVIEW:
        return "bg-green-100 text-green-800";
      case JOB_APPLICATION_STATUS.OFFER:
        return "bg-teal-100 text-teal-800";
      case JOB_APPLICATION_STATUS.REJECTED:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">My Applications</h1>
            <p className="text-gray-600">Track your job applications and their status</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
              asChild
            >
              <Link to="/jobs">Browse More Jobs</Link>
            </Button>
          </div>
        </div>
        
        {applications.length === 0 ? (
          <Card className="border-none shadow-md text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <Briefcase className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">No applications yet</h3>
                <p className="text-gray-600 mb-6">Start applying for jobs to build your career</p>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  asChild
                >
                  <Link to="/jobs">Browse Jobs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {applications.map(app => (
              <Card 
                key={app.id} 
                className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex-grow">
                    <div className="flex items-start md:items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                        <img src={app.logo} alt={app.company} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{app.jobTitle}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1 text-gray-500" />
                            {app.company}
                          </div>
                          <span className="hidden sm:inline text-gray-300">•</span>
                          <div className="flex items-center">
                            {app.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                        Applied on: {new Date(app.appliedDate).toLocaleDateString()}
                      </div>
                      {app.interviewDate && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1 text-green-500" />
                          Interview: {new Date(app.interviewDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-row md:flex-col items-center justify-between p-6 border-t md:border-t-0 md:border-l border-gray-100 bg-gradient-to-br from-white to-gray-50">
                    <Badge className={`${getStatusBadgeStyles(app.status)} px-3 py-1 text-xs rounded-full mb-0 md:mb-4`}>
                      {app.status}
                    </Badge>
                    <Link 
                      to={`/applications/${app.id}`}
                      className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
