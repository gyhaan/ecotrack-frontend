import { useState } from "react";

const roles = ["Household", "Collector", "Admin"];

function SelectRole() {
  const [role, setRole] = useState("");
  console.log(role);
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-header text-4xl mr-auto md:mr-0 mb-2">
        Select Your Role
      </h2>
      <div className="font-header w-full my-6 text-center text-2xl flex flex-col gap-3 md:w-2/5">
        {roles.map((el, index) => {
          return (
            <button
              className="block border-2 border-black w-full h-9 text-black hover:bg-green hover:text-white "
              key={index}
              onClick={() => setRole(el)}
              style={
                role === el
                  ? {
                      backgroundColor: "#004D00",
                      borderColor: "#004D00",
                      color: "#fff",
                    }
                  : null
              }
            >
              {el}
            </button>
          );
        })}
      </div>
      <button className="max-w-fit bg-green h-9 block font-body text-white px-6">
        Continue
      </button>
    </div>
  );
}

export default SelectRole;
