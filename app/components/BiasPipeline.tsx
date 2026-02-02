"use client";

import { useState } from "react";

const stages = [
  {
    title: "Society",
    description:
      "Social inequality, historical discrimination, and institutional power relations shape what is measured and valued.",
  },
  {
    title: "Data",
    description:
      "Datasets reflect social structures through sampling bias, missing data, and proxy variables.",
  },
  {
    title: "Model",
    description:
      "Machine learning models optimize for performance metrics and simplify complex realities.",
  },
  {
    title: "System",
    description:
      "AI systems are deployed in real-world contexts such as hiring, healthcare, or finance.",
  },
  {
    title: "Decision",
    description:
      "Automated or assisted decisions affect real people and can reinforce inequality.",
  },
];

export default function BiasPipeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-6 pb-15 pt-6">
      <div className="flex flex-col md:flex-row gap-4">
        {stages.map((stage, index) => (
          <div key={stage.title} className="flex items-center gap-4">
            <button
              onClick={() => setActive(index)}
              className="border rounded-lg px-4 py-3 text-left hover:bg-gray-400 transition hover:border-blue-300"
            >
              <p className="font-medium">{stage.title}</p>
            </button>
            {index < stages.length - 1 && (
              <span className="text-blue-400 hidden md:inline">-&gt;</span>
            )}
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="font-semibold mb-1">
            {stages[active].title}
          </p>
          <p className="text-sm text-gray-700">
            {stages[active].description}
          </p>
        </div>
      )}
    </div>
  );
}
