import HouseholdAmountDisposed from "../UI/HouseholdAmountDisposed";
import HouseholdCompletedCollection from "../UI/HouseholdCompletedCollection";
import HouseholdDatePicker from "../UI/HouseholdDatePicker";
import HouseholdPendingCollection from "../UI/HouseholdPendingCollection";

function Household() {
  return (
    <div className="font-body flex flex-col gap-4">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Name</h3>
      <HouseholdDatePicker />
      <HouseholdAmountDisposed />
      <HouseholdPendingCollection />
      <HouseholdCompletedCollection />
    </div>
  );
}

export default Household;
