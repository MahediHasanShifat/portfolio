import React from 'react';

const Experience = () => {
  // Data Structure
  const experienceData = [
    {
      id: 1,
      role: "Lecturer in Textile Engineering", // [cite: 20]
      company: "Southeast University, Dhaka", // [cite: 19]
      duration: "Dec' 2023-Present", // [cite: 21]
      type: "Academic"
    },
    {
      id: 2,
      role: "Lecturer in Textile Engineering", // [cite: 27]
      company: "BGMEA University of Fashion and Technology, Dhaka", // [cite: 26]
      duration: "May' 2023- Nov' 2023", // [cite: 28]
      type: "Academic"
    },
    {
      id: 3,
      role: "Intern", // [cite: 48]
      company: "Fakir Knitwears Ltd, Narayanganj", // [cite: 49]
      duration: "8 Feb'2023-8 April'2023", // [cite: 50]
      type: "Industrial",
      description: "Received training on knitting production technology, dyeing, printing and garments manufacturing processes." // [cite: 51]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Professional Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                <p className="text-blue-700 font-medium">{exp.company}</p>
              </div>
              <span className="text-slate-500 text-sm mt-2 md:mt-0 font-medium">{exp.duration}</span>
            </div>
            {exp.description && <p className="text-slate-600 mt-2 text-sm">{exp.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;