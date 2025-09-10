// import React, { useState } from 'react';
// const ProjectListing = ({ project }) => (
//   <div className="bg-gray-100 border rounded p-4">
//     <div className="flex justify-between items-center mb-2">
//       <h3>{project.title}</h3>
//       <p>{new Date(project.date).toLocaleDateString()}</p>
//     </div>
//     <p className="text-sm">{project.description}</p>
//   </div>
// );

// const Portfolio = () => {
//   const [projects, setProjects] = useState([
//     { title: 'Web Development', date: new Date('2022-02-21'), description: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Full Stack Web Development', date: new Date('2021-10-31'), description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
//     { title: 'Data Analysis', date: new Date('2022-02-21'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a erat ligula, semper hendrerit enim quis, tempor volutpat urna. Etiam facilisis pulvinar quam sed aliquam.' }
//   ]);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="flex justify-between bg-white p-4 border-b">
//         {/* Logo and Navigation */}
//         <div className="flex items-center">
//           <img src={'./image.jpeg'} alt="" />
//           <h1 className="ml-2">Personal Website</h1>
//         </div>

//         {/* Navbar with Links */}
//       </header>

//       <main className="bg-gray-200 p-8 flex justify-between">
//         {/* Header section with content on the right */}
//         <section className="flex-grow bg-white rounded shadow border border-gray-300">
//           <div className="p-4">
//             <h1 className="text-xl font-bold mb-2">Projects</h1>
//             {projects.map((project, index) => (
//               <ProjectListing key={index} project={project} />
//             ))}
//           </div>
//         </section>

//         {/* Content on the left */}
//       </main>
//     </div>
//   );
// };

// export default Portfolio;
// V2 with header and footer

import { useState } from "react";

const ProjectListing = ({ project }) => (
  <div className="bg-gray-100 border rounded p-4">
    <div className="flex justify-between items-center mb-2">
      <h3>{project.title}</h3>
      <p>{new Date(project.date).toLocaleDateString()}</p>
    </div>
    <p className="text-sm">{project.description}</p>
  </div>
);

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "Web Development",
      date: new Date("2022-02-21"),
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Full Stack Web Development",
      date: new Date("2021-10-31"),
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Data Analysis",
      date: new Date("2022-02-21"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a erat ligula, semper hendrerit enim quis, tempor volutpat urna. Etiam facilisis pulvinar quam sed aliquam.",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex justify-between bg-white p-4 border-b">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <img src={"./image.jpeg"} alt="" />
          <h1 className="ml-2">Personal Website</h1>
        </div>

        {/* Navbar with Links */}
      </header>

      <main className="bg-gray-200 p-8 flex justify-between">
        {/* Header section with content on the right */}
        <section className="flex-grow bg-white rounded shadow border border-gray-300">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Projects</h1>
            {projects.map((project, index) => (
              <ProjectListing key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Content on the left */}
      </main>
    </div>
  );
};

export default Portfolio;
// -2 no footer
//  -1 not using image provided
