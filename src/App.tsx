
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";

// Public pages
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";
import Index from "@/pages/Index";

// User pages
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Jobs from "@/pages/Jobs";
import JobDetail from "@/pages/JobDetail";
import JobAssessment from "@/pages/JobAssessment";
import JobApplication from "@/pages/JobApplication";
import Applications from "@/pages/Applications";
import ApplicationDetail from "@/pages/ApplicationDetail";

// Admin pages
import AdminDashboard from "@/pages/admin/Dashboard";
import NotFound from "@/pages/NotFound";

// Create admin pages components
const AdminJobs = () => <div className="min-h-screen p-8 pt-24"><h1 className="text-3xl font-bold mb-4">Admin Jobs Management</h1><p>Content coming soon</p></div>;
const AdminApplications = () => <div className="min-h-screen p-8 pt-24"><h1 className="text-3xl font-bold mb-4">Admin Applications Management</h1><p>Content coming soon</p></div>;
const AdminSettings = () => <div className="min-h-screen p-8 pt-24"><h1 className="text-3xl font-bold mb-4">Admin Settings</h1><p>Content coming soon</p></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public routes */}
              <Route index element={<Index />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="unauthorized" element={<Unauthorized />} />
              
              {/* Protected candidate routes */}
              <Route 
                path="dashboard" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="jobs" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <Jobs />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="jobs/:jobId" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <JobDetail />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="jobs/:jobId/assessment" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <JobAssessment />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="jobs/:jobId/apply" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <JobApplication />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="applications" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <Applications />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="applications/:applicationId" 
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <ApplicationDetail />
                  </ProtectedRoute>
                } 
              />
              
              {/* Protected admin routes */}
              <Route 
                path="admin" 
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="admin/jobs" 
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminJobs />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="admin/applications" 
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminApplications />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="admin/settings" 
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminSettings />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
