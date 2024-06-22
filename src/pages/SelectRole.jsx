/* import { useEffect, useState } from "react";
import { addCollector, addHousehold } from "../services/api";
import HouseholdInput from "../UI/Household/HouseholdInput";
import CollectorInput from "../UI/Collector/CollectorInput";
import { useUser } from "../Context/ContextProvider";
import { useNavigate } from "react-router";

const roles = [
  {
    name: "Household",
    value: "households",
  },
  {
    name: "Collector",
    value: "collectors",
  },
];

function SelectRole() {
  const navigate = useNavigate();
  const { token, userRole, setUserRole } = useUser();
  const [role, setRole] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [area, setArea] = useState("");
  const [assignedArea, setAssignedArea] = useState("");

  useEffect(() => {
    if (userRole) {
      navigate(`/${userRole}`);
    }
  }, [userRole, navigate]);

  useEffect(() => {
    setArea("");
    setAssignedArea("");
    setHouseNumber("");
  }, [role]);

  function handleAssignRole() {
    if (role === "households" && (!houseNumber || !area)) {
      alert("Please Make sure you have entered both house number and area");
      return;
    }
    if (role === "collectors" && !assignedArea) {
      alert("Please enter the assigned area");
      return;
    }
    (async () => {
      try {
        if (role === "households") {
          await addHousehold(houseNumber, area, token);
          navigate(`/household`);
        } else {
          await addCollector(assignedArea, token);
          navigate(`/collector`);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-header text-4xl mb-2">Select Your Role</h2>
      <div className="font-header w-full my-6 text-center text-2xl flex flex-col gap-3 ">
        {roles.map((el, index) => {
          return (
            <button
              className="block border-2 border-black w-full h-9 text-black hover:border-green hover:text-green "
              key={index}
              onClick={() => {
                if (role === el.value) {
                  setRole("");
                  setUserRole("");
                  sessionStorage.setItem("role", "");
                  return;
                }
                setRole(el.value);
                setUserRole(el.name.toLowerCase());
                sessionStorage.setItem("role", el.name.toLowerCase());
              }}
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
          );
        })}
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
        className="max-w-fit bg-green h-9 block font-body text-white px-6 disabled:cursor-not-allowed"
        onClick={handleAssignRole}
        disabled={!role}
      >
        Continue
      </button>
    </div>
  );
}

export default SelectRole;
 */

import { useEffect, useState } from "react";
import { addCollector, addHousehold } from "../services/api";
import HouseholdInput from "../UI/Household/HouseholdInput";
import CollectorInput from "../UI/Collector/CollectorInput";
import { useUser } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";

const roles = [
  { name: "Household", value: "households" },
  { name: "Collector", value: "collectors" },
];

function SelectRole() {
  const navigate = useNavigate();
  const { token, setToken } = useUser();
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
      setToken("");
      alert(
        "You will now be redirected to the login page. Please use your new username and password to log in."
      );
      navigate("/register");
    } catch (err) {
      console.error(err);
      alert("An error occurred while assigning the role. Please try again.");
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
    </div>
  );
}

export default SelectRole;
