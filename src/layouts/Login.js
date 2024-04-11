import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; 
import studentLogo from '../assets/img/student-logo.png';
import adminLogo from '../assets/img/admin-logo.png';
import companyLogo from '../assets/img/company-logo.png';

const Login = () => {
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLogo, setSelectedLogo] = useState(null); // To track the selected logo
  const history = useHistory();

  const handleLogin = async () => {
    try {
        let has_token = localStorage.getItem("token");
        console.log("role: ",role, username, password,"\n",has_token);
      const response = await fetch('http://localhost:3000/login', {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${has_token}`
        },
        "body": JSON.stringify({
          "role": role,
          "username": username,
          "password": password,
        }),
      });

      if (!response.ok) {
        throw new Error('Incorrect username or password');
      }

      const { token } = await response.json();
      console.log("token: ",token);
      // Store token in local storage
      localStorage.setItem('token', token);

      // Redirect based on role
      if (role === 'admin') {
        history.push('/admin-dashboard');
      } else if (role === 'company') {
        history.push('/company-dashboard');
      } else if (role === 'student') {
        history.push('/student-dashboard');
      }
    } catch (error) {
      alert(error.message);
      // Clear username and password fields after unsuccessful login
      setUsername('');
      setPassword('');
    }
  };

  const handleLogoClick = (selectedRole) => {
    setRole(selectedRole);
    setSelectedLogo(selectedRole);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-title-container">
          <h2>Student Placement Portal</h2>
        </div>
        <div className="role-icons">
          <div className={`role-icon ${role === 'student' && 'selected'}`} onClick={() => handleLogoClick('student')}>
            <img src={studentLogo} alt="Student" className={`role-logo ${selectedLogo === 'student' && 'selected-logo'}`} />
            <p className="role-text">Student</p>
          </div>
          <div className={`role-icon ${role === 'admin' && 'selected'}`} onClick={() => handleLogoClick('admin')}>
            <img src={adminLogo} alt="Admin" className={`role-logo ${selectedLogo === 'admin' && 'selected-logo'}`} />
            <p className="role-text">Admin</p>
          </div>
          <div className={`role-icon ${role === 'company' && 'selected'}`} onClick={() => handleLogoClick('company')}>
            <img src={companyLogo} alt="Company" className={`role-logo ${selectedLogo === 'company' && 'selected-logo'}`} />
            <p className="role-text">Company</p>
          </div>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
