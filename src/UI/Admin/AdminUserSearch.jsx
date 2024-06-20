import { useState } from "react";
import ShowCollector from "./ShowCollector";
import ShowHousehold from "./ShowHousehold";

function AdminUserSearch({ households, collectors }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [boolean, setBoolean] = useState(true);

  return (
    <div className="flex flex-col gap-2 self-start">
      <div className="flex gap-5 font-bold">
        <button
          className={`hover:text-green hover:underline hover:underline-offset-4 ${
            boolean ? "text-green" : ""
          } ${boolean ? "underline underline-offset-4" : "none"}`}
          onClick={() => setBoolean(true)}
        >
          Household
        </button>
        <button
          className={`hover:text-green hover:underline hover:underline-offset-4 
          ${!boolean ? "text-green underline underline-offset-4" : "none"}`}
          onClick={() => setBoolean(false)}
        >
          Collector
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          className="border-2 p-2 border-black h-8 placeholder:font-body"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {boolean ? (
        <ShowHousehold households={households} query={searchTerm} />
      ) : (
        <ShowCollector collectors={collectors} query={searchTerm} />
      )}
    </div>
  );
}

export default AdminUserSearch;
