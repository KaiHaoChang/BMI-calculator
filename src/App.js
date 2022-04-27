import React from "react";
import Nav from "./components/Nav";
import SectionLeft from './components/SectionLeft';
import SectionRight from './components/SectionRight';
import Footer from "./components/Footer";
import './style/style.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <body class='mainSection'>  
        <SectionLeft />
        <SectionRight />
      </body>
      <Footer />
    </div>
  );
}

export default App;
