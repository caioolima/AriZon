// src/components/Layout.js
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
