import { useEffect } from "react";
import { useUser } from "../Context/ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { token } = useUser();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!token && pathname !== "/") {
      navigate("/");
    }
  }, [token, navigate, pathname]);

  return children;
}

export default ProtectedRoute;
