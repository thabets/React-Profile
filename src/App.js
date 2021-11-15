import React, { useState } from "react";

import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Portfolio from "./components/Portfolio/index";
import ContactForm from "./components/Contact/index";
import Experience from "./components/Experience/index";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  const [home, setHome] = useState("about");
  const renderTab = () => {
    switch (home) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "experience":
        return <Experience />;
      case "contact":
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav home={home} setHome={setHome}></Nav>
      <main>{renderTab()}</main>
      <Footer home={home} setHome={setHome}></Footer>
    </div>
  );
}

export default App;
