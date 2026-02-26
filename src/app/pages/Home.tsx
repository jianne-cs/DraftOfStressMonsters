import { useState } from 'react';
import { Link } from 'react-router';
import { Swords, Wind, Smile, BookOpen, Users, Plus, ChevronRight } from 'lucide-react';
import { monsters, squads } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../components/ui/dialog';
import logo from 'figma:asset/d3f255a78e1c466f832592f023390aaf9040deba.png';

export function Home() {
  const todayMonster = monsters[0];
  const activeSquad = squads[0];
  const [stressLevel, setStressLevel] = useState(3);
  const [showStressDialog, setShowStressDialog] = useState(false);
  const [previousStressLevel, setPreviousStressLevel] = useState(3);

  const handleStressUpdate = (newLevel: number) => {
    setPreviousStressLevel(stressLevel);
    setStressLevel(newLevel);
    setShowStressDialog(true);
  };

  const getStressResponse = () => {
    if (newLevel < previousStressLevel) {
      return {
        emoji: '🌤️',
        title: 'Glad you\'re feeling better',
        message: 'What helped you feel better?',
        action: 'Log what helped',
        actionLink: '/quick-journal'
      };
    } else if (newLevel > previousStressLevel) {
      return {
        emoji: '🫂',
        title: 'Things feel harder right now',
        message: 'Would grounding help?',
        action: 'Try Grounding',
        actionLink: '/quick-grounding'
      };
    } else {
      return {
        emoji: '👍',
        title: 'Stress level updated',
        message: 'Thanks for checking in',
        action: null,
        actionLink: null
      };
    }
  };

  const newLevel = stressLevel;
  const response = getStressResponse();

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      {/* Header with Logo */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="STRIDE" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-semibold mb-1">Good afternoon! 👋</h1>
            <button 
              onClick={() => setShowStressDialog(true)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>Stress Level:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-full transition-all ${
                      level <= stressLevel ? 'bg-[var(--stride-blue)]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
        <Link to="/profile">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--stride-purple)' }}>
            👤
          </div>
        </Link>
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

      {/* Quick Actions for Stressed Users */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Need Help Right Now?</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/quick-breathing"
            className="block p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border-2 hover:border-[var(--stride-blue)] transition-all"
          >
            <div className="text-4xl mb-2">🌬️</div>
            <h4 className="font-semibold text-sm mb-1">5 Mins Breathing</h4>
            <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
              Guided calm
            </p>
          </Link>

          <Link
            to="/quick-mood-check"
            className="block p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl border-2 hover:border-[var(--stride-purple)] transition-all"
          >
            <div className="text-4xl mb-2">😌</div>
            <h4 className="font-semibold text-sm mb-1">Mood Check</h4>
            <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
              Name your feeling
            </p>
          </Link>

          <Link
            to="/quick-grounding"
            className="block p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 hover:border-[var(--stride-green)] transition-all"
          >
            <div className="text-4xl mb-2">🌍</div>
            <h4 className="font-semibold text-sm mb-1">Grounding</h4>
            <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
              Feel present
            </p>
          </Link>

          <Link
            to="/quick-journal"
            className="block p-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl border-2 hover:border-[var(--stride-orange)] transition-all"
          >
            <div className="text-4xl mb-2">📝</div>
            <h4 className="font-semibold text-sm mb-1">Daily Journal</h4>
            <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
              Release thoughts
            </p>
          </Link>
        </div>
      </div>

      {/* Today's Battles */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Today's Battles</h3>
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

      {/* Stress Level Update Dialog */}
      <Dialog open={showStressDialog} onOpenChange={setShowStressDialog}>
        <DialogContent className="max-w-md">
          <DialogTitle>Update Stress Level</DialogTitle>
          <DialogDescription className="sr-only">
            Update your current stress level
          </DialogDescription>
          
          <div className="py-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">{response.emoji}</div>
              <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                How are you feeling right now?
              </p>
            </div>

            {/* Stress Level Selector */}
            <div className="space-y-3 mb-6">
              {[
                { level: 1, label: 'Minimal', color: '#27AE60', desc: 'Calm and in control' },
                { level: 2, label: 'Mild', color: '#7BC4E8', desc: 'A little stressed but okay' },
                { level: 3, label: 'Moderate', color: '#F2994A', desc: 'Definitely affecting my day' },
                { level: 4, label: 'High', color: '#EB5757', desc: 'This is really hard right now' },
              ].map((item) => (
                <button
                  key={item.level}
                  onClick={() => handleStressUpdate(item.level)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    stressLevel === item.level
                      ? 'border-[var(--stride-blue)] bg-blue-50 scale-105'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: dot <= item.level ? item.color : '#E0E0E0'
                          }}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <p className="text-xs ml-12" style={{ color: 'var(--stride-gray)' }}>
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Response Message */}
            {stressLevel !== previousStressLevel && (
              <div className="p-4 bg-blue-50 rounded-lg mb-4 animate-in fade-in duration-300">
                <p className="text-sm font-medium mb-2">{response.title}</p>
                <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                  {response.message}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowStressDialog(false)}
                className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Done
              </button>
              {response.action && response.actionLink && (
                <Link
                  to={response.actionLink}
                  className="flex-1 py-3 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity text-center"
                  onClick={() => setShowStressDialog(false)}
                >
                  {response.action}
                </Link>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}