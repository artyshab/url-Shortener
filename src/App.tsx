import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import './design/Global.css';
import RoutePaths from './RoutePaths';
import MidSection from './components/MidSection';

function App() {
  return (
    <Router>
      <Navbar />
      <MidSection/>
      <RoutePaths />
    </Router>
  );
}

export default App;
