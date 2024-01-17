import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
    li {
        font-size: 1.2em;
    }
`;

export default function ProfessionalExperience() {
  return (
    <section className='section'>
      <h2 className='title is-2 is-size-3-mobile'>Esperienze professionali</h2>
      {/*TIROCINIO di SPECIALIZZAZIONE in PSICOTERAPIA */}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          TIROCINIO di SPECIALIZZAZIONE in PSICOTERAPIA :: <small className='has-text-weight-light'> 450 ore -
          corso</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>PSICOLOGIA CLINICA, Reparto di Oncologia dei P.O. Molinette e
          Sant'Anna</p>
        <p className='subtitle is-5 is-uppercase mb-1'> A.O.U. Città della Salute e della Scienza di Torino </p>
        <ul>
          <li>
            • Valutazione psicodiagnostica;
          </li>
          <li>
            • Conduzioni di colloqui psicologici clinici individuali;
          </li>
          <li>
            • Training di applicazione di tecniche di rilassamento individuali e di gruppo;
          </li>
          <li>
            • Nel corso del tirocinio ho avuto modo di seguire diversi pazienti oncologici, i loro caregivers e pazienti
            che stavano affrontando il lutto in seguito alla perdita di cari per malattia neoplastica.
          </li>
        </ul>
      </StyledArticle>
      {/*PROGETTO SUONI E IMMAGINI PER L'UCRAINA*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          PROGETTO SUONI e IMMAGINI per L'UCRAINA :: <small className='has-text-weight-light'> Gen - Mar 2023</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>Giuliano Accomazzi Coop.</p>
        <ul>
          <li>
            • Conduzione di interviste a sfollati di guerra;
          </li>
          <li>
            • Traduzione e creazione di sottotitoli di video proiettati nella metro del Gruppo Torinese Trasporti;
          </li>
          <li>
            • Eventi musicali Suoni e Immagini il 21 e 28 gennaio 2023 con il supporto di enti e associati : Mir Now,
            Fondazione San Paolo,
            Fondazione Cantabile, Corale Polifonica Sommariva Bosco, Consolato Onorario Città di Torino e GTT.
          </li>
        </ul>
      </StyledArticle>
      {/*EMERGENZA UCRAINA*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Attività Emergenza Ucraina ::{' '}
          <small className='has-text-weight-light'>da Marzo 2022 - in corso</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          <a href='https://casagiglio.org/'>Coordinamento Mir Now!</a>
          {' :: '}
          <small className='has-text-weight-light'>Torino, IT; Przemysl, PL; Lviv, UA; Kyiv, UA</small>
        </p>
        <p>
          <small>
            associazione Medici per i Diritti Umani ETS, Casa Giglio Onlus, Fondazione Paideia, Pausa Cafè Scs, Giuliano Accomazzi Coop., ,
            Casa Ukraina, A.P.R.A.G.I Gruppoanalisi, Estero
          </small>
        </p>
        <ul>
          <li>• Traduzioni e sostegno psicologico presso il centro di aiuti umanitari Tesco a Przemysl in Polonia;</li>
          <li>• Gestione e supporto per rifugiati;</li>
          <li>• Conduzione di colloqui individuali di sostegno psicologico e traduzione di sedute psicoterapiche in Italia;</li>
          <li>• Mediazione culturale e risoluzione di conflitti;</li>
          <li>• Traduzione di documentazioni mediche e organizzazione dell'assistenza sanitaria;</li>
          <li>• Evacuazione e accoglienza di rifugiati in Italia;</li>
          <li>• Consegna medicinali del Banco Farmaceutico agli ospedali in Ucraina;</li>
          <li>• Traduzione materiale formativo in ambito di pronto soccorso psicologico/psicotraumatologia per personale OSC locale;</li>
          <li>• Mediazione presso gruppi di sostegno psicologico per i profughi con esiti traumatici (con utilizzo di tecniche EMDR)</li>
          <li>• Organizzazioni di attività;</li>
        </ul>
      </StyledArticle>
      {/*INTERPRETARIATO*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Interpretariato, Traduzione e Mediazione :: <small className='has-text-weight-light'>dal 2011 - in
          corso</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>Freelance per Aziende e Privati</p>
        <ul>
          <li>
            • Mediazione per OR.S.A. Cooperativa Sociale. Nov 2022 - in corso;
          </li>
          <li>
            • Mediazione culturale e interpretariato. Casa Giglio Onlus, Torino. Apr 2022 - Dic 2022;
          </li>
          <li>
            • Interpretariato in simultanea. Ebincolf, Torino. Giu – Set 2022;
          </li>
          <li>
            • Traduttrice di cartelle cliniche e interprete durante visite mediche specialistiche in ospedali, lingue
            RU, UA, EN, IT. Fondazione Paideia, Torino. Apr 2022 – Ott 2022;
          </li>
          <li>
            • Interpretariato per cooperativa sociale Pausa Cafe` a Przemysl, PL. Mar 2022;
          </li>
          <li>
            • Traduzione di documenti EN>IT per privati ai fini di asseverazione. 2019;
          </li>
          <li>
            • Interpretariato e Traduzione durante trattative aziendali, istruzioni d'uso di giocattoli e siti internet
            per azienda di giocattoli ucraina UGEARS e il Centro Giochi
            Educativo di Torino. 2016;
          </li>
          <li>
            • Interprete simultanea RU-UA-IT presso buyers per azienda di vestiario Space 2000 spa. Milano, ITA. 2015;
          </li>
          <li>
            • Hostess di lingua tedesca e inglese per TUR IN TUR snc. Langhe, ITA. 2014;
          </li>
          <li>
            • Impartizione di lezioni private di italiano in presenza in Australia e a distanza in Russia. 2012-2016.
          </li>
        </ul>
      </StyledArticle>
      {/*SEMINARI*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          RELATRICE SU TEMATICHE PSICOLOGICHE E SOCIOLOGICHE:: {' :: '} <small className='has-text-weight-light'>2021 e
          2022</small> <small className='has-text-weight-light'></small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'></p>
        <ul>
          <li>• Seminario "Squid Frame: Effetto Lucifero e serialità televisiva". Dipartimento di Scienze Sociali
            Università degli Studi di Napoli Federico II. Giu 2022;
          </li>
          <li>• Seminario ”Il Sistema degli Oggetti”. Accademia delle Belle Arti di Napoli. Giu 2021.</li>
        </ul>
      </StyledArticle>
      {/*Protezione Civile*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Traduzione e Mediazione culturale presso la sede della Protezione Civile ::{' '}
          <small className='has-text-weight-light'>Apr 2022</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Protezione Civile Piemonte
          {' :: '}
          <small className='has-text-weight-light'>Torino, IT</small>
        </p>
        <ul>
          <li>• Accoglienza, traduzione documenti e raccolta delle storie personali dei rifugiati;</li>
          <li>• Traduzione visite mediche e profilassi sanitaria;</li>
          <li>• Mediazione culturale presso l'Ospedale San Giovanni Bosco di Torino.</li>
        </ul>
      </StyledArticle>
      {/*Supplenze*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Supplenze nella scuola primaria e dell'infanzia ::{' '}
          <small className='has-text-weight-light'>Set 2021 – Mag 2022</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          I.C. Volvera e I.C. Vinovo
          {' :: '}
          <small className='has-text-weight-light'>Provincia di Torino, IT</small>
        </p>
        <ul>
          <li>• Materie insegnate: italiano, storia, geografia, inglese, matematica, scienze e musica;</li>
          <li>• Insegnante di sostegno.</li>
        </ul>
      </StyledArticle>
      {/*Tirocinio post-lauream*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Tirocinio post-lauream per l'abilitazione alla professione ::{' '}
          <small className='has-text-weight-light'>2021-2022</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Attività di ricerca presso il Dipartimento di Psicologia dell'Università degli Studi di Torino
          {' :: '}
          <small className='has-text-weight-light'>Torino, IT</small>
        </p>
      </StyledArticle>
      {/*Servizio per Adolescenti*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Servizio per Adolescenti con difficoltà :: <small className='has-text-weight-light'>Apr – Set 2017</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Svolto presso privati affidatari
          {' :: '}
          <small className='has-text-weight-light'>Bergen e Oslo, NO</small>
        </p>
        <ul>
          <li>• lavoro in case-famiglia, referente: Robin Gjesdal +47 45236643</li>
        </ul>
      </StyledArticle>
      {/*Tirocinio Accademico*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Tirocinio accademico :: <small className='has-text-weight-light'>2016</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Associazione Choròs Comunità
          {' :: '}
          <small className='has-text-weight-light'>Torino, IT</small>
        </p>
        <ul>
          <li>
            • Teatro di Comunità: lavoro con gruppi di adolescenti con disabilità, adolescenti e adulti del CPIA e
            anziani;
          </li>
          <li>• Ricerca patrocinata dall'Università di Parigi e di Torino sul teatro sociale nel territorio.</li>
        </ul>
      </StyledArticle>
      {/*Tex Mex Eldorado*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Barmaid e Caposala :: <small className='has-text-weight-light'>2014 – 2017</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Tex Mex Eldorado
          {' :: '}
          <small className='has-text-weight-light'>Torino, IT</small>
        </p>
      </StyledArticle>

      {/*Australia*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Barmaid, Barback e Runner :: <small className='has-text-weight-light'>2012 – 2013</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Opera Bar, Bill and Toni's, Galleria d'arte Yellow House
          {' :: '}
          <small className='has-text-weight-light'>Sydney, AUSTRALIA</small>
        </p>
      </StyledArticle>



      {/*/!*Bill and Toni's*!/*/}
      {/*<StyledArticle>*/}
      {/*  <h4 className='title is-4 is-uppercase'>*/}
      {/*    Caposala :: <small className='has-text-weight-light'>Lug 2012 – Ago 2013</small>*/}
      {/*  </h4>*/}
      {/*  <p className='subtitle is-5 is-uppercase mb-1'>*/}
      {/*    Bill and Toni's*/}
      {/*    {' :: '}*/}
      {/*    <small className='has-text-weight-light'>Sydney, AUSTRALIA</small>*/}
      {/*  </p>*/}
      {/*</StyledArticle>*/}
      {/*/!*Opera Bar*!/*/}
      {/*<StyledArticle>*/}
      {/*  <h4 className='title is-4 is-uppercase'>*/}
      {/*    Barmaid e Barback :: <small className='has-text-weight-light'>Apr 2013 – Ago 2013</small>*/}
      {/*  </h4>*/}
      {/*  <p className='subtitle is-5 is-uppercase mb-1'>*/}
      {/*    Opera Bar*/}
      {/*    {' :: '}*/}
      {/*    <small className='has-text-weight-light'>Sydney, AUSTRALIA</small>*/}
      {/*  </p>*/}
      {/*</StyledArticle>*/}
      {/*/!*Yellow House*!/*/}
      {/*<StyledArticle>*/}
      {/*  <h4 className='title is-4 is-uppercase'>*/}
      {/*    Barmaid e Sala :: <small className='has-text-weight-light'>Lug 2012 – Apr 2013</small>*/}
      {/*  </h4>*/}
      {/*  <p className='subtitle is-5 is-uppercase mb-1'>*/}
      {/*    Yellow House*/}
      {/*    {' :: '}*/}
      {/*    <small className='has-text-weight-light'>Sydney, AUSTRALIA</small>*/}
      {/*  </p>*/}
      {/*</StyledArticle>*/}

      {/*Assistente all'infanzia*/}
      <StyledArticle>
        <h4 className='title is-4 is-uppercase'>
          Assistente all'infanzia :: <small className='has-text-weight-light'>2009 – 2011</small>
        </h4>
        <p className='subtitle is-5 is-uppercase mb-1'>
          Convitto Nazionale Umberto I{' :: '}
          <small className='has-text-weight-light'>Torino, IT</small>
        </p>
        <ul>
          <li>• animazione al summer-camp in lingua inglese;</li>
          <li>• animazione durante il soggiorno estivo dei ragazzi dell'istituto presso Igea Marina</li>
        </ul>
      </StyledArticle>
    </section>
  );
}
