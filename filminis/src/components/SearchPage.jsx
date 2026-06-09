import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { getMovies } from './movieData'; 
import './SearchPage.css';

const SearchPage = () => {
  const [globalQuery, setGlobalQuery] = useState('');

  // Puxa os filmes atuais do localStorage (incluindo os novos adicionados pelo admin)
  const activeMovies = getMovies() || [];

  // Busca abrangente por título ou gênero
  const results = activeMovies.filter(movie => 
    globalQuery !== '' && (
      movie.titulo.toLowerCase().includes(globalQuery.toLowerCase()) ||
      movie.genero.toLowerCase().includes(globalQuery.toLowerCase())
    )
  );

  return (
    <div className="searchpage-container">
      <div className="searchpage-content">
        <span className="searchpage-indicator">PESQUISAR</span>
        <h1 className="searchpage-main-title">O QUE VOCÊ QUER VER?</h1>
        
        <div className="searchpage-large-box">
          <Search size={22} className="large-box-icon" />
          <input 
            type="text" 
            placeholder="Título, diretor, ator ou gênero..." 
            value={globalQuery}
            onChange={(e) => setGlobalQuery(e.target.value)}
          />
        </div>

        {/* Exibição dos resultados encontrados abaixo da barra gigante */}
        {results.length > 0 && (
          <div className="searchpage-results-grid">
            {results.map(movie => (
              <div key={movie.id} className="search-result-item-card">
                <img src={movie.poster} alt={movie.titulo} />
                <h4>{movie.titulo}</h4>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="searchpage-footer-logo">
        <span>■</span> LuXfilms
      </div>
    </div>
  );
};

export default SearchPage;