import './App.css';
import { NavBar } from './pages/NavBar';
import { Banner } from './pages/Banner';
import { BmiCalculator } from './pages/BmiCalculator';
import { Skills } from './pages/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
		  <HashRouter basename='/react-website'>
			  <nav>
				  <NavBar/>
          <Banner/>
			  </nav>
			<main>
				<Routes>
					<Route path="/" element={<Skills />} />
					<Route path="/bmiCalculator" element={<BmiCalculator />} />
				</Routes>
			</main>
		</HashRouter>
    </div>
  );
}

export default App;
