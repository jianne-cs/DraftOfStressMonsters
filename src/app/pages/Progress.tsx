import { useState } from 'react';
import { Link } from 'react-router';
import { Flame, TrendingUp, Trophy, Clock, BookOpen } from 'lucide-react';
import { monsters, squads } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import logo from '../../assets/stride-logo.png';  // ✅ TWO levels up

console.log('Progress logo:', logo);  // Debug line

export function Progress() {
  const [activeTab, setActiveTab] = useState('stats');

  const stats = {
    streak: 12,
    monstersDefeated: 24,
    coopBattles: 15,
    timeSaved: 3.5,
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="p-6" style={{ backgroundColor: 'var(--stride-blue)', color: 'white' }}>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="STRIDE" className="w-10 h-10" />
          <h1 className="text-2xl font-semibold">Your Progress</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-5 h-5" />
              <span className="text-sm">Streak</span>
            </div>
            <p className="text-2xl font-bold">{stats.streak} days</p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-5 h-5" />
              <span className="text-sm">Victories</span>
            </div>
            <p className="text-2xl font-bold">{stats.monstersDefeated}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-white border-b">
          <TabsTrigger value="stats" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
            Stats
          </TabsTrigger>
          <TabsTrigger value="collection" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
            Monster Diary
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
            Achievements
          </TabsTrigger>
        </TabsList>

        {/* Stats Tab */}
        <TabsContent value="stats" className="p-4 space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
              This Week's Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span style={{ color: 'var(--stride-gray)' }}>Battles Won</span>
                <span className="font-semibold">{stats.monstersDefeated}</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: 'var(--stride-gray)' }}>Co-op Victories</span>
                <span className="font-semibold">{stats.coopBattles}</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: 'var(--stride-gray)' }}>Squad Win Rate</span>
                <span className="font-semibold">{squads[0].winRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: 'var(--stride-gray)' }}>Time Saved</span>
                <span className="font-semibold">{stats.timeSaved} hours</span>
              </div>
            </div>
          </Card>

          {/* Mood Chart Placeholder */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Mood Trend</h3>
            <div className="h-48 bg-gradient-to-b from-blue-50 to-transparent rounded-lg flex items-end justify-center p-4">
              <div className="text-sm text-center" style={{ color: 'var(--stride-gray)' }}>
                <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--stride-blue)' }} />
                <p>Trending upward! 📈</p>
                <p className="text-xs mt-1">You're managing stress better</p>
              </div>
            </div>
          </Card>

          <div className="flex gap-3">
            <button className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Share Progress
            </button>
            <button className="flex-1 py-3 px-4 text-white rounded-xl font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--stride-blue)' }}>
              View Details
            </button>
          </div>
        </TabsContent>

        {/* Monster Collection Tab */}
        <TabsContent value="collection" className="p-4 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">My Monster Diary ({monsters.length}/24)</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg">Grid</button>
              <button className="px-3 py-1 text-sm bg-white border rounded-lg">List</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {monsters.map((monster) => (
              <Link
                key={monster.id}
                to={`/monster-profile/${monster.id}`}
                className="block"
              >
                <Card className="p-4 hover:border-[var(--stride-blue)] transition-colors cursor-pointer border-2">
                  <div className="text-center">
                    <div className="text-5xl mb-3">{monster.emoji}</div>
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                      {monster.name}
                    </h4>
                    <div className="text-xs mb-2" style={{ color: 'var(--stride-gray)' }}>
                      Last: {new Date(monster.firstSeen).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-xs mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full"
                          style={{ 
                            backgroundColor: 'var(--stride-blue)',
                            width: `${100 - (monster.currentHp / monster.maxHp) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="text-xs mt-1 block">{monster.battleCount} battles</span>
                    </div>
                    <button className="w-full py-1.5 text-xs text-white rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--stride-blue)' }}>
                      View Profile
                    </button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Link to="/create-monster">
            <Card className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-dashed" style={{ borderColor: 'var(--stride-blue)' }}>
              <button className="w-full text-center">
                <div className="text-4xl mb-2">➕</div>
                <h4 className="font-semibold mb-1">Create New Monster</h4>
                <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                  Facing a new challenge?
                </p>
              </button>
            </Card>
          </Link>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🏆', name: 'First Victory', unlocked: true },
              { icon: '🔥', name: '7-Day Streak', unlocked: true },
              { icon: '🛡️', name: 'Squad Warrior', unlocked: true },
              { icon: '📚', name: 'Diary Keeper', unlocked: false },
              { icon: '👥', name: 'Squad Leader', unlocked: false },
              { icon: '🎯', name: 'Monster Collector', unlocked: false },
            ].map((achievement, i) => (
              <Card
                key={i}
                className={`p-4 text-center ${
                  achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-50 opacity-60'
                }`}
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h4 className="text-sm font-semibold">{achievement.name}</h4>
                {achievement.unlocked && (
                  <span className="text-xs mt-1 block" style={{ color: 'var(--stride-blue)' }}>
                    ✓ Unlocked
                  </span>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-4 bg-blue-50">
            <div className="flex items-start gap-3">
              <Clock className="w-8 h-8 mt-1" style={{ color: 'var(--stride-blue)' }} />
              <div>
                <h4 className="font-semibold mb-1">Next Achievement</h4>
                <p className="text-sm mb-2" style={{ color: 'var(--stride-gray)' }}>
                  Complete 5 more co-op battles to unlock "Squad Warrior"
                </p>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full" style={{ backgroundColor: 'var(--stride-blue)', width: '60%' }} />
                </div>
                <p className="text-xs mt-1" style={{ color: 'var(--stride-gray)' }}>
                  3/5 complete
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}