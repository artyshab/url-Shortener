import './design/Global.scss';
import { Routes, Route } from 'react-router-dom'; // Correct import
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Resources from './pages/Resources';

function RoutePaths() {
  const routes = [
    { path: '/pricing', element: <Pricing /> },
    { path: '/features', element: <Features /> },
    { path: '/resources', element: <Resources /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RoutePaths;
