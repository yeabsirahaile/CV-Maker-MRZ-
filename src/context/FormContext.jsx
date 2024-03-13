// FormContext.js
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

// const formSchema = z.object({
//   fullname: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
//   contract: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
//   position: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
// });

export const FormProvider = ({ children }) => {
  const [scannedData, setScannedData] = useState(`{ "initial Value": "null" }`);

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "abebe",
      contract: "",
      position: " ",
      salary: "",
      sex: "",

      nationality: "",
      passportNo: "",
      religion: "",
      dateOfIssue: "",
      age: "",
      dateOfExpiry: "",
      birthDay: "",
      birthPlace: "",
      civilStatus: "",
      height: "",
      weight: "",
      education: " ",
      telephoneNo: "",

      arabic: "",
      english: "",
      numberOfYears: "",
      country: " ",

      careGiving: true,
      cleaning: true,
      cooking: true,
      laundry: true,
      ironing: true,
      babySitting: true,

      remarks: "Excellent worker with strong technical skills.",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <FormContext.Provider value={{ form, scannedData, setScannedData }}>
      {children}
    </FormContext.Provider>
  );
};
