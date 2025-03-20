
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const { user, updateUser } = useAuth();
  
  const handleCompleteProfile = () => {
    // This would normally save form data
    updateUser({ profileCompleted: true });
  };
  
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Complete Your Profile</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Please complete your profile to continue. This would include your resume and professional information.
          </p>
          
          {/* This would be a form in the full implementation */}
          <div className="flex justify-end mt-4">
            <button 
              onClick={handleCompleteProfile}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
