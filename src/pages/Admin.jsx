import { useEffect, useState } from "react";
import AdminUserSearch from "../UI/Admin/AdminUserSearch";
import { getAllCollectors, getAllHouseholds } from "../services/api";
import { useUser } from "../Context/ContextProvider";
import ShowHousehold from "../UI/Admin/ShowHousehold";
import ShowCollector from "../UI/Admin/ShowCollector";

function Admin() {
  const { token } = useUser();
  const [households, setHouseholds] = useState(null);
  const [collectors, setCollectors] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [householdsResult, collectorsResult] = await Promise.allSettled([
          getAllHouseholds(token),
          getAllCollectors(token),
        ]);

        if (householdsResult.status === "fulfilled") {
          setHouseholds(householdsResult.value);
        } else {
          console.error("Failed to get households:", householdsResult.reason);
          setError(householdsResult.reason);
        }

        if (collectorsResult.status === "fulfilled") {
          setCollectors(collectorsResult.value);
        } else {
          console.error("Failed to get collectors:", collectorsResult.reason);
          setError(collectorsResult.reason);
        }
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        alert(err.message);
      }
    };

    fetchData();
  }, [token]);
  return (
    <div className="font-body flex flex-col gap-4">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Name</h3>
      <AdminUserSearch households={households} collectors={collectors} />
    </div>
  );
}

export default Admin;
