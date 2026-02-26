import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Card } from '../components/ui/card';

type MonsterBodyType = 'anxiety-imp' | 'irritability-ogre' | 'sadness-shadow' | 'overwhelm-hydra' | 'perfectionist-golem';
type MonsterFeature = 'sharp-teeth' | 'many-eyes' | 'heavy-chains' | 'fog-aura' | 'claws' | 'shadow-form' | 'multiple-heads' | 'invisible' | 'pulsing-heart' | 'heavy-feet';
type MonsterColor = 'red' | 'blue' | 'purple' | 'gray' | 'black' | 'orange' | 'green';

const categories = [
  { id: 'anxiety', name: 'Anxiety', emoji: '😰', examples: 'Worry, Social Anxiety, Panic' },
  { id: 'mood', name: 'Mood', emoji: '😢', examples: 'Sadness, Emptiness, Irritability' },
  { id: 'motivation', name: 'Motivation', emoji: '⏰', examples: 'Procrastination, Burnout, Overwhelm' },
  { id: 'self-concept', name: 'Self-Concept', emoji: '🎯', examples: 'Perfectionism, Self-Criticism, Imposter Syndrome' },
  { id: 'custom', name: 'Custom', emoji: '✨', examples: 'Your unique struggle' },
];

const bodyTypes: { id: MonsterBodyType; name: string; emoji: string; description: string }[] = [
  { id: 'anxiety-imp', name: 'Anxiety Imp', emoji: '👹', description: 'Racing thoughts & restlessness' },
  { id: 'irritability-ogre', name: 'Irritability Ogre', emoji: '👺', description: 'Frustration & explosive feelings' },
  { id: 'sadness-shadow', name: 'Sadness Shadow', emoji: '👤', description: 'Low energy & feeling unseen' },
  { id: 'overwhelm-hydra', name: 'Overwhelm Hydra', emoji: '🐉', description: 'Pulled in many directions' },
  { id: 'perfectionist-golem', name: 'Perfectionist Golem', emoji: '🗿', description: 'Rigid standards & fear of mistakes' },
];

const features: { id: MonsterFeature; name: string; icon: string; description: string }[] = [
  { id: 'sharp-teeth', name: 'Sharp Teeth', icon: '🦷', description: 'Harsh self-criticism' },
  { id: 'many-eyes', name: 'Many Eyes', icon: '👀', description: 'Feeling watched/judged' },
  { id: 'heavy-chains', name: 'Heavy Chains', icon: '⛓️', description: 'Exhaustion & weight' },
  { id: 'fog-aura', name: 'Fog Aura', icon: '🌫️', description: 'Brain fog & confusion' },
  { id: 'claws', name: 'Sharp Claws', icon: '🔪', description: 'Sudden anxiety spikes' },
  { id: 'shadow-form', name: 'Shadow Form', icon: '🌑', description: 'Unidentifiable unease' },
  { id: 'multiple-heads', name: 'Multiple Heads', icon: '👥', description: 'Juggling many things' },
  { id: 'invisible', name: 'Invisible', icon: '👻', description: 'Feeling unheard/unseen' },
  { id: 'pulsing-heart', name: 'Pulsing Heart', icon: '💓', description: 'Physical anxiety symptoms' },
  { id: 'heavy-feet', name: 'Heavy Feet', icon: '🦶', description: 'Procrastination paralysis' },
];

const colors: { id: MonsterColor; name: string; hex: string; emotion: string }[] = [
  { id: 'red', name: 'Red', hex: '#EB5757', emotion: 'Anger & agitation' },
  { id: 'blue', name: 'Blue', hex: '#2D9CDB', emotion: 'Sadness & melancholy' },
  { id: 'purple', name: 'Purple', hex: '#9B51E0', emotion: 'Anxiety & unease' },
  { id: 'gray', name: 'Gray', hex: '#828282', emotion: 'Numbness & emptiness' },
  { id: 'black', name: 'Black', hex: '#333333', emotion: 'Overwhelming & consuming' },
  { id: 'orange', name: 'Orange', hex: '#F2994A', emotion: 'Restless agitation' },
  { id: 'green', name: 'Green', hex: '#27AE60', emotion: 'Envy & comparison' },
];

