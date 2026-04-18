import React from 'react';

export default function DifficultyBadge({ level }) {
  const colors = {
    'Easy': 'bg-emerald-100 text-emerald-700 dark-badge-easy',
    'Moderate': 'bg-amber-100 text-amber-700',
    'Easy–Moderate': 'bg-teal-100 text-teal-700',
    'Hard': 'bg-red-100 text-red-700',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors[level] || 'bg-stone-100 text-stone-600'}`}>
      {level}
    </span>
  );
}
