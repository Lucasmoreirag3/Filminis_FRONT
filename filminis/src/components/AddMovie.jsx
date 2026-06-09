import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addMovieToDB, addPendingMovie } from './MovieData'; 
import './AddMovie.css';

const AddMovie = ({ role }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '',
    ano: '',
    genero: '',
    sinopse: '',
    poster: '',
    trailer: '',
    diretor: '',
    produtora: '',
    atores: '',
    pais: '',
    techAno: '',
    idioma: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const movieData = {
      titulo: formData.titulo,
      ano: parseInt(formData.ano),
      genero: formData.genero,
      sinopse: formData.sinopse,
      poster: formData.poster || 'https://via.placeholder.com/300x450?text=Sem+Poster',
      trailer: formData.trailer,
      diretor: formData.diretor,
      produtora: formData.produtora,
      elenco: formData.atores,
      pais: formData.pais,
      linguagem: formData.idioma
    };

    
    if (role === 'admin') {
      addMovieToDB(movieData);
      alert('Filme adicionado diretamente ao catálogo oficial!');
    } else {
      addPendingMovie(movieData);
      alert('Seu filme foi enviado para análise! Assim que um administrador aprovar, ele aparecerá no catálogo.');
    }

    navigate('/catalogo');
  };

  return (
    <div className="addmovie-container">
      <div className="addmovie-content">
        <span className="addmovie-tag">{role === 'admin' ? 'MODO ADMIN' : 'SUGESTÃO DE USUÁRIO'}</span>
        <h1 className="addmovie-main-title">
          {role === 'admin' ? 'ADICIONAR AO CATÁLOGO' : 'SUGERIR NOVO FILME'}
        </h1>

        <div className="addmovie-card">
          <form onSubmit={handleSubmit}>
            
            <div className="addmovie-input-group">
              <label>* TÍTULO</label>
              <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
            </div>

            <div className="addmovie-row">
              <div className="addmovie-input-group half">
                <label>ANO</label>
                <input type="number" name="ano" value={formData.ano} onChange={handleChange} required />
              </div>
              <div className="addmovie-input-group half">
                <label>GÊNERO (EX: DRAMA , SUSPENSE)</label>
                <input type="text" name="genero" value={formData.genero} onChange={handleChange} required />
              </div>
            </div>

            <div className="addmovie-input-group">
              <label>SINOPSE</label>
              <textarea name="sinopse" rows="6" value={formData.sinopse} onChange={handleChange} required></textarea>
            </div>

            <div className="addmovie-row">
              <div className="addmovie-input-group half">
                <label>URL DO PÔSTER</label>
                <input type="url" name="poster" value={formData.poster} onChange={handleChange} />
              </div>
              <div className="addmovie-input-group half">
                <label>URL DO TRAILER (YOUTUBE EMBED)</label>
                <input type="url" name="trailer" value={formData.trailer} onChange={handleChange} placeholder="Ex: https://www.youtube.com/embed/..." />
              </div>
            </div>

            <h2 className="addmovie-section-title">FICHA TÉCNICA</h2>

            <div className="addmovie-row">
              <div className="addmovie-input-group half">
                <label>DIRETOR</label>
                <input type="text" name="diretor" value={formData.diretor} onChange={handleChange} />
              </div>
              <div className="addmovie-input-group half">
                <label>PRODUTORA</label>
                <input type="text" name="produtora" value={formData.produtora} onChange={handleChange} />
              </div>
            </div>

            <div className="addmovie-input-group">
              <label>ATORES (SEPARADOS POR VÍRGULA)</label>
              <input type="text" name="atores" value={formData.atores} onChange={handleChange} />
            </div>

            <div className="addmovie-row-three">
              <div className="addmovie-input-group third">
                <label>PAÍS</label>
                <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
              </div>
              <div className="addmovie-input-group third">
                <label>ANO</label>
                <input type="number" name="techAno" value={formData.techAno} onChange={handleChange} />
              </div>
              <div className="addmovie-input-group third">
                <label>IDIOMA</label>
                <input type="text" name="idioma" value={formData.idioma} onChange={handleChange} />
              </div>
            </div>

            <div className="addmovie-action-buttons">
              <button type="submit" className="addmovie-submit-btn">
                {role === 'admin' ? 'ENVIAR FILME' : 'ENVIAR SUGESTÃO'}
              </button>
              <button type="button" className="addmovie-cancel-btn" onClick={() => navigate('/catalogo')}>Cancelar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;