import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import './design/Global.css';
import RoutePaths from './RoutePaths';
import HeroSection from './components/HeroSection';
import FormField from './components/FormField';

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection/>
      <FormField/>
      <RoutePaths />
    </Router>
  );
}

export default App;
