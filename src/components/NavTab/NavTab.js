import React from 'react';
import './NavTab.css';

function NavTab({ projectRef, techsRef, studentRef }) {
  const handleScrollProject = () =>
    projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const handleScrollTechs = () =>
    techsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const handleScrollStudent = () =>
    studentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <nav className="nav-tab">
      <button className="nav-tab-button" onMouseDown={handleScrollProject}>
        О проекте
      </button>
      <button className="nav-tab-button" onMouseDown={handleScrollTechs}>
        Технологии
      </button>
      <button className="nav-tab-button" onMouseDown={handleScrollStudent}>
        Студент
      </button>
    </nav>
  );
}

export default NavTab;



