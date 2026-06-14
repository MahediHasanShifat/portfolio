import React from 'react';

const Education = () => {
  // Data Structure
  const educationData = [
    {
      id: 1,
      degree: "M.Sc. in Material Science (36 Credits)", // [cite: 4]
      institution: "Bangladesh University of Engineering and Technology, Dhaka", // [cite: 5]
      duration: "2025-Present", // [cite: 6]
      details: "Relevant Courses: Physical Metallurgy Principles, Manufacturing Processes, Material Characterization, Thermodynamics and kinetics of materials, Polymeric Materials, and Hydro-electro Metallurgy." // [cite: 7]
    },
    {
      id: 2,
      degree: "B.Sc. in Textile Engineering (166 Credits)", // [cite: 9]
      institution: "Bangladesh University of Textiles, Dhaka", // [cite: 10]
      duration: "2017-2022", // [cite: 12]
      details: "CGPA: 3.68 (on a scale of 4.00) secured tenth position. CGPA(WES): 3.76." // [cite: 16]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-blue-600">
            <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
            <div className="flex flex-col md:flex-row md:justify-between text-slate-600 mb-3 mt-1">
              <p className="font-semibold text-blue-700">{edu.institution}</p>
              <p className="text-sm font-bold bg-slate-100 px-3 py-1 rounded-full w-fit">{edu.duration}</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;