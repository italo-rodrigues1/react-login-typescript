import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth/AuthContext';
import RoutesView from './routes';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    await auth.signout();
    navigate('/');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Seja bem vindo ao React Auth
        </h1>
        <nav>
          <Link style={{margin:'10px'}}to="/">Home</Link>
          <Link style={{margin:'10px'}} to="/private">Página Privada</Link>
         {auth.user && <button type="button" onClick={handleLogout}>Sair</button>} 
        </nav>
      </header>
      <hr/>
      <RoutesView/>
    </div>
  );
}

export default App;
