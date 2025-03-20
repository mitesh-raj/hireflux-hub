
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-accent/30 to-background">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => navigate(-1)} 
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Go Back
          </button>
          <button 
            onClick={() => navigate('/login')} 
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
