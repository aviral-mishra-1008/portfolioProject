import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certificaion from "./components/Certificaion.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Certificaion/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
