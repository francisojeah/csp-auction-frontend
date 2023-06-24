import { PulseLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <PulseLoader color={"#1E3ABA"} />
    </div>
  );
}
