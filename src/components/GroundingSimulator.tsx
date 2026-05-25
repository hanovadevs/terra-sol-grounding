import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Sparkles, Activity, AlertTriangle, CheckCircle, RefreshCw, Cpu, Link as LinkIcon } from 'lucide-react';

const GroundingSimulator: React.FC = () => {
  // Simulator State
  const [isGrounded, setIsGrounded] = useState<boolean>(false);
  const [emfLevel, setEmfLevel] = useState<number>(8.5); // V/m (typical modern home/office)
  const [proximity, setProximity] = useState<number>(30); // cm from appliance/cords
  const [activeScenario, setActiveScenario] = useState<'sheet' | 'mat' | 'barefoot'>('sheet');
  const [isCalibrating, setIsCalibrating] = useState<boolean>(false);
  const [calibrationSuccess, setCalibrationSuccess] = useState<boolean>(false);
  
  // Real-time telemetry calculations
  const [bodyVoltage, setBodyVoltage] = useState<number>(1.65);
  const [hrvCoherence, setHrvCoherence] = useState<number>(38);
  const [electronFlow, setElectronFlow] = useState<number>(0);

  // Dynamic calculations based on controls
  useEffect(() => {
    // Proximity multiplier: closer = higher voltage coupling
    const proximityFactor = Math.max(0.1, 150 / (proximity + 10));
    const baseVoltage = emfLevel * 0.22 * proximityFactor;

    if (isGrounded) {
      // In a grounded state, body voltage drops to baseline soil potential (<0.005 V AC)
      setBodyVoltage(Number((0.002 + Math.random() * 0.003).toFixed(3)));
      setHrvCoherence(Math.min(98, Math.round(82 + (15 - emfLevel) * 0.5 + Math.random() * 4)));
      setElectronFlow(Math.round(450 + emfLevel * 25));
    } else {
      // Ungrounded state
      setBodyVoltage(Number(baseVoltage.toFixed(3)));
      setHrvCoherence(Math.max(15, Math.round(45 - baseVoltage * 8 + Math.random() * 6)));
      setElectronFlow(0);
    }
  }, [isGrounded, emfLevel, proximity, activeScenario]);

  // Simulate Calibration routine
  const handleCalibrate = () => {
    setIsCalibrating(true);
    setCalibrationSuccess(false);
    setTimeout(() => {
      setIsCalibrating(false);
      setCalibrationSuccess(true);
      // Auto-turn on grounding after calibration
      setIsGrounded(true);
      setTimeout(() => setCalibrationSuccess(false), 3000);
    }, 1800);
  };

  // Generate SVG oscilloscope path
  const getOscilloscopePath = () => {
    const points = [];
    const width = 300;
    const height = 80;
    const midY = height / 2;
    const segments = 40;

    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      let y = midY;

      if (!isGrounded) {
        // Erratic, noisy sine wave
        const amplitude = (bodyVoltage * 12) + Math.sin(Date.now() * 0.01 + i) * 2;
        const mainWave = Math.sin((i / segments) * Math.PI * 8 + Date.now() * 0.008) * amplitude;
        const noise = Math.sin((i / segments) * Math.PI * 32 + Date.now() * 0.05) * (bodyVoltage * 2);
        y = midY + mainWave + noise;
      } else {
        // Clean baseline with tiny micro-ripples of Earth connection
        const microRipple = Math.sin((i / segments) * Math.PI * 12 + Date.now() * 0.003) * 0.8;
        y = midY + microRipple;
      }
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  // Frame tick to re-render oscilloscope animation
  const [, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-sand-50 py-16 sm:py-20 overflow-hidden border-t border-sand-300/30">
      {/* Background visual detail */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-earth-400/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-earth-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-earth-900/5 border border-earth-900/10 text-[9px] font-bold uppercase tracking-wider text-earth-800 mb-4">
            <Cpu size={11} className="text-earth-700" /> Interactive Biophysics Laboratory
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 tracking-tight leading-tight">
            Body Voltage & <span className="italic text-earth-700">EMF Grounding Simulator</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-earth-800/60 leading-relaxed">
            Modern indoor environments couple high AC voltage directly onto our bodies. Toggle the safety switch below to visualize how earthing instantly grounds your bio-field to 0.00V.
          </p>

          {/* Cute Explanatory Box */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 bg-white/60 backdrop-blur-md border border-earth-200/60 rounded-2xl p-5 text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm mx-auto max-w-xl"
          >
            <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center shrink-0 shadow-inner border border-earth-200">
              <Sparkles size={16} className="text-earth-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-earth-900 mb-1">What is this interactive tool?</h4>
              <p className="text-xs text-earth-800/70 leading-relaxed">
                This simulator demonstrates the real biophysics of grounding. As you increase <strong>ambient EMF</strong> or move closer to <strong>appliances</strong>, your body's electrical voltage naturally rises. When you toggle the <strong>Connection Gateway</strong>, you simulate touching a Terra Sol product—watch your voltage instantly drop and your biological rhythms stabilize!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Futuristic Dashboard Card */}
        <div className="bg-earth-950 text-sand-50 rounded-[2rem] border border-earth-900 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Cybernetic decorative grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-earth-600/10 blur-[80px] pointer-events-none" />

          {/* Top Status Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isGrounded ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-500 animate-pulse'}`} />
              <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                STATUS: {isGrounded ? 'BIO-ELECTRICALLY EARTHED' : 'UNSHIELDED CAPACITIVE COUPLING'}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-mono text-white/40">SYSTEM VERSION: 4.8.9</span>
              <button 
                onClick={handleCalibrate}
                disabled={isCalibrating}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[9px] font-mono font-bold tracking-wider text-white/80 transition-colors disabled:opacity-50"
              >
                <RefreshCw size={10} className={isCalibrating ? 'animate-spin' : ''} />
                {isCalibrating ? 'SCANNING...' : 'CALIBRATE CONTINUITY'}
              </button>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: CONTROLS & ENVIRONMENT */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Scenario Toggles */}
              <div>
                <span className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-3">
                  01. Select Earthing Scenario
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sheet', label: 'Sleep Sheet', desc: '12% Silver Fiber' },
                    { id: 'mat', label: 'Desk Mat', desc: 'Vegan Carbon Mat' },
                    { id: 'barefoot', label: 'Soil Contact', desc: 'Natural Grounding' }
                  ].map((scen) => (
                    <button
                      key={scen.id}
                      onClick={() => setActiveScenario(scen.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                        activeScenario === scen.id 
                          ? 'bg-earth-900 border-earth-500/50 shadow-md shadow-earth-950/50' 
                          : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <span className="block text-xs font-bold text-white leading-none">{scen.label}</span>
                      <span className="block text-[8px] font-mono text-white/40 mt-1">{scen.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Environmental EMF Slider */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                    02. Ambient EMF Fields
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {emfLevel.toFixed(1)} V/m
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15.0"
                  step="0.5"
                  value={emfLevel}
                  onChange={(e) => setEmfLevel(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-earth-400"
                />
                <div className="flex justify-between text-[8px] font-mono text-white/30 mt-2">
                  <span>FOREST BASELINE (0.2 V/m)</span>
                  <span>HEAVY ROUTERS / ROUTING (15 V/m)</span>
                </div>
              </div>

              {/* Proximity Slider */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                    03. Distance to Unshielded Wires
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {proximity} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={proximity}
                  onChange={(e) => setProximity(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-earth-400"
                />
                <div className="flex justify-between text-[8px] font-mono text-white/30 mt-2">
                  <span>EXTREME PROXIMITY (10cm)</span>
                  <span>SAFE BUFFER (1.5m)</span>
                </div>
              </div>

              {/* Master Grounding Safety Switch */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                    EARTH CONNECTION GATEWAY
                  </h4>
                  <p className="text-[9px] text-white/40 leading-normal mt-1 max-w-[200px]">
                    Simulate connecting the mat ground-wire to a certified grounded wall outlet.
                  </p>
                </div>
                <button
                  onClick={() => setIsGrounded(!isGrounded)}
                  className={`relative w-20 h-10 rounded-full transition-all duration-500 shadow-inner overflow-hidden border ${
                    isGrounded 
                      ? 'bg-emerald-500/20 border-emerald-400/50 shadow-emerald-500/20' 
                      : 'bg-red-500/10 border-white/10'
                  }`}
                >
                  <div 
                    className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-500 flex items-center justify-center ${
                      isGrounded 
                        ? 'right-1.5 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]' 
                        : 'left-1.5 bg-white/20'
                    }`}
                  >
                    <Zap size={14} className={isGrounded ? 'text-earth-950 font-bold' : 'text-white/40'} />
                  </div>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: READOUT TELEMETRY & DIGITAL OSCILLOSCOPE */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Digital LED Screen for Body Voltage */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-5 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-5">
                
                {/* Calibration notification overlay */}
                <AnimatePresence>
                  {isCalibrating && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-earth-950/95 z-20 flex flex-col items-center justify-center"
                    >
                      <RefreshCw size={24} className="text-earth-400 animate-spin mb-2" />
                      <span className="text-[10px] font-mono tracking-widest text-earth-300 uppercase">
                        INJECTING HARMONIC CONDUCTIVITY PEN CHECK...
                      </span>
                    </motion.div>
                  )}
                  {calibrationSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-earth-950/95 z-20 flex flex-col items-center justify-center"
                    >
                      <CheckCircle size={24} className="text-emerald-400 mb-2" />
                      <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase font-bold">
                        CONTINUITY PEN VERIFIED: 100% CONDUCTIVE
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">
                    MEASURED BODY VOLTAGE (AC)
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl md:text-5xl font-mono font-bold tracking-tight transition-colors duration-500 ${
                      isGrounded ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]' : 'text-amber-400'
                    }`}>
                      {bodyVoltage.toFixed(3)}
                    </span>
                    <span className="text-sm font-mono text-white/50">V AC</span>
                  </div>
                  <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold mt-2 uppercase px-2 py-0.5 rounded ${
                    isGrounded ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {isGrounded ? 'EARTH EQUILIBRIUM COHERENT' : 'UNGROUNDED ELECTROMOTIVE SPIKE'}
                  </span>
                </div>

                {/* Oscilloscope Mini-screen */}
                <div className="bg-black/60 border border-white/5 rounded-xl p-3 flex-1 flex flex-col items-stretch justify-center h-28 relative overflow-hidden">
                  <div className="absolute top-1.5 left-2 flex items-center gap-1.5">
                    <Activity size={10} className={isGrounded ? 'text-emerald-400' : 'text-amber-400 animate-pulse'} />
                    <span className="text-[8px] font-mono text-white/40 uppercase tracking-wider">
                      WAVEFORM MONITOR
                    </span>
                  </div>
                  <svg className="w-full h-16 pointer-events-none mt-2" viewBox="0 0 300 80">
                    {/* Grid lines inside oscilloscope */}
                    <line x1="0" y1="40" x2="300" y2="40" stroke="#ffffff10" strokeDasharray="3,3" />
                    <line x1="75" y1="0" x2="75" y2="80" stroke="#ffffff08" strokeDasharray="2,2" />
                    <line x1="150" y1="0" x2="150" y2="80" stroke="#ffffff08" strokeDasharray="2,2" />
                    <line x1="225" y1="0" x2="225" y2="80" stroke="#ffffff08" strokeDasharray="2,2" />
                    {/* The dynamic path */}
                    <path
                      d={getOscilloscopePath()}
                      fill="none"
                      stroke={isGrounded ? '#34d399' : '#fbbf24'}
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                  </svg>
                </div>

              </div>

              {/* Bio-Telemetry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Metric 1 */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                  <div>
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">
                      FREE RADICAL NEUTRALIZATION
                    </span>
                    <span className="text-lg font-serif font-bold text-white">
                      {isGrounded ? '100% INSTANT' : '0.0% REACTION'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-white/50">
                    <Sparkles size={10} className={isGrounded ? 'text-emerald-400 animate-bounce' : 'text-white/30'} />
                    <span>{isGrounded ? 'Saturated electron stream' : 'Oxidative stress plateau'}</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                  <div>
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">
                      HRV COHERENCE INDEX
                    </span>
                    <span className={`text-lg font-mono font-bold ${isGrounded ? 'text-emerald-400' : 'text-white'}`}>
                      {hrvCoherence}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-white/50">
                    <Activity size={10} className="text-earth-400" />
                    <span>{isGrounded ? 'Vagus Nerve Activated' : 'Autonomic tension spikes'}</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                  <div>
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-wider mb-1">
                      CORTISOL PEAK ANOMALY
                    </span>
                    <span className="text-lg font-serif font-bold text-white">
                      {isGrounded ? 'NORMALIZED' : 'DYSREGULATED'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-white/50">
                    <Shield size={10} className="text-earth-400" />
                    <span>{isGrounded ? 'Restorative Sleep Phase' : 'EMF-induced Sleep Arousal'}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Educational Science Note */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <AlertTriangle size={16} className={`shrink-0 mt-0.5 ${isGrounded ? 'text-emerald-400' : 'text-amber-400'}`} />
                <div className="text-[10px] sm:text-xs leading-relaxed text-white/60">
                  {isGrounded ? (
                    <p>
                      <strong>How it works:</strong> By connecting your Terra Sol mat or sheet to the ground, free electrons flow instantly from the Earth into your body. This forms an equipotential plane with the ground, effectively dropping your body's AC voltage potential to nearly zero and shielding you from ambient electromotive fields.
                    </p>
                  ) : (
                    <p>
                      <strong>The Physics:</strong> Unshielded household power cables constantly radiate small alternating electrical fields. Your skin behaves like an antenna, picking up these fields through capacitive coupling. This elevates your bodily electrical voltage which can interfere with autonomic nervous processes and spike stress rhythms.
                    </p>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GroundingSimulator;
