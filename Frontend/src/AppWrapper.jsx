import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import App from "./App"; // Your original App component

function AppWrapper() {
  const navigate = useNavigate();

  const checkLocalStorageExpiry = () => {
    const loginTime = localStorage.getItem("loginTime");
    if (!loginTime) return;

    const now = Date.now();
    // Set expiryTime to 36 hours (in milliseconds)
    const expiryTime = 36 * 60 * 60 * 1000;

    if (now - parseInt(loginTime, 10) > expiryTime) {
      localStorage.clear(); // Clear all localStorage items
      console.log("Session expired due to inactivity. Logging out...");
      navigate("/auth/login");
    }
  };

  useEffect(() => {
    checkLocalStorageExpiry(); // Check immediately on load
    // Set an interval to check periodically (e.g., every 30 minutes)
    const interval = setInterval(checkLocalStorageExpiry, 30 * 60 * 1000);
    console.log("Session expiry check interval set up.");

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [navigate]); // Add navigate to dependency array

  return <App />;
}

export default AppWrapper;
