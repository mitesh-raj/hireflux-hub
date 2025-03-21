
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, UserCheck, Building, TrendingUp, CalendarDays, FileCog, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for dashboard
  const jobStats = [
    { id: 1, title: 'Total Jobs', value: 124, icon: <Briefcase className="h-5 w-5" />, change: '+12%', color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'Active Applicants', value: 1842, icon: <Users className="h-5 w-5" />, change: '+5%', color: 'from-purple-500 to-purple-600' },
    { id: 3, title: 'Placements', value: 64, icon: <UserCheck className="h-5 w-5" />, change: '+8%', color: 'from-green-500 to-green-600' },
    { id: 4, title: 'Companies', value: 38, icon: <Building className="h-5 w-5" />, change: '+3%', color: 'from-amber-500 to-amber-600' },
  ];
  
  const applicationStatusData = [
    { name: 'Applied', value: 1245 },
    { name: 'Reviewed', value: 876 },
    { name: 'Interview', value: 543 },
    { name: 'Offer', value: 210 },
    { name: 'Rejected', value: 325 },
  ];
  
  const COLORS = ['#4f46e5', '#8b5cf6', '#0ea5e9', '#10b981', '#f43f5e'];
  
  const jobCategoryData = [
    { name: 'Software Dev', jobs: 42 },
    { name: 'Design', jobs: 28 },
    { name: 'Marketing', jobs: 16 },
    { name: 'Finance', jobs: 12 },
    { name: 'HR', jobs: 8 },
    { name: 'Sales', jobs: 18 },
  ];
  
  const applicationTrendData = [
    { month: 'Jan', applications: 425, placements: 32 },
    { month: 'Feb', applications: 516, placements: 38 },
    { month: 'Mar', applications: 648, placements: 41 },
    { month: 'Apr', applications: 583, placements: 39 },
    { month: 'May', applications: 691, placements: 42 },
    { month: 'Jun', applications: 754, placements: 48 },
  ];
  
  const recentJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCo Inc.', applicants: 52, postedDate: '2023-06-01', status: 'Active' },
    { id: 2, title: 'UX Designer', company: 'DesignHub', applicants: 38, postedDate: '2023-06-03', status: 'Active' },
    { id: 3, title: 'Data Scientist', company: 'AnalyticsPro', applicants: 27, postedDate: '2023-06-05', status: 'Active' },
    { id: 4, title: 'Project Manager', company: 'ManagementPlus', applicants: 19, postedDate: '2023-06-07', status: 'Active' },
  ];
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-600">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}. Here's what's happening with your job portal.</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center gap-2">
              <FileCog className="h-4 w-4" /> Generate Report
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              <Briefcase className="h-4 w-4 mr-2" /> Post New Job
            </Button>
          </div>
        </header>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {jobStats.map((stat) => (
            <Card key={stat.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{stat.change}</Badge>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{stat.value.toLocaleString()}</h2>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8 bg-white border border-gray-200 shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <Activity className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <Briefcase className="h-4 w-4 mr-2" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="candidates" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Candidates
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Application Status</CardTitle>
                  <CardDescription>Distribution of applications by status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={applicationStatusData}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {applicationStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Application Trends</CardTitle>
                  <CardDescription>Monthly applications and placements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={applicationTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="applications" stroke="#4f46e5" strokeWidth={2} />
                        <Line type="monotone" dataKey="placements" stroke="#10b981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-none shadow-md mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Jobs by Category</CardTitle>
                <CardDescription>Number of jobs per category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={jobCategoryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="jobs" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Jobs Tab */}
          <TabsContent value="jobs">
            <Card className="border-none shadow-md mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Job Postings</span>
                  <Button size="sm" variant="outline" className="text-xs">View All</Button>
                </CardTitle>
                <CardDescription>Recent job listings and their statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Job Title</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Company</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Applicants</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Posted Date</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Status</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentJobs.map((job) => (
                        <tr key={job.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{job.title}</td>
                          <td className="py-3 px-4">{job.company}</td>
                          <td className="py-3 px-4">{job.applicants}</td>
                          <td className="py-3 px-4">{new Date(job.postedDate).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-green-100 text-green-800">{job.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">Edit</Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-red-600">Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Candidates Tab */}
          <TabsContent value="candidates">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <Card className="border-none shadow-md col-span-1 xl:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Top Candidates</CardTitle>
                  <CardDescription>Highest rated candidates in the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-medium">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">Candidate Name {index + 1}</h3>
                            <p className="text-sm text-gray-500">Software Developer</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge className="mr-2 bg-blue-100 text-blue-800">Top Skills</Badge>
                          <Button size="sm" variant="outline" className="text-xs">View Profile</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Upcoming Interviews</CardTitle>
                  <CardDescription>Next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="p-4 border border-gray-100 rounded-lg">
                        <div className="flex items-center mb-2">
                          <CalendarDays className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm font-medium text-gray-700">
                            {new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString()}
                          </span>
                          <span className="ml-auto text-sm text-gray-500">
                            {`${10 + index}:00 AM`}
                          </span>
                        </div>
                        <h3 className="font-medium mb-1">Candidate Name {index + 1}</h3>
                        <p className="text-sm text-gray-500 mb-2">Frontend Developer at TechCo Inc.</p>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-purple-100 text-purple-800">Technical</Badge>
                          <Button size="sm" variant="outline" className="text-xs">Reschedule</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
