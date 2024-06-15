function HouseholdInput({ houseNumber, setHouseNumber, area, setArea }) {
    return (
      <div className="flex flex-col">
        <label htmlFor="house-number" className="font-header text-xl">
          House Number:
        </label>
        <input
          type="text"
          name="house-number"
          id="house-number"
          value={houseNumber}
          required
          placeholder="Enter your house number"
          className="w-full md:w-80  p-2 outline-none h-10 border-2 font-body border-black mb-3 placeholder:font-body disabled:cursor-not-allowed"
          onChange={(e) => setHouseNumber(e.target.value)}
        />
        <label htmlFor="area" className="font-header text-xl">
          Area:
        </label>
        <input
          type="text"
          name="area"
          id="area"
          value={area}
          required
          placeholder="Enter your area"
          className="w-full md:w-80  p-2 outline-none h-10 border-2 font-body border-black mb-3 placeholder:font-body disabled:cursor-not-allowed"
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
    );
  }
  
  export default HouseholdInput;