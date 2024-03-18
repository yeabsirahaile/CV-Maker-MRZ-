import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-full">
        <div className="w-full md:w-2/3  rounded-lg p-8 bg-gray-50">
          <h1 className="text-4xl font-bold text-blue-500 mt-10 mb-6">
            Welcome to MRZ-CV-Maker-App
          </h1>
          <ul className="list-disc pl-10 text-blue-600">
            <li className="text-lg mb-4">
              Simplifies CV creation for foreign employment agencies
            </li>
            <li className="text-lg mb-4">
              Automatic passport scannbg-gray-50ing for data extraction
            </li>
            <li className="text-lg mb-4">
              Customizable templates for personalized CVs
            </li>
            <li className="text-lg mb-4">
              Generates printable CVs in PDF format
            </li>
            <li className="text-lg">
              Streamlines the process, minimizing errors and saving time
            </li>
          </ul>
        </div>
        <div className="hidden md:block md:w-1/2 bg-gray-50">
          <video className="  " src="/vid.mp4" autoPlay loop muted />
        </div>
      </div>
    </div>
  );
}

export default Home;
