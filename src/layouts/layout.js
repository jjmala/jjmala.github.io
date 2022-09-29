import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import 'bulma/css/bulma.css';
import Footer from '../components/footer';
import Header from '../components/header';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    @media print {
      font-size: 35% !important;
    }
  }

  body {
    padding-top: 3rem;
    background: #3273DC;
  }

  .print-hidden {
    @media print {
      display: none;
    }
  }

  .print-only {
    display: none;
    @media print {
      display: block;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
    .section {
      border-top: none !important;
    }
    h2.title {
      text-decoration: underline;
    }
  }
`;

const StyledLayout = styled.div`
  background: linear-gradient(141deg, #f5fafc 0%, #e1f0f6 100%);
  .container {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
