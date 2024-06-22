import { useEffect } from "react";
import CollectorDatePicker from "../UI/Collector/CollectorDatePicker";

import { useUser } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Collectors() {
  const navigate = useNavigate();
  const { token, setToken, userName } = useUser();

  // Function to handle logout with confirmation toast
  const handleLogout = () => {
    // Show confirmation toast
    toast.info("Signing out...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear token and navigate after delay
    setTimeout(() => {
      setToken(""); // Clear token in state
      sessionStorage.removeItem("token"); // Remove token from sessionStorage
      navigate("/register"); // Navigate back to the home page or login page
    }, 1500); // Adjust delay as needed for smooth transition
  };

  // Effect to check token validity on component mount and token changes
  useEffect(() => {
    if (!token) {
      navigate("/register"); // If token is not present, navigate to login page
    }
  }, [token, navigate]);

  // If token is not present, return null (or redirect to login page)
  if (!token) {
    return null;
  }

  // If token is present, render the component
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <div className="font-body flex flex-col gap-5">
        <h3 className="font-bold text-xl">
          Welcome to EcoTrack,{" "}
          <span className="text-green-500">{userName}</span>
        </h3>
        <CollectorDatePicker />
        <div className="fixed bottom-5 right-5">
          <button
            className="w-full bg-green h-9 block font-body text-white px-6 disabled:cursor-not-allowed transition-transform transform hover:bg-green-700 hover:scale-105"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}

export default Collectors;
