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

function HouseholdDatePicker() {
  const { token } = useUser();
  const [dates, setDates] = useState([]);
  const [amount, setAmount] = useState(0);
  console.log(typeof amount);

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

  function bookCollection(id, amount) {
    if (Number(amount) <= 0) {
      alert("Please Enter how many kilos you will dispose");
      return;
    }
    (async () => {
      try {
        const data = await createCollectionRequest(id, amount, token);
        alert(data.message);
      } catch (err) {
        console.error(err);
      }
    })();
  }

  return (
    <div className="font-body">
      <h4 className="font-semibold mb-1">Available Dates</h4>
      {dates.length ? (
        dates.map((el, i) => {
          return (
            <div key={i} className="flex flex-col gap-2">
              <p>{new Date(el.collection_date).toDateString()}</p>
              <div className="flex items-center gap-3 w-full">
                <input
                  type="number"
                  placeholder="Disposal Amount"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-5/12 p-2 outline-none h-8 border-2 font-body border-black placeholder:font-body disabled:cursor-not-allowed"
                />
                <button
                  className="bg-green text-white text-sm h-8 px-3"
                  onClick={() => bookCollection(el.id, amount)}
                >
                  Book
                </button>
              </div>
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
