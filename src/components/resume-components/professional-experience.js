import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  li {
    font-size: 1.2em;
  }
`;

export default function ProfessionalExperience() {
  return (
    <section className="section">
      <h2 className="title is-2 is-size-3-mobile">Esperienze professionali</h2>
      {/*EMERGENZA UCRAINA*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Attività Emergenza Ucraina ::{' '}
          <small className="has-text-weight-light">da Marzo 2022 - in corso</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          <a href="https://casagiglio.org/">Coordinamento Mir Now!</a>
          {' :: '}
          <small className="has-text-weight-light">Torino, IT, Przemysl, PL, Lviv, Kyiv, Leopoli, UA;</small>
        </p>
        <p>
          <small>
            Casa Giglio Onlus, Fondazione Paideia, Pausa Caf Scs, Acomazzi Coop., Ufficio Pastorale Migranti, Casa Ukraina, Estero
          </small>
        </p>
        <ul>
          <li>• Punto di contatto per i rifugiati;</li>
          <li>• Mediazione culturale;</li>
          <li>• Traduzione di documentazione, terapie e visite mediche specialistiche;</li>
          <li>• Evacuazione da Leopoli e organizzazione di accoglienza in Italia di nuclei familiari, Lviv UA;</li>
          <li>• Consegna medicinali del Banco Farmaceutico agli ospedali del territorio ucraino, Lviv e Kyiv, UA;</li>
          <li>• Organizzazione di attività;</li>
        </ul>
      </StyledArticle>
      {/*INTERPRETARIATO*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Interpretariato, Traduzione e Mediazione :: <small className="has-text-weight-light">dal 2011 - in corso</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">Aziende e Privati</p>
        <ul>
          <li>
            • Interprete in simultanea. Nuova Collaborazione, Torino. Giu – Set 2022, referente Maurizia Savia:
            +393516466695;
          </li>
          <li>
            • Mediatrice culturale e interprete. Casa Giglio Onlus, Torino. Apr 2022 - in corso, referente Giuseppina
            Sgambellone: +393486576028;
          </li>
          <li>
            • Traduttrice di cartelle cliniche e interprete durante visite mediche specialistiche in ospedali, lingue
            RU, UA, EN, IT. Fondazione Paideia, Torino. Apr 2022 – in corso, referente Fabrizio Serra: +393488712999;
          </li>
          <li>
            • Interprete per cooperativa sociale Pausa Cafe` a Przemysl in Polonia. Mar 2022, referente Marco Ferrero:
            +393355905537;
          </li>
          <li>
            • Traduzioni di documentazione EN-IT per privati ai fini di asseverazione. 2019 referente: Jack Coulton:
            +393891770082;
          </li>
          <li>
            • Interprete e Traduttrice RU-UA-IT per l'azienda di giocattoli ucraina UGEARS e il Centro Giochi Educativo
            di Torino. 2016;
          </li>
          <li>
            • Interprete simultanea RU-UA-IT a chiamata presso buyers per l'azienda di vestiario Space 2000 spa. 2015,
            referente Daniele Pigato;
          </li>
          <li>
            • Hostess di lingua tedesca e inglese per TUR IN TUR snc. 2014 referente: Mirella Nicola +393338290669;
          </li>
          <li>• Insegnante di italiano per privati di madrelingua inglese e russa. 2013-2016</li>
        </ul>
      </StyledArticle>
      {/*Squid Frame*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Relatrice al Seminario "Squid Frame: Effetto Lucifero e serialità televisiva" ::{' '}
          <small className="has-text-weight-light">Giu 2022</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Dipartimento di Scienze Sociali Università degli Studi di Napoli Federico II
        </p>
      </StyledArticle>
      {/*Protezione Civile*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Traduzione e Mediazione culturale presso la sede della Protezione Civile ::{' '}
          <small className="has-text-weight-light">Apr 2022</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Protezione Civile Piemonte
          {' :: '}
          <small className="has-text-weight-light">Torino, IT</small>
        </p>
        <ul>
          <li>• Accoglienza, traduzione documenti e raccolta delle storie personali dei rifugiati;</li>
          <li>• Traduzione visite mediche e profilassi sanitaria;</li>
          <li>
            • Mediazione culturale presso l'Ospedale San Giovanni Bosco con una paziente ucraina anziana affetta da
            Covid.
          </li>
        </ul>
      </StyledArticle>
      {/*Supplenze*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Supplenze nella scuola primaria e dell'infanzia ::{' '}
          <small className="has-text-weight-light">Set 2021 – Mag 2022</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          I.C. Volvera e I.C. Vinovo
          {' :: '}
          <small className="has-text-weight-light">Provincia di Torino, IT</small>
        </p>
        <ul>
          <li>• Materie insegnate: italiano, storia, geografia, inglese, matematica, scienze e musica;</li>
          <li>• Insegnante di sostegno.</li>
        </ul>
      </StyledArticle>
      {/*Relatrice*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Relatrice al Seminario ”Il Sistema degli Oggetti” :: <small className="has-text-weight-light">Giu 2021</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">Accademia delle Belle Arti di Napoli</p>
      </StyledArticle>
      {/*Tirocinio post-lauream*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Tirocinio post-lauream per l'abilitazione alla professione ::{' '}
          <small className="has-text-weight-light">2021-2022</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Attività di ricerca presso il Dipartimento di Psicologia dell'Università degli Studi di Torino
          {' :: '}
          <small className="has-text-weight-light">Torino, IT</small>
        </p>
      </StyledArticle>
      {/*Servizio per Adolescenti*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Servizio per Adolescenti con difficoltà :: <small className="has-text-weight-light">Apr – Set 2017</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Svolto presso privati affidatari
          {' :: '}
          <small className="has-text-weight-light">Bergen e Oslo, NO</small>
        </p>
        <ul>
          <li>• lavoro in case-famiglia, referente: Robin Gjesdal +47 45236643</li>
        </ul>
      </StyledArticle>
      {/*Tirocinio Accademico*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Tirocinio accademico :: <small className="has-text-weight-light">2016</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Associazione Choròs Comunità
          {' :: '}
          <small className="has-text-weight-light">Torino, IT</small>
        </p>
        <ul>
          <li>
            • Teatro di Comunità: lavoro con gruppi di adolescenti con disabilità, adolescenti e adulti del CPIA e
            anziani;
          </li>
          <li>• Ricerca patrocinata dall'Università di Parigi e di Torino sul teatro sociale nel territorio.</li>
        </ul>
      </StyledArticle>

      {/*PAGE BREAK*/}
      <h2 className="title is-2 is-size-3-mobile mt-5 pagebreak print-only">Esperienze professionali (continua)</h2>
      {/*Tex Mex Eldorado*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Barmaid e Caposala :: <small className="has-text-weight-light">2014 – 2017</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Tex Mex Eldorado
          {' :: '}
          <small className="has-text-weight-light">Torino, IT</small>
        </p>
      </StyledArticle>
      {/*Bill and Toni's*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Caposala :: <small className="has-text-weight-light">Lug 2012 – Ago 2013</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Bill and Toni's
          {' :: '}
          <small className="has-text-weight-light">Sydney, AU</small>
        </p>
      </StyledArticle>
      {/*Opera Bar*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Barmaid e Barback :: <small className="has-text-weight-light">Apr 2013 – Ago 2013</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Opera Bar
          {' :: '}
          <small className="has-text-weight-light">Sydney, AU</small>
        </p>
      </StyledArticle>
      {/*Yellow House*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Barmaid e Sala :: <small className="has-text-weight-light">Lug 2012 – Apr 2013</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Galleria d'arte Yellow House
          {' :: '}
          <small className="has-text-weight-light">Sydney, AU</small>
        </p>
      </StyledArticle>
      {/*Assistente all'infanzia*/}
      <StyledArticle>
        <h4 className="title is-4 is-uppercase">
          Assistente all'infanzia :: <small className="has-text-weight-light">2009 – 2011</small>
        </h4>
        <p className="subtitle is-5 is-uppercase mb-1">
          Convitto Nazionale Umberto I{' :: '}
          <small className="has-text-weight-light">Torino, IT</small>
        </p>
        <ul>
          <li>• due anni di servizio pre-scuola;</li>
          <li>• animazione al summer-camp in lingua inglese;</li>
          <li>• animazione durante il soggiorno estivo dei ragazzi dell'istituto presso Igea Marina</li>
        </ul>
      </StyledArticle>
    </section>
  );
}
