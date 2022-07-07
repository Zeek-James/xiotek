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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
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
