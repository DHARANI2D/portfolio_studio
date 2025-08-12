
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Bot, User, Send, Loader2, X, MessageSquare } from "lucide-react";
import { askDharani } from "@/ai/flows/ask-dharani-flow";

interface Message {
  role: "user" | "bot";
  content: string;
}

type ConversationState = "awaiting_name" | "chatting";

export function AskMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [conversationState, setConversationState] = useState<ConversationState>("awaiting_name");
  const [userName, setUserName] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
     if(isOpen) {
      setShowTooltip(false)
    }
  }, [isOpen]);
  
  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([{ role: "bot", content: "Hi! 👋 I’m D.A.N.U.S. Before we start, what's your name?" }]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    if (conversationState === "awaiting_name") {
      setUserName(currentInput);
      setConversationState("chatting");
      const botMessage: Message = { role: "bot", content: `Nice to meet you, ${currentInput}! How can I help you today?` };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const botResponse = await askDharani({ question: currentInput, userName: userName || undefined });
      const botMessage: Message = { role: "bot", content: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = {
        role: "bot",
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getPlaceholderText = () => {
    if (conversationState === 'awaiting_name') {
      return "Please enter your name...";
    }
    return "e.g., What are your top 3 skills?";
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 group">
        {showTooltip && !isOpen && (
          <div className="absolute bottom-full right-0 mb-3 w-max bg-gradient-to-r from-teal-600/90 to-emerald-600/90 backdrop-blur-md text-white text-sm rounded-lg px-4 py-2 shadow-lg border border-white/10 transition-opacity duration-300 opacity-100">
            I’m DANUS - ask me anything about Dharani!
            <div className="absolute right-4 -bottom-1.5 w-3 h-3 bg-emerald-600/90 border-b border-r border-white/10 transform rotate-45"></div>
          </div>
        )}
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            setShowTooltip(false)
          }}
          className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-110 transform"
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl shadow-teal-500/10 h-[500px] flex flex-col">
            <div className="flex-grow overflow-y-auto pr-4 space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    message.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.role === "bot" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-md p-4 rounded-xl ${
                      message.role === "user"
                        ? "bg-purple-600/50 text-white"
                        : "bg-gray-700/50 text-gray-300"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="max-w-md p-4 rounded-xl bg-gray-700/50 text-gray-300">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={getPlaceholderText()}
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 p-3 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
