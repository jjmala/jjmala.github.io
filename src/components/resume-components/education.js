import React from 'react';

export default function Education() {
  return (
    <section className="section">
      <h2 className="title is-2 is-size-3-mobile">Formazione</h2>
      <article>
        <p>
          <strong>Master di II livello</strong>
          {' :: '}
          <small className="has-text-weight-light">2022 - in corso</small>
          <br />
          La relazione che cura
          <br />
          <small>Istituto EMMECI s.c. Torino, Italia</small>
        </p>
        <p>
          <strong>Specializzazione in psicoterapia relazionale e sistemica</strong>
          {' :: '}
          <small className="has-text-weight-light">2022 – in corso</small>
          <br />
          <small>Istituto EMMECI s.c. Torino, Italia</small>
        </p>
        <p>
          <strong>Laurea Magistrale | Psicologia Clinica | 107/110</strong>
          {' :: '}
          <small className="has-text-weight-light">2017 – 2020</small>
          <br />
          <small>Università degli Studi di Torino Torino, Italia</small>
          <br />
          <small>
            Tesi di ricerca: progettazione, raccolta dati, analisi e validazione test sulla simulazione dei sintomi
            post-traumatici da stress in ambito peritale, traduzione in tre lingue
            <br />
            <a href="https://malingering.netlify.app">Link</a>
          </small>
        </p>
        <p>
          <strong>Laurea Triennale | Scienze e Tecniche Psicologiche</strong>
          {' :: '}
          <small className="has-text-weight-light">2013 – 2016</small>
          <br />
          <small>Università degli Studi di Torino Torino, Italia</small>
        </p>
        <p>
          <strong>Anno Accademico | Scienze Internazionali, dello Sviluppo e della Cooperazione</strong>
          {' :: '}
          <small className="has-text-weight-light">2011 – 2012</small>
          <br />
          <small>Università degli Studi di Torino Torino, Italia</small>
        </p>
        <p>
          <strong>Diploma | Liceo Classico Europeo</strong>
          {' :: '}
          <small className="has-text-weight-light">2006 – 2011</small>
          <br />
          <small>Convitto Nazionale Umberto I, Torino Torino, Italia</small>
        </p>
      </article>
    </section>
  );
}