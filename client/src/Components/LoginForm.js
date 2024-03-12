import React, { useState } from 'react';

function LoginForm() {
  const [usern, setUsern] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted for username:', usern);
    // Here, you would typically handle authentication,
    // For example, by sending a request to your authentication server.
  };

  return (
    <div className="login-form-container" style={{ maxWidth: '300px', margin: 'auto', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input
            type="usern"
            className="form-control"
            id="usern"
            value={usern}
            onChange={(e) => setUsern(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
