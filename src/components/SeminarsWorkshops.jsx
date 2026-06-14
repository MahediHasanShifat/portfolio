import React from 'react';

const SeminarsWorkshops = () => {
  // Data Structure
  const workshopsData = [
    {
      id: 1,
      title: "Python for Research", // [cite: 53]
      organizer: "Southeast University", // [cite: 53]
      details: "Participated in a faculty project led by the Vice Chancellor to integrate Python into academic research." // [cite: 53]
    },
    {
      id: 2,
      title: "Outcome Based Education (OBE) Workshops", // [cite: 54]
      organizer: "Southeast University Authority" // [cite: 54]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Seminars & Workshops</h2>
      <ul className="space-y-4">
        {workshopsData.map((workshop) => (
          <li key={workshop.id} className="bg-white p-5 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800">{workshop.title}</h3>
            <p className="text-sm font-medium text-blue-600">{workshop.organizer}</p>
            {workshop.details && <p className="text-sm text-slate-600 mt-2">{workshop.details}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SeminarsWorkshops;