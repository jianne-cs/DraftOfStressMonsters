import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Mic, Save } from 'lucide-react';
import { Card } from '../components/ui/card';

const prompts = [
  "What's taking up space in your mind right now?",
  "What emotion is loudest right now?",
  "Where in your body do you feel the stress?",
  "Is there one small thing that's okay right now?",
  "Write whatever comes. No editing allowed.",
];

export function QuickJournal() {
  const navigate = useNavigate();
  const [entry, setEntry] = useState('');
  const [showPrompts, setShowPrompts] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const handleSave = () => {
    if (entry.trim()) {
      // In real app, save to backend/local storage
      setShowCompletion(true);
    }
  };

  const handleVoiceInput = () => {
    // In real app, integrate with Web Speech API
    setIsListening(!isListening);
  };

  const insertPrompt = (prompt: string) => {
    setEntry(prev => prev ? `${prev}\n\n${prompt}\n` : `${prompt}\n`);
    setShowPrompts(false);
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center animate-in fade-in duration-500">
          <div className="text-7xl mb-6">💫</div>
          <h2 className="text-2xl font-bold mb-3">Entry saved</h2>
          <p className="mb-6" style={{ color: 'var(--stride-gray)' }}>
            You gave yourself space to express. That takes courage.
          </p>

          <Card className="p-4 bg-gray-50 mb-6">
            <p className="text-sm mb-3 font-medium">How do you feel after writing?</p>
            <div className="flex justify-center gap-3">
              <button className="flex flex-col items-center gap-1 p-2 hover:bg-white rounded-lg transition-colors">
                <span className="text-3xl">🌤️</span>
                <span className="text-xs">Lighter</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 hover:bg-white rounded-lg transition-colors">
                <span className="text-3xl">😌</span>
                <span className="text-xs">Released</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 hover:bg-white rounded-lg transition-colors">
                <span className="text-3xl">💭</span>
                <span className="text-xs">Clearer</span>
              </button>
            </div>
          </Card>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/quick-breathing')}
              className="w-full py-3 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Try Breathing Exercise
            </button>
            <button
              onClick={() => {
                setEntry('');
                setShowCompletion(false);
              }}
              className="w-full py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Write Another Entry
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="text-white p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Daily Journal</h1>
          <button
            onClick={handleSave}
            disabled={!entry.trim()}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* Privacy Notice */}
        <Card className="p-3 bg-blue-50 border-2" style={{ borderColor: 'var(--stride-blue)' }}>
          <p className="text-xs text-center" style={{ color: 'var(--stride-blue)' }}>
            🔒 This is just for you. Private and secure.
          </p>
        </Card>

        {/* Text Area */}
        <div className="relative">
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="What's on your mind? No rules, no judgment."
            className="w-full min-h-[400px] p-4 border-2 rounded-xl focus:border-[var(--stride-blue)] focus:outline-none resize-none text-lg"
            style={{ lineHeight: '1.8' }}
            autoFocus
          />
          
          {/* Voice Input Button */}
          <button
            onClick={handleVoiceInput}
            className={`absolute bottom-4 right-4 p-3 rounded-full transition-all ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            title="Voice input"
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>

        {/* Prompt Helper */}
        <button
          onClick={() => setShowPrompts(!showPrompts)}
          className="w-full py-2 text-sm text-center hover:bg-gray-50 rounded-lg transition-colors"
          style={{ color: 'var(--stride-gray)' }}
        >
          {showPrompts ? 'Hide prompts' : 'Need a prompt?'}
        </button>

        {showPrompts && (
          <Card className="p-4 space-y-2 animate-in fade-in duration-300">
            {prompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => insertPrompt(prompt)}
                className="w-full p-3 text-left rounded-lg border-2 border-gray-200 hover:border-[var(--stride-blue)] hover:bg-blue-50 transition-colors"
              >
                <p className="text-sm">{prompt}</p>
              </button>
            ))}
          </Card>
        )}

        {/* Word Count */}
        {entry.length > 0 && (
          <p className="text-xs text-center" style={{ color: 'var(--stride-gray)' }}>
            {entry.split(/\s+/).filter(w => w).length} words • {entry.length} characters
          </p>
        )}

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!entry.trim()}
          className="w-full py-4 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
        >
          <Save className="w-6 h-6" />
          Save Entry
        </button>

        {/* Helper Text */}
        <p className="text-xs text-center" style={{ color: 'var(--stride-gray)' }}>
          One word or a thousand—whatever you need is enough
        </p>
      </div>
    </div>
  );
}
