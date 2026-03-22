import { SPACING_UNIT, COLORS, FONT_SIZES, BORDER_RADIUS, SHADOWS } from "./config.js";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toSpacing(value) {
  if (value === "auto") return "auto";
  if (value === "0")    return "0px";
  if (value === "px")   return "1px";
  const n = parseFloat(value);
  return isNaN(n) ? value : `${n * SPACING_UNIT}px`;
}

function toColor(value) {
  return COLORS[value] || value;
}

// ─── Parse ───────────────────────────────────────────────────────────────────

export function parseClass(name) {

  // ── Padding ──────────────────────────────────────────────────────────────
  if (name.startsWith("p-"))   return { padding:        toSpacing(name.slice(2)) };
  if (name.startsWith("px-"))  return { paddingLeft:    toSpacing(name.slice(3)), paddingRight:  toSpacing(name.slice(3)) };
  if (name.startsWith("py-"))  return { paddingTop:     toSpacing(name.slice(3)), paddingBottom: toSpacing(name.slice(3)) };
  if (name.startsWith("pt-"))  return { paddingTop:     toSpacing(name.slice(3)) };
  if (name.startsWith("pr-"))  return { paddingRight:   toSpacing(name.slice(3)) };
  if (name.startsWith("pb-"))  return { paddingBottom:  toSpacing(name.slice(3)) };
  if (name.startsWith("pl-"))  return { paddingLeft:    toSpacing(name.slice(3)) };

  // ── Margin ───────────────────────────────────────────────────────────────
  if (name.startsWith("m-"))   return { margin:         toSpacing(name.slice(2)) };
  if (name.startsWith("mx-"))  return { marginLeft:     toSpacing(name.slice(3)), marginRight:   toSpacing(name.slice(3)) };
  if (name.startsWith("my-"))  return { marginTop:      toSpacing(name.slice(3)), marginBottom:  toSpacing(name.slice(3)) };
  if (name.startsWith("mt-"))  return { marginTop:      toSpacing(name.slice(3)) };
  if (name.startsWith("mr-"))  return { marginRight:    toSpacing(name.slice(3)) };
  if (name.startsWith("mb-"))  return { marginBottom:   toSpacing(name.slice(3)) };
  if (name.startsWith("ml-"))  return { marginLeft:     toSpacing(name.slice(3)) };

  // ── Width & Height ───────────────────────────────────────────────────────
  if (name.startsWith("w-")) {
    const v = name.slice(2);
    if (v === "full")   return { width: "100%" };
    if (v === "screen") return { width: "100vw" };
    return { width: toSpacing(v) };
  }
  if (name.startsWith("h-")) {
    const v = name.slice(2);
    if (v === "full")   return { height: "100%" };
    if (v === "screen") return { height: "100vh" };
    return { height: toSpacing(v) };
  }

  // ── Background Color ─────────────────────────────────────────────────────
  if (name.startsWith("bg-"))  return { backgroundColor: toColor(name.slice(3)) };

  // ── Text Color ───────────────────────────────────────────────────────────
  if (name.startsWith("text-")) {
    const v = name.slice(5);
    if (FONT_SIZES[v])                          return { fontSize: FONT_SIZES[v] };
    if (v === "left" || v === "center" || v === "right" || v === "justify")
                                                return { textAlign: v };
    return { color: toColor(v) };
  }

  // ── Font Weight ──────────────────────────────────────────────────────────
  if (name === "font-thin")       return { fontWeight: "100" };
  if (name === "font-light")      return { fontWeight: "300" };
  if (name === "font-normal")     return { fontWeight: "400" };
  if (name === "font-medium")     return { fontWeight: "500" };
  if (name === "font-semibold")   return { fontWeight: "600" };
  if (name === "font-bold")       return { fontWeight: "700" };
  if (name === "font-extrabold")  return { fontWeight: "800" };
  if (name === "font-black")      return { fontWeight: "900" };

  // ── Text Transform ───────────────────────────────────────────────────────
  if (name === "uppercase")   return { textTransform: "uppercase" };
  if (name === "lowercase")   return { textTransform: "lowercase" };
  if (name === "capitalize")  return { textTransform: "capitalize" };

  // ── Text Decoration ──────────────────────────────────────────────────────
  if (name === "underline")     return { textDecoration: "underline" };
  if (name === "line-through")  return { textDecoration: "line-through" };
  if (name === "no-underline")  return { textDecoration: "none" };

  // ── Border ───────────────────────────────────────────────────────────────
  if (name === "border")               return { border: "1px solid" };
  if (name === "border-none")          return { border: "none" };
  if (name.startsWith("border-")) {
    const v = name.slice(7);
    if (COLORS[v])        return { borderColor: toColor(v) };
    if (!isNaN(Number(v))) return { borderWidth: `${v}px`, borderStyle: "solid" };
  }

  // ── Border Radius ────────────────────────────────────────────────────────
  if (name === "rounded")              return { borderRadius: BORDER_RADIUS.DEFAULT };
  if (name.startsWith("rounded-"))     return { borderRadius: BORDER_RADIUS[name.slice(8)] || name.slice(8) };

  // ── Shadow ───────────────────────────────────────────────────────────────
  if (name === "shadow")               return { boxShadow: SHADOWS.DEFAULT };
  if (name.startsWith("shadow-"))      return { boxShadow: SHADOWS[name.slice(7)] || name.slice(7) };

  // ── Opacity ──────────────────────────────────────────────────────────────
  if (name.startsWith("opacity-"))     return { opacity: parseFloat(name.slice(8)) / 100 };

  // ── Display ──────────────────────────────────────────────────────────────
  if (name === "block")         return { display: "block" };
  if (name === "inline-block")  return { display: "inline-block" };
  if (name === "inline")        return { display: "inline" };
  if (name === "flex")          return { display: "flex" };
  if (name === "grid")          return { display: "grid" };
  if (name === "hidden")        return { display: "none" };

  // ── Flexbox ──────────────────────────────────────────────────────────────
  if (name === "flex-row")      return { flexDirection: "row" };
  if (name === "flex-col")      return { flexDirection: "column" };
  if (name === "flex-wrap")     return { flexWrap: "wrap" };
  if (name === "flex-nowrap")   return { flexWrap: "nowrap" };
  if (name === "flex-1")        return { flex: "1 1 0%" };
  if (name === "flex-none")     return { flex: "none" };

  if (name.startsWith("gap-"))  return { gap: toSpacing(name.slice(4)) };

  if (name.startsWith("items-")) {
    const map = { start: "flex-start", end: "flex-end", center: "center", stretch: "stretch" };
    return { alignItems: map[name.slice(6)] || name.slice(6) };
  }
  if (name.startsWith("justify-")) {
    const map = { start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around" };
    return { justifyContent: map[name.slice(8)] || name.slice(8) };
  }

  // ── Grid ─────────────────────────────────────────────────────────────────
  if (name.startsWith("cols-"))     return { gridTemplateColumns: `repeat(${name.slice(5)}, minmax(0, 1fr))` };
  if (name.startsWith("col-span-")) return { gridColumn: `span ${name.slice(9)} / span ${name.slice(9)}` };

  // ── Position ─────────────────────────────────────────────────────────────
  if (name === "relative")  return { position: "relative" };
  if (name === "absolute")  return { position: "absolute" };
  if (name === "fixed")     return { position: "fixed" };
  if (name === "sticky")    return { position: "sticky" };

  if (name.startsWith("top-"))    return { top:    toSpacing(name.slice(4)) };
  if (name.startsWith("right-"))  return { right:  toSpacing(name.slice(6)) };
  if (name.startsWith("bottom-")) return { bottom: toSpacing(name.slice(7)) };
  if (name.startsWith("left-"))   return { left:   toSpacing(name.slice(5)) };

  // ── Cursor ───────────────────────────────────────────────────────────────
  if (name === "cursor-pointer")     return { cursor: "pointer" };
  if (name === "cursor-default")     return { cursor: "default" };
  if (name === "cursor-not-allowed") return { cursor: "not-allowed" };

  // ── Overflow ─────────────────────────────────────────────────────────────
  if (name === "overflow-hidden") return { overflow: "hidden" };
  if (name === "overflow-auto")   return { overflow: "auto" };
  if (name === "overflow-scroll") return { overflow: "scroll" };

  // ── Misc ─────────────────────────────────────────────────────────────────
  if (name === "truncate")      return { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };
  if (name === "outline-none")  return { outline: "none" };
  if (name === "select-none")   return { userSelect: "none" };

  // Unknown class
  console.warn(`[ChaiTailwind] Unknown class: "chai-${name}"`);
  return null;
}