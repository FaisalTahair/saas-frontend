import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Sidebar from './components/sidebar';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import AIChat from './pages/AIChat.jsx';
import Users from './pages/Users';

const AppContent = () => {
  const location = useLocation();
  const hideSidebarRoutes = ['/login', '/signup'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {!shouldHideSidebar && <Sidebar />}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />            {/* ✅ Landing Page */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;



