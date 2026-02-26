import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { X } from 'lucide-react';

type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'pause';

export function QuickBreathing() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<BreathPhase>('inhale');
  const [count, setCount] = useState(4);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(true);
  const [showCompletion, setShowCompletion] = useState(false);

  // Breathing cycle: Inhale 4s, Hold 4s, Exhale 4s, Pause 4s
  const phaseDurations = {
    inhale: 4,
    hold: 4,
    exhale: 4,
    pause: 4,
  };

  const phaseText = {
    inhale: 'Breathe in',
    hold: 'Hold',
    exhale: 'Breathe out',
    pause: 'Pause',
  };

  // Animation scale for breathing circle
  const phaseScale = {
    inhale: 'scale-150',
    hold: 'scale-150',
    exhale: 'scale-75',
    pause: 'scale-75',
  };

  useEffect(() => {
    if (!isActive) return;

    const phaseTimer = setInterval(() => {
      setCount(prev => {
        if (prev > 1) return prev - 1;
        
        // Move to next phase
        const phases: BreathPhase[] = ['inhale', 'hold', 'exhale', 'pause'];
        const currentIndex = phases.indexOf(phase);
        const nextPhase = phases[(currentIndex + 1) % phases.length];
        setPhase(nextPhase);
        return phaseDurations[nextPhase];
      });
    }, 1000);

    return () => clearInterval(phaseTimer);
  }, [phase, isActive]);

  useEffect(() => {
    if (!isActive) return;

    const overallTimer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsActive(false);
          setShowCompletion(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(overallTimer);
  }, [isActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center animate-in fade-in duration-500">
          <div className="text-7xl mb-6">🌟</div>
          <h2 className="text-2xl font-bold mb-3">You did it</h2>
          <p className="mb-6" style={{ color: 'var(--stride-gray)' }}>
            You just gave yourself 5 minutes of calm. That matters.
          </p>

          <div className="mb-6">
            <p className="text-sm mb-3 font-medium">How do you feel compared to before?</p>
            <div className="flex justify-center gap-4">
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-4xl">😌</span>
                <span className="text-xs">Better</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-4xl">😐</span>
                <span className="text-xs">Same</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-4xl">😟</span>
                <span className="text-xs">Worse</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/quick-grounding')}
              className="w-full py-3 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Try Grounding Exercise
            </button>
            <button
              onClick={() => {
                setShowCompletion(false);
                setTimeRemaining(300);
                setIsActive(true);
                setPhase('inhale');
                setCount(4);
              }}
              className="w-full py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Another 5 Minutes?
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors"
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative" style={{ backgroundColor: 'var(--stride-blue)' }}>
      {/* Exit Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Time Remaining */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
        {formatTime(timeRemaining)}
      </div>

      <div className="max-w-md w-full text-center">
        {/* Breathing Circle */}
        <div className="mb-8 flex items-center justify-center">
          <div
            className={`w-48 h-48 rounded-full transition-all duration-[4000ms] ease-in-out ${phaseScale[phase]}`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 0 60px rgba(255, 255, 255, 0.5)',
            }}
          />
        </div>

        {/* Instructions */}
        <div className="text-white mb-4">
          <h2 className="text-4xl font-bold mb-2">{phaseText[phase]}</h2>
          <p className="text-6xl font-light">{count}</p>
        </div>

        {/* Pause/Resume */}
        <button
          onClick={() => setIsActive(!isActive)}
          className="mt-8 px-6 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
        >
          {isActive ? 'Pause' : 'Resume'}
        </button>

        {/* Subtle encouragement */}
        <p className="mt-12 text-white/60 text-sm">
          You're doing great. Just follow the rhythm.
        </p>
      </div>
    </div>
  );
}
