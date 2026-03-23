import {
  SPACING_UNIT,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACINGS,
  BORDER_RADIUS,
  BORDER_WIDTHS,
  SHADOWS,
  Z_INDEX,
  TRANSITIONS,
} from './config.js';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toSpacing(value) {
  if (value === 'auto') return 'auto';
  if (value === '0') return '0px';
  if (value === 'px') return '1px';
  const n = parseFloat(value);
  return isNaN(n) ? value : `${n * SPACING_UNIT}px`;
}

function toColor(value) {
  return COLORS[value] || value;
}

// ─── Parse ────────────────────────────────────────────────────────────────────

export function parseClass(name) {
  // ── Padding ───────────────────────────────────────────────────────────────
  if (name.startsWith('p-')) return { padding: toSpacing(name.slice(2)) };
  if (name.startsWith('px-'))
    return {
      paddingLeft: toSpacing(name.slice(3)),
      paddingRight: toSpacing(name.slice(3)),
    };
  if (name.startsWith('py-'))
    return {
      paddingTop: toSpacing(name.slice(3)),
      paddingBottom: toSpacing(name.slice(3)),
    };
  if (name.startsWith('pt-')) return { paddingTop: toSpacing(name.slice(3)) };
  if (name.startsWith('pr-')) return { paddingRight: toSpacing(name.slice(3)) };
  if (name.startsWith('pb-'))
    return { paddingBottom: toSpacing(name.slice(3)) };
  if (name.startsWith('pl-')) return { paddingLeft: toSpacing(name.slice(3)) };

  // ── Margin ────────────────────────────────────────────────────────────────
  if (name.startsWith('m-')) return { margin: toSpacing(name.slice(2)) };
  if (name.startsWith('mx-'))
    return {
      marginLeft: toSpacing(name.slice(3)),
      marginRight: toSpacing(name.slice(3)),
    };
  if (name.startsWith('my-'))
    return {
      marginTop: toSpacing(name.slice(3)),
      marginBottom: toSpacing(name.slice(3)),
    };
  if (name.startsWith('mt-')) return { marginTop: toSpacing(name.slice(3)) };
  if (name.startsWith('mr-')) return { marginRight: toSpacing(name.slice(3)) };
  if (name.startsWith('mb-')) return { marginBottom: toSpacing(name.slice(3)) };
  if (name.startsWith('ml-')) return { marginLeft: toSpacing(name.slice(3)) };

  // ── Width ─────────────────────────────────────────────────────────────────
  if (name.startsWith('w-')) {
    const v = name.slice(2);
    if (v === 'full') return { width: '100%' };
    if (v === 'screen') return { width: '100vw' };
    if (v === 'auto') return { width: 'auto' };
    if (v === 'min') return { width: 'min-content' };
    if (v === 'max') return { width: 'max-content' };
    if (v === 'fit') return { width: 'fit-content' };
    return { width: toSpacing(v) };
  }

  // ── Height ────────────────────────────────────────────────────────────────
  if (name.startsWith('h-')) {
    const v = name.slice(2);
    if (v === 'full') return { height: '100%' };
    if (v === 'screen') return { height: '100vh' };
    if (v === 'auto') return { height: 'auto' };
    if (v === 'min') return { height: 'min-content' };
    if (v === 'max') return { height: 'max-content' };
    if (v === 'fit') return { height: 'fit-content' };
    return { height: toSpacing(v) };
  }

  // ── Min / Max Width & Height ──────────────────────────────────────────────
  if (name.startsWith('min-w-')) {
    const v = name.slice(6);
    if (v === 'full') return { minWidth: '100%' };
    if (v === 'screen') return { minWidth: '100vw' };
    if (v === 'min') return { minWidth: 'min-content' };
    if (v === 'max') return { minWidth: 'max-content' };
    return { minWidth: toSpacing(v) };
  }
  if (name.startsWith('max-w-')) {
    const v = name.slice(6);
    if (v === 'full') return { maxWidth: '100%' };
    if (v === 'screen') return { maxWidth: '100vw' };
    if (v === 'none') return { maxWidth: 'none' };
    return { maxWidth: toSpacing(v) };
  }
  if (name.startsWith('min-h-')) {
    const v = name.slice(6);
    if (v === 'full') return { minHeight: '100%' };
    if (v === 'screen') return { minHeight: '100vh' };
    return { minHeight: toSpacing(v) };
  }
  if (name.startsWith('max-h-')) {
    const v = name.slice(6);
    if (v === 'full') return { maxHeight: '100%' };
    if (v === 'screen') return { maxHeight: '100vh' };
    if (v === 'none') return { maxHeight: 'none' };
    return { maxHeight: toSpacing(v) };
  }

  // ── Background ────────────────────────────────────────────────────────────
  if (name.startsWith('bg-'))
    return { backgroundColor: toColor(name.slice(3)) };

  // ── Text ──────────────────────────────────────────────────────────────────
  if (name.startsWith('text-')) {
    const v = name.slice(5);
    if (FONT_SIZES[v]) return { fontSize: FONT_SIZES[v] };
    if (v === 'left' || v === 'center' || v === 'right' || v === 'justify')
      return { textAlign: v };
    return { color: toColor(v) };
  }

  // ── Font Weight ───────────────────────────────────────────────────────────
  if (name.startsWith('font-')) {
    const v = name.slice(5);
    if (FONT_WEIGHTS[v]) return { fontWeight: FONT_WEIGHTS[v] };
  }

  // ── Line Height ───────────────────────────────────────────────────────────
  if (name.startsWith('leading-'))
    return { lineHeight: LINE_HEIGHTS[name.slice(8)] || name.slice(8) };

  // ── Letter Spacing ────────────────────────────────────────────────────────
  if (name.startsWith('tracking-'))
    return { letterSpacing: LETTER_SPACINGS[name.slice(9)] || name.slice(9) };

  // ── Text Transform ────────────────────────────────────────────────────────
  if (name === 'uppercase') return { textTransform: 'uppercase' };
  if (name === 'lowercase') return { textTransform: 'lowercase' };
  if (name === 'capitalize') return { textTransform: 'capitalize' };
  if (name === 'normal-case') return { textTransform: 'none' };

  // ── Text Decoration ───────────────────────────────────────────────────────
  if (name === 'underline') return { textDecoration: 'underline' };
  if (name === 'line-through') return { textDecoration: 'line-through' };
  if (name === 'no-underline') return { textDecoration: 'none' };

  // ── Text Overflow ─────────────────────────────────────────────────────────
  if (name === 'truncate')
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  if (name === 'text-ellipsis') return { textOverflow: 'ellipsis' };
  if (name === 'text-clip') return { textOverflow: 'clip' };

  // ── Whitespace ────────────────────────────────────────────────────────────
  if (name === 'whitespace-normal') return { whiteSpace: 'normal' };
  if (name === 'whitespace-nowrap') return { whiteSpace: 'nowrap' };
  if (name === 'whitespace-pre') return { whiteSpace: 'pre' };
  if (name === 'whitespace-pre-line') return { whiteSpace: 'pre-line' };
  if (name === 'whitespace-pre-wrap') return { whiteSpace: 'pre-wrap' };

  // ── Border ────────────────────────────────────────────────────────────────
  if (name === 'border') return { border: '1px solid' };
  if (name === 'border-none') return { border: 'none' };
  if (name.startsWith('border-')) {
    const v = name.slice(7);
    if (COLORS[v]) return { borderColor: toColor(v) };
    if (BORDER_WIDTHS[v])
      return { borderWidth: BORDER_WIDTHS[v], borderStyle: 'solid' };
    if (v === 'solid') return { borderStyle: 'solid' };
    if (v === 'dashed') return { borderStyle: 'dashed' };
    if (v === 'dotted') return { borderStyle: 'dotted' };
    if (v === 't') return { borderTop: '1px solid' };
    if (v === 'r') return { borderRight: '1px solid' };
    if (v === 'b') return { borderBottom: '1px solid' };
    if (v === 'l') return { borderLeft: '1px solid' };
  }

  // ── Border Radius ─────────────────────────────────────────────────────────
  if (name === 'rounded') return { borderRadius: BORDER_RADIUS.DEFAULT };
  if (name.startsWith('rounded-')) {
    const v = name.slice(8);
    // per-side: rounded-t-lg, rounded-bl-md, etc.
    const sideMap = {
      t: ['borderTopLeftRadius', 'borderTopRightRadius'],
      r: ['borderTopRightRadius', 'borderBottomRightRadius'],
      b: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
      l: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      tl: ['borderTopLeftRadius'],
      tr: ['borderTopRightRadius'],
      br: ['borderBottomRightRadius'],
      bl: ['borderBottomLeftRadius'],
    };
    for (const [side, props] of Object.entries(sideMap)) {
      if (v.startsWith(`${side}-`)) {
        const size = v.slice(side.length + 1);
        const radius = BORDER_RADIUS[size] || size;
        return Object.fromEntries(props.map((p) => [p, radius]));
      }
    }
    return { borderRadius: BORDER_RADIUS[v] || v };
  }

  // ── Shadow ────────────────────────────────────────────────────────────────
  if (name === 'shadow') return { boxShadow: SHADOWS.DEFAULT };
  if (name.startsWith('shadow-'))
    return { boxShadow: SHADOWS[name.slice(7)] || name.slice(7) };

  // ── Opacity ───────────────────────────────────────────────────────────────
  if (name.startsWith('opacity-'))
    return { opacity: parseFloat(name.slice(8)) / 100 };

  // ── Z-Index ───────────────────────────────────────────────────────────────
  if (name.startsWith('z-'))
    return { zIndex: Z_INDEX[name.slice(2)] || name.slice(2) };

  // ── Display ───────────────────────────────────────────────────────────────
  if (name === 'block') return { display: 'block' };
  if (name === 'inline-block') return { display: 'inline-block' };
  if (name === 'inline') return { display: 'inline' };
  if (name === 'flex') return { display: 'flex' };
  if (name === 'inline-flex') return { display: 'inline-flex' };
  if (name === 'grid') return { display: 'grid' };
  if (name === 'inline-grid') return { display: 'inline-grid' };
  if (name === 'hidden') return { display: 'none' };

  // ── Flexbox ───────────────────────────────────────────────────────────────
  if (name === 'flex-row') return { flexDirection: 'row' };
  if (name === 'flex-row-reverse') return { flexDirection: 'row-reverse' };
  if (name === 'flex-col') return { flexDirection: 'column' };
  if (name === 'flex-col-reverse') return { flexDirection: 'column-reverse' };
  if (name === 'flex-wrap') return { flexWrap: 'wrap' };
  if (name === 'flex-wrap-reverse') return { flexWrap: 'wrap-reverse' };
  if (name === 'flex-nowrap') return { flexWrap: 'nowrap' };
  if (name === 'flex-1') return { flex: '1 1 0%' };
  if (name === 'flex-auto') return { flex: '1 1 auto' };
  if (name === 'flex-initial') return { flex: '0 1 auto' };
  if (name === 'flex-none') return { flex: 'none' };
  if (name === 'grow') return { flexGrow: '1' };
  if (name === 'grow-0') return { flexGrow: '0' };
  if (name === 'shrink') return { flexShrink: '1' };
  if (name === 'shrink-0') return { flexShrink: '0' };

  if (name.startsWith('gap-x-')) return { columnGap: toSpacing(name.slice(6)) };
  if (name.startsWith('gap-y-')) return { rowGap: toSpacing(name.slice(6)) };
  if (name.startsWith('gap-')) return { gap: toSpacing(name.slice(4)) };

  if (name.startsWith('items-')) {
    const map = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      stretch: 'stretch',
      baseline: 'baseline',
    };
    return { alignItems: map[name.slice(6)] || name.slice(6) };
  }
  if (name.startsWith('justify-')) {
    const map = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
    };
    return { justifyContent: map[name.slice(8)] || name.slice(8) };
  }
  if (name.startsWith('self-')) {
    const map = {
      auto: 'auto',
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      stretch: 'stretch',
    };
    return { alignSelf: map[name.slice(5)] || name.slice(5) };
  }
  if (name.startsWith('content-')) {
    const map = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
    };
    return { alignContent: map[name.slice(8)] || name.slice(8) };
  }

  // ── Grid ──────────────────────────────────────────────────────────────────
  if (name.startsWith('cols-'))
    return { gridTemplateColumns: `repeat(${name.slice(5)}, minmax(0, 1fr))` };
  if (name.startsWith('rows-'))
    return { gridTemplateRows: `repeat(${name.slice(5)}, minmax(0, 1fr))` };
  if (name.startsWith('col-span-'))
    return { gridColumn: `span ${name.slice(9)} / span ${name.slice(9)}` };
  if (name.startsWith('row-span-'))
    return { gridRow: `span ${name.slice(9)} / span ${name.slice(9)}` };
  if (name === 'col-auto') return { gridColumn: 'auto' };
  if (name === 'row-auto') return { gridRow: 'auto' };

  // ── Position ──────────────────────────────────────────────────────────────
  if (name === 'relative') return { position: 'relative' };
  if (name === 'absolute') return { position: 'absolute' };
  if (name === 'fixed') return { position: 'fixed' };
  if (name === 'sticky') return { position: 'sticky' };
  if (name === 'static') return { position: 'static' };

  if (name.startsWith('top-')) return { top: toSpacing(name.slice(4)) };
  if (name.startsWith('right-')) return { right: toSpacing(name.slice(6)) };
  if (name.startsWith('bottom-')) return { bottom: toSpacing(name.slice(7)) };
  if (name.startsWith('left-')) return { left: toSpacing(name.slice(5)) };
  if (name === 'inset-0')
    return { top: '0px', right: '0px', bottom: '0px', left: '0px' };

  // ── Overflow ──────────────────────────────────────────────────────────────
  if (name === 'overflow-hidden') return { overflow: 'hidden' };
  if (name === 'overflow-auto') return { overflow: 'auto' };
  if (name === 'overflow-scroll') return { overflow: 'scroll' };
  if (name === 'overflow-visible') return { overflow: 'visible' };
  if (name === 'overflow-x-hidden') return { overflowX: 'hidden' };
  if (name === 'overflow-x-auto') return { overflowX: 'auto' };
  if (name === 'overflow-x-scroll') return { overflowX: 'scroll' };
  if (name === 'overflow-y-hidden') return { overflowY: 'hidden' };
  if (name === 'overflow-y-auto') return { overflowY: 'auto' };
  if (name === 'overflow-y-scroll') return { overflowY: 'scroll' };

  // ── Cursor ────────────────────────────────────────────────────────────────
  if (name === 'cursor-pointer') return { cursor: 'pointer' };
  if (name === 'cursor-default') return { cursor: 'default' };
  if (name === 'cursor-not-allowed') return { cursor: 'not-allowed' };
  if (name === 'cursor-wait') return { cursor: 'wait' };
  if (name === 'cursor-text') return { cursor: 'text' };
  if (name === 'cursor-move') return { cursor: 'move' };
  if (name === 'cursor-grab') return { cursor: 'grab' };
  if (name === 'cursor-grabbing') return { cursor: 'grabbing' };

  // ── Pointer Events ────────────────────────────────────────────────────────
  if (name === 'pointer-events-none') return { pointerEvents: 'none' };
  if (name === 'pointer-events-auto') return { pointerEvents: 'auto' };

  // ── Transitions ───────────────────────────────────────────────────────────
  if (name === 'transition')
    return {
      transitionProperty:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      transitionTimingFunction: TRANSITIONS.easing['in-out'],
      transitionDuration: TRANSITIONS.duration[150],
    };
  if (name === 'transition-none') return { transitionProperty: 'none' };
  if (name === 'transition-all')
    return {
      transitionProperty: 'all',
      transitionTimingFunction: TRANSITIONS.easing['in-out'],
      transitionDuration: TRANSITIONS.duration[150],
    };
  if (name === 'transition-colors')
    return {
      transitionProperty: 'color, background-color, border-color',
      transitionTimingFunction: TRANSITIONS.easing['in-out'],
      transitionDuration: TRANSITIONS.duration[150],
    };
  if (name === 'transition-opacity')
    return {
      transitionProperty: 'opacity',
      transitionTimingFunction: TRANSITIONS.easing['in-out'],
      transitionDuration: TRANSITIONS.duration[150],
    };
  if (name === 'transition-shadow')
    return {
      transitionProperty: 'box-shadow',
      transitionTimingFunction: TRANSITIONS.easing['in-out'],
      transitionDuration: TRANSITIONS.duration[150],
    };
  if (name === 'transition-transform')
    return {
      transitionProperty: 'transform',
      transitionTimingFunction: TRANSITIONS.easing['in-out'],
      transitionDuration: TRANSITIONS.duration[150],
    };

  if (name.startsWith('duration-'))
    return {
      transitionDuration:
        TRANSITIONS.duration[name.slice(9)] || `${name.slice(9)}ms`,
    };
  if (name.startsWith('ease-'))
    return {
      transitionTimingFunction:
        TRANSITIONS.easing[name.slice(5)] || name.slice(5),
    };
  if (name.startsWith('delay-'))
    return {
      transitionDelay:
        TRANSITIONS.duration[name.slice(6)] || `${name.slice(6)}ms`,
    };

  // ── Transform ─────────────────────────────────────────────────────────────
  if (name.startsWith('scale-')) {
    const v = parseFloat(name.slice(6)) / 100;
    return { transform: `scale(${v})` };
  }
  if (name.startsWith('rotate-'))
    return { transform: `rotate(${name.slice(7)}deg)` };
  if (name.startsWith('translate-x-'))
    return { transform: `translateX(${toSpacing(name.slice(12))})` };
  if (name.startsWith('translate-y-'))
    return { transform: `translateY(${toSpacing(name.slice(12))})` };

  // ── Visibility ────────────────────────────────────────────────────────────
  if (name === 'visible') return { visibility: 'visible' };
  if (name === 'invisible') return { visibility: 'hidden' };

  // ── Misc ──────────────────────────────────────────────────────────────────
  if (name === 'outline-none') return { outline: 'none' };
  if (name === 'select-none') return { userSelect: 'none' };
  if (name === 'select-text') return { userSelect: 'text' };
  if (name === 'select-all') return { userSelect: 'all' };
  if (name === 'select-auto') return { userSelect: 'auto' };
  if (name === 'italic') return { fontStyle: 'italic' };
  if (name === 'not-italic') return { fontStyle: 'normal' };
  if (name === 'antialiased')
    return {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    };
  if (name === 'object-cover') return { objectFit: 'cover' };
  if (name === 'object-contain') return { objectFit: 'contain' };
  if (name === 'object-fill') return { objectFit: 'fill' };
  if (name === 'aspect-square') return { aspectRatio: '1 / 1' };
  if (name === 'aspect-video') return { aspectRatio: '16 / 9' };
  if (name === 'box-border') return { boxSizing: 'border-box' };
  if (name === 'box-content') return { boxSizing: 'content-box' };

  // Unknown class
  console.warn(`[ChaiTailwind] Unknown class: "chai-${name}"`);
  return null;
}
