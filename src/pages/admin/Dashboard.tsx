
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, UserCheck, TrendingUp, CalendarDays, FileCog, Activity, Award, FileCheck, Zap } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for dashboard
  const jobStats = [
    { id: 1, title: 'Total Jobs', value: 124, icon: <Briefcase className="h-5 w-5" />, change: '+12%', color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'Active Applicants', value: 1842, icon: <Users className="h-5 w-5" />, change: '+5%', color: 'from-purple-500 to-purple-600' },
    { id: 3, title: 'Placements', value: 64, icon: <UserCheck className="h-5 w-5" />, change: '+8%', color: 'from-green-500 to-green-600' },
    { id: 4, title: 'Skills in Demand', value: 38, icon: <Award className="h-5 w-5" />, change: '+3%', color: 'from-amber-500 to-amber-600' },
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
    { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', applicants: 52, postedDate: '2023-06-01', status: 'Active' },
    { id: 2, title: 'UX Designer', department: 'Design', applicants: 38, postedDate: '2023-06-03', status: 'Active' },
    { id: 3, title: 'Data Scientist', department: 'Data', applicants: 27, postedDate: '2023-06-05', status: 'Active' },
    { id: 4, title: 'Project Manager', department: 'Operations', applicants: 19, postedDate: '2023-06-07', status: 'Active' },
  ];

  const recentApplications = [
    { id: 1, name: 'Alex Johnson', position: 'Senior Frontend Developer', status: 'Interview', date: '2023-06-08', skills: ['React', 'TypeScript'] },
    { id: 2, name: 'Maria Garcia', position: 'UX Designer', status: 'Review', date: '2023-06-07', skills: ['Figma', 'UI/UX'] },
    { id: 3, name: 'David Kim', position: 'Data Scientist', status: 'Applied', date: '2023-06-06', skills: ['Python', 'ML'] },
    { id: 4, name: 'Sarah Chen', position: 'Project Manager', status: 'Rejected', date: '2023-06-05', skills: ['Agile', 'Scrum'] },
    { id: 5, name: 'James Wilson', position: 'Backend Developer', status: 'Interview', date: '2023-06-04', skills: ['Node.js', 'Express'] },
  ];
  
  return (
    <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
                  <span>Job Listings</span>
                  <Button size="sm" className="text-xs bg-blue-600 text-white hover:bg-blue-700">Add New Job</Button>
                </CardTitle>
                <CardDescription>Manage your job listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Job Title</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Department</th>
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
                          <td className="py-3 px-4">{job.department}</td>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Job Posting Performance</CardTitle>
                  <CardDescription>View rates and statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Application Rate</span>
                        <span className="text-green-600 font-medium">+12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Interview Conversion</span>
                        <span className="text-green-600 font-medium">+8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Time to Fill</span>
                        <span className="text-red-600 font-medium">+3 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
                  <CardDescription>Common job posting tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button className="h-auto py-4 bg-gradient-to-r from-blue-500 to-blue-600">
                      <div className="flex flex-col items-center">
                        <Briefcase className="h-6 w-6 mb-2" />
                        <span>Create New Job</span>
                      </div>
                    </Button>
                    <Button className="h-auto py-4 bg-gradient-to-r from-purple-500 to-purple-600">
                      <div className="flex flex-col items-center">
                        <FileCheck className="h-6 w-6 mb-2" />
                        <span>Bulk Update</span>
                      </div>
                    </Button>
                    <Button className="h-auto py-4 bg-gradient-to-r from-amber-500 to-amber-600">
                      <div className="flex flex-col items-center">
                        <FileCog className="h-6 w-6 mb-2" />
                        <span>Job Templates</span>
                      </div>
                    </Button>
                    <Button className="h-auto py-4 bg-gradient-to-r from-green-500 to-green-600">
                      <div className="flex flex-col items-center">
                        <Zap className="h-6 w-6 mb-2" />
                        <span>Export Data</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Candidates Tab */}
          <TabsContent value="candidates">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-none shadow-md col-span-1 lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Applications</span>
                    <Button size="sm" className="text-xs" variant="outline">View All</Button>
                  </CardTitle>
                  <CardDescription>Latest candidates who applied</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Candidate</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Position</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Status</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Date</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentApplications.map((app) => (
                          <tr key={app.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-medium mr-2">
                                  {app.name.charAt(0)}
                                </div>
                                <span className="font-medium">{app.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">{app.position}</td>
                            <td className="py-3 px-4">
                              <Badge className={
                                app.status === 'Interview' ? 'bg-green-100 text-green-800' :
                                app.status === 'Review' ? 'bg-purple-100 text-purple-800' : 
                                app.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                                'bg-red-100 text-red-800'
                              }>
                                {app.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">{app.date}</td>
                            <td className="py-3 px-4">
                              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">View</Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">Contact</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                    {recentApplications
                      .filter(app => app.status === 'Interview')
                      .map((interview, index) => (
                        <div key={interview.id} className="p-4 border border-gray-100 rounded-lg">
                          <div className="flex items-center mb-2">
                            <CalendarDays className="h-4 w-4 text-blue-500 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {new Date(interview.date).toLocaleDateString()}
                            </span>
                            <span className="ml-auto text-sm text-gray-500">
                              {`${10 + index}:00 AM`}
                            </span>
                          </div>
                          <h3 className="font-medium mb-1">{interview.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{interview.position}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-1">
                              {interview.skills.map((skill, idx) => (
                                <Badge key={idx} className="bg-blue-50 text-blue-700 border border-blue-200">{skill}</Badge>
                              ))}
                            </div>
                            <Button size="sm" variant="outline" className="text-xs">Reschedule</Button>
                          </div>
                        </div>
                      ))}
                    {!recentApplications.some(app => app.status === 'Interview') && (
                      <div className="text-center py-8">
                        <CalendarDays className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-600">No upcoming interviews</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Candidate Pipeline</CardTitle>
                  <CardDescription>Overview of hiring process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pt-2">
                    <div className="flex mb-8">
                      <div className="flex-1 text-center">
                        <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                          <Users className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium">Applied</p>
                        <p className="text-2xl font-bold text-blue-600">1245</p>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="w-10 h-10 mx-auto rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                          <FileCheck className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium">Screened</p>
                        <p className="text-2xl font-bold text-purple-600">876</p>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                          <CalendarDays className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium">Interview</p>
                        <p className="text-2xl font-bold text-amber-600">543</p>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="w-10 h-10 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2">
                          <Award className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium">Offered</p>
                        <p className="text-2xl font-bold text-green-600">210</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-2">
                      <div className="flex-1 px-2">
                        <div className="h-2 bg-blue-500 rounded-l-full"></div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="h-2 bg-purple-500"></div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="h-2 bg-amber-500"></div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="h-2 bg-green-500 rounded-r-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex text-xs text-gray-500">
                      <div className="flex-1 text-center">100%</div>
                      <div className="flex-1 text-center">70%</div>
                      <div className="flex-1 text-center">44%</div>
                      <div className="flex-1 text-center">17%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Top Skills in Demand</CardTitle>
                  <CardDescription>Most requested abilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { skill: 'React.js', level: 85, count: 42 },
                      { skill: 'TypeScript', level: 78, count: 38 },
                      { skill: 'Node.js', level: 65, count: 31 },
                      { skill: 'UI/UX Design', level: 60, count: 28 },
                      { skill: 'Python', level: 55, count: 25 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-sm text-gray-500">{item.count} jobs</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full"
                            style={{ width: `${item.level}%` }}
                          ></div>
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
