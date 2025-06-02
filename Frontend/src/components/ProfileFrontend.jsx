// only forntend have to update according to the backend
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileFrontend = () => {
  // After you complete Backend integration, fetch this data from an API from your auth/state
  const userProfile = {
    first_name: "First Name",
    last_name: "Last Name",
    email: "name@gmail.com",
    contact: "+91 9419xxxx20",
    grade: "11th or 12th",
    profileImage: "/public/image.png"
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src={userProfile.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-600">
            {userProfile.first_name} {userProfile.last_name}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {userProfile.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Contact:</span> {userProfile.contact}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Grade:</span> {userProfile.grade}
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Academic Progress</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Questionnaires Completed</span>
                <span className="font-medium text-blue-600">1/3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Career Path Progress</span>
                <span className="font-medium text-blue-600">40%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate('/questionnaire')}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            Continue Assessment
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            Back to Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileFrontend;