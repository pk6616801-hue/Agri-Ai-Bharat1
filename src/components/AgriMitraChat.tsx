import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  User,
  RefreshCcw,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';

interface AgriMitraChatProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const AgriMitraChat: React.FC<AgriMitraChatProps> = ({ currentLang, isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: 'Namaste! 🙏 I am AgriMitra (कृषि मित्र), your AI Agriculture Assistant. How can I assist your farm today? Ask about crops, fertilizers, Mandi rates, or PM-Kisan scheme.',
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: 'u_' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages,
          language: currentLang
        })
      });

      const data = await res.json();
      const botReply = data.reply || 'I am here to assist your farming operations. Could you rephrase?';

      const botMsg: ChatMessage = {
        id: 'b_' + Date.now(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);

      // Speak reply if speech synthesis is supported
      if ('speechSynthesis' in window) {
        speakText(botReply);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: 'err_' + Date.now(),
          sender: 'bot',
          text: 'Namaste! Ensure balanced NPK fertilizer dosing and check live Mandi prices on Agri AI Bharat. How else may I assist?',
          timestamp: 'Just now'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (currentLang === 'hi' || currentLang === 'bho' || currentLang === 'mai') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-IN';
      }
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = currentLang === 'en' ? 'en-IN' : 'hi-IN';
      recognition.interimResults = false;

      recognition.onstart = () => setListening(true);
      recognition.onend = () => setListening(false);
      recognition.onresult = (e: any) => {
        const transcript = e.results[0][0].transcript;
        if (transcript) {
          handleSend(transcript);
        }
      };
      recognition.start();
    } else {
      alert('Voice recognition not supported in this browser mode.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md h-[550px] rounded-3xl bg-slate-950 border-2 border-emerald-500/80 shadow-2xl flex flex-col overflow-hidden animate-fade-in text-white">
      
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-emerald-900 via-slate-900 to-amber-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-amber-400 p-0.5">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-1.5">
              <span>AgriMitra AI</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            </h3>
            <span className="text-[10px] text-emerald-400 font-bold block">
              ● Online • Powered by Gemini AI
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {speaking && (
            <button
              onClick={() => window.speechSynthesis.cancel()}
              className="p-1.5 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold animate-pulse"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'bot' && (
              <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none font-normal'
              }`}
            >
              <p className="whitespace-pre-wrap">{m.text}</p>
              <span className="text-[9px] text-slate-400 font-bold block mt-1 text-right">
                {m.timestamp}
              </span>
            </div>

            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-slate-400 text-xs py-2">
            <RefreshCcw className="w-4 h-4 animate-spin text-emerald-400" />
            <span>AgriMitra is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-3 py-2 bg-slate-900/60 border-t border-slate-900 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {[
          "Wheat Mandi Price",
          "PM-Kisan Status",
          "Drone Spraying Cost",
          "Tomato Yellow Leaf Remedy"
        ].map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-emerald-900/60 text-slate-300 text-[10px] font-semibold whitespace-nowrap"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <button
          onClick={toggleVoiceInput}
          className={`p-2.5 rounded-xl border transition-all ${
            listening
              ? 'bg-red-600 border-red-500 text-white animate-pulse'
              : 'bg-slate-950 border-slate-800 text-amber-400 hover:bg-slate-800'
          }`}
          title="Speak in Hindi / English"
        >
          {listening ? <Mic className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>

        <input
          type="text"
          placeholder="Ask AgriMitra in Hindi, English..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-emerald-500"
        />

        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim() || loading}
          className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-bold disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
