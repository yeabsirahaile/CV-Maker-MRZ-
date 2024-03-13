import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "../../../context/FormContext";

export function FileInput() {
  const { form } = useFormContext();

  const [fileNames, setFileNames] = useState({
    passport: "",
    photo3by4: "",
    photofull: "",
    medicalimage: "",
  });

  const handleFileChange = (id, event) => {
    const file = event.target.files[0];
    setFileNames((prevFileNames) => ({
      ...prevFileNames,
      [id]: file ? `${file.name} Uploaded` : "",
    }));

    form.setValue(id, file);
  };

  return (
    <div className="grid justify-center grid-cols-2 grid-rows-2 w-full px-6 gap-20 gap-y-3">
      <div className="pt-2">
        <Label
          htmlFor="passport"
          className={`block text-blue-600 font-medium mb-1 border-2 rounded-md w-full p-2 h-7 ${
            fileNames.passport ? "bg-green-200" : "bg-blue-200"
          }`}
        >
          {fileNames.passport || "Upload Passport Image"}
        </Label>
        <Input
          className="border-2 border-blue-200 rounded-md w-full p-2 h-7 appearance-none hidden"
          id="passport"
          type="file"
          onChange={(e) => handleFileChange("passport", e)}
        />
      </div>
      <div className="pt-2">
        <Label
          htmlFor="photo3by4"
          className={`block text-blue-600 font-medium mb-1 border-2 rounded-md w-full p-2 h-7 ${
            fileNames.photo3by4 ? "bg-green-200" : "bg-blue-200"
          }`}
        >
          {fileNames.photo3by4 || " Upload 3*4 Image"}
        </Label>
        <Input
          className="border-2 border-blue-200 rounded-md w-full p-2 h-7 appearance-none hidden"
          id="photo3by4"
          type="file"
          onChange={(e) => handleFileChange("photo3by4", e)}
        />
      </div>
      <div className="pb-2">
        <Label
          htmlFor="photofull"
          className={`block text-blue-600 font-medium mb-1 border-2 rounded-md w-full p-2 h-7 ${
            fileNames.photofull ? "bg-green-200" : "bg-blue-200"
          }`}
        >
          {fileNames.photofull || " Upload Fullbody Image"}
        </Label>
        <Input
          className="border-2 border-blue-200 rounded-md w-full p-2 h-7 appearance-none hidden"
          id="photofull"
          type="file"
          onChange={(e) => handleFileChange("photofull", e)}
        />
      </div>
      <div className="pb-2">
        <Label
          htmlFor="medicalimage"
          className={`block text-blue-600 font-medium mb-1 border-2 rounded-md w-full p-2 h-7 ${
            fileNames.medicalimage ? "bg-green-200" : "bg-blue-200"
          }`}
        >
          {fileNames.medicalimage || "Upload Medical Image"}
        </Label>
        <Input
          className="border-2 border-blue-200 rounded-md w-full p-2 h-7 appearance-none hidden"
          id="medicalimage"
          type="file"
          onChange={(e) => handleFileChange("medicalimage", e)}
        />
      </div>
    </div>
  );
}
