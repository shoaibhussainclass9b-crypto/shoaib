import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-300">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">🛡️ GigGuard</h1>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('home')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Home</button>
            <button onClick={() => setActiveTab('features')} className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded hover:bg-blue-50">Features</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {activeTab === 'home' ? (
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Welcome to GigGuard</h2>
            <p className="text-2xl mb-8">The Ultimate Companion for Gig Workers</p>
            <p className="text-xl mb-12 max-w-2xl mx-auto">Boost efficiency, ensure safety, and prioritize your health with our comprehensive platform for gig economy workers.</p>
            <button className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 shadow-lg">Get Started Now</button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '💰', title: 'Smart Income', desc: 'Track earnings and manage finances' },
                { icon: '🚨', title: 'Safety Beacon', desc: 'Emergency alerts and location sharing' },
                { icon: '❤️', title: 'Health AI', desc: 'Monitor health metrics and wellness' },
                { icon: '📅', title: 'Daily Planner', desc: 'Optimize schedule for maximum earnings' },
                { icon: '⚖️', title: 'Legal Rights', desc: 'Know your employment rights' },
                { icon: '💪', title: 'Empowerment', desc: 'Skills development & career guidance' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">Developed by Students of Hyderabad Public School, Kadapa</p>
          <p className="text-sm text-blue-200">© 2025 GigGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
