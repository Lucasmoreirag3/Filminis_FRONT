import React, { useState, useEffect } from 'react';
import { ChevronLeft, Heart, Edit2, Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovies, deleteMovieFromDB } from './MovieData';
import './Movie.css';

const Movie = ({ role }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  
 
  const [isFavorite, setIsFavorite] = useState(false);

  
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('luxfilms_favorites')) || [];
    if (savedFavorites.includes(parseInt(id))) {
      setIsFavorite(true);
    }
  }, [id]);

  const activeMovies = getMovies() || [];
  const foundMovie = activeMovies.find(m => m.id === parseInt(id));

  if (!foundMovie) {
    return (
      <div className="movie-page-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2>Filme não encontrado!</h2>
        <button className="movie-page-back-btn" onClick={() => navigate('/catalogo')}>Voltar ao catálogo</button>
      </div>
    );
  }

  const movie = {
    titulo: foundMovie.titulo.toUpperCase(),
    ano: foundMovie.ano,
    sinopse: foundMovie.sinopse,
    poster: foundMovie.poster,
    generos: [foundMovie.genero.toUpperCase()],
    diretor: foundMovie.diretor || 'Não Informado',
    elenco: foundMovie.elenco || 'Não Informado',
    produtora: foundMovie.produtora || 'Não Informado',
    pais: foundMovie.pais || 'Não Informado',
    linguagem: foundMovie.linguagem || 'Não Informado',
    trailer: foundMovie.trailer || ''
  };

  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja excluir "${foundMovie.titulo}" do catálogo?`)) {
      deleteMovieFromDB(id);
      alert('Filme removido com sucesso!');
      navigate('/catalogo');
    }
  };

  
  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('luxfilms_favorites')) || [];
    const movieId = parseInt(id);

    if (isFavorite) {
     
      const newFavorites = savedFavorites.filter(favId => favId !== movieId);
      localStorage.setItem('luxfilms_favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      
      savedFavorites.push(movieId);
      localStorage.setItem('luxfilms_favorites', JSON.stringify(savedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="movie-page-container">
      <button className="movie-page-back-btn" onClick={() => navigate('/catalogo')}>
        <ChevronLeft size={16} /> voltar
      </button>

      <div className="movie-main-section">
        <div className="movie-page-poster-box">
          <img src={movie.poster} alt={movie.titulo} />
        </div>

        <div className="movie-page-hero-info">
          <div className="movie-page-badges">
            {movie.generos.map((gen, idx) => (
              <span key={idx} className="movie-page-badge">{gen}</span>
            ))}
          </div>

          <h1 className="movie-page-title" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px' }}>
            {movie.titulo}
          </h1>
          <span className="movie-page-year-label">{movie.ano}</span>

          <p className="movie-page-synopsis">{movie.sinopse}</p>

          <div className="movie-page-action-bar">
            
            <button 
              className={`movie-page-favorite-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={toggleFavorite}
              style={{
                background: isFavorite ? 'rgba(204, 0, 0, 0.15)' : 'transparent',
                borderColor: isFavorite ? '#cc0000' : '#444444',
                color: isFavorite ? '#ff4444' : '#bbbbbb',
                padding: '0.6rem 1.2rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <Heart size={16} fill={isFavorite ? "#ff4444" : "none"} /> 
              {isFavorite ? 'FAVORITADO' : 'FAVORITAR'}
            </button>

            {role === 'admin' && (
              <>
                <button className="movie-page-edit-btn" onClick={() => navigate(`/editar-filme/${id}`)}>
                  <Edit2 size={14} /> EDITAR
                </button>
                <button className="movie-page-delete-btn" onClick={handleDelete}>
                  <Trash2 size={14} /> EXCLUIR
                </button>
              </>
            )}
          </div>

          {movie.trailer && (
            <div className="movie-page-trailer-box">
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', marginTop: '1.5rem', letterSpacing: '1px', color: '#fff' }}>ASSISTIR TRAILER</h3>
              <div className="trailer-iframe-container">
                <iframe
                  src={movie.trailer}
                  title={`Trailer de ${movie.titulo}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="movie-info-section">
        <div className="info-column-technical">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', fontWeight: '400', letterSpacing: '1px' }}>
            FICHA TÉCNICA
          </h2>
          
          <div className="tech-row"><span className="tech-label">DIRETOR</span><span className="tech-value font-highlight">{movie.diretor}</span></div>
          <div className="tech-row"><span className="tech-label">ELENCO</span><span className="tech-value font-highlight">{movie.elenco}</span></div>
          <div className="tech-row"><span className="tech-label">PRODUTORA</span><span className="tech-value">{movie.produtora}</span></div>
          <div className="tech-row"><span className="tech-label">PAÍS</span><span className="tech-value">{movie.pais}</span></div>
          <div className="tech-row"><span className="tech-label">LINGUAGEM</span><span className="tech-value">{movie.linguagem}</span></div>
        </div>
      </div>

      <div className="movie-page-footer-logo"><span>■</span> LuXfilms</div>
    </div>
  );
};

export default Movie;