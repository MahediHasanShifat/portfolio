import React from 'react';

const Skills = () => {
  // Data Structure
  const skillsData = {
    technical: ["Python (Intermediate level)", "C", "Machine Learning (Primary Stage)", "Origin Pro", "Microsoft PowerPoint, Excel & Word"], // [cite: 56, 57, 58, 59]
    lab: ["Hand-on experience in foundry lab", "X-RD analysis"], // [cite: 8]
    researchInterests: [ // [cite: 32]
      "Surface and Interfacial Engineering for Functional Materials", // [cite: 33]
      "Wettability Control and Sustainable Polymer Coatings", // [cite: 35]
      "Electrospun Nanomaterials and Surface Functionalization", // [cite: 36]
      "Functional Polymer (Conductive, Self-healing, Stimuli Responsive)", // [cite: 37]
      "Bio-polymer based composites, Valorization of natural wastes" // [cite: 37]
    ]
  };

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Skills & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-blue-700">Technical Skills</h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
            {skillsData.technical.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-blue-700">Lab Expertise</h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
            {skillsData.lab.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-blue-700">Research Interests</h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
            {skillsData.researchInterests.map((interest, idx) => <li key={idx}>{interest}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;