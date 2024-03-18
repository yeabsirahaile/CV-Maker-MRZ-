import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white h-screen w-40">
      <h1 className="text-2xl font-semibold mb-6 p-4">CV Maker</h1>

      <div className=" flex flex-col gap-y-1 pl-4">
        <NavLink to="/" className=" p-1 text-md hover:bg-blue-600/70 ">
          Home
        </NavLink>

        <NavLink to="/createcv" className=" p-1 text-md hover:bg-blue-600/70">
          Create CV
        </NavLink>

        <NavLink to="/allcv" className=" p-1 text-md hover:bg-blue-600/70">
          All CVs
        </NavLink>
      </div>
    </div>
  );
}
