'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Loader2, Mail, Phone, Send, User, X } from 'lucide-react';
import {
  CHAT_FRANK_GREETING,
  CHAT_FRANK_PEEK,
  CHAT_FRANK_PEEK_CTA,
  CHAT_FRANK_LEAD_INTRO,
  CHAT_FRANK_LEAD_SUB,
  CHAT_FRANK_HEADER_LEAD,
  CHAT_FRANK_HEADER_ACTIVE,
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

const PROACTIVE_PEEK_DELAY_MS = 6000;

type ChatPhase = 'closed' | 'peek' | 'open';

function FrankAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm';
  return (
    <div
      className={`${dim} shrink-0 rounded-full bg-gradient-to-br from-[var(--teal-accent)] to-[#1A3A8A] flex items-center justify-center font-bold text-white shadow-[0_0_0_2px_rgba(255,255,255,0.12)]`}
      aria-hidden
    >
      F
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-1.5 px-1 py-0.5" aria-label="Frank is typing">
      {[0, 0.15, 0.3].map((delay) => (
        <span
          key={delay}
          className="h-2 w-2 rounded-full bg-[var(--teal-accent)] animate-bounce"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

function ChatLauncherIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M8.5 6h15A3.5 3.5 0 0 1 27 9.5v9A3.5 3.5 0 0 1 23.5 22H14l-5.5 4.2V22H8.5A3.5 3.5 0 0 1 5 18.5v-9A3.5 3.5 0 0 1 8.5 6Z"
        fill="url(#chat-bubble-fill)"
        stroke="url(#chat-bubble-stroke)"
        strokeWidth="1.25"
      />
      <path
        d="M18 8.5h8A2.5 2.5 0 0 1 28.5 11v7A2.5 2.5 0 0 1 26 20.5H22l-3 2.3V20.5H18A2.5 2.5 0 0 1 15.5 18v-7A2.5 2.5 0 0 1 18 8.5Z"
        fill="rgba(255,255,255,0.14)"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1"
      />
      <circle cx="13" cy="14.5" r="1.35" fill="white" />
      <circle cx="17.5" cy="14.5" r="1.35" fill="white" />
      <circle cx="22" cy="14.5" r="1.35" fill="white" />
      <defs>
        <linearGradient id="chat-bubble-fill" x1="5" y1="6" x2="27" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2FA6B3" />
          <stop offset="1" stopColor="#F47A2A" />
        </linearGradient>
        <linearGradient id="chat-bubble-stroke" x1="5" y1="6" x2="27" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.55)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FrankPeekPopup({
  onContinue,
  onDismiss,
}: {
  onContinue: () => void;
  onDismiss: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-label="Message from Frank"
      className="chat-peek fixed bottom-[5.5rem] right-6 z-50 w-[min(20rem,calc(100vw-2rem))] origin-bottom-right"
    >
      <div className="relative rounded-2xl border border-white/12 bg-[#0A1628]/98 p-4 shadow-[0_20px_56px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-2.5 top-2.5 rounded-lg p-1 text-white/45 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <FrankAvatar size="sm" />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[var(--teal-accent)]">Frank · CRES Dynamics</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/95">{CHAT_FRANK_PEEK}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--orange-energy)] to-[#E87528] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          {CHAT_FRANK_PEEK_CTA}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div
        className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-white/12 bg-[#0A1628]/98"
        aria-hidden
      />
    </div>
  );
}

function ChatLauncherButton({
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="chat-launcher group fixed bottom-6 right-6 z-50 flex items-center gap-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060B18]"
      aria-label="Open chat with Frank from CRES Dynamics"
    >
      <span className="chat-launcher-label pointer-events-none mr-[-0.5rem] max-w-0 overflow-hidden whitespace-nowrap rounded-full border border-white/12 bg-[#0A1628]/95 px-0 py-2.5 text-sm font-semibold text-white opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 group-hover:mr-3 group-hover:max-w-[12rem] group-hover:px-4 group-hover:opacity-100">
        Ask Frank
      </span>

      <span className="relative flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center">
        <span
          className="chat-launcher-ring pointer-events-none absolute inset-[-3px] rounded-[1.35rem] bg-gradient-to-br from-[var(--teal-accent)] via-[#1A3A8A] to-[var(--orange-energy)] opacity-90"
          aria-hidden
        />
        <span
          className="chat-launcher-glow pointer-events-none absolute inset-[-8px] rounded-[1.5rem] bg-gradient-to-br from-[var(--teal-accent)]/40 to-[var(--orange-energy)]/40 blur-md"
          aria-hidden
        />
        <span className="relative flex h-full w-full items-center justify-center rounded-[1.15rem] border border-white/20 bg-[#0A1628]/95 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.04] group-active:scale-[0.98]">
          <ChatLauncherIcon className="h-7 w-7 drop-shadow-sm" />
        </span>
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative h-3 w-3 rounded-full border-2 border-[#060B18] bg-emerald-400" />
        </span>
      </span>
    </button>
  );
}

export default function AIChatWidget() {
  const pathname = usePathname?.() || '';
  const isAdmin = pathname.startsWith('/management') || pathname.startsWith('/admin');

  if (isAdmin) {
    return null;
  }

  const [phase, setPhase] = useState<ChatPhase>('closed');
  const peekDismissedRef = useRef(false);
  const proactivePeekShownRef = useRef(false);
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showDetailsForm, isLoading]);

  useEffect(() => {
    if (phase === 'open' && showDetailsForm) {
      nameInputRef.current?.focus();
    } else if (phase === 'open' && !showDetailsForm) {
      inputRef.current?.focus();
    }
  }, [phase, showDetailsForm]);

  useEffect(() => {
    if (phase !== 'closed' || peekDismissedRef.current || proactivePeekShownRef.current) return;

    const timer = window.setTimeout(() => {
      proactivePeekShownRef.current = true;
      setPhase((current) => (current === 'closed' ? 'peek' : current));
    }, PROACTIVE_PEEK_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [phase]);

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
        headers: { 'Content-Type': 'application/json' },
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
        headers: { 'Content-Type': 'application/json' },
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
          "I'm having trouble connecting right now. Try again or email info@cresdynamics.com";
        setMessages((prev) => [...prev, { role: 'assistant', content: errorMsg }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Something went wrong. Try again or contact us at info@cresdynamics.com',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const leadNameAndPhoneReady =
    detailsFormData.name.trim().length > 0 && detailsFormData.phone.trim().length > 0;

  const closeChat = () => {
    setPhase('closed');
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

  const dismissPeek = () => {
    peekDismissedRef.current = true;
    setPhase('closed');
  };

  const openLauncher = () => {
    if (phase === 'open') return;
    setPhase('peek');
  };

  const inputClass =
    'w-full rounded-xl border border-white/12 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-[var(--teal-accent)]/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[var(--teal-accent)]/25 disabled:opacity-50';

  return (
    <>
      {phase === 'peek' && (
        <FrankPeekPopup onContinue={() => setPhase('open')} onDismiss={dismissPeek} />
      )}

      {phase !== 'open' && <ChatLauncherButton onClick={openLauncher} />}

      {phase === 'open' && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[min(34rem,calc(100vh-5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#060B18] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          {/* Header */}
          <div className="relative shrink-0 border-b border-white/10 bg-gradient-to-r from-[#0A1628] via-[#0D2137] to-[#0A1628] px-4 py-3.5">
            <div className="flex items-center gap-3">
              <FrankAvatar />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-base font-bold text-white">Frank</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                    Online
                  </span>
                </div>
                <p className="truncate text-xs text-white/60">
                  {showDetailsForm ? CHAT_FRANK_HEADER_LEAD : CHAT_FRANK_HEADER_ACTIVE}
                </p>
              </div>
              <button
                type="button"
                onClick={closeChat}
                className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {showDetailsForm ? (
            <div className="flex flex-1 flex-col overflow-y-auto bg-[#060B18]">
              <div className="space-y-4 p-4">
                <div className="flex gap-3">
                  <FrankAvatar size="sm" />
                  <div className="max-w-[90%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-left shadow-sm">
                    <p className="text-sm leading-relaxed text-white/95">{CHAT_FRANK_LEAD_INTRO}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{CHAT_FRANK_LEAD_SUB}</p>
                  </div>
                </div>

                <form onSubmit={handleDetailsSubmit} className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div>
                    <label htmlFor="chat-name" className="mb-1.5 block text-xs font-medium text-white/80">
                      Full name <span className="text-[var(--teal-accent)]">*</span>
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" aria-hidden />
                      <input
                        ref={nameInputRef}
                        type="text"
                        id="chat-name"
                        required
                        autoComplete="name"
                        value={detailsFormData.name}
                        onChange={(e) => setDetailsFormData({ ...detailsFormData, name: e.target.value })}
                        placeholder="Your full name"
                        className={`${inputClass} pl-10`}
                        disabled={isSubmittingDetails || !sessionPublicId}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="chat-phone" className="mb-1.5 block text-xs font-medium text-white/80">
                      Phone / WhatsApp <span className="text-[var(--teal-accent)]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" aria-hidden />
                      <input
                        type="tel"
                        id="chat-phone"
                        required
                        autoComplete="tel"
                        value={detailsFormData.phone}
                        onChange={(e) => setDetailsFormData({ ...detailsFormData, phone: e.target.value })}
                        placeholder="+254 712 345 678"
                        className={`${inputClass} pl-10`}
                        disabled={isSubmittingDetails || !sessionPublicId}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="chat-email" className="mb-1.5 block text-xs font-medium text-white/80">
                      Email <span className="font-normal text-white/40">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" aria-hidden />
                      <input
                        type="email"
                        id="chat-email"
                        autoComplete="email"
                        value={detailsFormData.email}
                        onChange={(e) => setDetailsFormData({ ...detailsFormData, email: e.target.value })}
                        placeholder="you@company.co.ke"
                        className={`${inputClass} pl-10`}
                        disabled={isSubmittingDetails || !sessionPublicId}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!leadNameAndPhoneReady || isSubmittingDetails || !sessionPublicId}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--orange-energy)] to-[#E87528] px-4 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {isSubmittingDetails ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        Starting chat…
                      </>
                    ) : (
                      <>
                        Start the conversation
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-white/40">
                    Your details stay with CRES Dynamics. We may follow up on WhatsApp or email.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto bg-[#060B18] p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2.5 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && <FrankAvatar size="sm" />}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'rounded-tr-md bg-gradient-to-br from-[var(--orange-energy)] to-[#E87528] text-white'
                          : 'rounded-tl-md border border-white/10 bg-white/[0.06] text-white/95'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-2.5">
                    <FrankAvatar size="sm" />
                    <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSend} className="shrink-0 border-t border-white/10 bg-[#0A1628] p-4">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Frank anything…"
                    className={`${inputClass} flex-1`}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[var(--teal-accent)] text-white transition-colors hover:bg-[#3bb8c4] disabled:cursor-not-allowed disabled:opacity-45"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                  </button>
                </div>
                <p className="mt-2 text-center text-[11px] text-white/35">
                  Typical reply within business hours · Nairobi (EAT)
                </p>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
