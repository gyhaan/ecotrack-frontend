import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/ContextProvider";
import HouseholdCompletedCollection from "../UI/Household/HouseholdCompletedCollection";
import HouseholdDatePicker from "../UI/Household/HouseholdDatePicker";
import HouseholdPendingCollection from "../UI/Household/HouseholdPendingCollection";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Household() {
  const navigate = useNavigate();
  const { token, setToken, userName } = useUser();
  const [collectionRequests, setCollectionRequests] = useState([]);
  const [collectionRequestsDone, setCollectionRequestsDone] = useState([]);

  // Function to handle logout
  const handleLogout = () => {
    // Show confirmation toast
    toast.info("Signing out...", {
      position: "top-right",
      autoClose: 1500,
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
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
      <div className="font-body">
        <h3 className="font-bold text-xl  mb-3">
          Welcome to EcoTrack,
          <span> {userName}</span>
        </h3>
        <HouseholdDatePicker setCollectionRequests={setCollectionRequests} />
        <HouseholdPendingCollection
          collectionRequests={collectionRequests}
          setCollectionRequests={setCollectionRequests}
          setCollectionRequestsDone={setCollectionRequestsDone}
        />
        <HouseholdCompletedCollection
          collectionRequestsDone={collectionRequestsDone}
          setCollectionRequestsDone={setCollectionRequestsDone}
        />
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

export default Household;
