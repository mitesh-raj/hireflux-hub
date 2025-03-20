
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
              
              {/* Redirect root to appropriate dashboard based on role */}
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
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
