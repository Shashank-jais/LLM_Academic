import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import SignUp from "./components/SignUp";
import ConfirmSignUp from "./components/ConfirmSignup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import Questionnaire from "./components/Questionnaire";
// import ProfileFrontend from "./components/ProfileFrontend";
import Profile from "./components/Profile";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const checkLocalStorageExpiry = () => {
    const loginTime = localStorage.getItem("loginTime");
    if (!loginTime) return;

    const now = Date.now();
    const expiryTime = 36 * 60 * 60 * 1000;

    if (now - parseInt(loginTime, 10) > expiryTime) {
      localStorage.clear();
      console.log("Session expired. Logging out...");
      navigate("/auth/login");
    }
  };
  useEffect(() => {
    checkLocalStorageExpiry();
    const interval = setInterval(checkLocalStorageExpiry, 30 * 60 * 1000);
    console.log("check");
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <div className="flex-1 overflow-auto bg-black text-white">
                <ChatArea />
              </div>
            </div>
          }
        />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/confirm" element={<ConfirmSignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile/questionnaire" element={<Questionnaire />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/profileFrontend" element={<ProfileFrontend />} /> */}
      </Routes>
    </>
  );
}

export default App;
