import { useState } from "react";
import { useUser } from "../../Context/ContextProvider";
import { getCollectionById } from "../../services/api";

function CollectorCompletedCollection({ data }) {
  const { token } = useUser();
  const [requests, setRequest] = useState([]);

  function fetchRequest() {
    (async () => {
      try {
        const result = await getCollectionById(data.id, token);
        console.log(result);
        setRequest((requests) => [...requests, result]);
      } catch (err) {
        console.error(err);
        alert("Failed to get collection");
      }
    })();
  }

  return (
    <div>
      <h4 className="font-semibold mb-1">Collection Dates</h4>
      <div>
        <div className="flex items-center gap-2">
          <div>
            <img src="/yellow.svg" alt="green" />
          </div>
          <span>{new Date(data.collection_date).toDateString()}</span>
          <button
            className="max-w-fit bg-green h-9 block font-body text-white px-6 disabled:cursor-not-allowed"
            onClick={() => fetchRequest()}
          >
            See Pending
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollectorCompletedCollection;
