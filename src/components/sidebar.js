import React from 'react';
import Informations from './resume-components/information';
import Languages from './resume-components/languages';
import TechnicalSkills from './resume-components/technical-skills';
import Education from './resume-components/education';
import EducationExperience from './resume-components/education-experiences';

const Sidebar = () => {
  return (
    <>
        <Informations />
        <Languages />
        <TechnicalSkills />
        <Education />
        <EducationExperience />
    </>
  );
};

Sidebar.propTypes = {};
export default Sidebar;
