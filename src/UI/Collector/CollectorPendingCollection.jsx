import { useEffect, useState } from "react";
import { fetchCollectionRequests } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";

function CollectorPendingCollection() {
  const { token } = useUser();
  const [collectionRequests, setCollectionRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCollectionRequests(token);
        // Ensure data is an array before filtering
        if (Array.isArray(data)) {
          const filteredRequests = data.filter(
            (el) => el.status === "completed"
          );
          setCollectionRequests(filteredRequests);
        } else {
          console.error(
            "Expected an array of collection requests, but received:",
            data
          );
          setCollectionRequests([]);
        }
      } catch (err) {
        console.error("Error fetching collection requests:", err.message);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h4 className="font-semibold mb-1">Pending Collections</h4>
      <div>
        {collectionRequests.length ? (
          collectionRequests.map((el) => (
            <div className="flex items-center gap-2" key={el.id}>
              <div>
                <img src="/yellow.svg" alt="green" />
              </div>
              <span>{new Date(el.collection_date.date).toDateString()}</span>
            </div>
          ))
        ) : (
          <p>No Requests Made</p>
        )}
      </div>
    </div>
  );
}

export default CollectorPendingCollection;
