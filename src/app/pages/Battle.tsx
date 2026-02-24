import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, Pause, HelpCircle, Shield } from 'lucide-react';
import { monsters, skills } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../components/ui/dialog';

export function Battle() {
  const { monsterId } = useParams();
  const navigate = useNavigate();
  const monster = monsters.find(m => m.id === monsterId) || monsters[0];
  
  const [monsterHp, setMonsterHp] = useState(monster.currentHp);
  const [playerHp, setPlayerHp] = useState(95);
  const [battleLog, setBattleLog] = useState<string[]>([
    `${monster.name} appears!`,
    monster.description
  ]);
  const [showVictory, setShowVictory] = useState(false);

  const useSkill = (skill: typeof skills[0]) => {
    const newMonsterHp = Math.max(0, monsterHp - skill.damage);
    setMonsterHp(newMonsterHp);
    
    const effectiveness = skill.effectiveness[monster.type] || 2;
    const stars = '⭐'.repeat(effectiveness);
    
    setBattleLog(prev => [
      ...prev,
      `You used ${skill.icon} ${skill.name}!`,
      `Dealt ${skill.damage} damage! ${stars}`
    ]);

    if (newMonsterHp === 0) {
      setTimeout(() => setShowVictory(true), 500);
      return;
    }

    // Monster attacks back
    setTimeout(() => {
      const monsterDamage = Math.floor(Math.random() * 15) + 5;
      setPlayerHp(prev => Math.max(0, prev - monsterDamage));
      setBattleLog(prev => [
        ...prev,
        `${monster.name} attacks!`,
        `You take ${monsterDamage} damage!`
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-cyan-50">
      {/* Header */}
      <div className="text-white p-4 flex items-center justify-between" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <button onClick={() => navigate('/')} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-semibold">Solo Battle</h1>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <Pause className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* Monster Arena */}
        <Card className="p-6 bg-white">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4 animate-bounce">{monster.emoji}</div>
            <h2 className="text-xl font-semibold mb-2">{monster.name}</h2>
            
            {/* Monster HP */}
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Monster HP</span>
                <span className="font-medium">{monsterHp}/{monster.maxHp}</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--stride-red)] transition-all duration-500"
                  style={{ width: `${(monsterHp / monster.maxHp) * 100}%` }}
                />
              </div>
            </div>

            {/* Player HP */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Your Resilience</span>
                <span className="font-medium">{playerHp}/100</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--stride-teal)] transition-all duration-500"
                  style={{ width: `${playerHp}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Battle Log */}
        <Card className="p-4 bg-white max-h-32 overflow-y-auto">
          <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--stride-gray)' }}>
            Battle Log
          </h3>
          <div className="space-y-1 text-sm">
            {battleLog.slice(-4).map((log, i) => (
              <p key={i} style={{ color: 'var(--stride-purple)' }}>{log}</p>
            ))}
          </div>
        </Card>

        {/* Skill Cards */}
        <div className="space-y-3">
          <h3 className="font-semibold">Your Coping Skills</h3>
          {skills.filter(s => s.id !== '5').map((skill) => {
            const effectiveness = skill.effectiveness[monster.type] || 2;
            return (
              <Card key={skill.id} className="p-4 bg-white hover:border-[var(--stride-teal)] transition-colors cursor-pointer border-2">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="font-semibold">{skill.name}</h4>
                    </div>
                    <p className="text-sm mb-2" style={{ color: 'var(--stride-gray)' }}>
                      {skill.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        ⏱️ {skill.duration}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        💥 -{skill.damage} HP
                      </span>
                      <span>
                        {'⭐'.repeat(effectiveness)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => useSkill(skill)}
                  className="w-full mt-3 py-2 px-4 bg-[var(--stride-teal)] rounded-lg font-medium hover:opacity-90 transition-opacity text-[var(--stride-blue)]"
                >
                  Use Skill
                </button>
              </Card>
            );
          })}
        </div>

        {/* Co-op Invite */}
        <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2" style={{ borderColor: 'var(--stride-green)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold mb-1">Need backup?</h4>
              <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                Invite your squad for a co-op battle
              </p>
            </div>
            <Link
              to={`/squad/1`}
              className="px-4 py-2 bg-[var(--stride-green)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Invite Squad
            </Link>
          </div>
        </Card>
      </div>

      {/* Victory Modal */}
      <Dialog open={showVictory} onOpenChange={setShowVictory}>
        <DialogContent className="max-w-md">
          <DialogTitle className="sr-only">Victory!</DialogTitle>
          <DialogDescription className="sr-only">
            You defeated the monster. Log your battle and track which coping skills worked best.
          </DialogDescription>
          <div className="text-center p-6">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Victory!</h2>
            <p className="mb-6" style={{ color: 'var(--stride-gray)' }}>
              You defeated {monster.name}!
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Log this battle?</h3>
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <textarea
                className="w-full p-3 border rounded-lg text-sm"
                placeholder="Add a note about what worked..."
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowVictory(false);
                  navigate('/');
                }}
                className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Skip
              </button>
              <button
                onClick={() => {
                  setShowVictory(false);
                  navigate('/progress');
                }}
                className="flex-1 py-3 px-4 bg-[var(--stride-teal)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Save Entry
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}