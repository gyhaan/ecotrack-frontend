import { useParams } from "react-router";

const fakeData = {
  id: 0,
  house_number: "string",
  area: "string",
  user_id: 0,
  collection_requests: [
    {
      id: 0,
      status: "pending",
      amount: 0,
    },
  ],
};
function ViewHouseholdUser() {
  return (
    <div className="font-body flex flex-col gap-3">
      <div className="flex justify-between">
        <p>
          {fakeData.house_number}-{fakeData.area}
        </p>
        <button className="bg-green text-white text-sm px-3 py-1">
          Delete
        </button>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Pending Collections</h4>
        <div>
          {fakeData.collection_requests.length ? (
            fakeData.collection_requests.map((el) => {
              if (el.status === "pending") {
                return (
                  <div className="flex items-center gap-2" key={el.id}>
                    <div>
                      <img src="/yellow.svg" alt="yellow" />
                    </div>
                    <span>
                      {`id: ${el.id}`} - {el.status}
                    </span>
                  </div>
                );
              }
              return null; // Return null for items that don't match the condition
            })
          ) : (
            <p>No Requests Made</p>
          )}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-1">Completed Collections</h4>
        <div>
          {fakeData.collection_requests.length ? (
            fakeData.collection_requests.map((el) => {
              if (el.status === "completed") {
                return (
                  <div className="flex items-center gap-2" key={el.id}>
                    <div>
                      <img src="/green.svg" alt="yellow" />
                    </div>
                    <span>
                      {`id: ${el.id}`} - {el.status}
                    </span>
                  </div>
                );
              }
              return null; // Return null for items that don't match the condition
            })
          ) : (
            <p>No Requests Made</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewHouseholdUser;
