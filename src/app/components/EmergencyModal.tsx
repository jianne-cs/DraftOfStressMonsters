import { X, Phone, Wind, Users, MapPin, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface EmergencyModalProps {
  open: boolean;
  onClose: () => void;
}

export function EmergencyModal({ open, onClose }: EmergencyModalProps) {
  const hotlines = [
    { name: 'NCMH Crisis Hotline', number: '0917-899-8727' },
    { name: 'Hopeline', number: '(02) 8804-4673' },
    { name: 'In Touch Crisis Line', number: '(02) 8893-7603' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">Emergency Support</DialogTitle>
        <DialogDescription className="sr-only">
          Access immediate help, crisis hotlines, calming exercises, and squad support
        </DialogDescription>
        <div className="bg-gradient-to-b from-red-50 to-white">
          {/* Header */}
          <div className="sticky top-0 bg-[var(--stride-red)] text-white p-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">🆘 Emergency Support</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* Immediate Help */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--stride-purple)' }}>
                🚨 Immediate Help
              </h3>
              <div className="space-y-2">
                {hotlines.map((hotline) => (
                  <a
                    key={hotline.number}
                    href={`tel:${hotline.number}`}
                    className="flex items-center justify-between p-3 bg-white border-2 rounded-xl hover:border-[var(--stride-red)] transition-colors"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div>
                      <div className="font-medium">{hotline.name}</div>
                      <div className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                        {hotline.number}
                      </div>
                    </div>
                    <Phone className="w-5 h-5" style={{ color: 'var(--stride-red)' }} />
                  </a>
                ))}
              </div>
            </section>

            {/* Calm First */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--stride-purple)' }}>
                🫁 Calm First
              </h3>
              <button
                className="w-full p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 hover:border-[var(--stride-teal)] transition-all"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="font-semibold">Start Calming Exercise</div>
                    <div className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                      5-minute guided breathing
                    </div>
                  </div>
                  <Wind className="w-6 h-6" style={{ color: 'var(--stride-teal)' }} />
                </div>
              </button>
            </section>

            {/* Squad SOS */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--stride-purple)' }}>
                👥 Squad SOS
              </h3>
              <button
                className="w-full p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 hover:border-[var(--stride-green)] transition-all"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="font-semibold">Notify Your Squad</div>
                    <div className="text-sm" style={{ color: 'var(--stride-gray)' }}>
                      Alert Thesis Warriors (4 members)
                    </div>
                  </div>
                  <Users className="w-6 h-6" style={{ color: 'var(--stride-green)' }} />
                </div>
              </button>

              {/* Quick Messages */}
              <div className="mt-3 space-y-2">
                <p className="text-sm font-medium" style={{ color: 'var(--stride-gray)' }}>
                  Quick message:
                </p>
                {[
                  "I'm struggling right now",
                  'Need someone to talk to',
                  'Can you join a calm exercise?',
                ].map((msg) => (
                  <button
                    key={msg}
                    className="w-full text-left p-2 text-sm bg-white rounded-lg hover:bg-gray-50 transition-colors border"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </section>

            {/* Support Options */}
            <section>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--stride-purple)' }}>
                🏥 More Support
              </h3>
              <div className="space-y-2">
                <button className="w-full p-3 bg-white rounded-xl border flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span>Contact Campus Counseling</span>
                  <Phone className="w-5 h-5" style={{ color: 'var(--stride-teal)' }} />
                </button>
                <button className="w-full p-3 bg-white rounded-xl border flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span>Find Nearest Hospital</span>
                  <MapPin className="w-5 h-5" style={{ color: 'var(--stride-teal)' }} />
                </button>
                <button className="w-full p-3 bg-white rounded-xl border flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span>View My Safety Plan</span>
                  <FileText className="w-5 h-5" style={{ color: 'var(--stride-teal)' }} />
                </button>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="text-xs text-center p-3 bg-yellow-50 rounded-lg" style={{ color: 'var(--stride-gray)' }}>
              ⚠️ If you're in immediate danger, please call emergency services (911) or go to your nearest emergency room.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}