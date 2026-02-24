import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Pause, MessageCircle, Send } from 'lucide-react';
import { squads, squadMembers, skills, monsters } from '../data/mockData';
import { Card } from '../components/ui/card';

export function CoopBattle() {
  const { battleId } = useParams();
  const navigate = useNavigate();
  const squad = squads.find(s => s.id === battleId) || squads[0];
  const monster = monsters.find(m => m.name === squad.currentBattle?.monster) || monsters[3];
  
  const [monsterHp, setMonsterHp] = useState(180);
  const [squadHp, setSquadHp] = useState(320);
  const [battleLog, setBattleLog] = useState<string[]>([
    `Squad battle started!`,
    `Facing ${monster.name}...`,
  ]);
  const [chatMessages, setChatMessages] = useState([
    { user: '@study_buddy', text: "I'll tank next!", time: 'Now' },
    { user: '@anxious_engineer', text: "I'm low, can someone heal?", time: '1m ago' },
  ]);
  const [message, setMessage] = useState('');

  const useSkill = (skill: typeof skills[0]) => {
    if (skill.id === '5') {
      // Squad Rally - boost effect
      setBattleLog(prev => [
        ...prev,
        `💪 You used Squad Rally!`,
        `All members boosted +25% for next attack!`
      ]);
    } else if (skill.id === '3') {
      // Grounding - healing
      const healing = 15;
      setSquadHp(prev => Math.min(400, prev + healing));
      setBattleLog(prev => [
        ...prev,
        `🛡️ You used ${skill.icon} ${skill.name}!`,
        `Squad healed +${healing} HP!`
      ]);
    } else {
      const newMonsterHp = Math.max(0, monsterHp - skill.damage);
      setMonsterHp(newMonsterHp);
      setBattleLog(prev => [
        ...prev,
        `You used ${skill.icon} ${skill.name}!`,
        `Dealt ${skill.damage} damage to monster!`
      ]);
    }

    // Monster attacks
    setTimeout(() => {
      const monsterDamage = Math.floor(Math.random() * 20) + 10;
      setSquadHp(prev => Math.max(0, prev - monsterDamage));
      setBattleLog(prev => [
        ...prev,
        `${monster.name} attacks the squad!`,
        `Squad takes ${monsterDamage} damage!`
      ]);
    }, 1000);
  };

  const sendMessage = () => {
    if (message.trim()) {
      setChatMessages(prev => [...prev, { user: '@you', text: message, time: 'Now' }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      {/* Header */}
      <div className="bg-[var(--stride-green)] text-white p-4 flex items-center justify-between">
        <button onClick={() => navigate(`/squad/${battleId}`)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-semibold">🤝 {squad.name}</h1>
        <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <Pause className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* Monster */}
        <Card className="p-6 bg-white">
          <div className="text-center mb-4">
            <div className="text-7xl mb-3 animate-bounce">{monster.emoji}</div>
            <h2 className="text-xl font-semibold mb-2">{monster.name}</h2>
            <div className="flex justify-between text-sm mb-1">
              <span>Monster HP</span>
              <span className="font-medium">{monsterHp}/300</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--stride-red)] transition-all duration-500"
                style={{ width: `${(monsterHp / 300) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Squad Health Pool */}
        <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50">
          <h3 className="font-semibold mb-2">Squad Health Pool</h3>
          <div className="flex justify-between text-sm mb-1">
            <span>Combined Resilience</span>
            <span className="font-medium">{squadHp}/400</span>
          </div>
          <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-[var(--stride-green)] transition-all duration-500"
              style={{ width: `${(squadHp / 400) * 100}%` }}
            />
          </div>

          {/* Squad Members */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: 'You', hp: 85 },
              { name: 'SB', hp: 92 },
              { name: 'AE', hp: 78 },
              { name: '+', hp: 0 },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium mx-auto mb-1 ${
                  member.name === '+' ? 'bg-gray-300' : 'bg-[var(--stride-purple)]'
                }`}>
                  {member.name === '+' ? '➕' : '👤'}
                </div>
                <div className="text-xs font-medium">{member.name}</div>
                {member.hp > 0 && (
                  <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                    {member.hp}%
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Battle Log */}
        <Card className="p-3 bg-white max-h-24 overflow-y-auto">
          <h4 className="text-xs font-semibold mb-2" style={{ color: 'var(--stride-gray)' }}>
            BATTLE LOG
          </h4>
          <div className="space-y-1 text-xs">
            {battleLog.slice(-3).map((log, i) => (
              <p key={i} style={{ color: 'var(--stride-purple)' }}>{log}</p>
            ))}
          </div>
        </Card>

        {/* Your Skills */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">Your Skills</h3>
          {skills.map((skill) => (
            <Card key={skill.id} className="p-3 bg-white hover:border-[var(--stride-green)] transition-colors border-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xl">{skill.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{skill.name}</h4>
                    <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      {skill.id === '5' ? 'Boost squad: +25%' : 
                       skill.id === '3' ? 'Heal squad: +10-20 HP' :
                       `Damage: -${skill.damage} HP`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => useSkill(skill)}
                  className="px-4 py-2 bg-[var(--stride-green)] text-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  Use
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Squad Chat */}
        <Card className="p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Squad Chat
            </h3>
            <span className="text-xs" style={{ color: 'var(--stride-gray)' }}>
              3 online
            </span>
          </div>

          <div className="space-y-2 mb-3 max-h-32 overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div key={i} className="text-sm">
                <span className="font-medium" style={{ color: 'var(--stride-green)' }}>
                  {msg.user}:
                </span>{' '}
                <span>{msg.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-[var(--stride-green)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
