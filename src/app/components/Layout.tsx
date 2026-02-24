import { Outlet, Link, useLocation } from 'react-router';
import { Home, BarChart3, Users, Book, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { EmergencyModal } from './EmergencyModal';
import logo from 'figma:asset/d3f255a78e1c466f832592f023390aaf9040deba.png';

export function Layout() {
  const location = useLocation();
  const [showEmergency, setShowEmergency] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/progress', icon: BarChart3, label: 'Progress' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/learn', icon: Book, label: 'Learn' },
  ];

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--background)' }}>
      <Outlet />
      
      {/* Emergency SOS Floating Button */}
      <button
        onClick={() => setShowEmergency(true)}
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: 'var(--stride-red)' }}
        aria-label="Emergency SOS"
      >
        <AlertCircle className="w-7 h-7 text-white" />
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50" style={{ borderColor: 'var(--border)' }}>
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? 'text-[var(--stride-blue)]'
                    : 'text-[var(--stride-gray)] hover:text-[var(--stride-blue-dark)]'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Emergency Modal */}
      <EmergencyModal open={showEmergency} onClose={() => setShowEmergency(false)} />
    </div>
  );
}