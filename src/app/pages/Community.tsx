import { useState } from 'react';
import { Link } from 'react-router';
import { Users, Plus, MessageCircle, Calendar, TrendingUp } from 'lucide-react';
import { squads } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function Community() {
  const [activeTab, setActiveTab] = useState('squads');

  const discoverSquads = [
    { name: 'Procrastination Busters', members: 4, status: 'active now', emoji: '⚡' },
    { name: 'Anxiety Allies', members: 12, status: 'battle daily', emoji: '💙' },
    { name: 'Finals Week Warriors', members: 8, status: 'forming now', emoji: '📚' },
  ];

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="text-white p-6" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <h1 className="text-2xl font-semibold mb-2">Community Hub</h1>
        <p className="text-sm opacity-90">Connect, share, and battle together</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-white border-b sticky top-0 z-10">
          <TabsTrigger value="squads" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
            My Squads
          </TabsTrigger>
          <TabsTrigger value="feed" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
            Feed
          </TabsTrigger>
          <TabsTrigger value="monsters" className="data-[state=active]:text-[var(--stride-blue)] data-[state=active]:border-b-2 data-[state=active]:border-[var(--stride-blue)]">
            Monsters
          </TabsTrigger>
        </TabsList>

        {/* Squads Tab */}
        <TabsContent value="squads" className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">My Squads ({squads.length})</h3>
          </div>

          {/* User's Squads */}
          <div className="space-y-3">
            {squads.map((squad) => (
              <Link key={squad.id} to={`/squad/${squad.id}`}>
                <Card className="p-4 hover:border-[var(--stride-green)] transition-colors cursor-pointer border-2">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{squad.emoji}</span>
                        <h4 className="font-semibold">{squad.name}</h4>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                        You + {squad.memberCount - 1} members
                      </p>
                    </div>
                    {squad.currentBattle && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        Active
                      </span>
                    )}
                  </div>

                  {squad.currentBattle ? (
                    <>
                      <p className="text-sm mb-2">
                        <span style={{ color: 'var(--stride-gray)' }}>Active battle:</span>{' '}
                        <span className="font-medium">{squad.currentBattle.monster}</span>
                      </p>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full bg-[var(--stride-green)] transition-all"
                          style={{ width: `${squad.currentBattle.progress}%` }}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 px-3 bg-[var(--stride-green)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                          Join Battle
                        </button>
                        <button className="flex-1 py-2 px-3 border-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          Chat
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
                        Last battle: {squad.lastBattle}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 px-3 border-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          View Squad
                        </button>
                        <button className="flex-1 py-2 px-3 border-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Schedule
                        </button>
                      </div>
                    </>
                  )}
                </Card>
              </Link>
            ))}
          </div>

          {/* Discover Squads */}
          <div>
            <h3 className="font-semibold mb-3">Discover Squads</h3>
            <div className="space-y-2">
              {discoverSquads.map((squad, i) => (
                <Card key={i} className="p-3 hover:border-[var(--stride-teal)] transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{squad.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-sm">{squad.name}</h4>
                        <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                          {squad.members} members • {squad.status}
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-[var(--stride-teal)] text-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity">
                      Join
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Create Squad Button */}
          <Card className="p-4 bg-gradient-to-br from-green-100 to-teal-100 border-2 border-dashed hover:border-[var(--stride-green)] transition-colors cursor-pointer">
            <button className="w-full text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Plus className="w-5 h-5" />
                <span className="font-semibold">Create New Squad</span>
              </div>
              <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                Start your own battle group
              </p>
            </button>
          </Card>
        </TabsContent>

        {/* Feed Tab */}
        <TabsContent value="feed" className="p-4 space-y-4">
          <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold mb-1">Campus Leaderboard</h3>
                <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                  Top Stress Warriors this week
                </p>
              </div>
              <TrendingUp className="w-8 h-8" style={{ color: 'var(--stride-teal)' }} />
            </div>
            <button className="w-full py-2 px-4 bg-white rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              View Leaderboard
            </button>
          </Card>

          <div>
            <h3 className="font-semibold mb-3">Discussion Feed</h3>
            <div className="space-y-3">
              {[
                {
                  user: '@study_buddy',
                  text: 'Anyone else procrastinating on thesis? 😅',
                  likes: 24,
                  comments: 8,
                },
                {
                  user: '@anxious_engineer',
                  text: 'Found a great technique for exam anxiety - Body Double works!',
                  likes: 42,
                  comments: 15,
                },
                {
                  user: '@thesis_runner',
                  text: 'Looking for squad members for morning battles',
                  likes: 12,
                  comments: 5,
                },
              ].map((post, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--stride-purple)] flex items-center justify-center text-white">
                      👤
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{post.user}</h4>
                      <p className="text-sm mb-3">{post.text}</p>
                      <div className="flex gap-4 text-xs" style={{ color: 'var(--stride-gray)' }}>
                        <button className="hover:text-[var(--stride-teal)] transition-colors">
                          ❤️ {post.likes}
                        </button>
                        <button className="hover:text-[var(--stride-teal)] transition-colors">
                          💬 {post.comments}
                        </button>
                        <button className="hover:text-[var(--stride-teal)] transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Monsters Tab */}
        <TabsContent value="monsters" className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-3">Community Monster Browser</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--stride-gray)' }}>
              See what challenges others are facing and discover effective strategies
            </p>
            
            {/* Filter Buttons */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {['All', 'Anxiety', 'Procrastination', 'Sadness', 'Overwhelm', 'Custom'].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    filter === 'All'
                      ? 'bg-[var(--stride-blue)] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Community Monsters */}
            <div className="space-y-3">
              {[
                {
                  name: 'Thesis Panic Dragon',
                  emoji: '🐉',
                  users: 247,
                  topSkill: '5-Minute Launch',
                  effectiveness: 4.2,
                  category: 'Anxiety',
                },
                {
                  name: 'Monday Morning Dread',
                  emoji: '😴',
                  users: 189,
                  topSkill: 'Body Double',
                  effectiveness: 4.5,
                  category: 'Procrastination',
                },
                {
                  name: 'Imposter Syndrome Shadow',
                  emoji: '👤',
                  users: 321,
                  topSkill: 'Reality Check',
                  effectiveness: 3.8,
                  category: 'Anxiety',
                },
                {
                  name: 'Social Battery Drain',
                  emoji: '🔋',
                  users: 156,
                  topSkill: 'Cognitive Shield',
                  effectiveness: 4.1,
                  category: 'Overwhelm',
                },
              ].map((monster, i) => (
                <Card key={i} className="p-4 hover:border-[var(--stride-blue)] transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="text-4xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{monster.name}</h4>
                          <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                            {monster.users} users battling this
                          </p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-50 rounded-full" style={{ color: 'var(--stride-blue)' }}>
                          {monster.category}
                        </span>
                      </div>
                      
                      <div className="p-2 bg-green-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                              Most effective:
                            </p>
                            <p className="text-sm font-medium">{monster.topSkill}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="font-semibold text-sm">{monster.effectiveness}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Squad Members' Monsters */}
          <div>
            <h3 className="font-semibold mb-3">Squad Members' Monsters</h3>
            <div className="space-y-3">
              {[
                {
                  user: '@study_buddy',
                  monster: 'Deadline Demon',
                  emoji: '⏰',
                  sharedWith: 'Thesis Warriors',
                },
                {
                  user: '@anxious_engineer',
                  monster: 'Code Review Anxiety',
                  emoji: '💻',
                  sharedWith: 'Thesis Warriors',
                },
              ].map((item, i) => (
                <Card key={i} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[var(--stride-purple)] flex items-center justify-center text-white text-sm">
                        {item.user[1].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.user}</p>
                        <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                          Shared with {item.sharedWith}
                        </p>
                      </div>
                    </div>
                    <div className="text-3xl">{item.emoji}</div>
                  </div>
                  <h4 className="font-semibold mb-3">{item.monster}</h4>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 px-3 bg-[var(--stride-green)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      Offer Help
                    </button>
                    <button className="flex-1 py-2 px-3 border-2 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                      View Details
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Similar Monsters Suggestion */}
          <Card className="p-4 bg-blue-50 border-2" style={{ borderColor: 'var(--stride-blue)' }}>
            <h3 className="font-semibold mb-2">💡 Find Your Battle Buddies</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--stride-gray)' }}>
              Connect with users fighting similar monsters to share strategies and support
            </p>
            <button className="w-full py-2 px-4 bg-[var(--stride-blue)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Match Me
            </button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}