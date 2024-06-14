import { useEffect, useState } from "react";
import { addCollector, addHousehold } from "../services/api";
import HouseholdInput from "../UI/HouseholdInput";
import CollectorInput from "../UI/CollectorInput";
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
  const { token } = useUser();
  const [role, setRole] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [area, setArea] = useState("");
  const [assignedArea, setAssignedArea] = useState("");

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
      <h2 className="font-header text-4xl mr-auto md:mr-0 mb-2">
        Select Your Role
      </h2>
      <div className="font-header w-full my-6 text-center text-2xl flex flex-col gap-3 md:w-2/5">
        {roles.map((el, index) => {
          return (
            <button
              className="block border-2 border-black w-full h-9 text-black hover:border-green hover:text-green "
              key={index}
              onClick={() => {
                if (role === el.value) {
                  setRole("");
                  return;
                }
                setRole(el.value);
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
