function CollectorInput({ assignedArea, setAssignedArea }) {
    return (
      <div className="flex flex-col">
        <label htmlFor="area" className="font-header text-xl">
          Assigned Area:
        </label>
        <input
          type="text"
          name="area"
          id="area"
          value={assignedArea}
          required
          placeholder="Enter your area"
          className="w-full md:w-80  p-2 outline-none h-10 border-2 font-body border-black mb-3 placeholder:font-body disabled:cursor-not-allowed"
          onChange={(e) => setAssignedArea(e.target.value)}
        />
      </div>
    );
  }
  
  export default CollectorInput;