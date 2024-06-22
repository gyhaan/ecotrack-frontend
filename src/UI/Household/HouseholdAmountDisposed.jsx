import { useState } from "react";
import { useUser } from "../../Context/ContextProvider";
import {
  createCollectionRequest,
  fetchCollectionRequests,
} from "../../services/api";

function HouseholdAmountDisposed({ data, setCollectionRequests }) {
  const { token } = useUser();
  const [amount, setAmount] = useState(0);
  console.log(data);

  function bookCollection(id, amount) {
    if (Number(amount) <= 0) {
      alert("Please Enter how many kilos you will dispose");
      return;
    }
    (async () => {
      try {
        await createCollectionRequest(id, amount, token);
        setAmount(0);
        const result = await fetchCollectionRequests(token);
        setCollectionRequests(() => {
          return result.filter((el) => el.status === "pending");
        });
        alert("Booking successful");
      } catch (err) {
        console.error(err);
      }
    })();
  }

  return (
    <div className="flex flex-col gap-1 mb-3">
      <p>{new Date(data?.collection_date).toDateString()}</p>
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
          onClick={() => bookCollection(data.id, amount)}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default HouseholdAmountDisposed;
