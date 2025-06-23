import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contacts from './Components/Contacts'

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
