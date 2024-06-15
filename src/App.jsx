import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import SelectRole from "./pages/SelectRole";
import Household from "./pages/Household";
import Collectors from "./pages/Collectors";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import { ContextProvider } from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Login />} />
            <Route path="role" element={<SelectRole />} />
            <Route path="household" element={<Household />} />
            <Route path="collector" element={<Collectors />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;