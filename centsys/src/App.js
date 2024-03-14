// import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter,Route } from 'react-router-dom'


import './index.css'

function App() {
  return (
    <div>
    <Home/>
    <BrowserRouter>
    <Header/>
    
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
