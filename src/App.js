import './style/style.css'

import LandingPage from './pages/Landing';
import AboutPage from './pages/About'; 
import HackathonPage from './pages/Hackathon';

import HeadTags from './components/HeadTags';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeadTags />
      <Router>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hackathon" element={<HackathonPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
