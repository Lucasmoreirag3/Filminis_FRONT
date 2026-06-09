import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPendingMovies, approveMovie, rejectMovie } from './MovieData';
import { CheckCircle, XCircle, Calendar } from 'lucide-react';
import './movieList.css'; 
const AdminApprovals = ({ role }) => {
  const navigate = useNavigate();
  const [pendingMovies, setPendingMovies] = useState([]);

  useEffect(() => {
    setPendingMovies(getPendingMovies());
  }, []);

  if (role !== 'admin') {
    return (
      <div className="catalog-wrapper" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{ color: '#cc0000', fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem' }}>ACESSO RESTRITO</h1>
      </div>
    );
  }

  const handleApprove = (id) => {
    approveMovie(id);
    alert('Filme aprovado e enviado ao catálogo!');
    setPendingMovies(getPendingMovies()); 
  };

  const handleReject = (id) => {
    if (window.confirm('Tem certeza que deseja rejeitar e apagar esta sugestão?')) {
      rejectMovie(id);
      setPendingMovies(getPendingMovies());
    }
  };

  return (
    <div className="catalog-wrapper">
      <div className="catalog-top-row">
        <span className="catalog-section-indicator">ÁREA DO ADMINISTRADOR</span>
        <button className="catalog-add-movie-btn" onClick={() => navigate('/catalogo')} style={{ backgroundColor: '#333' }}>
          VOLTAR AO CATÁLOGO
        </button>
      </div>

      <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', marginBottom: '2rem' }}>
        APROVAÇÕES PENDENTES
      </h1>

      {pendingMovies.length === 0 ? (
        <p style={{ color: '#888' }}>Não há nenhuma sugestão de filme no momento.</p>
      ) : (
        <div className="catalog-movies-grid">
          {pendingMovies.map((movie) => (
            <div key={movie.id} className="figma-movie-card">
              <div className="figma-poster-box">
                <img src={movie.poster} alt={movie.titulo} />
                <span className="figma-genre-badge">{movie.genero.toUpperCase()}</span>
              </div>
              <div className="figma-movie-details">
                <h3>{movie.titulo}</h3>
                <div className="card-sub-info">
                  <Calendar size={13} /><span>{movie.ano}</span>
                </div>
                
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <button 
                    onClick={() => handleApprove(movie.id)}
                    style={{ flex: 1, backgroundColor: '#008800', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.3rem' }}>
                    <CheckCircle size={14} /> APROVAR
                  </button>
                  <button 
                    onClick={() => handleReject(movie.id)}
                    style={{ flex: 1, backgroundColor: '#cc0000', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.3rem' }}>
                    <XCircle size={14} /> REJEITAR
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminApprovals;