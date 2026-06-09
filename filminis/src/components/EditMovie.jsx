import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovies, updateMovieInDB } from './MovieData';
import './AddMovie.css';

const EditMovie = ({ role }) => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    const activeMovies = getMovies() || [];
    const found = activeMovies.find(m => m.id === parseInt(id));
    if (found) {
      setFormData({
        titulo: found.titulo,
        ano: found.ano,
        genero: found.genero,
        sinopse: found.sinopse,
        poster: found.poster,
        trailer: found.trailer || '', 
        diretor: found.diretor || '',
        produtora: found.produtora || '',
        atores: found.elenco || '',
        pais: found.pais || '',
        techAno: found.ano || '',
        idioma: found.linguagem || ''
      });
    }
  }, [id]);

  if (role !== 'admin') {
    return (
      <div className="addmovie-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{ color: '#cc0000', fontSize: '2rem' }}>Acesso Negado!</h1>
        <button className="addmovie-cancel-btn" style={{ margin: '2rem auto' }} onClick={() => navigate('/')}>
          Voltar para Home
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateMovieInDB(id, {
      titulo: formData.titulo,
      ano: parseInt(formData.ano),
      genero: formData.genero,
      sinopse: formData.sinopse,
      poster: formData.poster,
      trailer: formData.trailer, 
      diretor: formData.diretor,
      produtora: formData.produtora,
      elenco: formData.atores,
      pais: formData.pais,
      linguagem: formData.idioma
    });

    alert('Filme atualizado com sucesso no catálogo!');
    navigate(`/filme/${id}`);
  };

  return (
    <div className="addmovie-container">
      <div className="addmovie-content">
        <span className="addmovie-tag">GERENCIAR FILME</span>
        <h1 className="addmovie-main-title">EDITAR INFORMAÇÕES</h1>

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
                <label>GÊNERO</label>
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
              <button type="submit" className="addmovie-submit-btn">SALVAR ALTERAÇÕES</button>
              <button type="button" className="addmovie-cancel-btn" onClick={() => navigate(`/filme/${id}`)}>Cancelar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;