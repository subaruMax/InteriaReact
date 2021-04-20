import "./App.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
function App() {
  const [language, changeLanguage] = useState("en");
  return (
    <div className="App">
      <BrowserRouter basename="/interia_react/">
        <NavBar language={language} changeLanguage={changeLanguage} />
        <main>
          <Route exact path="/">
            <Redirect to="/about"></Redirect>
          </Route>
          <Route path="/about" render={() => <About />} />
          <Route path="/services" render={() => <Services />} />
          <Route path="/projects" render={() => <Projects />} />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
