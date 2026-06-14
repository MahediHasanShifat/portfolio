import React from 'react';

const Publications = () => {
  // Data Structure
  const publicationsData = [
    {
      id: 1,
      type: "Journal Publication", // [cite: 38]
      citation: 'Abdul Barik, Mahedi Hasan, Taposh Ranjan Sarker, Md. Ebrahim Shaikh, "First-Principles Investigation of Lead-Free Double Halide Perovskites Cs2AgSbX6 (X=F,Cl) Structural, Electronic, Optical, and Mechanical Properties for optoelectronic and renewable energy applications" (Manuscript Submitted, Under review).' // [cite: 39]
    },
    {
      id: 2,
      type: "Conference Publication", // [cite: 40]
      citation: 'S. Islam, M. Hasan, M. R. Islam, F. T. Okita and A. B. Gomes, "Prediction and Classification Hepatitis C Disease Using Optimized Ensemble Learning," 2025 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE), Dhaka, Bangladesh, 2025.' // [cite: 41]
    },
    {
      id: 3,
      type: "Conference Publication", // [cite: 40]
      citation: 'Md. Ebrahim Shaikh, Taposh Ranjan Sarker, Syed Iftakhar Ahmad, Mahedi Hasan, and A. M. Ehsanul Haque, (2025), "Interrelation among Stitch Length, Input Tension, Yarn Count, and GSM of Various Knit Structures", 3rd International Conference on Textile Science and Engineering (ICTSE 2025).' // [cite: 42]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Publications</h2>
      <div className="space-y-4">
        {publicationsData.map((pub) => (
          <div key={pub.id} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">{pub.type}</span>
            <p className="text-slate-700 text-sm leading-relaxed">{pub.citation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;