import CollectorDatePicker from "../UI/Collector/CollectorDatePicker";

function Collectors() {
  return (
    <div className="font-body flex flex-col gap-5">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Collector</h3>
      <CollectorDatePicker />
    </div>
  );
}

export default Collectors;
