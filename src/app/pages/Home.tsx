import { Link } from 'react-router';
import { Swords, Wind, Smile, BookOpen, Users, Plus, ChevronRight } from 'lucide-react';
import { monsters, squads } from '../data/mockData';
import { Card } from '../components/ui/card';
import logo from 'figma:asset/d3f255a78e1c466f832592f023390aaf9040deba.png';

export function Home() {
  const todayMonster = monsters[0];
  const activeSquad = squads[0];
  const stressLevel = 3;

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      {/* Header with Logo */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="STRIDE" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-semibold mb-1">Good afternoon! 👋</h1>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--stride-gray)' }}>Stress Level:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-6 h-6 rounded-full ${
                      level <= stressLevel ? 'bg-[var(--stride-blue)]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style={{ backgroundColor: 'var(--stride-purple)' }}>
          👤
        </div>
      </header>

      {/* Today's Monster Card */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2" style={{ borderColor: 'var(--stride-blue)' }}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--stride-gray)' }}>
              Today's Monster
            </p>
            <h2 className="text-xl font-semibold">{todayMonster.name}</h2>
          </div>
          <div className="text-5xl">{todayMonster.emoji}</div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Strength</span>
            <span className="font-medium">{todayMonster.currentHp}/{todayMonster.maxHp}</span>
          </div>
          <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--stride-red)] transition-all"
              style={{ width: `${(todayMonster.currentHp / todayMonster.maxHp) * 100}%` }}
            />
          </div>
        </div>

        <Link
          to={`/battle/${todayMonster.id}`}
          className="block w-full py-3 px-4 text-white rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--stride-blue)' }}
        >
          <div className="flex items-center justify-center gap-2">
            <Swords className="w-5 h-5" />
            Battle Now
          </div>
        </Link>
      </Card>

      {/* Quick Actions Grid */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-white rounded-xl border-2 hover:border-[var(--stride-blue)] transition-colors flex flex-col items-center gap-2">
            <Wind className="w-8 h-8" style={{ color: 'var(--stride-blue)' }} />
            <span className="text-sm font-medium">5-Min Breathing</span>
          </button>
          <button className="p-4 bg-white rounded-xl border-2 hover:border-[var(--stride-blue)] transition-colors flex flex-col items-center gap-2">
            <BookOpen className="w-8 h-8" style={{ color: 'var(--stride-blue)' }} />
            <span className="text-sm font-medium">Grounding</span>
          </button>
          <button className="p-4 bg-white rounded-xl border-2 hover:border-[var(--stride-blue)] transition-colors flex flex-col items-center gap-2">
            <Smile className="w-8 h-8" style={{ color: 'var(--stride-blue)' }} />
            <span className="text-sm font-medium">Mood Check</span>
          </button>
          <Link
            to="/progress"
            className="p-4 bg-white rounded-xl border-2 hover:border-[var(--stride-blue)] transition-colors flex flex-col items-center gap-2"
          >
            <BookOpen className="w-8 h-8" style={{ color: 'var(--stride-blue)' }} />
            <span className="text-sm font-medium">Daily Journal</span>
          </Link>
        </div>
      </section>

      {/* Active Squad Section */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Your Squads</h3>
          <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>
            2 active
          </span>
        </div>
        
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2" style={{ borderColor: 'var(--stride-green)' }}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{activeSquad.emoji}</span>
                <h4 className="font-semibold">{activeSquad.name}</h4>
              </div>
              {activeSquad.currentBattle && (
                <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                  Battling: {activeSquad.currentBattle.monster}
                </p>
              )}
            </div>
            <span className="text-xs px-2 py-1 bg-white rounded-full font-medium" style={{ color: 'var(--stride-green)' }}>
              Battling now!
            </span>
          </div>

          {activeSquad.currentBattle && (
            <div className="mb-3">
              <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--stride-green)] transition-all"
                  style={{ width: `${activeSquad.currentBattle.progress}%` }}
                />
              </div>
            </div>
          )}

          <Link
            to={`/squad/${activeSquad.id}`}
            className="block w-full py-2 px-4 bg-[var(--stride-green)] text-white rounded-lg font-medium text-center hover:opacity-90 transition-opacity text-sm"
          >
            Join Battle
          </Link>
        </Card>
      </section>

      {/* Recent Diary Entry */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Yesterday's Battle Log</h3>
        <Card className="p-4" style={{ backgroundColor: 'var(--stride-diary)' }}>
          <p className="text-sm mb-2" style={{ color: 'var(--stride-purple)' }}>
            "5-Minute Launch worked well!"
          </p>
          <div className="flex gap-2">
            <button className="text-xs px-3 py-1 bg-white rounded-full font-medium hover:bg-gray-50 transition-colors">
              Add Note
            </button>
            <Link
              to="/progress"
              className="text-xs px-3 py-1 bg-white rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              View Full
            </Link>
          </div>
        </Card>
      </section>

      {/* Squad Activity Feed */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Squad Activity</h3>
        <div className="space-y-2">
          <Card className="p-3 flex items-start gap-3">
            <div className="text-2xl">🎉</div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">@study_buddy</span> defeated Procrastination Goblin
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--stride-gray)' }}>
                10 minutes ago
              </p>
            </div>
          </Card>
          
          <Card className="p-3 flex items-start gap-3">
            <div className="text-2xl">🆘</div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">@anxious_engineer</span> needs help with Anxiety Imp
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--stride-gray)' }}>
                1 hour ago
              </p>
              <button className="text-xs px-3 py-1 bg-[var(--stride-green)] text-white rounded-full font-medium hover:opacity-90 transition-opacity mt-2">
                Offer Help
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Create Monster CTA */}
      <Card className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-dashed" style={{ borderColor: 'var(--stride-blue)' }}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold mb-1">Facing a new challenge?</h4>
            <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
              Create a custom monster
            </p>
          </div>
          <Link
            to="/create-monster"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--stride-blue)' }}
          >
            <Plus className="w-6 h-6 text-white" />
          </Link>
        </div>
      </Card>
    </div>
  );
}