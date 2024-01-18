import './App.css';
import Homepage from './Homepage';
import Authentification from './components/authentification/Authentification';
import {useSelector} from "react-redux"

function App() {
  const user = useSelector(state => state.data.user.user)

  return (
    <div className="app">
      {user ? (<Homepage/>) : (<Authentification/>)}
    </div>
  );
}

export default App;
