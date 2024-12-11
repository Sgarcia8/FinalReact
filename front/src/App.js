import Login from './components/login/Login.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';

import './App.css';
import { useState } from 'react';

function App() {

  const [auth, setAuth] = useState(false)

  return (
    <div className="App">
      {auth ? <Dashboard auth={setAuth}/> : <Login auth={setAuth}/>}
    </div>
  );
}

export default App;
