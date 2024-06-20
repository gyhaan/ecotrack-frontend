import { useEffect, useState } from "react";
import { createCollectionRequest } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";

function HouseholdDatePicker() {
  const { token, user } = useUser(); // Assume user object contains householdId
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      await createCollectionRequest(date, user.householdId, token);
      alert("Collection request created successfully!");
      setDate("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <label htmlFor="date" className="font-semibold">
        Choose Waste Collection Date:
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        min={new Date().toISOString().slice(0, 10)}
        className="w-full p-2 outline-none h-10 border-2 font-body border-black mb-2 placeholder:font-body disabled:cursor-not-allowed"
        onChange={(e) => setDate(e.target.value.slice(0, 10))}
      />
      <button
        className="max-w-fit bg-green h-9 block font-body text-white px-6 disabled:cursor-not-allowed transition-transform transform hover:bg-green-700 hover:scale-105"
        disabled={!date}
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
}

export default HouseholdDatePicker;
