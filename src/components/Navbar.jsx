import React from 'react';

const Navbar = () => {
  // Navigation links corresponding to your sections
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Accomplishments', href: '#accomplishments' }
  ];

  return (
    <nav className="bg-slate-900 text-slate-300 sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Initials */}
        <div className="text-white font-bold text-xl tracking-widest pr-8 shrink-0">
          MH.
        </div>
        
        {/* Links */}
        <div className="overflow-x-auto hide-scrollbar">
          <ul className="flex space-x-6 md:space-x-8 text-sm font-medium whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;