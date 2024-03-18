import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MySvg from "../../SVGs/1.svg";
import Doc from "./Doc";
import Doc2 from "./Doc2";

export default function PreviewPage() {
  const [downloadClicked, setDownloadClicked] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const navigate = useNavigate();

  console.log(downloadClicked, selectedTemplate);

  const handleTemplateChange = (template) => {
    setDownloadClicked(false);
    setSelectedTemplate(template);
  };

  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return (
          <Doc
            template="Template 1"
            downloadClicked={
              selectedTemplate === "template1" ? downloadClicked : false
            }
          />
        );
      case "template2":
        return (
          <Doc2
            downloadClicked={
              selectedTemplate === "template2" ? downloadClicked : false
            }
          />
        );
      case "template3":
        return (
          <Doc
            template="Template 3"
            downloadClicked={
              selectedTemplate === "template3" ? downloadClicked : false
            }
          />
        );
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-2/4">
        <div className="flex gap-10">
          <button
            className=" bg-blue-300 px-1 rounded-md text-md text-blue-900"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <div className=" text-xl font-semibold text-blue-600">
            Choose template
          </div>
        </div>
        <div className="flex flex-col pt-5 gap-2">
          <label className="radio-label">
            <input
              type="radio"
              value="template1"
              checked={selectedTemplate === "template1"}
              onChange={() => handleTemplateChange("template1")}
            />
            Template 1
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="template2"
              checked={selectedTemplate === "template2"}
              onChange={() => handleTemplateChange("template2")}
            />
            Template 2
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="template3"
              checked={selectedTemplate === "template3"}
              onChange={() => handleTemplateChange("template3")}
            />
            Template 3
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="block h-[85vh] border-4 border-blue-900 rounded-md overflow-auto">
          {renderSelectedTemplate()}
        </div>
        <div>
          <button
            className="bg-green-500 p-1 rounded-md text-lg text-white"
            onClick={() => setDownloadClicked((prevValue) => !prevValue)}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
