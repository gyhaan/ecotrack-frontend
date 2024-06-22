import { useEffect, useState } from "react";
import {
  createCollectionRequest,
  fetchCollectionDates,
} from "../../services/api";
import { useUser } from "../../Context/ContextProvider";
import HouseholdAmountDisposed from "./HouseholdAmountDisposed";

const fakeData = [
  {
    id: 0,
    date: "2024-06-16",
    collection_requests: [
      {
        id: 0,
        status: "pending",
        household_id: "string",
        collection_date_id: 0,
      },
    ],
  },
];

function HouseholdDatePicker({ setCollectionRequests }) {
  const { token } = useUser();
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(dates);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCollectionDates(token);
        setDates(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="font-body">
      <h4 className="font-semibold mb-1">Available Dates</h4>
      {dates.length ? (
        dates.map((el) => {
          return (
            <HouseholdAmountDisposed
              key={el.id}
              data={el}
              setCollectionRequests={setCollectionRequests}
            />
          );
        })
      ) : (
        <p>No Dates Available</p>
      )}
    </div>
  );
}

export default HouseholdDatePicker;
