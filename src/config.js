// config.js
// All the static values used by the engine.
// If you want to add a new color or change spacing — this is the only file you touch.

export const SPACING_UNIT = 4; // 1 unit = 4px

export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',

  'red-50': '#fef2f2',
  'red-100': '#fee2e2',
  'red-300': '#fca5a5',
  'red-500': '#ef4444',
  'red-700': '#b91c1c',
  'red-900': '#7f1d1d',

  'green-50': '#f0fdf4',
  'green-100': '#dcfce7',
  'green-300': '#86efac',
  'green-500': '#22c55e',
  'green-700': '#15803d',
  'green-900': '#14532d',

  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-300': '#93c5fd',
  'blue-500': '#3b82f6',
  'blue-700': '#1d4ed8',
  'blue-900': '#1e3a8a',

  'yellow-50': '#fefce8',
  'yellow-100': '#fef9c3',
  'yellow-300': '#fde047',
  'yellow-500': '#eab308',
  'yellow-700': '#a16207',
  'yellow-900': '#713f12',

  'purple-50': '#faf5ff',
  'purple-100': '#f3e8ff',
  'purple-300': '#d8b4fe',
  'purple-500': '#a855f7',
  'purple-700': '#7e22ce',
  'purple-900': '#581c87',

  'pink-100': '#fce7f3',
  'pink-300': '#f9a8d4',
  'pink-500': '#ec4899',
  'pink-700': '#be185d',

  'orange-100': '#ffedd5',
  'orange-300': '#fdba74',
  'orange-500': '#f97316',
  'orange-700': '#c2410c',

  'teal-100': '#ccfbf1',
  'teal-300': '#5eead4',
  'teal-500': '#14b8a6',
  'teal-700': '#0f766e',

  'cyan-100': '#cffafe',
  'cyan-300': '#67e8f9',
  'cyan-500': '#06b6d4',
  'cyan-700': '#0e7490',

  'indigo-100': '#e0e7ff',
  'indigo-300': '#a5b4fc',
  'indigo-500': '#6366f1',
  'indigo-700': '#4338ca',

  'rose-100': '#ffe4e6',
  'rose-300': '#fda4af',
  'rose-500': '#f43f5e',
  'rose-700': '#be123c',

  'amber-100': '#fef3c7',
  'amber-300': '#fcd34d',
  'amber-500': '#f59e0b',
  'amber-700': '#b45309',

  'lime-100': '#ecfccb',
  'lime-300': '#bef264',
  'lime-500': '#84cc16',
  'lime-700': '#4d7c0f',
};

export const FONT_SIZES = {
  '2xs': '0.625rem', // 10px
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem', // 72px
  '8xl': '6rem', // 96px
  '9xl': '8rem', // 128px
};

export const FONT_WEIGHTS = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const LINE_HEIGHTS = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

export const LETTER_SPACINGS = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const BORDER_RADIUS = {
  none: '0px',
  sm: '2px',
  DEFAULT: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
};

export const BORDER_WIDTHS = {
  0: '0px',
  DEFAULT: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
};

export const SHADOWS = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.04)',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
};

export const OPACITY = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
};

export const Z_INDEX = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  modal: '100',
  toast: '200',
  tooltip: '300',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const TRANSITIONS = {
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};
