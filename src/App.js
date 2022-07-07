import React from "react";
import Header from "./components/Header";
import "./App.css";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Team from "./components/Team";
import About from "./components/About";
import Upload from "./components/Upload";
import Mission from "./components/Mission";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Mission />
      <Contact />
      <Upload />
    </>
  );
};

export default App;
