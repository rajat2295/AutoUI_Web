import React, { useState } from "react";

const EntertainmentWebsite = () => {
  const [activeTab, setActiveTab] = useState("streaming");

  const tabs = ["streaming", "games", "music"];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-2">Entertainment</h1>
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {activeTab === "streaming" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Streaming</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, ex at condimentum gravida, justo nulla lacinia neque,
                in tincidunt turpis massa nec risus.
              </p>
            </div>
          )}

          {activeTab === "games" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Games</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, ex at condimentum gravida, justo nulla lacinia neque,
                in tincidunt turpis massa nec risus.
              </p>
            </div>
          )}

          {activeTab === "music" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Music</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, ex at condimentum gravida, justo nulla lacinia neque,
                in tincidunt turpis massa nec risus.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">&copy; 2023 Entertainment</p>
      </footer>
    </div>
  );
};

export default EntertainmentWebsite;
