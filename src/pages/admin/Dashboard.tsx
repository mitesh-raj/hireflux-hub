
import { useAuth } from '@/contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome back, {user?.name}.</p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            This is the admin dashboard page. The full implementation will show job management tools, applicant tracking, and other administrative features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
