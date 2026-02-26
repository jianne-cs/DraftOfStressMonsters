import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Edit, Settings, LogOut, Download, Users, Trophy, Swords, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { monsters } from '../data/mockData';

export function Profile() {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [clearDataOnLogout, setClearDataOnLogout] = useState(false);

  const handleLogout = () => {
    // In real app, invalidate session, clear tokens, etc.
    console.log('Logging out...');
    if (clearDataOnLogout) {
      console.log('Clearing local data...');
    }
    // Navigate to login screen (for now, go to home)
    setTimeout(() => {
      setShowLogoutDialog(false);
      navigate('/');
    }, 1000);
  };

  // Mock user data
  const userData = {
    displayName: 'Alex Rivera',
    username: 'study_warrior',
    initials: 'AR',
    memberSince: 'January 2025',
    daysActive: 42,
    monstersCreated: 5,
    battlesWon: 23,
    squadSize: 8,
    currentStreak: 7,
  };

  const mostBattled = monsters[0];
  const recentBattle = { monster: monsters[1], time: '2 hours ago' };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="text-white p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Profile</h1>
          <button
            onClick={() => navigate('/settings')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* User Header */}
        <Card className="p-6 text-center">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-white"
            style={{ backgroundColor: 'var(--stride-blue)' }}
          >
            {userData.initials}
          </div>
          <h2 className="text-2xl font-bold mb-1">{userData.displayName}</h2>
          <p className="mb-3" style={{ color: 'var(--stride-gray)' }}>
            @{userData.username}
          </p>
          <button
            className="flex items-center gap-2 mx-auto px-4 py-2 border-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
        </Card>

        {/* Statistics Summary */}
        <div>
          <h3 className="font-semibold mb-3">Your Journey</h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
                <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>Days Active</span>
              </div>
              <p className="text-2xl font-bold">{userData.daysActive}</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Swords className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
                <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>Battles Won</span>
              </div>
              <p className="text-2xl font-bold">{userData.battlesWon}</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
                <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>Monsters Created</span>
              </div>
              <p className="text-2xl font-bold">{userData.monstersCreated}</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
                <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>Squad Size</span>
              </div>
              <p className="text-2xl font-bold">{userData.squadSize}</p>
            </Card>
          </div>

          {/* Current Streak */}
          <Card className="p-4 mt-3 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm mb-1" style={{ color: 'var(--stride-gray)' }}>Current Streak</p>
                <p className="text-3xl font-bold">🔥 {userData.currentStreak} days</p>
              </div>
              <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>Keep going!</p>
            </div>
          </Card>
        </div>

        {/* Monster Stats */}
        <div>
          <h3 className="font-semibold mb-3">Monster Stats</h3>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{mostBattled.emoji}</span>
              <div className="flex-1">
                <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>Most Battled</p>
                <p className="font-semibold">{mostBattled.name}</p>
              </div>
              <button
                onClick={() => navigate(`/monster-profile/${mostBattled.id}`)}
                className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                View
              </button>
            </div>
            
            <div className="pt-3 border-t">
              <p className="text-sm mb-1" style={{ color: 'var(--stride-gray)' }}>
                Recent Activity
              </p>
              <p className="text-sm">
                Last battle: <span className="font-medium">{recentBattle.monster.name}</span>, {recentBattle.time}
              </p>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-semibold mb-3">Recent Achievements</h3>
          <div className="space-y-2">
            <Card className="p-3 flex items-center gap-3">
              <span className="text-3xl">🥇</span>
              <div className="flex-1">
                <p className="font-medium text-sm">First Monster Created</p>
                <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>Unlocked 6 days ago</p>
              </div>
            </Card>

            <Card className="p-3 flex items-center gap-3">
              <span className="text-3xl">⚔️</span>
              <div className="flex-1">
                <p className="font-medium text-sm">10 Battles Won</p>
                <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>Unlocked 3 days ago</p>
              </div>
            </Card>

            <Card className="p-3 flex items-center gap-3 opacity-50">
              <span className="text-3xl">🔥</span>
              <div className="flex-1">
                <p className="font-medium text-sm">30-Day Streak</p>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-full bg-[var(--stride-orange)] rounded-full" style={{ width: '23%' }} />
                </div>
                <p className="text-xs mt-1" style={{ color: 'var(--stride-gray)' }}>7/30 days</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-semibold mb-3">Account</h3>
          <Card className="divide-y">
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="text-sm">Member since {userData.memberSince}</span>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="text-sm">Email: alex.rivera@email.com</span>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Verified</span>
            </button>
            <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5" style={{ color: 'var(--stride-gray)' }} />
              <span className="text-sm">Export My Data</span>
            </button>
          </Card>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutDialog(true)}
          className="w-full p-4 border-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          style={{ color: 'var(--stride-gray)' }}
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Log Out of STRIDE?</DialogTitle>
          <DialogDescription className="sr-only">
            Confirm you want to log out of your account
          </DialogDescription>
          
          <div className="py-4">
            <p className="mb-4" style={{ color: 'var(--stride-gray)' }}>
              Are you sure you want to log out?
            </p>

            <div className="space-y-2 mb-6 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm flex items-center gap-2">
                <span className="text-green-600">✓</span> Your data is saved
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="text-green-600">✓</span> You can log back in anytime
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="text-green-600">✓</span> Squad notifications will pause
              </p>
            </div>

            <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={clearDataOnLogout}
                onChange={(e) => setClearDataOnLogout(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm">Clear local data (for shared devices)</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowLogoutDialog(false)}
              className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 py-3 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Log Out
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
