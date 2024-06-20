import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteHouseHoldById, getHouseHoldById } from "../services/api";
import { useUser } from "../Context/ContextProvider";

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
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useUser();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getHouseHoldById(id, token);
        setData(data);
      } catch (err) {
        alert(err.message);
      }
    })();
  }, [id, token]);

  function deleteHousehold() {
    (async () => {
      try {
        await deleteHouseHoldById(id, token);
        navigate(-1);
      } catch (err) {
        alert(err.message);
      }
    })();
  }
  return (
    <div className="font-body flex flex-col gap-3 w-full md:w-80">
      <div className="flex justify-between gap-10">
        <p>
          {data?.house_number}-{data?.area}
        </p>
        <button
          className="bg-green text-white text-sm px-3 py-1"
          onClick={() => deleteHousehold()}
        >
          Delete
        </button>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Pending Collections</h4>
        <div>
          {data?.collection_requests?.length ? (
            data?.collection_requests?.map((el) => {
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
          {data?.collection_requests.length ? (
            data?.collection_requests.map((el) => {
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
