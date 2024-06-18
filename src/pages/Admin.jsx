import { useNavigate } from "react-router";
import { useUser } from "../Context/ContextProvider";
import { useEffect } from "react";

function Admin() {
  const { userRole } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "admin") {
      navigate(`/${userRole}`);
    }
  });
  return (
    <div>
      <h1 className="text-green font-bold underline underline-offset-2">
        Hello, World
      </h1>
    </div>
  );
}

export default Admin;
