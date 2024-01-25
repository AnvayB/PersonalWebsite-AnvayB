import TopBar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Worksog from './components/works/Works-og'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './App.scss'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">

        <Intro />
        {/* <Portfolio /> */}
        <Works />
        {/* <Worksog /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}

      </div>

    </div>
  );
}

export default App;
