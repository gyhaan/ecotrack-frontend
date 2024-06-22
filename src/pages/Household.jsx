import { useState } from "react";
import HouseholdAmountDisposed from "../UI/Household/HouseholdAmountDisposed";
import HouseholdCompletedCollection from "../UI/Household/HouseholdCompletedCollection";
import HouseholdDatePicker from "../UI/Household/HouseholdDatePicker";
import HouseholdPendingCollection from "../UI/Household/HouseholdPendingCollection";

function Household() {
  const [collectionRequests, setCollectionRequests] = useState([]);
  const [collectionRequestsDone, setCollectionRequestsDone] = useState([]);
  return (
    <div className="font-body flex flex-col gap-4">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Name</h3>
      <HouseholdDatePicker setCollectionRequests={setCollectionRequests} />
      <HouseholdPendingCollection
        collectionRequests={collectionRequests}
        setCollectionRequests={setCollectionRequests}
        setCollectionRequestsDone={setCollectionRequestsDone}
      />
      <HouseholdCompletedCollection
        collectionRequestsDone={collectionRequestsDone}
        setCollectionRequestsDone={setCollectionRequestsDone}
      />
    </div>
  );
}

export default Household;
