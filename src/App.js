import './App.css';

import NavBar from './components/navBar'

import Home from './pages/home';
import Expertise from './pages/expertise';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Expertise/>
      <Portfolio/>
      <About/>
      <Contact />
    </div>
  );
}

export default App;
