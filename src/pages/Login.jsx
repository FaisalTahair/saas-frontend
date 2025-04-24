import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  const togglePassword = () => setShowPassword(prev => !prev);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // TODO: Add authentication logic
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Logged in (not really — just simulated)');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-primary">Login to Your Account</h2>

        <div className="space-y-1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="space-y-1 relative">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg pr-10"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-8 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-blue-500">Forgot?</Link>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
            </button>


        <p className="text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-500">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
<p className="text-sm mt-4 text-center">
  Don't have an account?{' '}
  <span
    onClick={() => navigate('/signup')}
    className="text-blue-600 hover:underline cursor-pointer"
  >
    Sign up here
  </span>
</p>


export default Login;
