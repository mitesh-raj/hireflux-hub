
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Briefcase, User, FileText, Clock, Calendar, Building, ChevronRight } from "lucide-react";
import { JOB_APPLICATION_STATUS } from '@/lib/constants';

const Dashboard = () => {
  const { user } = useAuth();
  const [recentApplications, setRecentApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setRecentApplications([
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
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Welcome, {user?.name}!</h1>
        <p className="text-gray-600 mb-8">Here's an overview of your job portal activity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Profile Card */}
          <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group">
            <CardHeader className="pb-2 border-b border-purple-100">
              <CardTitle className="flex items-center text-purple-800">
                <User className="mr-2 h-5 w-5 text-purple-500" />
                My Profile
              </CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                {user?.profileCompleted 
                  ? "Your profile is complete. You can update it anytime." 
                  : "Complete your profile to apply for jobs."}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transform transition-transform group-hover:scale-105">
                <Link to="/profile">
                  {user?.profileCompleted ? "View Profile" : "Complete Profile"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Jobs Card */}
          <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group">
            <CardHeader className="pb-2 border-b border-purple-100">
              <CardTitle className="flex items-center text-purple-800">
                <Briefcase className="mr-2 h-5 w-5 text-purple-500" />
                Browse Jobs
              </CardTitle>
              <CardDescription>Find your next opportunity</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                Explore job listings, filter by your interests, and apply directly.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transform transition-transform group-hover:scale-105">
                <Link to="/jobs">View Jobs</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Applications Card */}
          <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group">
            <CardHeader className="pb-2 border-b border-purple-100">
              <CardTitle className="flex items-center text-purple-800">
                <FileText className="mr-2 h-5 w-5 text-purple-500" />
                My Applications
              </CardTitle>
              <CardDescription>Track your application status</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                View all your submitted applications and track their progress.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transform transition-transform group-hover:scale-105">
                <Link to="/applications">View All Applications</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Application Tracking Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-purple-800">Recent Applications</h2>
            <Button asChild variant="outline" className="flex items-center gap-1 text-sm">
              <Link to="/applications">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-10">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : recentApplications.length === 0 ? (
            <Card className="border-none shadow-md text-center py-8">
              <CardContent>
                <div className="flex flex-col items-center justify-center">
                  <Briefcase className="h-12 w-12 text-gray-300 mb-4" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentApplications.map(app => (
                <Card 
                  key={app.id} 
                  className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
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
                          Applied: {new Date(app.appliedDate).toLocaleDateString()}
                        </div>
                        {app.interviewDate && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1 text-green-500" />
                            Interview: {new Date(app.interviewDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Badge className={`${getStatusBadgeStyles(app.status)} px-3 py-1 rounded-full`}>
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
                    
                    {app.status === JOB_APPLICATION_STATUS.INTERVIEW && (
                      <div className="px-6 py-3 bg-green-50 border-t border-green-100">
                        <p className="text-sm font-medium text-green-800 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Prepare for your upcoming interview on {new Date(app.interviewDate).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        {/* Upcoming Interviews Section */}
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Upcoming Interviews</h2>
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              {recentApplications.some(app => app.status === JOB_APPLICATION_STATUS.INTERVIEW) ? (
                <div className="space-y-4">
                  {recentApplications
                    .filter(app => app.status === JOB_APPLICATION_STATUS.INTERVIEW)
                    .map(app => (
                      <div key={app.id} className="p-4 border border-green-100 rounded-lg bg-green-50">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm font-medium text-gray-800">
                            {new Date(app.interviewDate).toLocaleDateString()}
                          </span>
                          <span className="ml-auto text-sm text-gray-600">
                            {`10:00 AM`}
                          </span>
                        </div>
                        <h3 className="font-medium mb-1">{app.jobTitle}</h3>
                        <p className="text-sm text-gray-600 mb-2">{app.company}</p>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-green-100 text-green-800">Technical Interview</Badge>
                          <Button size="sm" variant="outline" className="text-xs">Prepare</Button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center py-6">
                  <Clock className="h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No upcoming interviews</h3>
                  <p className="text-gray-600">Keep applying to jobs to secure interviews</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
