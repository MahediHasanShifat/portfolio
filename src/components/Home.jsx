import React from 'react';

const Home = () => {
  // Data Structure
  const personalInfo = {
    name: "Mahedi Hasan",
    title: "Lecturer in Textile Engineering & Material Science Researcher",
    address: "481, Master Bari, Kawlar, Dakshinkhan, Dhaka-1230, Bangladesh",
    phone: "+8801521493722",
    email: "mahedi.hasan@seu.edu.bd",
    linkedin: "https://www.linkedin.com/in/mahedi-hasan-b929b8142/",
    researchgate: "https://www.researchgate.net/profile/Mahedi-Hasan-65?ev=hdr_xprf", // Update with your ResearchGate URL
    image: "/assets/mahedi.jpg",
    about: "I am a dedicated academic and researcher with a strong foundation in Textile Engineering and an expanding expertise in Material Science. Currently pursuing an M.Sc. in Material Science at BUET, I serve as a Lecturer at Southeast University. My passion lies in bridging the gap between theoretical material science and practical, sustainable textile applications. I am deeply committed to applying Outcome-Based Education (OBE) frameworks to foster the next generation of engineers, while actively contributing to advanced research in functional and environmentally responsible materials.",
    interests: [
      "Surface & Interfacial Engineering",
      "Sustainable Polymer Coatings",
      "Electrospun Nanomaterials",
      "Functional & Protective Textiles",
      "Stimuli-Responsive Polymers",
      "Bio-polymer Based Composites"
    ]
  };

  return (
    <header className="bg-slate-900 text-white py-24 px-6 border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{personalInfo.name}</h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">{personalInfo.title}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-slate-400 font-medium mb-6">
            <span className="flex items-center gap-2">📍 {personalInfo.address}</span>
            <span className="flex items-center gap-2">📧 {personalInfo.email}</span>
            <span className="flex items-center gap-2">📞 {personalInfo.phone}</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-10">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white transition-colors font-bold underline">LinkedIn</a>
            <a href={personalInfo.researchgate} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white transition-colors font-bold underline">ResearchGate</a>
          </div>

          {/* About Me Section */}
          <div className="mb-10 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-left">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-500">_</span> About Me
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {personalInfo.about}
            </p>
          </div>

          {/* Academic & Professional Interests */}
          <div className="text-left">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500">_</span> Core Interests
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
              {personalInfo.interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="bg-slate-800 hover:bg-slate-700 transition-colors text-blue-200 border border-slate-700 px-4 py-2 rounded-lg font-medium shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-56 h-56 md:w-72 md:h-72 shrink-0 relative group pt-4 md:pt-0">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <img 
            src={personalInfo.image} 
            alt={personalInfo.name} 
            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
            onError={(e) => { e.target.src = "https://via.placeholder.com/300/1e293b/ffffff?text=MH"; }}
          />
        </div>

      </div>
    </header>
  );
};

export default Home;