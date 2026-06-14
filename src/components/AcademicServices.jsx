import React from 'react';

const AcademicServices = () => {
  // Data Structure
  const academicServicesData = [
    {
      id: 1,
      title: "Curriculum Delivery", // [cite: 22]
      description: "Facilitate core Textile Engineering courses including Fabric Manufacturing Technology, Polymer Science, Synthetic Fiber, and Application of Computer in Textile Engineering." // [cite: 22]
    },
    {
      id: 2,
      title: "Outcome-Based Education (OBE) Implementation", // [cite: 23]
      description: "Apply OBE frameworks to align course objectives with departmental goals, ensuring students meet specific competency standards." // [cite: 23]
    },
    {
      id: 3,
      title: "Student Assessment & Coordination", // [cite: 24, 25]
      description: "Design and evaluate comprehensive examination papers and coordinate courseware with academic department chair." // [cite: 24, 25]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Academic Services</h2>
      <div className="space-y-4">
        {academicServicesData.map((service) => (
          <div key={service.id} className="bg-slate-100 p-5 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-1">{service.title}</h3>
            <p className="text-slate-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicServices;