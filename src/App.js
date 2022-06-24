import React from "react";
import Header from "./components/Header";
import "./App.css";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <FAQs />
      <Contact />
    </>
  );
};

export default App;
