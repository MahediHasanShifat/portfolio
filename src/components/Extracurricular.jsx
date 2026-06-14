import React from 'react';

const Extracurricular = () => {
  // Data Structure
  const extracurricularData = [
    {
      id: 1,
      role: "Vice President", // [cite: 73]
      organization: "BUTEX Debating Club", // [cite: 73]
      duration: "April 2021-December 2022" // [cite: 73]
    },
    {
      id: 2,
      role: "Campus Ambassador", // [cite: 75]
      organization: "Youth Club of Bangladesh", // [cite: 75]
      duration: "Aug'17- Apr'19", // [cite: 75]
      details: "Ran awareness campaigns for Thalassemia and Hepatitis (with NoHep Network)." // [cite: 76, 77]
    },
    {
      id: 3,
      role: "Member", // [cite: 73]
      organization: "BUTEX Science Club & 'Badhon BUTEX Unit' (Blood donation group)" // [cite: 73, 74]
    },
    {
      id: 4,
      role: "Member", // [cite: 74]
      organization: "BUTEX Fabric Engineering department Soccer team" // [cite: 74]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Extracurricular Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {extracurricularData.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800">{item.role}</h3>
            <p className="text-blue-600 text-sm font-medium">{item.organization}</p>
            {item.duration && <p className="text-slate-500 text-xs mt-1">{item.duration}</p>}
            {item.details && <p className="text-slate-600 text-sm mt-2">{item.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;