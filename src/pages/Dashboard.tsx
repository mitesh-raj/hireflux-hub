
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, User, FileText, Clock } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Welcome, {user?.name}!</h1>
        <p className="text-gray-600 mb-8">Here's an overview of your job portal activity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Link to="/applications">View Applications</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Upcoming Interviews Card */}
          <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group">
            <CardHeader className="pb-2 border-b border-purple-100">
              <CardTitle className="flex items-center text-purple-800">
                <Clock className="mr-2 h-5 w-5 text-purple-500" />
                Upcoming Interviews
              </CardTitle>
              <CardDescription>Prepare for your interviews</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                View upcoming interview schedules and access preparation resources.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transform transition-transform group-hover:scale-105" variant="outline">
                <Link to="/applications">Manage Interviews</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
