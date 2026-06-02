import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Importando todos os componentes criados
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Movie from "./components/Movie";

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
    localStorage.clear();
    settoken(null);
    setRole(null);
  };

  return (
    <BrowserRouter>
      {/* O Cabeçalho fica fixo aqui em cima para aparecer em todas as páginas */}
      <Navbar token={token} handleLogout={handleLogout} />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<MovieList />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/filme" element={<Movie />} />
          <Route path="/Login" element={<Login setRole={setRole} setToken={settoken} />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;