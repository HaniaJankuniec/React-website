import './App.css';
import { NavBar } from './pages/NavBar';
import { Banner } from './pages/Banner';
import { BmiCalculator } from './pages/BmiCalculator';
import { Skills } from './pages/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
		  <BrowserRouter>
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
		</BrowserRouter>
    </div>
  );
}

export default App;
