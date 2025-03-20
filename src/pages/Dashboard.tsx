
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name}!</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            This is the dashboard page. The full implementation will show job listings, application status, and other relevant information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
