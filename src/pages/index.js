import React from 'react';
import styled from 'styled-components';

import Layout from '../layouts/layout';
import Seo from '../components/seo';
import TechnicalSkills from '../components/resume-components/technical-skills';
import ProfessionalExperience from '../components/resume-components/professional-experience';
import Information from '../components/resume-components/information';
import Languages from '../components/resume-components/languages';
import Education from '../components/resume-components/education';
import Conferences from '../components/resume-components/conferences';
import EducationExperience from '../components/resume-components/education-experiences';
import useResponsive from '../hooks/useResponsive';

const StyledContainer = styled.div`
  main {
    margin-top: 0.5rem;
    font-weight: 200;
    margin-bottom: 3rem;

    p {
      font-size: 1.6rem;
    }

    article:not(:last-child) {
      margin-bottom: 2rem;
    }

    section {
      background: #fff;
      margin-bottom: 2rem;
      padding: 2rem 2rem 3rem;
      border-top: 0.5rem solid hsl(217, 71%, 53%);
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`;

const IndexPage = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <StyledContainer>
        <Seo title="Zhaklin Mala" />
        <Layout>
          <Information />
          <Languages />
          <TechnicalSkills />
          <ProfessionalExperience />
          <Education />
          <EducationExperience />
          <Conferences />
        </Layout>
      </StyledContainer>
    )
  }
  return (
    <StyledContainer>
      <Seo title="Zhaklin Mala" />
      <Layout>
        <div className="columns">
          {/*MAIN*/}
          <div className="column is-8">
            <ProfessionalExperience />
            <Conferences />
          </div>
          {/*SIDEBAR*/}
          <div className="column is-4">
            <Information />
            <Languages />
            <TechnicalSkills />
            <Education />
            <EducationExperience />
          </div>
        </div>
      </Layout>
    </StyledContainer>
  );
};

export default IndexPage;
