import Login from './Components/Login/Login';
import {useState} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [user, setUser] = useState(sessionStorage.getItem('userLoggedIn') ? (sessionStorage.getItem('userLoggedIn')) : '');
  
  return (
    !user ?
    (<div className="App">
      <Login setUser= {setUser}/>
    </div>)
    :
    <Dashboard setUser= {setUser}/>
  );
}

export default App;
