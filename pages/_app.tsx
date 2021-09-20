import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0">
        <NavBar />
      </div>

      <div className="max-w-4xl mx-auto my-6 w-11/12 md:w-3/4">
        <Component {...pageProps} />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
export default MyApp;
