import './App.css';
import React, { useState } from 'react';

function App() {

  const [ email, setEmail] = useState('');

  function cadastrarEmail() {
    localStorage.setItem('emailCadastro', JSON.stringify(email));
  }

  return (
    <div className="App">
      <h1>E-commerce</h1>

      <input type="email" placeholder="Digite seu email"  value={email} onChange={event => setEmail(event.target.value)} />
      <button type="button" onClick={cadastrarEmail}>Pesquisar</button>
    </div>
  );
}

export default App;
