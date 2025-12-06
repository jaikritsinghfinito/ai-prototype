"use client";

import Navbar from "@/components/Navbar";
import ModelSelector from "@/components/ModelSelector";
import ChatBubble from "@/components/ChatBubble";
import PromptInput from "@/components/PromptInput";
import ParametersPanel from "@/components/ParametersPanel";
import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "user", text: "Hey! How are you doing today?" },
    {
      id: 2,
      sender: "ai",
      text: "I’m doing great! Just working through some stuff. What about you?",
    },
    {
      id: 3,
      sender: "user",
      text: "Same here, just building an AI interface for my assignment.",
    },
    {
      id: 4,
      sender: "ai",
      text: "Nice! Let me know what part you want to work on next.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // theme load from localStorage
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  // theme save to localStorage
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  const mainBg = isDark ? "bg-[#050816]" : "bg-[#E6EEF6]";
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  

  function handleUserSubmit(text: string) {
    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);

    
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "This is a mock AI response based on your message: " + text,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 700);
  }

  return (
    <main
      className={`min-h-screen ${mainBg} ${textColor} px-4 md:px-8 lg:px-12 py-8`}
    >
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
      />

      
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <ModelSelector isDark={isDark} />

        
        <section className="flex-1 flex flex-col max-w-4xl mx-auto h-[70vh]">
         
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {messages.map((msg) => (
              <ChatBubble
                key={msg.id}
                sender={msg.sender}
                text={msg.text}
                isDark={isDark}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          
          <div className="mt-3">
            <PromptInput onSubmit={handleUserSubmit} />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <ParametersPanel isDark={isDark} />
      </div>
    </main>
  );
}
