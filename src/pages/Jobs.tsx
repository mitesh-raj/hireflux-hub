
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '@/lib/constants';
import { JOB_STATUS } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Jobs</h1>
        
        <Tabs defaultValue="available" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
            <TabsTrigger value="available" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">Available Jobs</TabsTrigger>
            <TabsTrigger value="applied" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">My Applications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="available" className="space-y-6">
            {availableJobs.map(job => (
              <Card key={job.id} className="overflow-hidden border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardHeader className="pb-2 border-b border-purple-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1 text-purple-800">{job.title}</CardTitle>
                      <CardDescription className="flex items-center text-gray-600">
                        <Building className="h-4 w-4 mr-1 text-purple-400" />
                        {job.company} 
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1 text-purple-400" /> 
                        {job.location}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-none">
                      {job.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {job.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                        +{job.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-purple-100 pt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1 text-purple-400" />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Link 
                    to={`/jobs/${job.id}`}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-full inline-block transform transition-transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="applied" className="space-y-6">
            {appliedJobs.length === 0 ? (
              <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <Briefcase className="h-12 w-12 mx-auto text-purple-300 mb-4" />
                  <p className="text-gray-600">You haven't applied to any jobs yet.</p>
                  <Link to="/jobs" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 font-medium mt-2 inline-block">
                    Browse available jobs
                  </Link>
                </CardContent>
              </Card>
            ) : (
              appliedJobs.map(job => (
                <Card key={job.id} className="overflow-hidden border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardHeader className="pb-2 border-b border-purple-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-1 text-purple-800">{job.title}</CardTitle>
                        <CardDescription className="flex items-center text-gray-600">
                          <Building className="h-4 w-4 mr-1 text-purple-400" />
                          {job.company} 
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1 text-purple-400" /> 
                          {job.location}
                        </CardDescription>
                      </div>
                      <Badge 
                        className={`${
                          job.status === 'INTERVIEW' 
                            ? 'bg-gradient-to-r from-blue-400 to-blue-600' 
                            : 'bg-gradient-to-r from-amber-400 to-amber-600'
                        } text-white border-none`}
                      >
                        {job.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-gray-600">
                      Applied on: {new Date(job.appliedDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t border-purple-100 pt-4">
                    <Link 
                      to={`/applications/${job.id}`}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 font-medium hover:underline"
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
