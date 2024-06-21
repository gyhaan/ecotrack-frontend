import HouseholdCompletedCollection from "../UI/Household/HouseholdCompletedCollection";
import HouseholdDatePicker from "../UI/Household/HouseholdDatePicker";
import HouseholdPendingCollection from "../UI/Household/HouseholdPendingCollection";

function Household() {
  return (
    <div className="font-body flex flex-col gap-4">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Name</h3>
      <HouseholdDatePicker />
      <HouseholdPendingCollection />
      <HouseholdCompletedCollection />
    </div>
  );
}

export default Household;
