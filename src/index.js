import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/global.css';
import App from './App';

import Filler from "./sections/Filler";
import Footer from './sections/Footer';

// import Navigator from './components/Navigator';
// import Header from './sections/Header';
import reportWebVitals from './reportWebVitals';
import About from "./sections/About";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    {/* --- LANDING PAGE STARTER */}
    <App />

    
    {/* --- VIDEO */}
    <Filler />
    <About />
    <Footer />
    </>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
