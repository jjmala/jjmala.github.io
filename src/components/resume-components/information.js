import React from 'react';
import useMetadata from '../../hooks/useMetadata';
import useResponsive from '../../hooks/useResponsive';

export default function Information() {
  const { contacts } = useMetadata();
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
          Progetto&nbsp;
          <a href={contacts.project} rel="noreferrer" target="_blank">
            <strong>{isPrint ? contacts.project : 'Malingering'}</strong>
          </a>
        </p>
      </article>
    </section>
  );
}
