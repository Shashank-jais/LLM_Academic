// File: src/components/Sidebar.js
import React, { useState } from "react";
import { FaRegFileAlt, FaRegBookmark } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"; // Import these icons

const Sidebar = () => {
  const [selectedModel, setSelectedModel] = useState("TrueYou");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const models = [
    {
      name: "TrueYou",
      icon: (
        <img
          className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white font-bold"
          src="/public/logo.jpg"
        ></img>
      ),
    },
    {
      name: "Library",
      icon: <FaRegBookmark className="w-6 h-6 text-gray-400" />,
      count: 20,
    },
  ];

  const today = [
    "React frontend setup guide",
    "Remove back pocket",
    "Digital Signatures and Integrit",
    "Brain Tumor Segmentation Re",
    "Interesting Thank You Ideas",
    "Rephrasing Model Names",
  ];

  const yesterday = ["Image creation request", "Transfer Functions in DFA"];

  return (
    <div
      className={`${
        isCollapsed ? "-translate-x-[20] " : "translate-x-0"
      }  relative z-40 top-0 left-0 h-full bg-gray-900 text-white flex flex-col transition-transform duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } border-r border-gray-700 overflow-y-auto`}
    >
      <div className="flex flex-col flex-1 p-3">
        <div className="flex items-center py-4 px-2  relative">
          {!isCollapsed && (
            <div className="flex items-center justify-between w-full cursor-pointer font-bold">
              <span>{selectedModel}</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute right-2 top-4 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 shadow-md"
          >
            {isCollapsed ? (
              <IoChevronForward className="text-white w-4 h-4" />
            ) : (
              <IoChevronBack className="text-white w-4 h-4" />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          {models.map((model) => (
            <div
              key={model.name}
              className={`flex items-center p-2 rounded cursor-pointer transition-colors ${
                selectedModel === model.name
                  ? "bg-gray-800"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => setSelectedModel(model.name)}
            >
              {model.icon}
              {!isCollapsed && (
                <div className="flex items-center justify-between flex-1 ml-2">
                  <span className="text-sm">{model.name}</span>
                  {model.count && (
                    <span className="bg-gray-700 rounded-full px-2 py-0.5 text-xs">
                      {model.count}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {!isCollapsed && (
          <>
            <div className="mt-6">
              <h3 className="text-xs text-gray-400 mb-2 px-2">Today</h3>
              <ul>
                {today.map((item, index) => (
                  <li
                    key={`today-${index}`}
                    className="flex items-center px-2 py-2 rounded cursor-pointer hover:bg-gray-800 mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <FaRegFileAlt className="mr-2 text-sm text-gray-400" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xs text-gray-400 mb-2 px-2">Yesterday</h3>
              <ul>
                {yesterday.map((item, index) => (
                  <li
                    key={`yesterday-${index}`}
                    className="flex items-center px-2 py-2 rounded cursor-pointer hover:bg-gray-800 mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <FaRegFileAlt className="mr-2 text-sm text-gray-400" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
