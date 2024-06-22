import { Link } from "react-router-dom";

function ShowHousehold({ households, query }) {
  // Filter households based on the query
  const results = households?.filter((el) => {
    if (!query) {
      return true; // Return true to include all elements if no query is provided
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
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b text-black"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b text-black"
              >
                House Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b text-black"
              >
                Area
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((el) => (
              <tr key={el.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b text-black">
                  <Link
                    to={`household/${el.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    {el.id}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b text-black">
                  {el.house_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b text-black">
                  {el.area}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-xl text-center font-medium text-green mt-3 text-black">
          No Household Found
        </p>
      )}
    </div>
  );
}

export default ShowHousehold;
