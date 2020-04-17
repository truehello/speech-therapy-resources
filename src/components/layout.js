import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
        {children}
      </main>

      <Footer />
     
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
