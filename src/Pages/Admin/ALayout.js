// ALayout.js

import React from 'react';
import { Outlet } from 'react-router-dom';


// Imports spécifiques à la mise en page
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';

const ALayout = () => {
  // Vous pouvez également importer les fichiers CSS spécifiques ici si nécessaire

  return (
    <html
      lang="en"
      className="light-style layout-menu-fixed"
      dir="ltr"
      data-theme="theme-default"
      data-assets-path="../assets/"
      data-template="vertical-menu-template-free"
    >
      <head>
        {/* ... (autres éléments head) */}
        {/* Import des fichiers CSS additionnels */}
        <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

        {/* Core CSS */}
        <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
        <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
        <link rel="stylesheet" href="../assets/css/demo.css" />

        {/* ... (autres éléments head) */}
      </head>
      <body>
        <div className="ALayout">
          <Header />
          <div id="admin">
            
            <div id="admin_body">
              <Outlet />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ALayout;
