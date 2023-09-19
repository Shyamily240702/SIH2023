import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import './App.css'; 
import Header from './component/Header';
import Services from './component/Services';
import Home from './component/Home';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';
import EmergencyInformation from './component/EmergencyInformation';
function App() {
  return (
    <div className="App">
   <Router>
			<Header />
			<Routes>
				<Route exact path='/'  element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/services' element={<Services />} />
       <Route path='/aboutus' element={<AboutUs />} />
       <Route path='/emergency' element={<EmergencyInformation />} /> 
			</Routes>
		</Router>
    </div>
  );
}

export default App;