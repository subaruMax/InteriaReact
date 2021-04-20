import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import About from "./components/About/About";
function App() {
  const [language, changeLanguage] = useState("en");
  return (
    <div className="App">
      <BrowserRouter basename="/interia_react/">
        <NavBar language={language} changeLanguage={changeLanguage} />
        <main>
          <Route exact path="/"></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services" render={() => <Services />}></Route>
          <Route path="/projects"></Route>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
