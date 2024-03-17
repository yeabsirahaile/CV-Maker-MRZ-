import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white h-screen w-48 p-4">
      <h1 className="text-2xl font-semibold mb-6">MRZ CV Maker</h1>
      <ul>
        <li className="mb-2">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/allcv" className="hover:text-gray-300">
            All CV
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/createcv" className="hover:text-gray-300">
            ADD CV
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink to="/preview" className="hover:text-gray-300">
            Preview trial
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
