// config.js
// All the static values used by the engine.
// If you want to add a new color or change spacing — this is the only file you touch.

export const SPACING_UNIT = 4; // 1 unit = 4px

export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",

  "gray-100": "#f3f4f6",
  "gray-300": "#d1d5db",
  "gray-500": "#6b7280",
  "gray-700": "#374151",
  "gray-900": "#111827",

  "red-100": "#fee2e2",
  "red-500": "#ef4444",
  "red-700": "#b91c1c",

  "green-100": "#dcfce7",
  "green-500": "#22c55e",
  "green-700": "#15803d",

  "blue-100": "#dbeafe",
  "blue-500": "#3b82f6",
  "blue-700": "#1d4ed8",

  "yellow-100": "#fef9c3",
  "yellow-500": "#eab308",
  "yellow-700": "#a16207",

  "purple-100": "#f3e8ff",
  "purple-500": "#a855f7",
  "purple-700": "#7e22ce",

  "pink-500": "#ec4899",

  "orange-500": "#f97316",
};

export const FONT_SIZES = {
  xs:   "0.75rem",
  sm:   "0.875rem",
  base: "1rem",
  lg:   "1.125rem",
  xl:   "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
};

export const BORDER_RADIUS = {
  none:    "0px",
  sm:      "2px",
  md:      "6px",
  lg:      "8px",
  xl:      "12px",
  full:    "9999px",
  DEFAULT: "4px",
};

export const SHADOWS = {
  sm:      "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  md:      "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  lg:      "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  none:    "none",
};