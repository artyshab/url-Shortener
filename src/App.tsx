import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import './design/Global.css';
import RoutePaths from './RoutePaths';

function App() {
  return (
    <Router>
      <Navbar />
      <RoutePaths />
    </Router>
  );
}

export default App;
