import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, Edit, Share2, Swords, TrendingUp } from 'lucide-react';
import { monsters, diaryEntries } from '../data/mockData';
import { Card } from '../components/ui/card';

export function MonsterDiary() {
  const { monsterId } = useParams();
  const navigate = useNavigate();
  const monster = monsters.find(m => m.id === monsterId) || monsters[0];
  const entries = diaryEntries.filter(e => e.monsterId === monsterId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[var(--stride-purple)] text-white p-4 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => navigate('/progress')} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-semibold">Monster Diary</h1>
        <div className="w-9" /> {/* Spacer */}
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* Monster Info Card */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="text-center mb-4">
            <div className="text-6xl mb-3">{monster.emoji}</div>
            <h2 className="text-xl font-semibold mb-1">{monster.name}</h2>
            <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
              {monster.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                First Seen
              </p>
              <p className="font-semibold text-sm">
                {new Date(monster.firstSeen).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                Battles
              </p>
              <p className="font-semibold text-sm">{monster.battleCount}</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                Current HP
              </p>
              <p className="font-semibold text-sm">{monster.currentHp}/{monster.maxHp}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--stride-red)] transition-all"
                style={{ width: `${(monster.currentHp / monster.maxHp) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Weaknesses & Resistances */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 bg-green-50">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-1">
              <span className="text-green-600">✓</span> Weaknesses
            </h3>
            <ul className="space-y-1 text-xs">
              {monster.weaknesses.map((weakness, i) => (
                <li key={i} style={{ color: 'var(--stride-gray)' }}>• {weakness}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-4 bg-red-50">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-1">
              <span className="text-red-600">✗</span> Resistances
            </h3>
            <ul className="space-y-1 text-xs">
              {monster.resistances.map((resistance, i) => (
                <li key={i} style={{ color: 'var(--stride-gray)' }}>• {resistance}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>📅</span> Battle Timeline
          </h3>

          <div className="space-y-3">
            {entries.map((entry) => (
              <Card key={entry.id} className="p-4" style={{ backgroundColor: 'var(--stride-diary)' }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-sm">{entry.date}</h4>
                    <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      {entry.time}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < entry.effectiveness ? 'text-yellow-500' : 'text-gray-300'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Skill used:</span> {entry.skillUsed}
                  </p>
                  {entry.isCoOp && (
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Squad:</span>
                      <span style={{ color: 'var(--stride-green)' }}>
                        {entry.squadMembers?.join(', ')}
                      </span>
                    </p>
                  )}
                  <p className="italic" style={{ color: 'var(--stride-purple)' }}>
                    "{entry.note}"
                  </p>
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="text-xs px-3 py-1 bg-white rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-1">
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button className="text-xs px-3 py-1 bg-white rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-1">
                    <Share2 className="w-3 h-3" />
                    Share
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Insights */}
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-teal-50">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" style={{ color: 'var(--stride-teal)' }} />
            Insights
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span>💡</span>
              <span>Most effective: <strong>5-Minute Launch</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span>⏰</span>
              <span>Best time: <strong>Mornings</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span>👥</span>
              <span>Squad battles: <strong>+20% effectiveness</strong></span>
            </li>
          </ul>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 pb-4">
          <Link
            to={`/battle/${monster.id}`}
            className="flex-1 py-3 px-4 bg-[var(--stride-teal)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Swords className="w-5 h-5" />
            Fight Now
          </Link>
          <button className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            + Log Entry
          </button>
        </div>
      </div>
    </div>
  );
}
