import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { BmiCalculator } from './components/BmiCalculator';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Skills/>
      <BmiCalculator/>
    </div>
  );
}

export default App;
