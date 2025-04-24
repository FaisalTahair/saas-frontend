import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartPie, FaRobot, FaUsers, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow p-4">
      <h1 className="text-2xl font-bold mb-6">My SaaS</h1>
      <ul className="space-y-4">
        <li>
          <NavLink to="/dashboard" className="flex items-center gap-2">
            <FaChartPie />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/ai-chat" className="flex items-center gap-2">
            <FaRobot />
            AI Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="flex items-center gap-2">
            <FaUsers />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="flex items-center gap-2">
            <FaCog />
            Settings
          </NavLink>
        </li>
        <li>
        <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">
             Login
        </Link>

        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
