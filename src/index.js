import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import SimpleReactLightbox from 'simple-react-lightbox'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru', 'uz'],
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: "/assets/locales/languages/translation.json"
    },
  });


const loading = (
  <div style={{ position: 'fixed', backgroundColor: '#fff', display: 'flex', width: '100%', height: '100%', justifyContent: "center", alignItems: "center" }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)


ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <SimpleReactLightbox>
        {/* <SingleImages /> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SimpleReactLightbox>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);