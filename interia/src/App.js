import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/interia_react/">
        <NavBar />
        <main>
          <Route exact path="/"></Route>
          <Route path="/about"></Route>
          <Route path="/services" render={() => <Services />}></Route>
          <Route path="/projects"></Route>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
