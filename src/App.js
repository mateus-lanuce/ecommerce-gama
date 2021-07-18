import './App.css';
import maca from'./images/maca.jpg';
import tenis from './images/tenis.jpg';
import macbook from './images/macbook.jpg';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [ email, setEmail] = useState('');

  function cadastrarEmail() {
    localStorage.setItem('emailCadastro', JSON.stringify(email));
  }

  return (
    <div className="App">
      <header className="header">
        <h1>E-commerce fake</h1>

        <div className="input-header">
          <h3>receba as nossas promoções: </h3>
          <input type="email" placeholder="Digite seu email"  value={email} onChange={event => setEmail(event.target.value)} />
          <button type="button" onClick={cadastrarEmail}>Enviar</button>
        </div>
      </header>

      <h1>Veja aqui as nossas promoções</h1>

      <div className="container">
        <div className="produtos">
          <div className="imagem">
            <img width="250" src={maca} alt="maça" />
          </div>
          <div className="texto-produto-titulo">Maça</div>
          <div className="texto-produto-descricao">Mussum Ipsum, cacilds vidis litro abertis</div>
          <div className="texto-preco">R$ 5.00</div>
        </div>

        <div className="produtos">
          <div className="imagem">
            <img width="250" src={tenis} alt="Fundo foto criado por mrsiraphol - br.freepik.com" />
          </div>
          <div className="texto-produto-titulo">tênis</div>
          <div className="texto-produto-descricao">Mussum Ipsum, cacilds vidis litro abertis</div>
          <div className="texto-preco">R$ 50.00</div>
        </div>

        <div className="produtos">
          <div className="imagem">
            <img width="250" src={macbook} alt="macbook" />
          </div>
          <div className="texto-produto-titulo">macbook</div>
          <div className="texto-produto-descricao">Mussum Ipsum, cacilds vidis litro abertis</div>
          <div className="texto-preco">R$ 5000.00</div>
        </div>

        <div className="produtos">
          <div className="imagem">
            <img width="250" src={tenis} alt="Fundo foto criado por mrsiraphol - br.freepik.com" />
          </div>
          <div className="texto-produto-titulo">tênis</div>
          <div className="texto-produto-descricao">Mussum Ipsum, cacilds vidis litro abertis</div>
          <div className="texto-preco">R$ 100.00</div>
        </div>
      </div>
    </div>
  );
}

export default App;
