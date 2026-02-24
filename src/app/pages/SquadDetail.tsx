import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, MessageCircle, UserPlus, Swords, Calendar } from 'lucide-react';
import { squads, squadMembers, monsters } from '../data/mockData';
import { Card } from '../components/ui/card';

export function SquadDetail() {
  const { squadId } = useParams();
  const navigate = useNavigate();
  const squad = squads.find(s => s.id === squadId) || squads[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[var(--stride-purple)] text-white p-4 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => navigate('/community')} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-semibold">Squad Details</h1>
        <div className="w-9" /> {/* Spacer */}
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* Squad Info Card */}
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2" style={{ borderColor: 'var(--stride-green)' }}>
          <div className="text-center mb-4">
            <div className="text-6xl mb-3">{squad.emoji}</div>
            <h2 className="text-2xl font-semibold mb-1">{squad.name}</h2>
            <p className="text-sm" style={{ color: 'var(--stride-gray)' }}>
              Formed: {new Date(squad.formed).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                Squad Battles
              </p>
              <p className="font-semibold">{squad.battleCount}</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                Win Rate
              </p>
              <p className="font-semibold">{squad.winRate}%</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--stride-gray)' }}>
                Members
              </p>
              <p className="font-semibold">{squad.memberCount}</p>
            </div>
          </div>
        </Card>

        {/* Current Battle */}
        {squad.currentBattle && (
          <Card className="p-4 bg-gradient-to-br from-red-50 to-orange-50 border-2" style={{ borderColor: 'var(--stride-red)' }}>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Swords className="w-5 h-5" />
              Current Co-op Battle
            </h3>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Monster: {squad.currentBattle.monster}</span>
                <span className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                  {squad.currentBattle.progress}%
                </span>
              </div>
              <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--stride-red)] transition-all"
                  style={{ width: `${squad.currentBattle.progress}%` }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/coop-battle/${squadId}`}
                className="flex-1 py-3 px-4 bg-[var(--stride-green)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity text-center"
              >
                Join Battle
              </Link>
              <button className="px-4 py-3 border-2 rounded-xl font-medium hover:bg-white transition-colors">
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
          </Card>
        )}

        {/* Members */}
        <div>
          <h3 className="font-semibold mb-3">Members ({squadMembers.length})</h3>
          <div className="space-y-2">
            {squadMembers.map((member) => (
              <Card key={member.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-12 h-12 rounded-full bg-[var(--stride-purple)] flex items-center justify-center text-white text-xl">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{member.username}</h4>
                        {member.role === 'captain' && (
                          <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                            Captain
                          </span>
                        )}
                      </div>
                      <p className="text-sm mb-1" style={{ color: 'var(--stride-gray)' }}>
                        Monster: {member.currentMonster}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                        Last active: {member.lastActive}
                      </p>
                    </div>
                  </div>
                  {member.id !== '1' && (
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs border-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Message
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Squad Diary */}
        <Card className="p-4" style={{ backgroundColor: 'var(--stride-diary)' }}>
          <h3 className="font-semibold mb-3">Squad Diary (Shared Insights)</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <div>
                <p>
                  <span className="font-medium">@study_buddy:</span> "Body Double worked great for writing sessions"
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--stride-gray)' }}>
                  2 days ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <div>
                <p>
                  <span className="font-medium">@anxious_engineer:</span> "Study café meetups helped everyone focus"
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--stride-gray)' }}>
                  5 days ago
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Upcoming Battles */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5" style={{ color: 'var(--stride-teal)' }} />
            Upcoming Battles
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Thesis Monster Raid</p>
                <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                  Today at 3:00 PM
                </p>
              </div>
              <button className="text-xs px-3 py-1.5 bg-[var(--stride-teal)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Set Reminder
              </button>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Exam Week Boss</p>
                <p className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                  Friday at 10:00 AM
                </p>
              </div>
              <button className="text-xs px-3 py-1.5 bg-[var(--stride-teal)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Set Reminder
              </button>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 pb-4">
          {squad.currentBattle ? (
            <>
              <Link
                to={`/coop-battle/${squadId}`}
                className="flex-1 py-3 px-4 bg-[var(--stride-green)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity text-center"
              >
                Start Battle
              </Link>
              <button className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Squad Chat
              </button>
            </>
          ) : (
            <>
              <button className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Squad Chat
              </button>
              <button className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                Invite
              </button>
            </>
          )}
        </div>

        <button className="w-full py-2 text-sm" style={{ color: 'var(--stride-red)' }}>
          Leave Squad
        </button>
      </div>
    </div>
  );
}
