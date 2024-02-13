import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { FormProvider } from "./context/FormContext";

function AppContainer() {
  return (
    <FormProvider>
      <div className="flex">
        <Navbar />
        <div className="flex-1 p-4 ">
          {/* Main content goes here */}
          <Outlet />
        </div>
      </div>
    </FormProvider>
  );
}

export default AppContainer;
