const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4">
        <h1 className="text-xl font-bold text-blue-600">Portfolio</h1>
      </header>

      {/* Gallery Section */}
      <section className="container mx-auto mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          <img
            src="./image.jpeg"
            alt="Gallery 1"
            className="w-full h-64 rounded-lg shadow-md"
          />
          <img
            src="./image.jpeg"
            alt="Gallery 2"
            className="w-full h-64 rounded-lg shadow-md"
          />
          <img
            src="./image.jpeg"
            alt="Gallery 3"
            className="w-full h-64 rounded-lg shadow-md"
          />
          {/* Add more gallery images */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center rounded-lg shadow-md bg-white">
            <img
              src="./image.jpeg"
              alt="Project 1"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-md font-semibold text-gray-800">Project One</h3>
            <p className="text-sm text-gray-500">
              Description of Project One...
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg shadow-md bg-white">
            <img
              src="./image.jpeg"
              alt="Project 2"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-md font-semibold text-gray-800">Project Two</h3>
            <p className="text-sm text-gray-500">
              Description of Project Two...
            </p>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      {/* Resume Section */}
      <section className="container mx-auto mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Resume</h2>
        <p className="text-md text-gray-600 mb-4">
          Add your resume content here...
        </p>
        {/* Add more resume sections */}
      </section>

      {/* Footer */}
      <footer className="w-full bg-white shadow-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Footer</h2>
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Portfolio Website
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
