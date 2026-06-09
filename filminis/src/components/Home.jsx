import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import './Home.css';

const Home = ({ role }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="hero-main-title">
          TODA A SUA COLEÇÃO <br />
          <span>EM UM SÓ LUGAR.</span>
        </h1>
        <p className="hero-subtext">
          Adicione, organize, busque e descubra filmes em uma interface moderna feita para cinéfilos. 
          Gerencie pôsteres, elencos, diretores e mais.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-explorar" onClick={() => navigate('/catalogo')}>
            EXPLORAR CATÁLOGO &rarr;
          </button>
          
          
          {role === 'admin' && (
            <button className="btn-adicionar-home" onClick={() => navigate('/adicionar-filme')}>
              <Plus size={16} /> ADICIONAR FILME
            </button>
          )}
        </div>
      </div>
      
      <div className="home-footer-logo">
        <span>■</span> LuXfilms
      </div>
    </div>
  );
};

export default Home;