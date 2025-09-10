import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Gallery Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-gray-200 border rounded-lg overflow-hidden"
              >
                <img
                  src="./image.jpeg"
                  alt={`Gallery ${id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">Project Title {id}</h3>
                  <p className="text-sm text-gray-600">
                    Description of the project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            {[1, 2, 3].map((id) => (
              <li key={id} className="border-b pb-4">
                <h3 className="font-medium mb-1">Project Name {id}</h3>
                <p className="text-sm text-gray-600">
                  Description of the project.
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Resume Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Resume</h2>
          <iframe
            title="resume"
            src="/path/to/your/resume.pdf"
            width="100%"
            height="600px"
            className="border rounded-lg"
          ></iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center py-4">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
