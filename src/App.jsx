import './App.css'
import { useRef } from 'react';
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Projets from './pages/projets/Projets';
import Experiences from './pages/experiences/Experiences';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projetsRef = useRef(null);
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='App'>
      <Sidebar homeRef={homeRef} aboutRef={aboutRef} projetsRef={projetsRef} educationRef={educationRef} experiencesRef={experiencesRef} contactRef={contactRef} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projetsRef}><Projets /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={experiencesRef}><Experiences /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  )

}

export default App;