import React, { useState } from 'react';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    termsAccepted: false,
    day: '',
    month: '',
    year: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 1) {
      navigate('/Login');
    } else {
      setStep(step - 1);
    }
  };

  
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    
   
    const usuariosSalvos = JSON.parse(localStorage.getItem('fake_database')) || [];
    
   
    const novoUsuario = {
      email: formData.email,
      password: formData.password,
      nome: formData.firstName,
      role: 'user'
    };
    
   
    usuariosSalvos.push(novoUsuario);
    localStorage.setItem('fake_database', JSON.stringify(usuariosSalvos));

    alert('Conta criada com sucesso! Você já pode fazer login.');
    navigate('/Login');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        
        <button type="button" className="back-button" onClick={prevStep}>
          <ChevronLeft size={18} /> Voltar
        </button>

        {step === 1 && (
          <form onSubmit={nextStep} className="fade-in">
            <h1 className="cadastro-title">Qual é o seu e-mail?</h1>
            <div className="input-group">
              <label htmlFor="email">Endereço de e-mail</label>
              <input 
                type="email" id="email" name="email"
                placeholder="exemplo@gmail.com" 
                value={formData.email} onChange={handleChange} required 
              />
            </div>
            <button type="submit" className="red-button mt-auto">Continuar</button>
            <p className="privacy-link">Política de Privacidade</p>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={nextStep} className="fade-in">
            <h1 className="cadastro-title">Crie sua conta</h1>
            <div className="input-group">
              <label htmlFor="emailDisplay">Endereço de e-mail</label>
              <input 
                type="email" id="emailDisplay" value={formData.email} disabled className="disabled-input"
              />
            </div>
            <div className="row">
              <div className="input-group half-width">
                <label htmlFor="firstName">Primeiro nome</label>
                <input 
                  type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required 
                />
              </div>
              <div className="input-group half-width">
                <label htmlFor="lastName">Sobrenome</label>
                <input 
                  type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required 
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">Criar senha</label>
              <div className="password-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} id="password" name="password"
                  value={formData.password} onChange={handleChange} required 
                />
                <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="checkbox-group">
              <input 
                type="checkbox" id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required
              />
              <label htmlFor="termsAccepted">
                Li e concordo com os <span>Termos de Serviço</span> e o <span>Contrato de Licença de Usuário Final da LuX films</span>
              </label>
            </div>
            <button type="submit" className="red-button">Continuar</button>
            <p className="privacy-link">Política de Privacidade</p>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="fade-in">
            <h1 className="cadastro-title">Insira sua data de nascimento</h1>
            <p className="cadastro-subtitle">Pedimos isso para ajudar a tornar sua experiência segura e divertida, independente da sua idade</p>
            <label className="date-label">Data de nascimento</label>
            <div className="row date-row">
              <div className="input-group date-input">
                <input type="number" name="day" placeholder="Dia" value={formData.day} onChange={handleChange} min="1" max="31" required />
              </div>
              <div className="input-group date-select">
                <select name="month" value={formData.month} onChange={handleChange} required>
                  <option value="" disabled>Mês</option>
                  <option value="01">Janeiro</option><option value="02">Fevereiro</option><option value="03">Março</option>
                  <option value="04">Abril</option><option value="05">Maio</option><option value="06">Junho</option>
                  <option value="07">Julho</option><option value="08">Agosto</option><option value="09">Setembro</option>
                  <option value="10">Outubro</option><option value="11">Novembro</option><option value="12">Dezembro</option>
                </select>
              </div>
              <div className="input-group date-input">
                <input type="number" name="year" placeholder="Ano" value={formData.year} onChange={handleChange} min="1900" max="2026" required />
              </div>
            </div>
            <button type="submit" className="red-button mt-auto">Continuar</button>
            <p className="privacy-link">Política de Privacidade</p>
          </form>
        )}

      </div>
    </div>
  );
};

export default Cadastro;