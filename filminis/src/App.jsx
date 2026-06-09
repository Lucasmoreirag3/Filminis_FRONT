import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Movie from "./components/Movie";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import AdminApprovals from "./components/AdminApprovals"; 

function App() {
  const [token, settoken] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const tokenSalvo = localStorage.getItem("access_token");
    const roleSalvo = localStorage.getItem("user_role");

    if (tokenSalvo && roleSalvo) {
      settoken(tokenSalvo);
      setRole(roleSalvo);
    }
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_role");
    settoken(null);
    setRole(null);
  };

  return (
    <BrowserRouter>
      <Navbar token={token} handleLogout={handleLogout} />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home role={role} />} />
          <Route path="/catalogo" element={<MovieList role={role} />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/filme/:id" element={<Movie role={role} />} />
          <Route path="/adicionar-filme" element={<AddMovie role={role} />} />
          <Route path="/editar-filme/:id" element={<EditMovie role={role} />} />
          <Route path="/aprovacoes" element={<AdminApprovals role={role} />} /> 
          <Route path="/Login" element={<Login setRole={setRole} setToken={settoken} />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;