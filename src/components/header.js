import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import useMetadata from '../hooks/useMetadata';
import useResponsive from '../hooks/useResponsive';

const StyledHeader = styled.header`
  padding: 6rem 0 2rem;
  @media print {
    padding: 2rem 0;
  }

  .title.is-1 {
    letter-spacing: 1rem;
    margin-bottom: 2.5rem;
    font-size: 5rem;
  }

  .subtitle.is-3 {
    font-weight: 300;
  }

  .badges a:not(:last-child) {
    margin-right: 5px;
  }
  h1, p.is-3 {
    font-family: 'Julius Sans One', sans-serif !important;
    font-weight: 800;
  }
`;

const Header = () => {
  const { social } = useMetadata();
  const { isMobile, isPrint } = useResponsive();
  return (
    <StyledHeader className="has-text-centered has-text-grey-dark is-uppercase">
      <StaticImage
        as="figure"
        className="image is-1b1 mb-5"
        imgClassName="is-rounded"
        style={{ margin: '0 auto', borderRadius: '100%' }}
        src="../images/photo.jpeg"
        alt="Jacqueline Mala"
        placeholder="dominantColor"
        layout="fixed"
        width={150}
        height={150}
      />
      <h1 className="title is-1 is-size-2-mobile">
        Jacqueline{isMobile ? ' ' : ''}<span className="has-text-link">Mala</span>
      </h1>
      <p className="subtitle is-3 is-size-5-mobile is-uppercase">
        <small>
          Psicologo clinico, psicoterapeuta in formazione sistemico relazionale, interprete e mediatrice
        </small>
      </p>
      <div className="badges buttons is-centered print-hidden">
        <a href={social.linkedin} aria-label="linkedin" rel="noreferrer" target="_blank">
          <img alt="linkedin" className="image" src="https://img.shields.io/badge/-Linkedin-%230a66c2?logo=linkedin" />
        </a>
        <a href={social.github} aria-label="github" rel="noreferrer" target="_blank">
          <img alt="github" className="image" src="https://img.shields.io/badge/-Github-black?logo=github" />
        </a>
        <a className="print-hidden" href="/resume.pdf" download={`jjmala-resume-${new Date().getFullYear()}.pdf`} aria-label="pdf" rel="noreferrer" target="_blank">
          <img alt="pdf" className="image" src="https://img.shields.io/badge/Download-PDF-green" />
        </a>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {};
export default Header;
