import React from 'react';
import useMetadata from '../../hooks/useMetadata';
import useResponsive from '../../hooks/useResponsive';

export default function Informations() {
  const { contacts, social } = useMetadata();
  const { isPrint } = useResponsive();
  return (
    <section className="section">
      <h2 className="title is-2 is-size-3-mobile">Informazioni</h2>
      <article>
        <p>
          Telefono&nbsp;
          <a href={`tel:${contacts.phone}`}>
            <strong>{contacts.phone}</strong>
          </a>
          <br />
          Email&nbsp;
          <a href={`mailto:${contacts.email}`}>
            <strong>{contacts.email}</strong>
          </a>
          <br />
          Sito web&nbsp;
          <a href={contacts.website}>
            <strong>{contacts.website}</strong>
          </a>
          <br />
          Ricerca&nbsp;
          <a href={contacts.project} rel="noreferrer" target="_blank">
            <strong>{isPrint ? contacts.project : 'Malingering'}</strong>
          </a>
          <br />
          Linkedin&nbsp;
          <a href={social.linkedin} rel="noreferrer" target="_blank">
            <strong>Link</strong>
          </a>
          <br />
          Partita IVA&nbsp;
            <strong>IT13021980019</strong>
          <br />
          Ordine Psicologi del Piemonte&nbsp;
            <strong>n. 10535</strong>
          <br />
          Studio&nbsp;
          <strong>Via Cialdini 15, 10138, Torino</strong>
          <br />
          Residente a&nbsp;
            <strong>Torino</strong>
          <br />
          Nata a&nbsp;
            <strong>Odessa (UA), 21 aprile 1992</strong>
        </p>
      </article>
    </section>
  );
}
