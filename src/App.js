import './style/style.css'

import LandingPage from './pages/Landing';
import AboutPage from './pages/About'; 
import HackathonPage from './pages/Hackathon';
import HackathonMaterialsPage from './pages/HackathonMaterials';

import HeadTags from './components/HeadTags';
import Footer from './components/Footer';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeadTags />
      <Router>
        <Routes>
          <Route path="/bcii/" element={<LandingPage />} />
          <Route path="/bcii/about" element={<AboutPage />} />
          <Route path="/bcii/hackathon" element={<HackathonPage />} />
          <Route path="/bcii/hackathon-materials" element={<HackathonMaterialsPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
