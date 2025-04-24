import React from 'react';
import UsageBarChart from '../components/UsageBarChart';
import CloudPieChart from '../components/CloudPieChart';


// Inside <Routes> in App.jsx

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">Dashboard</h1>

      {/* Welcome Section */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold">Welcome back, User 👋</h2>
        <p className="text-gray-600">Here’s a quick overview of your system.</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        {/* Cloud Usage Card */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Cloud Usage</h3>
          <p className="text-gray-500 text-sm">AWS: 65% | Azure: 20% | GCP: 15%</p>
        </div>

        {/* System Health */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">System Health</h3>
          <p className="text-green-500 font-semibold">All Systems Operational ✅</p>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">AI Recommendations</h3>
          <ul className="list-disc ml-5 text-sm text-gray-600">
            <li>Scale down unused resources</li>
            <li>Review cost-heavy deployments</li>
            <li>Enable autoscaling for service X</li>
          </ul>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UsageBarChart />
        <CloudPieChart />
      </div>
    </div>
  );
};

export default Dashboard;

