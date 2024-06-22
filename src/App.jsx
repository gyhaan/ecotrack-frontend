import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import SelectRole from "./pages/SelectRole";
import Household from "./pages/Household";
import Collectors from "./pages/Collectors";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import { ContextProvider } from "./Context/ContextProvider";
import ProtectedRoute from "./pages/ProtectedRoute";
import ViewHouseholdUser from "./pages/ViewHouseholdUser";
import ViewCollector from "./pages/ViewCollector";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Login />} />
            <Route path="role" element={<SelectRole />} />
            <Route path="household" element={<Household />} />
            <Route path="collector" element={<Collectors />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/household/:id" element={<ViewHouseholdUser />} />
            <Route path="admin/collector/:id" element={<ViewCollector />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
