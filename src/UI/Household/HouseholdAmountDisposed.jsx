function HouseholdAmountDisposed() {
  return (
    <div>
      <h4 className="font-semibold mb-1">Amount Disposed</h4>
      <div className="flex items-center gap-2 mb-3">
        <label htmlFor="amount" className="font-medium">
          Add Amount(Kg):
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="w-5/12 p-2 outline-none h-8 border-2 font-body border-black placeholder:font-body disabled:cursor-not-allowed"
        />
        <button className="bg-green block font-body rounded-full text-white disabled:cursor-not-allowed w-7 h-7 transition-transform transform hover:bg-green-700 hover:scale-105">
          &#43;
        </button>
      </div>
      <p>
        <span className="font-medium">Total:</span> 23kg
      </p>
    </div>
  );
}

export default HouseholdAmountDisposed;
