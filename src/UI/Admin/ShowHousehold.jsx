import { Link } from "react-router-dom";

const fakeData = [
  {
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
  },
];

function ShowHousehold({ households, query }) {
  const results = households?.filter((el) => {
    if (!query) {
      return el;
    }

    return (
      el.id.toString().includes(query) ||
      el.house_number.toLowerCase().includes(query.toLowerCase()) ||
      el.area.toLowerCase().includes(query.toLowerCase())
    );
  });
  return (
    <div>
      {results?.length ? (
        <ul className="flex flex-col gap-2 list-disc list-inside">
          {results?.map((el) => (
            <li key={el.id} className="text-xl">
              <Link to={`household/${el.id}`}>
                {el.id}-{el.house_number}-{el.area}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-center font-medium text-green mt-3">
          No Household Found
        </p>
      )}
    </div>
  );
}

export default ShowHousehold;
