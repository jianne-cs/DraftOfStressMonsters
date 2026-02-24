import { useState } from 'react';
import { Search, BookOpen, Users, Brain } from 'lucide-react';
import { skills, monsters } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function Learn() {
  const [activeTab, setActiveTab] = useState('skills');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="text-white p-6" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <h1 className="text-2xl font-semibold mb-4">Learn & Grow</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search coping skills..."
            className="w-full pl-10 pr-4 py-3 rounded-xl text-gray-900"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-white border-b">
          <TabsTrigger value="skills" className="data-[state=active]:text-[var(--stride-teal)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-teal)]">
            Skills
          </TabsTrigger>
          <TabsTrigger value="monsters" className="data-[state=active]:text-[var(--stride-teal)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-teal)]">
            Monsters
          </TabsTrigger>
          <TabsTrigger value="tactics" className="data-[state=active]:text-[var(--stride-teal)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-teal)]">
            Squad Tactics
          </TabsTrigger>
        </TabsList>

        {/* Skills Tab */}
        <TabsContent value="skills" className="p-4 space-y-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'Breathing', 'CBT', 'Mindfulness', 'Squad'].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  category === 'All'
                    ? 'bg-[var(--stride-teal)] text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Featured Skills</h3>
            <div className="space-y-3">
              {skills.map((skill) => {
                const avgEffectiveness = Object.values(skill.effectiveness).reduce((a, b) => a + b, 0) / 
                  (Object.values(skill.effectiveness).length || 1);
                return (
                  <Card key={skill.id} className="p-4 hover:border-[var(--stride-teal)] transition-colors cursor-pointer border-2">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{skill.name}</h4>
                        <p className="text-sm mb-2" style={{ color: 'var(--stride-gray)' }}>
                          {skill.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="px-2 py-1 bg-gray-100 rounded">
                            ⏱️ {skill.duration}
                          </span>
                          {skill.damage > 0 && (
                            <span className="px-2 py-1 bg-gray-100 rounded">
                              💥 -{skill.damage} HP
                            </span>
                          )}
                          <span>
                            {'⭐'.repeat(Math.round(avgEffectiveness))}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {Object.keys(skill.effectiveness).length > 0 && (
                      <div className="pt-3 border-t">
                        <p className="text-xs font-medium mb-2" style={{ color: 'var(--stride-gray)' }}>
                          Most effective against:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(skill.effectiveness).map(([type, stars]) => (
                            <span key={type} className="text-xs px-2 py-1 bg-blue-50 rounded capitalize">
                              {type}: {'⭐'.repeat(stars)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 py-2 px-4 border-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Save
                      </button>
                      <button className="flex-1 py-2 px-4 bg-[var(--stride-teal)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        Try Now
                      </button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* Monsters Tab */}
        <TabsContent value="monsters" className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-3">Monster Index</h3>
            <div className="space-y-3">
              {monsters.map((monster) => (
                <Card key={monster.id} className="p-4 hover:border-[var(--stride-teal)] transition-colors cursor-pointer border-2">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{monster.name}</h4>
                      <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
                        {monster.description}
                      </p>

                      <div className="space-y-2 mb-3">
                        <div>
                          <p className="text-xs font-medium mb-1" style={{ color: 'var(--stride-gray)' }}>
                            Weaknesses:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {monster.weaknesses.map((weakness, i) => (
                              <span key={i} className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded">
                                {weakness}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-2 px-4 border-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-4 bg-blue-50">
            <div className="flex items-start gap-3">
              <Brain className="w-8 h-8 mt-1" style={{ color: 'var(--stride-teal)' }} />
              <div>
                <h4 className="font-semibold mb-1">Community Insights</h4>
                <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
                  Learn from thousands of student battles
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• 5-Minute Launch: ⭐4.8 average rating</li>
                  <li>• Body Double: ⭐4.6 average rating</li>
                  <li>• Best time for Procrastination: Mornings</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Squad Tactics Tab */}
        <TabsContent value="tactics" className="p-4 space-y-4">
          <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2" style={{ borderColor: 'var(--stride-green)' }}>
            <div className="flex items-start gap-3">
              <Users className="w-8 h-8 mt-1" style={{ color: 'var(--stride-green)' }} />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Squad Tactics Guide</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
                  Master co-op battles with your squad
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            {[
              {
                title: 'How to Run a Co-op Battle',
                description: "Beginner's guide to squad roles and communication",
                icon: '📖',
              },
              {
                title: 'Squad Role Guide',
                description: 'Tank, Healer, Attacker, Strategist - which are you?',
                icon: '🎯',
              },
              {
                title: 'Effective Squad Chat',
                description: 'Communication tips for better co-op battles',
                icon: '💬',
              },
              {
                title: 'Building Squad Trust',
                description: 'Create a supportive battle community',
                icon: '🤝',
              },
            ].map((guide, i) => (
              <Card key={i} className="p-4 hover:border-[var(--stride-teal)] transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{guide.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{guide.title}</h4>
                    <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
                      {guide.description}
                    </p>
                    <button className="text-sm font-medium" style={{ color: 'var(--stride-teal)' }}>
                      Read Guide →
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-4" style={{ backgroundColor: 'var(--stride-diary)' }}>
            <h4 className="font-semibold mb-2">💡 Quick Tips</h4>
            <ul className="space-y-2 text-sm">
              <li>• Squad battles have +20% effectiveness vs solo</li>
              <li>• Assign roles before starting (Tank, Healer, etc.)</li>
              <li>• Use Squad Rally to boost everyone's next attack</li>
              <li>• Morning battles work best for Procrastination</li>
              <li>• Body Double is highly effective in groups</li>
            </ul>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}