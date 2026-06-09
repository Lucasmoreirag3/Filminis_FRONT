import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMovies } from './MovieData'; 
import './movieList.css';
import { Search, Plus, Calendar, CheckSquare, Heart } from 'lucide-react'; 

const MovieList = ({ role }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [favorites, setFavorites] = useState([]); 

  
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('luxfilms_favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const activeMovies = getMovies() || [];

  // Filtra os filmes pela busca, gênero e ano
  let filteredMovies = activeMovies.filter(movie => {
    const matchesTitle = movie.titulo.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === '' || movie.genero === selectedGenre;
    const matchesYear = selectedYear === '' || movie.ano.toString() === selectedYear;
    return matchesTitle && matchesGenre && matchesYear;
  });

  
  filteredMovies.sort((a, b) => {
    const aIsFav = favorites.includes(a.id);
    const bIsFav = favorites.includes(b.id);
    
    if (aIsFav && !bIsFav) return -1; 
    if (!aIsFav && bIsFav) return 1;  
    return 0; 
  });

  return (
    <div className="catalog-wrapper">
      <div className="catalog-top-row">
        <span className="catalog-section-indicator">CATÁLOGO</span>
        
        {role === 'admin' && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="catalog-add-movie-btn" style={{ backgroundColor: '#222' }} onClick={() => navigate('/aprovacoes')}>
              <CheckSquare size={16} /> FILMES PENDENTES
            </button>
            <button className="catalog-add-movie-btn" onClick={() => navigate('/adicionar-filme')}>
              <Plus size={16} /> ADICIONAR FILME
            </button>
          </div>
        )}

        {role !== 'admin' && role !== null && (
          <button className="catalog-add-movie-btn" onClick={() => navigate('/adicionar-filme')}>
            <Plus size={16} /> SUGERIR FILME
          </button>
        )}
      </div>

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
          <option value="Romance">Romance</option>
          <option value="Comédia">Comédia</option>
          <option value="Musical">Musical</option>
        </select>

        <input 
          type="number" 
          placeholder="Ano" 
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="filter-year-input"
        />
      </div>

      <div className="catalog-movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="figma-movie-card" onClick={() => navigate(`/filme/${movie.id}`)} style={{ cursor: 'pointer' }}>
            <div className="figma-poster-box">
              <img src={movie.poster} alt={movie.titulo} />
              <span className="figma-genre-badge">{movie.genero.toUpperCase()}</span>
              
             
              {favorites.includes(movie.id) && (
                <div className="figma-favorite-badge">
                  <Heart size={16} fill="#ff4444" color="#ff4444" />
                </div>
              )}

            </div>
            <div className="figma-movie-details">
              <h3>{movie.titulo}</h3>
              <div className="card-sub-info">
                <Calendar size={13} />
                <span>{movie.ano}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;