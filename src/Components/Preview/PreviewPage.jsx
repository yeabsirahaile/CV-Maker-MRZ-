import { useNavigate } from "react-router-dom";
import MySvg from "../../SVGs/1.svg";
import Doc from "./Doc";

export default function PreviewPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row">
      <div className="w-1/4">
        <div onClick={() => navigate(-1)}>Back</div>
        <div>Choose template</div>
        <div className=" bg-blue-300 mx-7 px-7 h-14 text-lg items-center flex">
          Default Template{" "}
        </div>
      </div>
      <div className="w-3/4 block h-[85vh] border-4 border-blue-400 overflow-auto">
        <Doc />
      </div>
    </div>
  );
}
