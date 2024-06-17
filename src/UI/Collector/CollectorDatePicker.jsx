import { useEffect, useState } from "react";
import { createCollectionDate } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";

const CollectorDatePicker = () => {
    const [date, setDate] = useState("");
    const { token } = useUser();
    console.log(date);
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
                className="max-w-fit bg-green h-9 block font-body text-white px-6 disabled:cursor-not-allowed"
                disabled={!date}
                onClick={() => createCollectionDate(date, token)}
            >
                Send
            </button>
        </div>
    )
}

export default CollectorDatePicker