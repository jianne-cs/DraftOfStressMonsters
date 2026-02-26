import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '../components/ui/card';

type GroundingStep = 'intro' | 'see' | 'hear' | 'feel' | 'smell' | 'taste' | 'breathe' | 'complete';

const steps: { id: GroundingStep; emoji: string; title: string; prompt: string; count: number }[] = [
  { id: 'see', emoji: '🔍', title: 'LOOK', prompt: 'Name 5 things you can see', count: 5 },
  { id: 'hear', emoji: '👂', title: 'LISTEN', prompt: 'Name 4 things you can hear', count: 4 },
  { id: 'feel', emoji: '🫂', title: 'FEEL', prompt: 'Name 3 things you can physically feel', count: 3 },
  { id: 'smell', emoji: '👃', title: 'SMELL', prompt: 'Name 2 things you can smell', count: 2 },
  { id: 'taste', emoji: '👅', title: 'TASTE', prompt: 'Name 1 thing you can taste', count: 1 },
  { id: 'breathe', emoji: '🌬️', title: 'BREATHE', prompt: 'Take one deep breath', count: 1 },
];

export function QuickGrounding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<GroundingStep>('intro');
  const [groundingRating, setGroundingRating] = useState<number | null>(null);

  const getCurrentStepData = () => {
    return steps.find(s => s.id === currentStep);
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentStep === 'intro') {
      setCurrentStep('see');
    } else if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    } else {
      setCurrentStep('complete');
    }
  };

  const stepData = getCurrentStepData();
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  const progress = currentStep === 'intro' ? 0 : currentStep === 'complete' ? 100 : ((currentIndex + 1) / steps.length) * 100;

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center">
          <div className="text-7xl mb-6">🌍</div>
          <h1 className="text-3xl font-bold mb-4">5-4-3-2-1 Grounding</h1>
          <p className="mb-6 text-lg" style={{ color: 'var(--stride-gray)' }}>
            This simple exercise helps you feel present by engaging your senses.
          </p>
          <p className="mb-8 text-sm" style={{ color: 'var(--stride-gray)' }}>
            Go at your own pace. There's no rush and no wrong way to do this.
          </p>
          <button
            onClick={handleNext}
            className="w-full py-4 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Start Grounding
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full mt-3 py-2 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors"
            style={{ color: 'var(--stride-gray)' }}
          >
            Not now
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 'complete') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center animate-in fade-in duration-500">
          <div className="text-7xl mb-6">✨</div>
          <h2 className="text-2xl font-bold mb-3">You're here. You're present.</h2>
          <p className="mb-6" style={{ color: 'var(--stride-gray)' }}>
            Well done. Your nervous system thanks you.
          </p>

          <Card className="p-4 bg-gray-50 mb-6">
            <p className="text-sm mb-3 font-medium">How grounded do you feel now?</p>
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setGroundingRating(rating)}
                  className={`w-12 h-12 rounded-lg font-bold transition-all ${
                    groundingRating === rating
                      ? 'bg-[var(--stride-blue)] text-white scale-110'
                      : 'bg-white border-2 hover:border-[var(--stride-blue)]'
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--stride-gray)' }}>
              <span>Floating</span>
              <span>Anchored</span>
            </div>
          </Card>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/quick-breathing')}
              className="w-full py-3 px-4 bg-[var(--stride-blue)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Try 5 Minutes Breathing?
            </button>
            <button
              onClick={() => navigate('/quick-journal')}
              className="w-full py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Write About This
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
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Grounding Exercise</h1>
            <div className="w-9" />
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in duration-500">
          {/* Step Icon */}
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center mb-8 text-7xl"
            style={{ backgroundColor: 'rgba(123, 196, 232, 0.1)' }}
          >
            {stepData?.emoji}
          </div>

          {/* Step Title */}
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--stride-blue)' }}>
            {stepData?.title}
          </h2>

          {/* Step Prompt */}
          <p className="text-xl mb-8" style={{ color: 'var(--stride-gray)' }}>
            {stepData?.prompt}
          </p>

          {/* Count Display */}
          {stepData && stepData.id !== 'breathe' && (
            <div className="flex gap-3 mb-12">
              {Array.from({ length: stepData.count }).map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-lg"
                  style={{ borderColor: 'var(--stride-blue)', color: 'var(--stride-blue)' }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}

          {/* Helper Text */}
          <p className="text-sm mb-8 max-w-sm" style={{ color: 'var(--stride-gray)' }}>
            {stepData?.id === 'breathe' 
              ? 'In through your nose, out through your mouth'
              : 'Take your time. Notice each one fully before moving on.'
            }
          </p>

          {/* Continue Button */}
          <button
            onClick={handleNext}
            className="w-full max-w-xs py-4 px-6 bg-[var(--stride-blue)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg"
          >
            {stepData?.id === 'breathe' ? (
              <>
                <Check className="w-6 h-6" />
                Complete
              </>
            ) : (
              <>
                Done
                <Check className="w-6 h-6" />
              </>
            )}
          </button>

          <p className="text-xs mt-6" style={{ color: 'var(--stride-gray)' }}>
            Go at your own pace. No rush.
          </p>
        </div>
      </div>
    </div>
  );
}
