const fakeData = [
  {
    id: 0,
    allocated_area: "string",
    user_id: 0,
    collection_dates: [
      {
        id: 0,
        collection_date: "2024-06-20",
      },
    ],
  },
];
function ShowCollector({ collectors, query }) {
  const results = collectors?.filter((el) => {
    if (!query) {
      return el;
    }

    return (
      el.id.toString().includes(query) ||
      el.allocated_area.toLowerCase().includes(query.toLowerCase())
    );
  });
  return (
    <div>
      {results?.length ? (
        <ul className="flex flex-col gap-2 list-disc list-inside">
          {results?.map((el) => (
            <li key={el.id} className="text-xl">
              {el.id}-{el.allocated_area}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-center font-medium text-green mt-3">
          No Collector Found
        </p>
      )}
    </div>
  );
}

export default ShowCollector;
