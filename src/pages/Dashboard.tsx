
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, User, FileText, Clock } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen p-8 bg-background pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-gray-600 mb-8">Here's an overview of your job portal activity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                My Profile
              </CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {user?.profileCompleted 
                  ? "Your profile is complete. You can update it anytime." 
                  : "Complete your profile to apply for jobs."}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/profile">
                  {user?.profileCompleted ? "View Profile" : "Complete Profile"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Jobs Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Browse Jobs
              </CardTitle>
              <CardDescription>Find your next opportunity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Explore job listings, filter by your interests, and apply directly.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/jobs">View Jobs</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Applications Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                My Applications
              </CardTitle>
              <CardDescription>Track your application status</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                View all your submitted applications and track their progress.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/applications">View Applications</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Upcoming Interviews Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Upcoming Interviews
              </CardTitle>
              <CardDescription>Prepare for your interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                View upcoming interview schedules and access preparation resources.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
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
