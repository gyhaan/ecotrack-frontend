import { useEffect, useState } from "react";
import { addCollector, addHousehold } from "../services/api";
import HouseholdInput from "../UI/Household/HouseholdInput";
import CollectorInput from "../UI/Collector/CollectorInput";
import { useUser } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roles = [
  { name: "Household", value: "households" },
  { name: "Collector", value: "collectors" },
];

function SelectRole() {
  const navigate = useNavigate();
  const { token, setToken, setUserRole } = useUser();
  const [role, setRole] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [area, setArea] = useState("");
  const [assignedArea, setAssignedArea] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setArea("");
    setAssignedArea("");
    setHouseNumber("");
  }, [role]);

  const handleAssignRole = async () => {
    try {
      setLoading(true);
      if (role === "households") {
        if (!houseNumber || !area) {
          alert(
            "Please make sure you have entered both house number and area."
          );
          return;
        }
        await addHousehold(houseNumber, area, token);
      } else if (role === "collectors") {
        if (!assignedArea) {
          alert("Please enter the assigned area.");
          return;
        }
        await addCollector(assignedArea, token);
      }
      setUserRole(role); // Set user role in context
      toast.success("Account created successfully!");
      setTimeout(() => {
        setToken("");
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error(
        "An error occurred while assigning the role. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-header text-4xl mb-2">Select Your Role</h2>
      <div className="font-header w-full my-6 text-center text-2xl flex flex-col gap-3">
        {roles.map((el, index) => (
          <button
            className="block border-2 border-black w-full h-9 text-black hover:border-green hover:text-green"
            key={index}
            onClick={() => setRole(role === el.value ? "" : el.value)}
            style={
              role === el.value
                ? {
                    backgroundColor: "#004D00",
                    borderColor: "#004D00",
                    color: "#fff",
                  }
                : null
            }
          >
            {el.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3 w-full">
        {role === "households" ? (
          <HouseholdInput
            houseNumber={houseNumber}
            setHouseNumber={setHouseNumber}
            area={area}
            setArea={setArea}
          />
        ) : role === "collectors" ? (
          <CollectorInput
            assignedArea={assignedArea}
            setAssignedArea={setAssignedArea}
          />
        ) : null}
      </div>
      <button
        className="max-w-fit bg-green h-9 block font-body text-white px-6 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleAssignRole}
        disabled={!role || loading}
      >
        Continue
      </button>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default SelectRole;
