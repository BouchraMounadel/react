import React, { useState } from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // TODO: Ajoutez la logique d'authentification ici
    // Exemple: appel à une API, vérification avec un backend, etc.

    // Après la connexion réussie, redirigez l'utilisateur vers la page appropriée
    // history.push('/dashboard'); // Assurez-vous d'ajuster le chemin de la page

    // Pour l'exemple, nous imprimerons les données du formulaire
    console.log('Formulaire soumis avec les données:', formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4 text-center">Connexion</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse e-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="position-absolute end-0 bottom-0 p-2"
              style={{ cursor: 'pointer' }}
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
