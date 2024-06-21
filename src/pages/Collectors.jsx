import CollectorDatePicker from "../UI/Collector/CollectorDatePicker";
import CollectorPendingCollection from "../UI/Collector/CollectorPendingCollection";

function Collectors() {
  return (
    <div className="font-body flex flex-col gap-5">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Collector</h3>
      <CollectorDatePicker />
      <CollectorPendingCollection />
    </div>
  );
}

export default Collectors;
