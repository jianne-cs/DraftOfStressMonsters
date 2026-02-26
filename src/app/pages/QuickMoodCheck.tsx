import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/card';

type Mood = 'overwhelmed' | 'irritable' | 'anxious' | 'down' | 'exhausted' | 'numb';

const moods: { id: Mood; emoji: string; label: string; color: string }[] = [
  { id: 'overwhelmed', emoji: '😫', label: 'Overwhelmed', color: '#9B51E0' },
  { id: 'irritable', emoji: '😠', label: 'Irritable', color: '#EB5757' },
  { id: 'anxious', emoji: '😰', label: 'Anxious', color: '#F2994A' },
  { id: 'down', emoji: '😔', label: 'Down', color: '#2D9CDB' },
  { id: 'exhausted', emoji: '🥱', label: 'Exhausted', color: '#828282' },
  { id: 'numb', emoji: '😐', label: 'Numb', color: '#BDBDBD' },
];

const validations: Record<Mood, { message: string; body: string; action: string; actionLink: string }> = {
  overwhelmed: {
    message: "This is a lot to carry right now.",
    body: "Shoulders tight, breath shallow",
    action: "Try 2 minutes of breathing?",
    actionLink: '/quick-breathing'
  },
  irritable: {
    message: "Your frustration makes sense.",
    body: "Jaw clenched, fists tight",
    action: "Grounding might help release this.",
    actionLink: '/quick-grounding'
  },
  anxious: {
    message: "Anxiety is trying to protect you.",
    body: "Heart racing, butterflies",
    action: "Let's do a quick grounding exercise.",
    actionLink: '/quick-grounding'
  },
  down: {
    message: "It's heavy right now. That's real.",
    body: "Chest heavy, body slow",
    action: "Even 1 minute of self-compassion?",
    actionLink: '/quick-breathing'
  },
  exhausted: {
    message: "You've been running on empty.",
    body: "Eyes heavy, body aching",
    action: "Rest is allowed. 5 minute breathing?",
    actionLink: '/quick-breathing'
  },
  numb: {
    message: "Sometimes we need to go numb to survive.",
    body: "Feeling disconnected",
    action: "Grounding can help you feel present.",
    actionLink: '/quick-grounding'
  },
};

export function QuickMoodCheck() {
  const navigate = useNavigate();
  const [selectedMoods, setSelectedMoods] = useState<Mood[]>([]);
  const [intensity, setIntensity] = useState(3);
  const [showValidation, setShowValidation] = useState(false);

  const toggleMood = (moodId: Mood) => {
    if (selectedMoods.includes(moodId)) {
      setSelectedMoods(selectedMoods.filter(m => m !== moodId));
      if (selectedMoods.length === 1) {
        setShowValidation(false);
      }
    } else {
      setSelectedMoods([...selectedMoods, moodId]);
      setShowValidation(true);
    }
  };

  const primaryMood = selectedMoods[0];
  const validation = primaryMood ? validations[primaryMood] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="text-white p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">How are you feeling?</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {!showValidation ? (
          <>
            <p className="text-center mb-6" style={{ color: 'var(--stride-gray)' }}>
              Tap one (or more) that matches right now
            </p>

            {/* Mood Grid */}
            <div className="grid grid-cols-2 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => toggleMood(mood.id)}
                  className={`p-6 rounded-2xl border-4 transition-all ${
                    selectedMoods.includes(mood.id)
                      ? 'border-[var(--stride-blue)] bg-blue-50 scale-105'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-6xl mb-3">{mood.emoji}</div>
                  <div className="font-semibold">{mood.label}</div>
                </button>
              ))}
            </div>

            {selectedMoods.length > 1 && (
              <Card className="p-4 bg-blue-50 text-center">
                <p className="text-sm" style={{ color: 'var(--stride-blue)' }}>
                  It's possible to feel more than one thing.<br />
                  That's valid and human.
                </p>
              </Card>
            )}
          </>
        ) : (
          <div className="space-y-4 animate-in fade-in duration-500">
            {/* Selected Mood Display */}
            <Card className="p-6 text-center border-2" style={{ borderColor: validation?.action ? 'var(--stride-blue)' : 'transparent' }}>
              <div className="text-7xl mb-4">
                {selectedMoods.map(m => moods.find(mood => mood.id === m)?.emoji).join(' ')}
              </div>
              <h2 className="text-xl font-bold mb-2">
                {selectedMoods.length === 1 
                  ? `You're feeling ${moods.find(m => m.id === primaryMood)?.label.toLowerCase()}`
                  : `Right now you're feeling ${selectedMoods.map(m => moods.find(mood => mood.id === m)?.label.toLowerCase()).join(' and ')}`
                }
              </h2>
            </Card>

            {/* Validation */}
            {validation && (
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                <h3 className="font-semibold mb-3 text-lg">{validation.message}</h3>
                <div className="mb-4 p-3 bg-white rounded-lg">
                  <p className="text-sm mb-1" style={{ color: 'var(--stride-gray)' }}>
                    Your body might be feeling:
                  </p>
                  <p className="text-sm font-medium">{validation.body}</p>
                </div>
              </Card>
            )}

            {/* Intensity Slider */}
            <Card className="p-4">
              <label className="block mb-3 font-medium text-sm">
                How intense is this?
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--stride-blue) 0%, var(--stride-blue) ${(intensity / 5) * 100}%, #e5e7eb ${(intensity / 5) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--stride-gray)' }}>
                <span>Light</span>
                <span className="font-semibold">{intensity}/5</span>
                <span>Intense</span>
              </div>
            </Card>

            {/* Optional Note */}
            <Card className="p-4">
              <label className="block mb-2 text-sm font-medium">
                Want to add a note? (optional)
              </label>
              <textarea
                className="w-full p-3 border-2 rounded-lg focus:border-[var(--stride-blue)] focus:outline-none resize-none"
                placeholder="What's on your mind?"
                rows={3}
              />
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              {validation && (
                <button
                  onClick={() => navigate(validation.actionLink)}
                  className="w-full py-4 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg"
                >
                  {validation.action}
                </button>
              )}
              <button
                onClick={() => navigate('/quick-journal')}
                className="w-full py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Write about it
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full py-2 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors"
                style={{ color: 'var(--stride-gray)' }}
              >
                Done for now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
