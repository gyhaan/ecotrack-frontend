import { useState } from "react";
import { createCollectionDate } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";
import CollectorCompletedCollection from "./CollectorCompletedCollection";

const CollectorDatePicker = () => {
  const [date, setDate] = useState("");
  const [collectionDate, setCollectionDate] = useState(function () {
    const result = sessionStorage.getItem("collection");
    return JSON.parse(result) || [];
  });
  const { token } = useUser();

  function collectorDate() {
    (async () => {
      try {
        const data = await createCollectionDate(date, token);
        setCollectionDate((collectionDate) => [...collectionDate, data]);
        sessionStorage.setItem(
          "collection",
          JSON.stringify([...collectionDate, data])
        );
        alert("collection created successfully");
      } catch (err) {
        alert(err.message);
        console.error(err);
      } finally {
        setDate("");
      }
    })();
  }

  return (
    <>
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
          onClick={() => collectorDate()}
        >
          Send
        </button>
      </div>
      {collectionDate?.map((el, i) => (
        <CollectorCompletedCollection key={i} data={el} />
      ))}
    </>
  );
};

export default CollectorDatePicker;
