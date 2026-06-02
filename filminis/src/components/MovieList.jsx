import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { allMovies } from './MovieData'; // Puxando os 20 filmes reais
import './movieList.css';

const MovieList = () => {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Lógica de busca e filtros dinâmicos
  const filteredMovies = allMovies.filter(movie => {
    const matchesTitle = movie.titulo.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === '' || movie.genero === selectedGenre;
    const matchesYear = selectedYear === '' || movie.ano.toString() === selectedYear;
    return matchesTitle && matchesGenre && matchesYear;
  });

  return (
    <div className="catalog-wrapper">
      <div className="catalog-top-row">
        <span className="catalog-section-indicator">CATÁLOGO</span>
        <button className="catalog-add-movie-btn">
          <Plus size={16} /> ADICIONAR FILME
        </button>
      </div>

      {/* Barra de pesquisa e Filtros idênticos ao Figma */}
      <div className="catalog-filter-bar">
        <div className="catalog-search-input-box">
          <Search size={18} className="search-box-icon" />
          <input 
            type="text" 
            placeholder="Buscar por título..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="filter-dropdown">
          <option value="">Todos os Gêneros</option>
          <option value="Ação">Ação</option>
          <option value="Drama">Drama</option>
          <option value="Terror">Terror</option>
          <option value="Animação">Animação</option>
          <option value="Ficção Científica">Ficção Científica</option>
        </select>

        <input 
          type="number" 
          placeholder="Ano" 
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="filter-year-input"
        />
      </div>

      {/* Grid de Filmes */}
      <div className="catalog-movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="figma-movie-card">
            <div className="figma-poster-box">
              <img src={movie.poster} alt={movie.titulo} />
              <span className="figma-genre-badge">{movie.genero.toUpperCase()}</span>
            </div>
            <div className="figma-movie-details">
              <h3>{movie.titulo}</h3>
              <div className="card-sub-info">
                <span>📅 {movie.ano}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;