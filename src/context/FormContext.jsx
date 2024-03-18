// FormContext.js
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

const formSchema = z.object({
  // fullname: z.string().min(2, {
  //   message: "Full name must be at least 2 characters.",
  // }),
  // contract: z.number().min(1, {
  //   message: "Contract should be in number",
  // }),
  position: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
});

export const FormProvider = ({ children }) => {
  const [scannedData, setScannedData] = useState(`{ "initial Value": "null" }`);
  console.log(scannedData);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
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

      remark: "Excellent worker with strong technical skills.",

      passport: "",
      photo3by4: "",
      photofull: "",
      medicalimage: "",
    },
  });

  // the data manipulation of incoming scan
  const dayCalculator = (value) => {
    const year = parseInt(value?.substring(0, 2), 10);
    const month = parseInt(value?.substring(2, 4), 10);
    const day = parseInt(value?.substring(4, 6), 10);

    // Create a Date object
    const birthdate = new Date(year, month - 1, day); // Note: Months are 0-indexed in JavaScript Dates

    const dayOfMonth = birthdate.getDate();
    const monthAbbreviation = birthdate.toLocaleString("en-US", {
      month: "short",
    });
    const twoDigitYear = birthdate.toLocaleString("en-US", {
      year: "2-digit",
    });

    const formattedDate = `${dayOfMonth} ${monthAbbreviation} ${twoDigitYear}`;
    return formattedDate;
  };

  const issuedDayCalculator = (value) => {
    const year = parseInt(value?.substring(0, 2), 10) - 5;
    const month = parseInt(value?.substring(2, 4), 10);
    const day = parseInt(value?.substring(4, 6), 10) + 1;

    // Create a Date object
    const birthdate = new Date(year, month - 1, day); // Note: Months are 0-indexed in JavaScript Dates

    const dayOfMonth = birthdate.getDate();
    const monthAbbreviation = birthdate.toLocaleString("en-US", {
      month: "short",
    });
    const twoDigitYear = birthdate.toLocaleString("en-US", {
      year: "2-digit",
    });
    const formattedDate = `${dayOfMonth} ${monthAbbreviation} ${twoDigitYear}`;
    return formattedDate;
  };

  function calculateAge(dateString, threshold = 30) {
    // Extract year, month, and day from the input string
    const year = parseInt(dateString.substr(0, 2), 10);
    const month = parseInt(dateString.substr(2, 2), 10);
    const day = parseInt(dateString.substr(4, 2), 10);
    // Determine the full year based on the threshold
    const currentYear = new Date().getFullYear();
    const century = year <= threshold ? 2000 : 1900;

    // Create a Date object for the birthdate
    const birthdate = new Date(century + year, month - 1, day);

    // Create a Date object for the current date
    const currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
    ) {
      age--;
    }

    return age;
  }

  const autoAssignValues = (
    firstName,
    lastName,
    sex,
    nationality,
    expirationDate,
    documentNumber,
    birthDate
  ) => {
    form.setValue("fullName", `${firstName} ${lastName}`);
    form.setValue("sex", `${sex}`);
    form.setValue(
      "nationality",
      `${nationality === "ETH" ? "ETHIOPIAN" : null}`
    );
    form.setValue("passportNo", `${documentNumber}`);
    form.setValue("dateOfIssue", issuedDayCalculator(expirationDate));
    form.setValue("dateOfExpiry", dayCalculator(expirationDate));
    form.setValue("birthDay", dayCalculator(birthDate));
    form.setValue("age", calculateAge(birthDate));
  };

  // updating the coming data from the scanned passoprrt
  useEffect(
    function () {
      const {
        firstName,
        lastName,
        documentNumber,
        nationality,
        birthDate,
        sex,
        expirationDate,
      } = scannedData;

      if (firstName == null) return;
      autoAssignValues(
        firstName,
        lastName,
        sex,
        nationality,
        expirationDate,
        documentNumber,
        birthDate
      );
    },
    [scannedData]
  );
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
