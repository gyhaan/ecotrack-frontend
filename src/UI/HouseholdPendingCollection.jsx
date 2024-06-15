function HouseholdPendingCollection() {
  return (
    <div>
      <h4 className="font-semibold mb-1">Pending Collections</h4>
      <div>
        <div className="flex items-center gap-2">
          <div>
            <img src="/yellow.svg" alt="green" />
          </div>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default HouseholdPendingCollection;
