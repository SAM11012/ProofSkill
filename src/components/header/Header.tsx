import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import "./Header.css";
export const Header = () => {
  const [activeTab, setActiveTab] = useState("compare");

  return (
    <div className="">
      <div className="headerContainer max-w-[1200px] mx-auto rounded-lg ">
        {/* Header */}
        <div className=" flex items-center justify-between relative">
          <div className="flex">
            <button
              className={`px-4 border-button py-2 ${
                activeTab === "compare"
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("compare")}
            >
              Compare View
            </button>
            <button
              className={`px-4 border-button py-2 ${
                activeTab === "individual"
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("individual")}
            >
              Individual view
            </button>
            <button
              className={`px-4 border-button py-2 ${
                activeTab === "shortlisted"
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("shortlisted")}
            >
              Shortlisted candidates
            </button>
          </div>
          <div className="flex border-l absolute gap-2 buttonContainer">
            <button className="p-2 hover:bg-gray-100 border-r arrow_button">
              <MoveLeft size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 arrow_button">
              <MoveRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
