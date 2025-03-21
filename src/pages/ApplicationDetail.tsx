
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOB_APPLICATION_STATUS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, Clock, FileText, Briefcase, Building, AlertCircle } from 'lucide-react';

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
  
  // Helper function to get status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case JOB_APPLICATION_STATUS.APPLIED:
        return <FileText className="h-5 w-5 text-blue-500" />;
      case JOB_APPLICATION_STATUS.REVIEW:
        return <Clock className="h-5 w-5 text-purple-500" />;
      case JOB_APPLICATION_STATUS.INTERVIEW:
        return <Calendar className="h-5 w-5 text-amber-500" />;
      case JOB_APPLICATION_STATUS.OFFERED:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case JOB_APPLICATION_STATUS.REJECTED:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  // Function to get status badge color
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case JOB_APPLICATION_STATUS.APPLIED:
        return "bg-blue-100 text-blue-800";
      case JOB_APPLICATION_STATUS.REVIEW:
        return "bg-purple-100 text-purple-800";
      case JOB_APPLICATION_STATUS.INTERVIEW:
        return "bg-amber-100 text-amber-800";
      case JOB_APPLICATION_STATUS.OFFERED:
        return "bg-green-100 text-green-800";
      case JOB_APPLICATION_STATUS.REJECTED:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  if (!application) {
    return (
      <div className="min-h-screen p-8 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Application Not Found</h1>
          <Link to="/applications" className="text-primary">Back to Applications</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 pt-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        <Link to="/applications" className="inline-flex items-center text-primary mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Applications
        </Link>
        
        <Card className="mb-8 border-none shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{application.jobTitle}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{application.company}</span>
                </div>
              </div>
              <Badge 
                className={`text-sm px-3 py-1 ${getStatusBadgeClass(application.status)} flex items-center gap-1.5`}
              >
                {getStatusIcon(application.status)}
                {application.status}
              </Badge>
            </div>
            <div className="bg-white/50 p-3 rounded-md inline-block">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">Applied on: {new Date(application.appliedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', month: 'long', day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Application Timeline</CardTitle>
            <CardDescription>Track the progress of your application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8 relative">
              {/* Timeline connector */}
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {application.timeline.map((event, index) => (
                <div key={index} className="relative pl-10">
                  <div className={`absolute left-0 p-1.5 rounded-full ${
                    index === application.timeline.length - 1 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white border-2 border-primary text-primary'
                  }`}>
                    {getStatusIcon(event.status)}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{event.status}</h3>
                      <span className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{event.notes}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-dashed">
              <h3 className="font-medium mb-4">Next Steps</h3>
              {application.status === JOB_APPLICATION_STATUS.INTERVIEW ? (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-amber-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-amber-800">Your interview is coming up</p>
                      <p className="text-amber-700 mt-1">Prepare for your interview by researching the company and practicing your answers.</p>
                      <Button className="mt-3 bg-amber-600 hover:bg-amber-700 text-white" size="sm">
                        Prepare for Interview
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">Stay tuned for updates on your application.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationDetail;
