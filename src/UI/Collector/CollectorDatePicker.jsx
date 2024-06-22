import { useEffect, useState } from "react";
import { createCollectionDate, getCollectionDates } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";
import CollectorCompletedCollection from "./CollectorCompletedCollection";

const CollectorDatePicker = () => {
  const [date, setDate] = useState("");
  const [collectionDate, setCollectionDate] = useState([]);
  const { token } = useUser();
  console.log(collectionDate, "hi");

  useEffect(() => {
    (async () => {
      try {
        const result = await getCollectionDates(token);

        // Filter out collection dates where all requests have status "completed"
        // or where collection_requests is an empty array
        const filteredResult = result.filter(
          (dateItem) =>
            dateItem.collection_requests.length === 0 ||
            !dateItem.collection_requests.every(
              (request) => request.status === "completed"
            )
        );

        setCollectionDate((collectionDate) => [
          ...collectionDate,
          ...filteredResult,
        ]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);

  function collectorDate() {
    (async () => {
      try {
        await createCollectionDate(date, token);
        const result = await getCollectionDates(token);
        setCollectionDate(result);
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
      <div className="flex flex-col gap-5">
        <h4 className="font-semibold mb-1">Collection Dates</h4>
        {collectionDate?.map((el, i) => {
          console.log(el); // This will log each element to the console
          return <CollectorCompletedCollection key={i} data={el} />;
        })}
      </div>
    </>
  );
};

export default CollectorDatePicker;
