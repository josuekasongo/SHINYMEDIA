import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement actual Firebase Auth login here
    console.log('Logging in with', email);
    navigate('/admin');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Espace Administrateur</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', backgroundColor: 'rgba(0,0,0,0.2)', color: 'white' }}
            required
          />
          <input 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', backgroundColor: 'rgba(0,0,0,0.2)', color: 'white' }}
            required
          />
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
            Se connecter
          </button>
        </form>
        <a href="/" style={{ display: 'block', marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &larr; Retour au site
        </a>
      </div>
    </div>
  );
}

export default Login;
