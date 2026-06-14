import React from 'react';

const Accomplishments = () => {
  // Data Structure
  const awardsData = [
    {
      id: 1,
      title: "1st Runner-up, Scientific Poster Presentation", // [cite: 62]
      event: "Inter-Departmental Poster Presentation Competition - 2021", // [cite: 62]
      details: "Topic: Polymer: The present and future ruler." // [cite: 63]
    },
    {
      id: 2,
      title: "2nd Runner-up, Business Case Competitions", // [cite: 64]
      event: "'Morrison Texbiz - 2019' and 'Dysin Texbiz - 2018'", // [cite: 64]
      details: "National level business case competitions solving contemporary problems in the textile and clothing industry." // [cite: 65, 67]
    },
    {
      id: 3,
      title: "Bangladesh University of Textiles Merit Scholarship", // [cite: 68]
      event: "Academic Excellence", // [cite: 68]
      details: "Awarded for consistently maintaining a rank within the top Ten students of the department in each semester." // [cite: 68]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Accomplishments & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awardsData.map((award) => (
          <div key={award.id} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <span className="text-2xl mb-3 block">🏆</span>
            <h3 className="font-bold text-slate-800 mb-1">{award.title}</h3>
            <p className="text-sm font-semibold text-yellow-700 mb-2">{award.event}</p>
            <p className="text-sm text-slate-700">{award.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accomplishments;