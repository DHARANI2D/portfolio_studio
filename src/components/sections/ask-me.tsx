"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Bot, User, Send, Loader2, Cpu } from "lucide-react";
import { askDharani } from "@/ai/flows/ask-dharani-flow";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function AskMe() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const botResponse = await askDharani({ question: input });
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

  return (
    <section id="ask-me" className="py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Ask Me Anything
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question? Ask my AI assistant, trained on my portfolio information.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl shadow-teal-500/10 h-[600px] flex flex-col">
          <div className="flex-grow overflow-y-auto pr-4 space-y-6">
            {messages.length === 0 && (
                <div className="text-center text-gray-400 h-full flex flex-col justify-center items-center">
                    <Cpu size={48} className="mb-4 text-teal-400" />
                    <p className="text-lg">My AI is ready.</p>
                    <p>Ask about my skills, projects, or experience!</p>
                </div>
            )}
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
              placeholder="e.g., What are your top 3 skills?"
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
    </section>
  );
}
