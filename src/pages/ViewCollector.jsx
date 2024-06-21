import { useNavigate, useParams } from "react-router";
import { useUser } from "../Context/ContextProvider";
import { useEffect, useState } from "react";
import { deleteCollectorById, getCollectorById } from "../services/api";

const fakeData = {
  id: 0,
  collection_date: "2024-06-20",
  collection_requests: [
    {
      id: 0,
      status: "pending",
      amount: 0,
    },
  ],
};

function ViewCollector() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useUser();
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    (async () => {
      try {
        const data = await getCollectorById(id, token);
        setData(data);
      } catch (err) {
        alert(err.message);
      }
    })();
  }, [id, token]);

  function deleteCollector() {
    (async () => {
      try {
        await deleteCollectorById(id, token);
        navigate("/admin");
      } catch (err) {
        alert(err.message);
      }
    })();
  }
  return (
    <div className="font-body flex flex-col gap-3">
      <div className="flex justify-between">
        <p>{data?.id}</p>
        <button
          className="bg-green text-white text-sm px-3 py-1"
          onClick={() => deleteCollector()}
        >
          Delete
        </button>
      </div>
      <div>
        <h4 className="font-semibold mb-1">Pending Collections</h4>
        <div>
          {data?.collection_dates.length ? (
            data?.collection_dates.map((el) => {
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
            })
          ) : (
            <p>No Requests Made</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewCollector;
