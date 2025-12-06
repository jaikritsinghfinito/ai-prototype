"use client";

import { useState, useEffect } from "react";

type Model = {
  id: string;
  name: string;
};

type Props = {
  isDark?: boolean;
};

export default function ModelSelector({ isDark = false }: Props) {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("chatgpt");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadModels() {
      try {
        const res = await fetch("/api/models");
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        const data = await res.json();
        setModels(data.models || []);
      } catch (err) {
        console.error("Error fetching models:", err);
        setError("Failed to load models");
      } finally {
        setLoading(false);
      }
    }

    loadModels();
  }, []);

  const baseCard = isDark
    ? "bg-[#0b1020]/90 border-gray-700"
    : "bg-white/80 border-gray-200";

  
  if (loading) {
    return (
      <aside
        className={`w-full md:w-64 rounded-3xl shadow-md p-4 flex flex-col gap-4 min-h-[500px] border ${baseCard}`}
      >
        <h2
          className={`text-sm font-semibold ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Models
        </h2>
        <p className="text-sm opacity-70">Loading models...</p>
      </aside>
    );
  }

  
  const listToShow: Model[] =
    !error && models.length > 0
      ? models
      : [
          { id: "chatgpt", name: "ChatGPT 4.1" },
          { id: "gemini", name: "Google Gemini Pro" },
          { id: "claude", name: "Anthropic Claude 3" },
        ];

  return (
    <aside
      className={`w-full md:w-64 rounded-3xl shadow-md p-4 flex flex-col gap-4 min-h-[500px] border ${baseCard}`}
    >
      <h2
        className={`text-sm font-semibold ${
          isDark ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Models
      </h2>

      {error && (
        <p className="text-xs text-red-400">
          {error}. Showing default models.
        </p>
      )}

      {listToShow.map((model) => {
        const isActive = selectedModel === model.id;

        const activeClasses = isDark
          ? "bg-gray-100 text-gray-900 border-gray-100"
          : "bg-gray-900 text-white border-gray-900";

        const inactiveClasses = isDark
          ? "bg-transparent text-gray-100 border-gray-600 hover:bg-gray-800/40"
          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50";

        return (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={`w-full py-3 rounded-2xl text-sm font-medium shadow-sm border transition ${isActive ? activeClasses : inactiveClasses}`}
          >
            {model.name}
          </button>
        );
      })}
    </aside>
  );
}
