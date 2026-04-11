import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { BRAND_CONFIG } from '../constants';

type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
};

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: "Hello! I'm Sol, your Terra Sol wellness assistant. How can I help you reconnect with the Earth today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) {
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const botResponse = await sendMessageToGemini(userMessage);
    setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-earth-800 text-sand-100 shadow-lg transition-all hover:bg-earth-900 group"
      >
        <MessageCircle size={24} className="transition-transform group-hover:scale-110" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-80 flex-col overflow-hidden rounded-3xl border border-sand-300 bg-white shadow-2xl md:w-96"
          >
            <div className="flex items-center justify-between bg-earth-800 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-earth-600 bg-earth-700">
                  {isLogoVisible ? (
                    <img
                      src={BRAND_CONFIG.logo}
                      alt=""
                      className="h-full w-full object-contain"
                      onError={() => setIsLogoVisible(false)}
                    />
                  ) : (
                    <Sparkles size={20} className="text-sand-100" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sand-100">Sol</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-sand-300">Wellness Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI chat"
                className="text-sand-300 hover:text-sand-100"
              >
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-sand-100/50 p-6">
              {messages.map((msg, index) => (
                <div key={`${msg.role}-${index}`} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                      msg.role === 'user'
                        ? 'rounded-tr-none bg-earth-800 text-sand-100'
                        : 'rounded-tl-none border border-sand-300 bg-white text-earth-900 shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-none border border-sand-300 bg-white p-4 shadow-sm">
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-earth-800/30" />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-earth-800/30 [animation-delay:0.2s]" />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-earth-800/30 [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-sand-300 bg-white p-4">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      void handleSend();
                    }
                  }}
                  placeholder="Ask about grounding..."
                  className="w-full rounded-full border border-sand-300 bg-sand-100 px-5 py-3 pr-12 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-earth-800/20"
                />
                <button
                  onClick={() => void handleSend()}
                  aria-label="Send message"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-earth-800 text-sand-100 transition-colors hover:bg-earth-900 disabled:cursor-not-allowed disabled:bg-earth-700"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
