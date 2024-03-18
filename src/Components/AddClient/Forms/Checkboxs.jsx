import { useState } from "react";
import { useFormContext } from "../../../context/FormContext";

export default function Checkboxs() {
  const { form } = useFormContext();
  const [checkboxValues, setCheckboxValues] = useState({
    careGiving: form.getValues("careGiving"),
    cleaning: form.getValues("cleaning"),
    cooking: form.getValues("cooking"),
    laundry: form.getValues("laundry"),
    ironing: form.getValues("ironing"),
    babySitting: form.getValues("babySitting"),
  });

  const handleCheckboxChange = (name) => {
    form.setValue(name, !form.getValues(name));
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: !prevValues[name],
    }));
  };
  return (
    <div className="bg-blue-50 rounded-md container mx-auto  py-2 text-blue-800 px-7 ">
      <div className="grid grid-cols-2 text-blue-800 gap-2 text-blue-800 gap-x-2 text-blue-800 w-full">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="careGiving"
            checked={checkboxValues.careGiving}
            onChange={() => handleCheckboxChange("careGiving")}
            className="mr-2 text-blue-800"
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
            className="mr-2 text-blue-800"
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
            className="mr-2 text-blue-800"
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
            className="mr-2 text-blue-800"
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
            className="mr-2 text-blue-800"
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
            className="mr-2 text-blue-800"
          />
          <label htmlFor="babySitting" className="mb-1">
            Baby Sitting
          </label>
        </div>
      </div>
    </div>
  );
}
