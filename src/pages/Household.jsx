import { useEffect } from "react";
import { useUser } from "../Context/ContextProvider";
import HouseholdAmountDisposed from "../UI/Household/HouseholdAmountDisposed";
import HouseholdCompletedCollection from "../UI/Household/HouseholdCompletedCollection";
import HouseholdDatePicker from "../UI/Household/HouseholdDatePicker";
import HouseholdPendingCollection from "../UI/Household/HouseholdPendingCollection";
import { useNavigate } from "react-router";

function Household() {
  const { userRole } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "household") {
      navigate(`/${userRole}`);
    }
  });

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
