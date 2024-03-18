import React, { useEffect, useState } from "react";
import { FormProvider, useFormContext } from "../../../context/FormContext";
import ModalBtn from "../../mrz/ModalBtn";
import Buttons from "./Buttons";
import Checkboxs from "./Checkboxs";
import { FileInput } from "./FileInput";
import Form1 from "./Form1";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Remark from "./Remark";

const Forms = () => {
  const { form, scannedData } = useFormContext();
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    // This effect will trigger whenever scannedData changes
    // Set forceUpdate to true to force rerender of the component
    setForceUpdate(true);
  }, [scannedData]);

  useEffect(() => {
    if (forceUpdate) {
      // Reset forceUpdate to false after rendering
      setForceUpdate(false);
    }
  }, [forceUpdate]);

  // Return the JSX of your component
  return (
    <>
      <div className="  ">
        <ModalBtn />
      </div>
      <div className="flex gap-x-20 gap-y-10  mt-5 mx-14">
        <div className="flex  h-50 w-2/4 rounded-md shadow-lg shadow-blue-200 ">
          <Form1 />
        </div>
        <div className="flex flex-col h-50 w-2/4 rounded-md  gap-y-6">
          <div className="flex h-28 shadow-lg shadow-blue-200 justify-center bg-blue-50 ">
            <FileInput />
          </div>
          <div className="flex-48  shadow-lg shadow-blue-200">
            <Form3 />
          </div>

          <div className="flex flex-row   rounded-md  gap-x-6">
            <div className="flex w-2/4 h-28 shadow-lg shadow-blue-200">
              <Form4 />
            </div>
            <div className="flex-grow h-28  shadow-lg shadow-blue-200 ">
              <Form5 />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-20 gap-y-10  mt-10 mx-10">
        <div className="flex flex-row  h-50 w-2/4 rounded-md  gap-y-4 gap-x-4">
          <div className="flex w-full h-28 shadow-lg shadow-blue-200">
            <Checkboxs />
          </div>
          {/* <div className="flex-grow h-28 w-2/4  shadow-lg shadow-blue-200 ">
            <Remark />
          </div> */}
        </div>

        <div className="flex  h-50 w-2/4 rounded-md">
          <Buttons />
        </div>
      </div>
    </>
  );
};

export default Forms;
