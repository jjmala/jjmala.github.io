import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useMetadata from '../hooks/useMetadata';

const StyledFooter = styled.footer`
  font-size: 1.6rem;
  background-color: #2c4059;
  color: white;
  padding: 3rem 1.5rem;

  a {
    color: #ddd;
  }

  @media print {
    padding-bottom: 0;
    //position:fixed;
    //bottom:0;
  }
`;
const Footer = () => {
  const { contacts } = useMetadata();
  return (
    <StyledFooter className="footer">
      <div className="container">
        <section>
          <p className="print-only">
            La sottoscritta, ai sensi dell'art. 46 DPR 28.12.2000 n. 445, dichiara veritiero tutto ci `o che viene
            riportato e di essere consapevole delle responsabilit `a penali e civili a cui va in contro in caso di
            dichiarazione mendace, oltre alla conseguente immediata decadenza dei benefici eventualmente acquisiti sulla
            base della dichiarazione non veritiera. Acconsento al trattamento dei dati personali ai sensi della vigente
            normativa in materia di privacy, D.L. 30 giugno 2003 n. 196. Torino, 16.09.2022
          </p>
          <p className="print-hidden">
            Zhaklin Mala
            <br />
            <a href={`tel:${contacts.phone}`} aria-label="phone">
              <small>
                <FontAwesomeIcon icon={faPhone} size="1x" /> {contacts.phone}
              </small>
            </a>
            <br />
            <a href={`mailto:${contacts.email}`} aria-label="mail">
              <small>
                <FontAwesomeIcon icon={faEnvelope} size="1x" /> {contacts.email}
              </small>
            </a>
          </p>
        </section>
      </div>
    </StyledFooter>
  );
};

export default Footer;
