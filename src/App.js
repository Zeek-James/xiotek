import React from "react";
import Header from "./components/Header";
import "./App.css";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Portfolio />
      <FAQs />
      <Contact />
    </>
  );
};

export default App;
