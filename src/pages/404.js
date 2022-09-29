import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';
import Seo from '../components/seo';

const StyledContainer = styled.div`
  h1.not-found {
    font-size: 12rem;
  }
  p {
    font-size: 2rem;
  }
`;

const NotFoundPage = () => (
  <StyledContainer>
    <Layout>
      <Seo title="404: Not found" />
      <div className="has-text-centered">
        <h1 className="title is-1 not-found">404 =(</h1>
        <p>
          You just hit a route that doesn&#39;t exist... the sadness. <Link to="/">Home page</Link>
        </p>
      </div>
    </Layout>
  </StyledContainer>
);

export default NotFoundPage;
