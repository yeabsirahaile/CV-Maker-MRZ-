import { useState } from "react";

export default function Checkboxs() {
  const [checkboxValues, setCheckboxValues] = useState({
    careGiving: false,
    cleaning: false,
    cooking: false,
    laundry: false,
    ironing: false,
    babySitting: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: !prevValues[name],
    }));
  };
  return (
    <div className="bg-blue-50 rounded-md container mx-auto  p-2 px-7 ">
      <div className="grid grid-cols-2 gap-2 gap-x-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="careGiving"
            checked={checkboxValues.careGiving}
            onChange={() => handleCheckboxChange("careGiving")}
            className="mr-2"
          />
          <label htmlFor="careGiving" className="mb-1">
            Care Giving
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cleaning"
            checked={checkboxValues.cleaning}
            onChange={() => handleCheckboxChange("cleaning")}
            className="mr-2"
          />
          <label htmlFor="cleaning" className="mb-1">
            Cleaning
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cooking"
            checked={checkboxValues.cooking}
            onChange={() => handleCheckboxChange("cooking")}
            className="mr-2"
          />
          <label htmlFor="cooking" className="mb-1">
            Cooking
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="laundry"
            checked={checkboxValues.laundry}
            onChange={() => handleCheckboxChange("laundry")}
            className="mr-2"
          />
          <label htmlFor="laundry" className="mb-1">
            Laundry
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ironing"
            checked={checkboxValues.ironing}
            onChange={() => handleCheckboxChange("ironing")}
            className="mr-2"
          />
          <label htmlFor="ironing" className="mb-1">
            Ironing
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="babySitting"
            checked={checkboxValues.babySitting}
            onChange={() => handleCheckboxChange("babySitting")}
            className="mr-2"
          />
          <label htmlFor="babySitting" className="mb-1">
            Baby Sitting
          </label>
        </div>
      </div>
    </div>
  );
}