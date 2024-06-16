import { useEffect } from "react";
import CollectorDashboard from "../UI/Collector/CollectorDashboard";
import { useNavigate } from "react-router";
import { useUser } from "../Context/ContextProvider";

function Collectors() {
  const { userRole } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "collector") {
      navigate(`/${userRole}`);
    }
  });
  return <CollectorDashboard />;
}

export default Collectors;
