import MySvg from "../../SVGs/1.svg";
import Doc from "./Doc";

export default function PreviewPage() {
  return (
    <div className="flex flex-row">
      <div className="w-1/3">selam</div>
      <div className="w-2/3 block h-[85vh] border-4 border-blue-400 overflow-auto">
        <Doc />
      </div>
    </div>
  );
}
