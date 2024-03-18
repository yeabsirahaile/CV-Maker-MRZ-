import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white h-screen w-48 p-4">
      <h1 className="text-2xl font-semibold mb-6">CV Maker</h1>

      <div className=" flex flex-col gap-y-1">
        <NavLink to="/" className=" p-1 text-lg hover:bg-blue-600/70 ">
          Home
        </NavLink>

        <NavLink to="/allcv" className=" p-1 text-lg hover:bg-blue-600/70">
          All CV
        </NavLink>

        <NavLink to="/createcv" className=" p-1 text-lg hover:bg-blue-600/70">
          ADD CV
        </NavLink>

        <NavLink to="/preview" className=" p-1 text-lg hover:bg-blue-600/70">
          Preview trial
        </NavLink>
      </div>
    </div>
  );
}
