
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '@/data/jobs';
import { JOB_STATUS } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/button";
import { Briefcase, Building, MapPin, Calendar } from 'lucide-react';

const Jobs = () => {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const openJobs = jobsData.filter(job => job.status === JOB_STATUS.OPEN);
      setAvailableJobs(openJobs);
      
      // Simulate applied jobs (in a real app, this would come from the user's data)
      setAppliedJobs([
        {
          id: '1',
          title: 'Senior Frontend Developer',
          company: 'TechCo Inc.',
          location: 'Remote',
          appliedDate: '2023-05-15',
          status: 'INTERVIEW',
        },
        {
          id: '2',
          title: 'UX Designer',
          company: 'DesignHub',
          location: 'New York, NY',
          appliedDate: '2023-05-10',
          status: 'REVIEW',
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
    <div className="min-h-screen p-8 bg-background pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Jobs</h1>
        
        <Tabs defaultValue="available" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="available">Available Jobs</TabsTrigger>
            <TabsTrigger value="applied">My Applications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="available" className="space-y-6">
            {availableJobs.map(job => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.company} 
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" /> 
                        {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {job.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    {job.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="secondary" className="font-normal">
                        +{job.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Link 
                    to={`/jobs/${job.id}`}
                    className="bg-primary text-white px-4 py-2 rounded inline-block"
                  >
                    View Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="applied" className="space-y-6">
            {appliedJobs.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p>You haven't applied to any jobs yet.</p>
                  <Link to="/jobs" className="text-primary mt-2 inline-block">
                    Browse available jobs
                  </Link>
                </CardContent>
              </Card>
            ) : (
              appliedJobs.map(job => (
                <Card key={job.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {job.company} 
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" /> 
                          {job.location}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          job.status === 'INTERVIEW' 
                            ? 'bg-blue-50 text-blue-700 border-blue-200' 
                            : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                        }`}
                      >
                        {job.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Applied on: {new Date(job.appliedDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-4">
                    <Link 
                      to={`/applications/${job.id}`}
                      className="text-primary"
                    >
                      View Application
                    </Link>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Jobs;
