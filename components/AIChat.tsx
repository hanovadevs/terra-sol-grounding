import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, ArrowRight } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { BRAND_CONFIG } from '../constants';

type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
};

// Simple markdown-like renderer for bot messages
const BotMessage: React.FC<{ text: string }> = ({ text }) => {
  const renderLine = (line: string, idx: number) => {
    // Bullet points (• or - at start)
    const bulletMatch = line.match(/^[\s]*[•\-]\s+(.*)/);
    if (bulletMatch) {
      return (
        <div key={idx} className="flex gap-2 items-start py-0.5">
          <span className="text-earth-500 mt-0.5 shrink-0 text-[8px]">●</span>
          <span className="flex-1">{renderInline(bulletMatch[1])}</span>
        </div>
      );
    }

    // Empty line = spacing
    if (line.trim() === '') {
      return <div key={idx} className="h-2" />;
    }

    // Regular paragraph
    return <p key={idx} className="py-0.5">{renderInline(line)}</p>;
  };

  const renderInline = (text: string): React.ReactNode => {
    // Split by **bold** markers and render
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      // Bold
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-earth-900">{part.slice(2, -2)}</strong>;
      }
      // Links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const segments: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;
      while ((match = linkRegex.exec(part)) !== null) {
        if (match.index > lastIndex) {
          segments.push(part.slice(lastIndex, match.index));
        }
        segments.push(
          <a
            key={`link-${i}-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-earth-600 underline underline-offset-2 hover:text-earth-800 transition-colors"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (segments.length > 0) {
        if (lastIndex < part.length) segments.push(part.slice(lastIndex));
        return <React.Fragment key={i}>{segments}</React.Fragment>;
      }
      return part;
    });
  };

  const lines = text.split('\n');
  return <div className="space-y-0.5 leading-relaxed">{lines.map(renderLine)}</div>;
};

const QUICK_PROMPTS = [
  'What products do you offer?',
  'Which mat is best for my desk?',
  'Tell me about the grounding sheets',
  'How does grounding work?',
];

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: "Hello! I'm **Sol**, your Terra Sol wellness assistant. 🌿\n\nI can help you with:\n• Finding the right grounding product\n• Understanding the science behind grounding\n• Product details, pricing & comparisons\n• Warranty & support questions\n\nWhat would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [showPulse, setShowPulse] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Hide pulse after first open
  useEffect(() => {
    if (isOpen) setShowPulse(false);
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const userMessage = (text || input).trim();
    if (!userMessage || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const botResponse = await sendMessageToGemini(userMessage);
    setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  const showSuggestions = messages.length <= 1 && !isLoading;

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-earth-800 text-sand-100 shadow-lg transition-all hover:bg-earth-900 hover:shadow-xl group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={22} className="transition-transform group-hover:scale-110" />

        {/* Attention pulse ring */}
        {showPulse && (
          <span className="absolute inset-0 rounded-full bg-earth-600 animate-pulse-ring pointer-events-none" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 flex h-[540px] w-[340px] flex-col overflow-hidden rounded-[1.5rem] border border-sand-300/50 bg-white shadow-2xl md:w-[400px]"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between bg-earth-900 px-5 py-4">
              <div className="absolute inset-0 bg-gradient-to-r from-earth-800 to-earth-900" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-earth-700 bg-earth-800">
                  {isLogoVisible ? (
                    <img
                      src={BRAND_CONFIG.logo}
                      alt=""
                      className="h-full w-full object-contain"
                      onError={() => setIsLogoVisible(false)}
                    />
                  ) : (
                    <Sparkles size={18} className="text-earth-300" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sand-100 text-sm">Sol</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-sand-100/50">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI chat"
                className="relative text-sand-100/50 hover:text-sand-100 transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-sand-50 px-4 py-5">
              {messages.map((msg, index) => (
                <motion.div
                  key={`${msg.role}-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] text-[13px] ${
                      msg.role === 'user'
                        ? 'rounded-2xl rounded-br-md bg-earth-800 text-sand-100 px-4 py-3 shadow-sm'
                        : 'rounded-2xl rounded-bl-md border border-sand-300/60 bg-white text-earth-800 px-4 py-3 shadow-sm'
                    }`}
                  >
                    {msg.role === 'bot' ? <BotMessage text={msg.text} /> : msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Quick suggestion chips */}
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => void handleSend(prompt)}
                      className="flex items-center gap-1.5 rounded-full border border-earth-800/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-earth-700 shadow-sm transition-all hover:bg-earth-50 hover:border-earth-800/20 hover:shadow-md active:scale-95"
                    >
                      <ArrowRight size={10} className="text-earth-500" />
                      {prompt}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-md border border-sand-300/60 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-earth-600/40" />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-earth-600/40 [animation-delay:0.15s]" />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-earth-600/40 [animation-delay:0.3s]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-sand-300/50 bg-white p-3">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      void handleSend();
                    }
                  }}
                  placeholder="Ask Sol anything..."
                  className="flex-1 rounded-xl border border-sand-300/60 bg-sand-50 px-4 py-2.5 text-[13px] transition-all placeholder:text-earth-800/30 focus:outline-none focus:ring-2 focus:ring-earth-600/15 focus:border-earth-600/20"
                />
                <motion.button
                  onClick={() => void handleSend()}
                  aria-label="Send message"
                  disabled={!input.trim() || isLoading}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-earth-800 text-sand-100 transition-colors hover:bg-earth-900 disabled:cursor-not-allowed disabled:opacity-40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={14} />
                </motion.button>
              </div>
              <p className="mt-2 text-center text-[9px] text-earth-800/25 tracking-wide">
                Powered by Terra Sol AI • Not medical advice
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
