'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, User } from 'lucide-react';
import {
  CHAT_FRANK_GREETING,
  CHAT_FRANK_TEASER,
  CHAT_FRANK_LEAD_INTRO,
  CHAT_FRANK_LEAD_CTA,
  CHAT_FRANK_INSIST_NAME,
} from '@/lib/chatConstants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ClientDetails {
  name: string;
  phone: string;
  email?: string;
}

/** Proactive teaser bubble while the widget is closed. */
const GREETING_DELAY_MS = 4000;
const TEASER_VISIBLE_MS = 9000;
/** Auto-open the chat panel after this delay (ms) if the visitor hasn’t opened it yet. */
const AUTO_OPEN_CHAT_MS = 45_000;

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [sessionPublicId, setSessionPublicId] = useState('');
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(null);
  const [showDetailsForm, setShowDetailsForm] = useState(true);
  const [detailsFormData, setDetailsFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmittingDetails, setIsSubmittingDetails] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      setSessionPublicId(crypto.randomUUID());
    } else {
      setSessionPublicId(`sess_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && showDetailsForm && nameInputRef.current) {
      nameInputRef.current.focus();
    } else if (isOpen && !showDetailsForm && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, showDetailsForm]);

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      return;
    }

    const showTimer = setTimeout(() => {
      if (!isOpen) {
        setShowTeaser(true);
        setTimeout(() => {
          setShowTeaser(false);
        }, TEASER_VISIBLE_MS);
      }
    }, GREETING_DELAY_MS);

    return () => {
      clearTimeout(showTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    const id = window.setTimeout(() => setIsOpen(true), AUTO_OPEN_CHAT_MS);
    return () => window.clearTimeout(id);
  }, []);

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailsFormData.name.trim() || !detailsFormData.phone.trim() || !sessionPublicId) {
      return;
    }

    setIsSubmittingDetails(true);

    try {
      const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
      const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';

      const response = await fetch('/api/chat-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: detailsFormData.name.trim(),
          phone: detailsFormData.phone.trim(),
          email: detailsFormData.email.trim() || undefined,
          pageUrl,
          userAgent,
          sessionPublicId,
        }),
      });

      const nextDetails: ClientDetails = {
        name: detailsFormData.name.trim(),
        phone: detailsFormData.phone.trim(),
        email: detailsFormData.email.trim() || undefined,
      };
      setClientDetails(nextDetails);
      setShowDetailsForm(false);
      setMessages([{ role: 'assistant', content: CHAT_FRANK_GREETING }]);

      if (!response.ok) {
        console.warn('Chat lead API returned non-OK; continuing with local chat.');
      }
    } catch (error) {
      console.error('Error submitting details:', error);
      setClientDetails({
        name: detailsFormData.name.trim(),
        phone: detailsFormData.phone.trim(),
        email: detailsFormData.email.trim() || undefined,
      });
      setShowDetailsForm(false);
      setMessages([{ role: 'assistant', content: CHAT_FRANK_GREETING }]);
    } finally {
      setIsSubmittingDetails(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const historyForApi = [...messages, { role: 'user' as const, content: userMessage }];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: historyForApi,
          clientDetails,
          sessionPublicId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        const errorMsg =
          data.error ||
          "I'm having trouble connecting right now. Please try again or reach us at info@cresdynamics.com";
        setMessages((prev) => [...prev, { role: 'assistant', content: errorMsg }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Something went wrong. Please try again or contact us at info@cresdynamics.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const leadNameAndPhoneReady =
    detailsFormData.name.trim().length > 0 && detailsFormData.phone.trim().length > 0;

  const closeChat = () => {
    setIsOpen(false);
    setShowDetailsForm(true);
    setClientDetails(null);
    setDetailsFormData({ name: '', phone: '', email: '' });
    setMessages([]);
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      setSessionPublicId(crypto.randomUUID());
    } else {
      setSessionPublicId(`sess_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`);
    }
  };

  return (
    <>
      {/* Proactive greeting — appears ~4s after load (within first 5s window) */}
      {!isOpen && showTeaser && (
        <div className="fixed bottom-20 right-6 z-50 max-w-[min(18rem,calc(100vw-3rem))] bg-[var(--cres-black)] text-white/90 text-[9px] leading-snug px-2.5 py-2 rounded-xl shadow-xl border border-white/15 flex gap-2 items-start text-left">
          <div className="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
            <MessageCircle className="w-3.5 h-3.5 text-[var(--cres-electric-teal)]" aria-hidden />
          </div>
          <p className="pt-0.5 text-left">{CHAT_FRANK_TEASER}</p>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setShowTeaser(true)}
          onMouseLeave={() => setShowTeaser(false)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[var(--cres-orange-primary)] to-[#E87528] hover:from-[#E87528] hover:to-[var(--cres-orange-primary)] text-white rounded-full p-3 shadow-2xl hover:shadow-[var(--cres-orange-primary)]/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat with Frank from CRES Dynamics"
        >
          <MessageCircle className="w-5 h-5" strokeWidth={2} aria-hidden />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[var(--cres-electric-teal)] rounded-full animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[22rem] max-w-[calc(100vw-3rem)] h-[min(32rem,calc(100vh-5rem))] bg-[var(--cres-deep-navy)] border border-white/20 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
          <div className="bg-gradient-to-r from-[var(--cres-orange-primary)] to-[#E87528] px-3 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 shrink-0 bg-white/20 rounded-full flex items-center justify-center border border-white/20">
                <User className="w-4 h-4 text-white" strokeWidth={2} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm truncate">Frank</h3>
                <p className="text-white/85 text-[11px] truncate">
                  {showDetailsForm ? 'Leave your details to start' : 'CRES Dynamics · Let’s talk about your business'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="text-white hover:text-white/80 transition-colors p-1 shrink-0"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {showDetailsForm && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[var(--cres-primary-bg)]">
              <div className="flex gap-1.5 justify-start">
                <div
                  className="shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mt-0.5"
                  aria-hidden
                >
                  <User className="w-3.5 h-3.5 text-[var(--cres-electric-teal)]" strokeWidth={2} />
                </div>
                <div className="max-w-[92%] self-start rounded-lg px-2.5 py-1.5 bg-black/70 border border-white/20 text-[var(--cres-white)] shadow-sm text-left">
                  <p className="text-[8px] font-semibold uppercase tracking-wider text-[var(--cres-electric-teal)] mb-0.5 text-left">
                    Frank
                  </p>
                  <p className="text-[10px] text-gray-200 leading-snug text-left">{CHAT_FRANK_LEAD_INTRO}</p>
                  <p className="text-[10px] text-gray-300 leading-snug mt-1.5 text-left">{CHAT_FRANK_LEAD_CTA}</p>
                  <p className="text-[10px] text-[var(--cres-white)] leading-snug mt-1.5 pt-1.5 border-t border-white/10 text-left">
                    <span className="font-semibold text-[var(--cres-electric-teal)]">{CHAT_FRANK_INSIST_NAME}</span>
                  </p>
                </div>
              </div>
              <form onSubmit={handleDetailsSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium text-[var(--cres-white)] mb-1">
                    Full name <span className="text-red-400">*</span>{' '}
                    <span className="font-normal text-gray-400">(required)</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    required
                    value={detailsFormData.name}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-3 py-2 text-xs bg-black/70 border border-white/20 rounded-lg text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    disabled={isSubmittingDetails || !sessionPublicId}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-medium text-[var(--cres-white)] mb-1">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={detailsFormData.phone}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, phone: e.target.value })}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full px-3 py-2 text-xs bg-black/70 border border-white/20 rounded-lg text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    disabled={isSubmittingDetails || !sessionPublicId}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-[var(--cres-white)] mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={detailsFormData.email}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 text-xs bg-black/70 border border-white/20 rounded-lg text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    disabled={isSubmittingDetails || !sessionPublicId}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!leadNameAndPhoneReady || isSubmittingDetails || !sessionPublicId}
                  className="w-full text-xs bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-white px-4 py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  aria-label={
                    isSubmittingDetails
                      ? 'Sending'
                      : leadNameAndPhoneReady
                        ? 'Start chatting'
                        : 'Enter your name and number to continue'
                  }
                >
                  {isSubmittingDetails
                    ? 'Sending…'
                    : leadNameAndPhoneReady
                      ? "Now let's chat"
                      : 'Enter your name and number'}
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-1 leading-snug">
                  So I know who I&apos;m chatting with. By sending, you agree we may continue this conversation.
                </p>
              </form>
            </div>
          )}

          {!showDetailsForm && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[var(--cres-primary-bg)]">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-1.5 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div
                      className="shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mt-0.5"
                      aria-hidden
                    >
                      <User className="w-3.5 h-3.5 text-[var(--cres-electric-teal)]" strokeWidth={2} />
                    </div>
                  )}
                  <div
                    className={`max-w-[88%] rounded-lg px-2.5 py-1.5 text-left ${
                      message.role === 'user'
                        ? 'bg-[var(--cres-orange-primary)] text-white'
                        : 'bg-black/70 border border-white/20 text-[var(--cres-white)]'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <p className="text-[8px] font-semibold uppercase tracking-wider text-[var(--cres-electric-teal)] mb-0.5 text-left">
                        Frank
                      </p>
                    )}
                    <p
                      className={`text-[10px] leading-snug whitespace-pre-wrap ${
                        message.role === 'user' ? 'text-right text-white' : 'text-left'
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-1.5">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-[var(--cres-electric-teal)]" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="bg-black/70 border border-white/20 rounded-lg px-2.5 py-1.5">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[var(--cres-electric-teal)] rounded-full animate-bounce" />
                      <div
                        className="w-1.5 h-1.5 bg-[var(--cres-electric-teal)] rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                      <div
                        className="w-1.5 h-1.5 bg-[var(--cres-electric-teal)] rounded-full animate-bounce"
                        style={{ animationDelay: '0.4s' }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {!showDetailsForm && (
            <form onSubmit={handleSend} className="p-3 bg-[var(--cres-deep-navy)] border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message Frank…"
                  className="flex-1 px-3 py-2 text-xs bg-black/70 border border-white/20 rounded-lg text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-[9px] text-gray-500 mt-1.5 text-center leading-snug">
                You&apos;re messaging our team—Frank is here to help. We typically reply within business hours.
              </p>
            </form>
          )}
        </div>
      )}
    </>
  );
}
