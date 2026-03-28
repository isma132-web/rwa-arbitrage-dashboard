import React from 'react';
import { Web3Modal } from '@web3modal/react';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from './theme';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Head>
        <title>Your App Title</title>
        <meta name="description" content="Your App Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Web3Modal>
        {children}
      </Web3Modal>
    </ThemeProvider>
  );
};

export default Layout;