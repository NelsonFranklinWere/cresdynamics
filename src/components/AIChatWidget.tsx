'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ClientDetails {
  name: string;
  phone: string;
  email?: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(null);
  const [showDetailsForm, setShowDetailsForm] = useState(true);
  const [detailsFormData, setDetailsFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmittingDetails, setIsSubmittingDetails] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm here to help you learn about CRES Dynamics. What would you like to know about our services?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

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
        }, 4000);
      }
    }, 10000);

    return () => {
      clearTimeout(showTimer);
    };
  }, [isOpen]);

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailsFormData.name.trim() || !detailsFormData.phone.trim()) {
      return;
    }

    setIsSubmittingDetails(true);

    try {
      // Send client details to API
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
        }),
      });

      if (response.ok) {
        // Store client details
        setClientDetails({
          name: detailsFormData.name.trim(),
          phone: detailsFormData.phone.trim(),
          email: detailsFormData.email.trim() || undefined,
        });
        setShowDetailsForm(false);
      } else {
        // Still allow chat even if email fails
        setClientDetails({
          name: detailsFormData.name.trim(),
          phone: detailsFormData.phone.trim(),
          email: detailsFormData.email.trim() || undefined,
        });
        setShowDetailsForm(false);
      }
    } catch (error) {
      console.error('Error submitting details:', error);
      // Still allow chat even if email fails
      setClientDetails({
        name: detailsFormData.name.trim(),
        phone: detailsFormData.phone.trim(),
        email: detailsFormData.email.trim() || undefined,
      });
      setShowDetailsForm(false);
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

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.response },
        ]);
      } else {
        // Show the actual error message if available
        const errorMsg = data.error || "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at info@cresdynamics.com";
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: errorMsg,
          },
        ]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm sorry, something went wrong. Please try again or contact us at info@cresdynamics.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Teaser bubble */}
      {!isOpen && showTeaser && (
        <div className="fixed bottom-20 right-6 z-50 max-w-xs bg-[var(--cres-black)] text-white/85 text-[11px] leading-snug px-3 py-2 rounded-lg shadow-lg border border-white/10">
          <p>I'm your CRES AI assistant,</p>
          <p>chat with me.</p>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setShowTeaser(true)}
          onMouseLeave={() => setShowTeaser(false)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[var(--cres-orange-primary)] to-[#E87528] hover:from-[#E87528] hover:to-[var(--cres-orange-primary)] text-white rounded-full p-4 shadow-2xl hover:shadow-[var(--cres-orange-primary)]/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Open AI chat"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--cres-electric-teal)] rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-[var(--cres-deep-navy)] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--cres-orange-primary)] to-[#E87528] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">CRES AI Assistant</h3>
                <p className="text-white/80 text-xs">
                  {showDetailsForm ? 'Please provide your details to continue' : 'Ask me anything about our services'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setShowDetailsForm(true);
                setClientDetails(null);
                setDetailsFormData({ name: '', phone: '', email: '' });
              }}
              className="text-white hover:text-white/80 transition-colors p-1"
              aria-label="Close chat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Details Form */}
          {showDetailsForm && (
            <div className="flex-1 overflow-y-auto p-6 bg-[var(--cres-primary-bg)]">
              <div className="mb-4">
                <h4 className="text-[var(--cres-white)] font-semibold mb-2">Let's get started!</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Please provide your details so we can assist you better and follow up with you.
                </p>
              </div>
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--cres-white)] mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    required
                    value={detailsFormData.name}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-black/70 border border-white/20 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    disabled={isSubmittingDetails}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--cres-white)] mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={detailsFormData.phone}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, phone: e.target.value })}
                    placeholder="e.g., +254 712 345 678"
                    className="w-full px-4 py-3 bg-black/70 border border-white/20 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    disabled={isSubmittingDetails}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--cres-white)] mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={detailsFormData.email}
                    onChange={(e) => setDetailsFormData({ ...detailsFormData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-black/70 border border-white/20 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                    disabled={isSubmittingDetails}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!detailsFormData.name.trim() || !detailsFormData.phone.trim() || isSubmittingDetails}
                  className="w-full bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-white px-6 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isSubmittingDetails ? 'Starting chat...' : 'Start Chat'}
                </button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  By continuing, you agree to be contacted by CRES Dynamics
                </p>
              </form>
            </div>
          )}

          {/* Messages */}
          {!showDetailsForm && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--cres-primary-bg)]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-[var(--cres-orange-primary)] text-white'
                      : 'bg-black/70 border border-white/20 text-[var(--cres-white)]'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/70 border border-white/20 rounded-2xl px-4 py-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-[var(--cres-electric-teal)] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[var(--cres-electric-teal)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[var(--cres-electric-teal)] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input */}
          {!showDetailsForm && (
            <form onSubmit={handleSend} className="p-4 bg-[var(--cres-deep-navy)] border-t border-white/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 px-4 py-3 bg-black/70 border border-white/20 rounded-xl text-[var(--cres-white)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cres-orange-primary)] focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-white px-6 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Powered by AI • Learn about CRES Dynamics
            </p>
          </form>
          )}
        </div>
      )}
    </>
  );
}

