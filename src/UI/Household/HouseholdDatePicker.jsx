import { useEffect, useState } from "react";
import { fetchCollectionDates } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";

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

function HouseholdDatePicker() {
  const { token } = useUser();
  const [dates, setDates] = useState([]);
  console.log(dates);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCollectionDates(token);
        setDates(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);

  return (
    <div className="font-body">
      <h4 className="font-semibold mb-1">Available Dates</h4>
      {dates.length ? (
        dates.map((el, i) => {
          return (
            <div key={i} className="flex items-center gap-5 ">
              <p>{new Date(el.date).toDateString()}</p>
              <button className="bg-green text-white text-sm px-3 py-1">
                Book
              </button>
            </div>
          );
        })
      ) : (
        <p>No Dates Available</p>
      )}
    </div>
  );
}

export default HouseholdDatePicker;
