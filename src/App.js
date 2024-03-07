import './style/style.css'
import LandingPage from './pages/Landing';
import HeadTags from './components/HeadTags';

function App() {
  return (
    <div className="App">
      <HeadTags />
    
      <LandingPage />
    </div>
  );
}

export default App;
