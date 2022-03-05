
import { RequireAuth } from './context/Auth/RequireAuth';
import { Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import Private from'./pages/Private';

const RoutesView = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
    </Routes>
  );
}

export default RoutesView;