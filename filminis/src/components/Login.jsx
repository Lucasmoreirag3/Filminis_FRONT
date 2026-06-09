import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ setToken, setRole }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const usuariosSalvos = JSON.parse(localStorage.getItem('fake_database')) || [];
    
    
    const usuarioEncontrado = usuariosSalvos.find(
      (user) => user.email === email && user.password === password
    );
    
    
    if (email === 'admin@example.com' && password === 'admin') {
      localStorage.setItem('access_token', 'token-admin-123');
      localStorage.setItem('user_role', 'admin');
      setToken('token-admin-123');
      setRole('admin');
      navigate('/');
      
    
    } else if (usuarioEncontrado) {
      localStorage.setItem('access_token', 'token-user-456');
      localStorage.setItem('user_role', usuarioEncontrado.role);
      setToken('token-user-456');
      setRole(usuarioEncontrado.role);
      navigate('/');
      
    
    } else {
      alert('E-mail ou senha incorretos. Tente novamente!');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">EMAIL</label>
            <input 
              type="email" id="email" placeholder="exemplo@gmail.com" 
              value={email} onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">SENHA</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} id="password" placeholder="*******" 
                value={password} onChange={(e) => setPassword(e.target.value)} required 
              />
              <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Link to="/esqueci-senha" className="forgot-password">Esqueceu sua senha?</Link>
          <button type="submit" className="login-button">Continuar</button>
        </form>

        <div className="divider"></div>
        <p className="signup-text">
          Sua primeira vez aqui? <Link to="/cadastro" className="signup-link">Criar uma conta</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;