import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  // After you complete Backend integration, fetch this data from an API from your auth/state
  // Define dummy API endpoints
  // change name and connect to backend API
  const DUMMY_API = {
    profile: "https://dummyjson.com/c/24af-a3a4-4809-9dcb",
    academicProgress: "https://dummyjson.com/c/ded0-30c0-40ac-866c",
  };

  const [userProfile, setUserProfile] = useState({
    first_name: "First Name",
    last_name: "Last Name",
    email: "name@gmail.com",
    contact: "+91 9419xxxx20",
    grade: "11th or 12th",
    profileImage: "/public/image.png",
  });

  const [academicProgress, setAcademicProgress] = useState({
    questionnairesCompleted: 0,
    totalQuestionnaires: 3,
    careerPathProgress: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        // console.log('Fetching user profile from:', DUMMY_API.profile);
        const profileResponse = await axios.get(DUMMY_API.profile);
        // console.log('Fetching academic progress from:', DUMMY_API.academicProgress);
        const progressResponse = await axios.get(DUMMY_API.academicProgress);
        // Transform/ structure the profile data according to backend response
        // console.log('Profile data fetched:', profileResponse.data);
        const mockProfile = {
          first_name: profileResponse.data.first_name,
          last_name: profileResponse.data.last_name,
          email: profileResponse.data.email,
          contact: profileResponse.data.contact,
          grade: profileResponse.data.grade,
          profileImage: "/public/image.png",
        };

        // Transform progress data
        const completedTasks = progressResponse.data.filter(
          (todo) => todo.completed
        ).length;
        const totalTasks = progressResponse.data.length;
        const mockProgress = {
          questionnairesCompleted: completedTasks,
          totalQuestionnaires: totalTasks,
          careerPathProgress: Math.round((completedTasks / totalTasks) * 100),
        };

        // console.log('Transformed profile data:', mockProfile);
        // console.log('Transformed progress data:', mockProgress);
        setUserProfile(mockProfile);
        setAcademicProgress(mockProgress);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-8">
      {error && (
        <div className="max-w-3xl mx-auto mb-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <p className="font-medium">Error: {error}</p>
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src={userProfile.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 mb-4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150?text=Profile";
            }}
          />
          <h1 className="text-3xl font-bold text-blue-600">
            {userProfile.first_name} {userProfile.last_name}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Personal Information
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {userProfile.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Contact:</span>{" "}
                {userProfile.contact}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Grade:</span> {userProfile.grade}
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Academic Progress
            </h2>
            {loading ? (
              <div className="py-4 text-center text-gray-500">Loading...</div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    Questionnaires Completed
                  </span>
                  <span className="font-medium text-blue-600">
                    {academicProgress.questionnairesCompleted}/
                    {academicProgress.totalQuestionnaires}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Career Path Progress</span>
                  <span className="font-medium text-blue-600">
                    {academicProgress.careerPathProgress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${academicProgress.careerPathProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/questionnaire")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
            disabled={loading}
          >
            Continue Assessment
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            Back to Chat
          </button>
        </div>
      </div>

      {/* Debug Panel
      <div className="max-w-3xl mx-auto mt-4 p-3 bg-gray-100 rounded-lg">
        <details>
          <summary className="cursor-pointer font-medium text-sm text-gray-700">API Debug Info</summary>
          <div className="mt-2 text-xs font-mono">
            <p>Profile API: {DUMMY_API.profile}</p>
            <p>Progress API: {DUMMY_API.academicProgress}</p>
            <p>Loading State: {loading ? 'true' : 'false'}</p>
            <pre className="mt-2 p-2 bg-gray-200 rounded overflow-auto max-h-40">
              {JSON.stringify({userProfile, academicProgress}, null, 2)}
            </pre>
          </div>
        </details>
      </div> */}
    </div>
  );
};

export default Profile;
