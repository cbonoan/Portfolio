import React from 'react';
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Connect from './Components/Connect';

function App() {
  setTimeout(() => {
    document.body.className = "";
  }, 500);

  return (
    <div>
      <Nav/>
      <HomePage/>
      <About/>
      <Skills/>
      <Projects/>
      <Connect/>
    </div>
  );
}

export default App;
