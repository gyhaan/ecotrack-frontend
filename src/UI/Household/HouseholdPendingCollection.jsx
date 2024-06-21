import { useEffect, useState } from "react";
import { fetchCollectionRequests, patchRequest } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";
function HouseholdPendingCollection() {
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

  function patch(id) {
    (async () => {
      try {
        const data = await patchRequest(id, token);
        console.log(data);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }
  return (
    <div>
      <h4 className="font-semibold mb-1">Pending Collections</h4>
      <div>
        {collectionRequests.length ? (
          collectionRequests?.map((el) => (
            <div className="flex items-center gap-2 mb-3" key={el.id}>
              <div>
                <img src="/yellow.svg" alt="green" />
              </div>
              <span>
                {new Date(el.collection_date.collection_date).toDateString()}
              </span>
              <span>({el.amount}Kg)</span>
              <button
                className="bg-green text-white text-sm h-8 px-3"
                onClick={() => patch(el.id)}
              >
                Done
              </button>
            </div>
          ))
        ) : (
          <p>No Requests Made</p>
        )}
      </div>
    </div>
  );
}
export default HouseholdPendingCollection;
