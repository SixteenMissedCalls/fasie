import React from 'react';

/** Логотип PetVet: лапа и знак заботы в мягком бирюзовом круге */
const PetVetLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    focusable="false"
  >
    <defs>
      <linearGradient id="petvet-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#petvet-bg)" />
    <g fill="#fff" transform="translate(60, 52)">
      {/* Лапа */}
      <ellipse cx="-24" cy="-22" rx="11" ry="11" />
      <ellipse cx="0" cy="-32" rx="11" ry="11" />
      <ellipse cx="24" cy="-22" rx="11" ry="11" />
      <path d="M-28 8c-4 18 8 32 28 32s32-14 28-32c-2-12-12-20-28-20s-26 8-28 20z" />
    </g>
    {/* Маленький крест — ассоциация с ветеринарной помощью */}
    <g fill="#ccfbf1" transform="translate(78, 78)">
      <rect x="-2" y="-10" width="4" height="20" rx="1" />
      <rect x="-10" y="-2" width="20" height="4" rx="1" />
    </g>
  </svg>
);

export default PetVetLogo;
