import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, Swords, Calendar, TrendingDown, Users, Share2, Edit, Trash2 } from 'lucide-react';
import { monsters, skills } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useState } from 'react';

export function MonsterProfile() {
  const { monsterId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const monster = monsters.find(m => m.id === monsterId) || monsters[0];

  // Mock battle history
  const battleHistory = [
    {
      date: '2026-02-24',
      skillsUsed: ['5-Minute Launch', 'Body Double'],
      effectiveness: 4,
      notes: '5-Minute Launch worked well! Got into flow state.',
      damageDealt: 25,
      hpBefore: 85,
      hpAfter: 60,
    },
    {
      date: '2026-02-23',
      skillsUsed: ['Cognitive Shield', 'Reality Check'],
      effectiveness: 3,
      notes: 'Helped but took longer than expected.',
      damageDealt: 15,
      hpBefore: 90,
      hpAfter: 75,
    },
    {
      date: '2026-02-22',
      skillsUsed: ['Squad Rally'],
      effectiveness: 5,
      notes: 'Co-op with @study_buddy was super effective!',
      damageDealt: 35,
      hpBefore: 100,
      hpAfter: 65,
      coop: true,
    },
  ];

  // Mock community data
  const communityData = {
    similarMonsters: 247,
    topSkills: [
      { skill: '5-Minute Launch', effectiveness: 4.2, uses: 1523 },
      { skill: 'Body Double', effectiveness: 4.5, uses: 1201 },
      { skill: 'Squad Rally', effectiveness: 4.7, uses: 892 },
    ],
    commonTriggers: [
      { trigger: 'Opening laptop', percentage: 78 },
      { trigger: 'Thinking about deadline', percentage: 65 },
      { trigger: 'Morning wake-up', percentage: 43 },
    ],
  };

  const getEffectivenessColor = (rating: number) => {
    if (rating >= 4) return 'var(--stride-green)';
    if (rating >= 3) return 'var(--stride-blue)';
    return 'var(--stride-red)';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="text-white p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/progress?tab=collection')}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Monster Profile</h1>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Monster Card */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="text-center mb-4">
              <div className="text-7xl mb-3">{monster.emoji}</div>
              <h2 className="text-2xl font-bold text-white mb-1">{monster.name}</h2>
              <p className="text-sm text-white/80">{monster.description}</p>
            </div>

            {/* Current HP */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2 text-white">
                <span>Current Strength</span>
                <span className="font-medium">{monster.currentHp}/{monster.maxHp}</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${(monster.currentHp / monster.maxHp) * 100}%`,
                    backgroundColor: 'var(--stride-red)'
                  }}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{monster.battleCount}</div>
                <div className="text-xs text-white/70">Battles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{Math.round((1 - monster.currentHp / monster.maxHp) * 100)}%</div>
                <div className="text-xs text-white/70">Defeated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-white/70">Day Streak</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link
                to={`/battle/${monster.id}`}
                className="flex-1 py-3 px-4 bg-white text-center rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                style={{ color: 'var(--stride-blue)' }}
              >
                <Swords className="w-4 h-4" />
                Battle Now
              </Link>
              <button className="px-4 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Edit className="w-5 h-5 text-white" />
              </button>
            </div>
          </Card>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-white border-b sticky top-0 z-10">
            <TabsTrigger value="overview" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
              Overview
            </TabsTrigger>
            <TabsTrigger value="diary" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
              Battle Log
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
              Insights
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="p-4 space-y-4">
            {/* Triggers */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">⚡</span>
                Known Triggers
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Opening laptop', 'Deadline pressure', 'Comparing progress', 'Monday mornings'].map((trigger, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 rounded-full text-sm"
                    style={{ color: 'var(--stride-blue)' }}
                  >
                    {trigger}
                  </span>
                ))}
              </div>
            </Card>

            {/* Attack Patterns */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
                Attack Patterns
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm mb-2" style={{ color: 'var(--stride-gray)' }}>
                    Most active times
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Morning', 'Afternoon', 'Evening', 'Night'].map((time, i) => (
                      <div
                        key={time}
                        className={`p-2 rounded-lg text-center text-xs ${
                          i === 0 || i === 1 ? 'bg-red-100 border-2 border-red-300' : 'bg-gray-100'
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2" style={{ color: 'var(--stride-gray)' }}>
                    Days
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-100 border-2 border-red-300 rounded-full text-sm">
                      Weekdays
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm" style={{ color: 'var(--stride-gray)' }}>
                      Weekends
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recommended Skills */}
            <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">⭐</span>
                Most Effective Skills
              </h3>
              <div className="space-y-2">
                {skills.filter(s => ['1', '2', '5'].includes(s.id)).map((skill) => (
                  <div key={skill.id} className="p-3 bg-white rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" style={{ color: 'var(--stride-green)' }} />
                Progress Timeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎯</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">First encountered</div>
                    <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      {new Date(monster.firstSeen).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📈</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Strongest point</div>
                    <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      February 15, 2026 (HP: 100)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎉</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Biggest victory</div>
                    <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      February 22, 2026 (-35 HP with squad)
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Delete Monster */}
            <button className="w-full p-3 border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
              <Trash2 className="w-4 h-4" />
              Delete Monster
            </button>
          </TabsContent>

          {/* Battle Log Tab */}
          <TabsContent value="diary" className="p-4 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{battleHistory.length} Battles</h3>
              <button className="text-sm px-3 py-1 bg-gray-100 rounded-lg">
                Filter
              </button>
            </div>

            {battleHistory.map((battle, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium mb-1">
                      {new Date(battle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs px-2 py-1 bg-gray-100 rounded">
                        -{battle.damageDealt} HP
                      </div>
                      {battle.coop && (
                        <div className="text-xs px-2 py-1 bg-green-100 rounded flex items-center gap-1" style={{ color: 'var(--stride-green)' }}>
                          <Users className="w-3 h-3" />
                          Co-op
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={star <= battle.effectiveness ? 'text-yellow-400' : 'text-gray-300'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                {/* HP Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                    <span>HP: {battle.hpBefore} → {battle.hpAfter}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-red-200 absolute"
                      style={{ width: `${battle.hpBefore}%` }}
                    />
                    <div
                      className="h-full absolute transition-all"
                      style={{
                        width: `${battle.hpAfter}%`,
                        backgroundColor: 'var(--stride-red)'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-sm mb-1" style={{ color: 'var(--stride-gray)' }}>Skills used:</div>
                  <div className="flex flex-wrap gap-1">
                    {battle.skillsUsed.map((skill, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-blue-50 rounded" style={{ color: 'var(--stride-blue)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {battle.notes && (
                  <div className="p-2 bg-gray-50 rounded text-sm italic" style={{ color: 'var(--stride-gray)' }}>
                    "{battle.notes}"
                  </div>
                )}
              </Card>
            ))}

            <button className="w-full p-3 border-2 border-dashed rounded-lg hover:bg-gray-50 transition-colors" style={{ borderColor: 'var(--stride-blue)', color: 'var(--stride-blue)' }}>
              View All Battles
            </button>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="p-4 space-y-4">
            {/* Community Stats */}
            <Card className="p-4 bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" style={{ color: 'var(--stride-blue)' }} />
                Community Data
              </h3>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold mb-1" style={{ color: 'var(--stride-blue)' }}>
                  {communityData.similarMonsters}
                </div>
                <div className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                  users have similar monsters
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: 'var(--stride-gray)' }}>
                You're not alone! Many students face similar challenges.
              </p>
            </Card>

            {/* Top Skills from Community */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">What Works for Others</h3>
              <div className="space-y-3">
                {communityData.topSkills.map((item, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{item.skill}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium">{item.effectiveness}</span>
                      </div>
                    </div>
                    <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      Used {item.uses.toLocaleString()} times
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2">
                      <div
                        className="h-full"
                        style={{
                          width: `${(item.effectiveness / 5) * 100}%`,
                          backgroundColor: getEffectivenessColor(item.effectiveness)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Common Triggers */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Common Triggers</h3>
              <div className="space-y-2">
                {communityData.commonTriggers.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm">{item.trigger}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: 'var(--stride-blue)'
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium w-8 text-right" style={{ color: 'var(--stride-gray)' }}>
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Similar Squad Members */}
            <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" style={{ color: 'var(--stride-green)' }} />
                Squad Members with Similar Monsters
              </h3>
              <div className="space-y-2">
                {['@study_buddy', '@anxious_engineer', '@thesis_warrior'].map((user, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--stride-purple)' }}>
                        {user[1].toUpperCase()}
                      </div>
                      <span className="font-medium text-sm">{user}</span>
                    </div>
                    <button className="px-3 py-1 text-xs text-white rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--stride-green)' }}>
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-4 bg-blue-50 border-2" style={{ borderColor: 'var(--stride-blue)' }}>
              <h3 className="font-semibold mb-2">💡 AI Insights</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--stride-gray)' }}>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Your monster is 42% weaker on days when you battle with your squad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Monday mornings are your most vulnerable time - consider scheduling battles then</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Body Double technique shows 85% effectiveness for this monster type</span>
                </li>
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
