import React from 'react';

const Projects = () => {
  // Data Structure
  const projectsData = [
    {
      id: 1,
      title: "Development of pH-Responsive Electrospun Cellulose Nanofiber Mats", // [cite: 44]
      status: "Initial state (Current Research)", // [cite: 43, 44]
      description: "Fabrication and characterization of electrospun cellulose nanofiber mats; investigation of surface responsiveness, adsorption behavior, and wastewater treatment performance for microplastic removal." // [cite: 44, 45]
    },
    {
      id: 2,
      title: "Application of Responsive Materials in Renewable Energy Harvesting: A Review", // [cite: 46]
      status: "In last stage (Current Research)", // [cite: 46]
      description: "Review paper focusing on the application of responsive materials in renewable energy." // [cite: 46]
    },
    {
      id: 3,
      title: "Development of Blended Thermolite Fabric", // [cite: 13]
      status: "Completed (B.Sc. Project)", // [cite: 9, 13]
      description: "Focused on the development and investigation of thermophysiological comfort properties of acrylic, viscose and Thermolite blended fabric. Objective was designing a fabric with thermal insulation and good moisture management." // [cite: 14, 15]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Projects & Research</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded mb-3">{project.status}</span>
            <p className="text-slate-600 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;