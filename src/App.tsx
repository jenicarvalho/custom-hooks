import React from 'react';
import useLogged from './hooks/useLogged'
import { Redirect } from 'react-router-dom'

function App() {

  const isLogged = useLogged()

  return (
    <div className="App">
      { isLogged ? <p>Olá Jeniffer</p> : <p>Olá visitante</p> }
      { isLogged ? <Redirect to="/dashboard" /> : <Redirect to="/home" /> }
    </div>
  );
}

export default App;
