"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

type PromptInputProps = {
  onSubmit?: (value: string) => void; 
};

export default function PromptInput({ onSubmit }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

 
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed) return;

    onSubmit?.(trimmed);  
    setPrompt("");         
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      
      <div className="w-full bg-[#f0f4f9] rounded-[32px] p-4 relative transition-all duration-200 hover:shadow-sm border border-transparent focus-within:border-gray-300 focus-within:bg-[#eef2f7]">
        
        <div className="mb-6 px-2">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask Gemini"
            rows={1}
            className="w-full bg-transparent text-lg text-gray-800 placeholder-gray-500 outline-none resize-none overflow-hidden leading-relaxed"
            style={{ minHeight: "44px", maxHeight: "200px" }}
          />
        </div>

        
        <div className="flex items-center justify-between px-1">
          
          <div className="flex items-center gap-2">
            
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200/50 transition-colors text-gray-700"
              aria-label="Upload file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>

            
            <button
              type="button"
              className="flex items-center gap-2 py-2 px-3 rounded-full hover:bg-gray-200/50 transition-colors text-gray-700 text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <span>Tools</span>
            </button>
          </div>

          
          <div className="flex items-center gap-1">
            
            <button
              type="button"
              className="flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-gray-200/50 transition-colors text-gray-600 text-sm font-medium mr-1"
            >
              <span>Thinking</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

           
            
            <button
               type="submit"
                className="p-2.5 rounded-full hover:bg-gray-200/50 transition-colors text-gray-700"
                aria-label="Send message"
>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>

          </div>
        </div>
      </div>
    </form>
  );
}
