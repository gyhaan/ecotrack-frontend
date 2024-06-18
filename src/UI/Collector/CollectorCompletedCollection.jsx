import { useEffect, useState } from "react";
import { useUser } from "../../Context/ContextProvider";
import { fetchCollectionRequests } from "../../services/api";

function HouseholdCompletedCollection() {
  const { token } = useUser();
  const [collectionRequests, setCollectionRequests] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCollectionRequests(token);
        setCollectionRequests(() => {
          return data.filter((el) => el.status === "pending");
        });
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, [token]);

  return (
    <div>
      <h4 className="font-semibold mb-1">Completed Collections</h4>
      <div>
        {collectionRequests.length ? (
          collectionRequests?.map((el) => (
            <div className="flex items-center gap-2" key={el.id}>
              <div>
                <img src="/yellow.svg" alt="green" />
              </div>
              <span>{new Date(el.collection_date.date).toDateString()}</span>
            </div>
          ))
        ) : (
          <p>No Requests Completed</p>
        )}
      </div>
    </div>
  );
}

export default HouseholdCompletedCollection;
