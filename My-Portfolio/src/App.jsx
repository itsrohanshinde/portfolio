import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts'

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path= "/" element = { <Home/>} />
          <Route path= "/about" element = { <About/>} />
          <Route path= "/projects" element = { <Projects/>} />
          <Route path= "/skills" element = { <Skills/>} />
          <Route path= "/contacts" element = { <Contacts/>} />
        </Routes>
    </>
  )
}

export default App
