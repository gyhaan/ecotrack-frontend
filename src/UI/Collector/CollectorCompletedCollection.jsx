import { useState } from "react";
import { useUser } from "../../Context/ContextProvider";
import { getCollectionById } from "../../services/api";

function CollectorCompletedCollection({ data }) {
  const { token } = useUser();
  const [requests, setRequests] = useState([]);
  const [show, setShow] = useState(true);
  console.log(requests);
  console.log(data, "error");

  function fetchRequest() {
    (async () => {
      try {
        const result = await getCollectionById(data.id, token);
        console.log(result);
        setRequests(result);
      } catch (err) {
        console.error(err);
        alert("Failed to get collection");
      }
    })();
  }

  return (
    <div className="w-full md:w-5/6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <img src="/yellow.svg" alt="green" />
          </div>
          <span>{new Date(data.collection_date).toDateString()}</span>
        </div>
        <button
          className="max-w-fit bg-green text-sm h-7 block font-body text-white px-6 disabled:cursor-not-allowed"
          onClick={() => {
            if (!requests.length) {
              fetchRequest();
              setShow(true);
            } else {
              setShow(!show);
            }
          }}
        >
          See Pending
        </button>
      </div>
      {requests?.length ? (
        <table
          className={`w-full border-collapse my-2 p-4 border border-black ${
            show ? "block" : "hidden"
          }`}
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2">House Nº</th>
              <th className="border border-black p-2">Area</th>
              <th className="border border-black p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter((el) => el.status === "pending")
              .map((el) => (
                <tr key={el.id}>
                  <td className="border border-black p-2">
                    {el.household.house_number}
                  </td>
                  <td className="border border-black p-2">
                    {el.household.area}
                  </td>
                  <td className="border border-black p-2">{el.amount} Kg</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default CollectorCompletedCollection;
