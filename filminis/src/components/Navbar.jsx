import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ token, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="main-navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        Lu<span>X</span> films
      </div>
      
      <nav className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>INÍCIO</NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>CATÁLOGO</NavLink>
        <NavLink to="/buscar" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>BUSCAR</NavLink>
      </nav>

      <div className="navbar-actions">
        {token ? (
          <button className="logout-navbar-btn" onClick={handleLogout}>SAIR</button>
        ) : (
          <button className="login-navbar-btn" onClick={() => navigate('/Login')}>ENTRAR</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;