const triggerOptions = [
  'Opening laptop/email',
  'Thinking about deadlines',
  'Sunday evenings',
  'Monday mornings',
  'Social media comparison',
  'Being alone',
  'Crowded spaces',
  'Unexpected changes',
  'Criticism (real or anticipated)',
  'Making decisions',
];

const attackPatterns = [
  { id: 'morning', label: 'Morning (6am-12pm)' },
  { id: 'afternoon', label: 'Afternoon (12pm-6pm)' },
  { id: 'evening', label: 'Evening (6pm-10pm)' },
  { id: 'night', label: 'Late Night (10pm-6am)' },
];

const attackDays = [
  { id: 'weekdays', label: 'Weekdays' },
  { id: 'weekends', label: 'Weekends' },
];

export function CreateMonster() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1: Naming
  const [category, setCategory] = useState<string>('');
  const [customName, setCustomName] = useState('');

  // Step 2: Visual Customization
  const [bodyType, setBodyType] = useState<MonsterBodyType>('anxiety-imp');
  const [selectedFeatures, setSelectedFeatures] = useState<MonsterFeature[]>([]);
  const [selectedColor, setSelectedColor] = useState<MonsterColor>('purple');

  // Step 3: Stats & Patterns
  const [currentHp, setCurrentHp] = useState(70);
  const [triggers, setTriggers] = useState<string[]>([]);
  const [customTrigger, setCustomTrigger] = useState('');
  const [selectedPatterns, setSelectedPatterns] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>(['weekdays']);
  const [firstNoticed, setFirstNoticed] = useState('');
  const [shareWithSquad, setShareWithSquad] = useState(false);

  const toggleFeature = (featureId: MonsterFeature) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    );
  };

  const toggleTrigger = (trigger: string) => {
    setTriggers(prev =>
      prev.includes(trigger)
        ? prev.filter(t => t !== trigger)
        : [...prev, trigger]
    );
  };

  const addCustomTrigger = () => {
    if (customTrigger.trim() && !triggers.includes(customTrigger.trim())) {
      setTriggers([...triggers, customTrigger.trim()]);
      setCustomTrigger('');
    }
  };

  const togglePattern = (pattern: string) => {
    setSelectedPatterns(prev =>
      prev.includes(pattern)
        ? prev.filter(p => p !== pattern)
        : [...prev, pattern]
    );
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const getMonsterName = () => {
    if (category === 'custom') return customName || 'Unnamed Monster';
    const cat = categories.find(c => c.id === category);
    return cat ? `${cat.name} Monster` : 'Unnamed Monster';
  };

  const canProceed = () => {
    if (step === 1) return category && (category !== 'custom' || customName.trim());
    if (step === 2) return bodyType && selectedColor;
    if (step === 3) return triggers.length > 0 && selectedPatterns.length > 0;
    return false;
  };

  const handleCreate = () => {
    // In a real app, this would save to backend/Supabase
    const newMonster = {
      id: `custom-${Date.now()}`,
      name: getMonsterName(),
      emoji: bodyTypes.find(b => b.id === bodyType)?.emoji || '👹',
      type: category,
      bodyType,
      features: selectedFeatures,
      color: selectedColor,
      currentHp,
      maxHp: 100,
      triggers,
      attackPatterns: selectedPatterns,
      attackDays: selectedDays,
      firstNoticed,
      shareWithSquad,
      created: new Date().toISOString(),
      battleCount: 0,
    };

    console.log('Created monster:', newMonster);
    navigate('/progress?tab=collection');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="text-white p-4" style={{ backgroundColor: 'var(--stride-blue)' }}>
        <div className="max-w-lg mx-auto flex items-center justify-between mb-4">
          <button
            onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Create Your Monster</h1>
          <div className="w-9" />
        </div>

        {/* Progress Steps */}
        <div className="max-w-lg mx-auto flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1">
              <div
                className={`h-2 rounded-full transition-colors ${
                  s <= step ? 'bg-white' : 'bg-white/30'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4">
        {/* Step 1: Naming */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center mb-6">
              <Sparkles className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--stride-blue)' }} />
              <h2 className="text-2xl font-semibold mb-2">Name Your Monster</h2>
              <p style={{ color: 'var(--stride-gray)' }}>
                What struggle are you facing?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    category === cat.id
                      ? 'border-[var(--stride-blue)] bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-[var(--stride-blue)]'
                  }`}
                >
                  <div className="text-4xl mb-2">{cat.emoji}</div>
                  <div className="font-medium text-sm">{cat.name}</div>
                </button>
              ))}
            </div>

            {category === 'custom' && (
              <Card className="p-4">
                <label className="block mb-2 font-medium">Custom Name</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g., Thesis Panic Monster"
                  className="w-full p-3 border-2 rounded-lg focus:border-[var(--stride-blue)] focus:outline-none"
                  maxLength={50}
                />
                <p className="text-xs mt-2" style={{ color: 'var(--stride-gray)' }}>
                  Be specific! "Monday Morning Dread" works better than just "Stress"
                </p>
              </Card>
            )}

            {category && (
              <Card className="p-4 bg-blue-50 border-2" style={{ borderColor: 'var(--stride-blue)' }}>
                <div className="text-center">
                  <div className="text-5xl mb-2">
                    {category === 'custom' ? '✨' : categories.find(c => c.id === category)?.emoji}
                  </div>
                  <p className="font-semibold">{getMonsterName()}</p>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Step 2: Visual Customization */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">Customize Appearance</h2>
              <p style={{ color: 'var(--stride-gray)' }}>
                How does this struggle look and feel?
              </p>
            </div>

            {/* Monster Preview */}
            <Card className="p-6 bg-gradient-to-b from-gray-50 to-white border-2" style={{ borderColor: selectedColor ? colors.find(c => c.id === selectedColor)?.hex : 'var(--border)' }}>
              <div className="text-center">
                <div className="text-8xl mb-4">
                  {bodyTypes.find(b => b.id === bodyType)?.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-2">{getMonsterName()}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedFeatures.map(f => (
                    <span key={f} className="text-2xl">
                      {features.find(feat => feat.id === f)?.icon}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Body Type Selection */}
            <div>
              <h3 className="font-semibold mb-3">Body Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {bodyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setBodyType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      bodyType === type.id
                        ? 'border-[var(--stride-blue)] bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-[var(--stride-blue)]'
                    }`}
                  >
                    <div className="text-3xl mb-2">{type.emoji}</div>
                    <div className="font-medium text-sm mb-1">{type.name}</div>
                    <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                      {type.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features Selection */}
            <div>
              <h3 className="font-semibold mb-3">Features (select any)</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      selectedFeatures.includes(feature.id)
                        ? 'border-[var(--stride-blue)] bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-[var(--stride-blue)]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">{feature.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{feature.name}</div>
                        <div className="text-xs" style={{ color: 'var(--stride-gray)' }}>
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="grid grid-cols-5 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`aspect-square rounded-xl border-4 transition-all ${
                      selectedColor === color.id
                        ? 'border-[var(--stride-blue)] scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} - ${color.emotion}`}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-center mt-2" style={{ color: 'var(--stride-gray)' }}>
                  {colors.find(c => c.id === selectedColor)?.emotion}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Stats & Patterns */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">Monster Stats</h2>
              <p style={{ color: 'var(--stride-gray)' }}>
                How strong is it right now?
              </p>
            </div>

            {/* Current HP Slider */}
            <Card className="p-4">
              <label className="block mb-3 font-medium">
                Current Strength: {currentHp}/100
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={currentHp}
                onChange={(e) => setCurrentHp(Number(e.target.value))}
                className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--stride-blue) 0%, var(--stride-blue) ${currentHp}%, #e5e7eb ${currentHp}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--stride-gray)' }}>
                <span>Barely noticeable</span>
                <span>Very strong</span>
              </div>
            </Card>

            {/* Triggers */}
            <div>
              <h3 className="font-semibold mb-3">What triggers this monster?</h3>
              <div className="space-y-2 mb-3">
                {triggerOptions.map((trigger) => (
                  <button
                    key={trigger}
                    onClick={() => toggleTrigger(trigger)}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                      triggers.includes(trigger)
                        ? 'border-[var(--stride-blue)] bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-[var(--stride-blue)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        triggers.includes(trigger)
                          ? 'bg-[var(--stride-blue)] border-[var(--stride-blue)]'
                          : 'border-gray-300'
                      }`}>
                        {triggers.includes(trigger) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm">{trigger}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={customTrigger}
                  onChange={(e) => setCustomTrigger(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustomTrigger()}
                  placeholder="Add custom trigger..."
                  className="flex-1 p-3 border-2 rounded-lg focus:border-[var(--stride-blue)] focus:outline-none"
                />
                <button
                  onClick={addCustomTrigger}
                  className="px-4 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--stride-blue)' }}
                >
                  Add
                </button>
              </div>
            </div>

            {/* Attack Patterns */}
            <div>
              <h3 className="font-semibold mb-3">When does it usually attack?</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {attackPatterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    onClick={() => togglePattern(pattern.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedPatterns.includes(pattern.id)
                        ? 'border-[var(--stride-blue)] bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-[var(--stride-blue)]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedPatterns.includes(pattern.id)
                          ? 'bg-[var(--stride-blue)] border-[var(--stride-blue)]'
                          : 'border-gray-300'
                      }`}>
                        {selectedPatterns.includes(pattern.id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm">{pattern.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                {attackDays.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => toggleDay(day.id)}
                    className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                      selectedDays.includes(day.id)
                        ? 'border-[var(--stride-blue)] bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-[var(--stride-blue)]'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedDays.includes(day.id)
                          ? 'bg-[var(--stride-blue)] border-[var(--stride-blue)]'
                          : 'border-gray-300'
                      }`}>
                        {selectedDays.includes(day.id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm">{day.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* First Noticed */}
            <Card className="p-4">
              <label className="block mb-2 font-medium">When did you first notice this?</label>
              <input
                type="date"
                value={firstNoticed}
                onChange={(e) => setFirstNoticed(e.target.value)}
                className="w-full p-3 border-2 rounded-lg focus:border-[var(--stride-blue)] focus:outline-none"
              />
            </Card>

            {/* Share with Squad */}
            <Card className="p-4 bg-green-50 border-2" style={{ borderColor: 'var(--stride-green)' }}>
              <button
                onClick={() => setShareWithSquad(!shareWithSquad)}
                className="w-full flex items-start gap-3"
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  shareWithSquad
                    ? 'bg-[var(--stride-green)] border-[var(--stride-green)]'
                    : 'border-gray-300 bg-white'
                }`}>
                  {shareWithSquad && <Check className="w-4 h-4 text-white" />}
                </div>
                <div className="text-left flex-1">
                  <div className="font-medium mb-1">Share with my squads</div>
                  <div className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                    Let your squad members see this monster so they can offer targeted support
                  </div>
                </div>
              </button>
            </Card>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-3 px-4 border-2 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={() => step === 3 ? handleCreate() : setStep(step + 1)}
            disabled={!canProceed()}
            className="flex-1 py-3 px-4 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--stride-blue)' }}
          >
            {step === 3 ? (
              <>
                <Check className="w-5 h-5" />
                Create Monster
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}