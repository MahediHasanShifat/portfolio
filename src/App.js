import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AcademicServices from './components/AcademicServices';
import Extracurricular from './components/Extracurricular';
import SeminarsWorkshops from './components/SeminarsWorkshops';
import Accomplishments from './components/Accomplishments';
import TestScores from './components/TestScores';

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 scroll-smooth">
      {/* Inserted Navbar here */}
      <Navbar />

      {/* Added id="home" */}
      <div id="home">
        <Home />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        {/* Wrapped each section with its corresponding ID for navigation */}
        <section id="education" className="scroll-mt-24"><Education /></section>
        <section id="experience" className="scroll-mt-24"><Experience /></section>
        <section id="publications" className="scroll-mt-24"><Publications /></section>
        <section id="projects" className="scroll-mt-24"><Projects /></section>
        <section id="skills" className="scroll-mt-24"><Skills /></section>
        <section id="academic-services" className="scroll-mt-24"><AcademicServices /></section>
        <section id="extracurricular" className="scroll-mt-24"><Extracurricular /></section>
        <section id="seminars" className="scroll-mt-24"><SeminarsWorkshops /></section>
        <section id="accomplishments" className="scroll-mt-24"><Accomplishments /></section>
        <section id="test-scores" className="scroll-mt-24"><TestScores /></section>
      </main>

      <footer className="bg-slate-900 text-center text-slate-400 py-8 text-sm mt-12">
        <p>© {new Date().getFullYear()} Mahedi Hasan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;