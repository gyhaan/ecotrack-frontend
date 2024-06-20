import { useEffect, useState } from "react";
import { fetchCompletedCollections } from "../../services/api";
import { useUser } from "../../Context/ContextProvider";

function HouseholdCompletedCollection() {
  const { token } = useUser();
  const [completedCollections, setCompletedCollections] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCompletedCollections(token);
        setCompletedCollections(data);
      } catch (err) {
        alert(err.message);
      }
    })();
  }, [token]);

  return (
    <div>
      <h4 className="font-semibold mb-1">Completed Collections</h4>
      <div>
        {completedCollections.map(collection => (
          <div key={collection.id} className="flex items-center gap-2">
            <div>
              <img src="/green.svg" alt="completed" />
            </div>
            <span>{new Date(collection.date).toDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseholdCompletedCollection;
