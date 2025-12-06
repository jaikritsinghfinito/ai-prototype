"use client";

import { useState } from "react";

type ParametersPanelProps = {
  isDark?: boolean;
};

export default function ParametersPanel({ isDark = false }: ParametersPanelProps) {
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1024);
  const [topP, setTopP] = useState(1.0);

  const cardBg = isDark
    ? "bg-[#0b1020]/90 border-gray-700"
    : "bg-white/80 border-gray-200";

  const labelColor = isDark ? "text-gray-300" : "text-gray-700";
  const valueColor = isDark ? "text-gray-100" : "text-gray-900";
  const helperColor = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <section
      className={`mt-8 w-full rounded-3xl shadow-md border ${cardBg} px-5 py-4 md:px-6 md:py-5`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className={`text-sm font-semibold ${labelColor}`}>
            Response parameters
          </h2>
          <p className={`text-xs ${helperColor}`}>
            Fine-tune how the model responds to your prompts.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/5">
          <span className="opacity-70">Preset:</span>
          <span className="font-medium">Balanced</span>
        </div>
      </div>

      {/* Controls grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Temperature */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${labelColor}`}>
              Temperature
            </span>
            <span className={`text-xs font-semibold ${valueColor}`}>
              {temperature.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-gray-900"
          />
          <p className={`text-[11px] leading-snug ${helperColor}`}>
            Lower = more focused. Higher = more creative / random.
          </p>
        </div>

        {/* Max tokens */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${labelColor}`}>
              Max tokens
            </span>
            <span className={`text-xs font-semibold ${valueColor}`}>
              {maxTokens}
            </span>
          </div>
          <input
            type="range"
            min={256}
            max={4096}
            step={128}
            value={maxTokens}
            onChange={(e) => setMaxTokens(parseInt(e.target.value, 10))}
            className="w-full accent-gray-900"
          />
          <p className={`text-[11px] leading-snug ${helperColor}`}>
            
          </p>
        </div>

        {/* Top-p – full width on desktop */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${labelColor}`}>Top-p</span>
            <span className={`text-xs font-semibold ${valueColor}`}>
              {topP.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={topP}
            onChange={(e) => setTopP(parseFloat(e.target.value))}
            className="w-full accent-gray-900"
          />
          <p className={`text-[11px] leading-snug ${helperColor}`}>
            Nucleus sampling
          </p>
        </div>
      </div>
    </section>
  );
}
