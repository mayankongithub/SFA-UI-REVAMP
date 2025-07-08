import React, { useState } from "react";
import Navbar from "./Navbar";
import { SideBar } from "./Side_bar";
import Physical_view from "./Physical_view";
import Logical_view from "./Logical_view";

const Home_Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("physical"); // Default to physical view

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="min-h-screen bg-white flex">
      <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex justify-end mt-4 mr-10">
          <div className="inline-flex rounded-md shadow-xs" id="buttonGroup">
            <button
              onClick={() => handleViewChange("physical")}
              className={`tab-btn px-3 py-1.5 text-xs font-medium bg-white text-black border ${
                activeView === "physical" ? "border-blue-600" : "border-gray-200"
              } rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700`}
            >
              Physical View
            </button>
            <button
              onClick={() => handleViewChange("logical")}
              className={`tab-btn px-3 py-1.5 text-xs font-medium bg-white text-black border ${
                activeView === "logical" ? "border-blue-600" : "border-gray-200"
              } rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700`}
            >
              Logical View
            </button>
          </div>
        </div>

        <main className="flex-1 p-6">
          {activeView === "physical" ? <Physical_view /> : <Logical_view />}
        </main>
      </div>
    </div>
  );
};

export default Home_Page;
