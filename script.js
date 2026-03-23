const rows = document.querySelectorAll('.util-row');
const shell = document.getElementById('preview-shell');
const shellOuter = document.getElementById('shell-outer');
const inner = document.getElementById('preview-inner');
const cssOut = document.getElementById('css-output');
const tTop = document.getElementById('tick-top');
const tRight = document.getElementById('tick-right');
const tBottom = document.getElementById('tick-bottom');
const tLeft = document.getElementById('tick-left');

function resetTicks() {
  [tTop, tRight, tBottom, tLeft].forEach((t) => (t.textContent = ''));
}

function showSpacing(px, axis) {
  shell.style.display = 'block';
  inner.style.display = 'none';
  resetTicks();
  shellOuter.style.padding = '0';

  const v = px + 'px';
  if (axis === 'all') {
    shellOuter.style.padding = v;
    tTop.textContent = v;
    tRight.textContent = v;
    tBottom.textContent = v;
    tLeft.textContent = v;
  } else if (axis === 'x') {
    shellOuter.style.padding = `12px ${v}`;
    tRight.textContent = v;
    tLeft.textContent = v;
  } else if (axis === 'y') {
    shellOuter.style.padding = `${v} 12px`;
    tTop.textContent = v;
    tBottom.textContent = v;
  } else if (axis === 't') {
    shellOuter.style.padding = `${v} 12px 4px`;
    tTop.textContent = v;
  } else if (axis === 'b') {
    shellOuter.style.padding = `4px 12px ${v}`;
    tBottom.textContent = v;
  } else if (axis === 'l') {
    shellOuter.style.padding = `12px 12px 12px ${v}`;
    tLeft.textContent = v;
  } else if (axis === 'r') {
    shellOuter.style.padding = `12px ${v} 12px 12px`;
    tRight.textContent = v;
  }
}

function showMargin(px, axis) {
  shell.style.display = 'block';
  inner.style.display = 'none';
  resetTicks();
  shellOuter.style.padding = '12px';
  // For margin we reuse the outer shell padding visually — just show ticks
  const v = px + 'px';
  shellOuter.style.border = '1px dashed rgba(255,200,100,0.35)';
  if (axis === 'all') {
    tTop.textContent = v;
    tRight.textContent = v;
    tBottom.textContent = v;
    tLeft.textContent = v;
  } else if (axis === 'x') {
    tRight.textContent = v;
    tLeft.textContent = v;
  } else if (axis === 'y') {
    tTop.textContent = v;
    tBottom.textContent = v;
  } else if (axis === 't') {
    tTop.textContent = v;
  } else if (axis === 'b') {
    tBottom.textContent = v;
  }
}

function showStyle(stylesObj, text) {
  shell.style.display = 'none';
  shellOuter.style.border = '1px dashed rgba(255,255,255,0.15)';
  inner.style.display = 'flex';
  inner.style.cssText = `
    font-family: var(--mono); font-size: 13px; color: #f2f2f0;
    display: flex; align-items: center; justify-content: center;
    min-width: 48px; min-height: 32px; transition: all 0.22s ease;
  `;
  Object.assign(inner.style, stylesObj);
  inner.textContent = text || 'preview';
}

function showFlex(dir) {
  shell.style.display = 'none';
  shellOuter.style.border = '1px dashed rgba(255,255,255,0.15)';
  inner.style.cssText = `
    font-family: var(--mono); font-size: 11px; color: #f2f2f0;
    border: 1px solid #1e1e1e; padding: 16px; transition: all 0.22s ease;
  `;
  inner.innerHTML = '';

  const mkItem = (label) => {
    const c = document.createElement('div');
    c.style.cssText =
      'background:rgba(255,255,255,0.1);padding:8px 14px;border-radius:2px;white-space:nowrap;';
    c.textContent = label;
    return c;
  };

  const mkBox = (label) => {
    const c = document.createElement('div');
    c.style.cssText =
      'background:rgba(255,255,255,0.1);padding:12px;text-align:center;font-size:11px;';
    c.textContent = label;
    return c;
  };

  if (dir === 'row') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      alignItems: 'center',
      width: '280px',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'col') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-start',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'row-rev') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: '10px',
      alignItems: 'center',
      width: '280px',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'col-rev') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: '8px',
      alignItems: 'flex-start',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'wrap') {
    Object.assign(inner.style, {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      width: '200px',
    });
    ['one', 'two', 'three', 'four', 'five'].forEach((l) =>
      inner.appendChild(mkItem(l)),
    );
  } else if (dir === 'center') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '280px',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'start') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      alignItems: 'flex-start',
      width: '280px',
      height: '80px',
    });
    ['tall', 'mid', 'short'].forEach((l, i) => {
      const c = mkItem(l);
      c.style.height = [56, 38, 28][i] + 'px';
      inner.appendChild(c);
    });
  } else if (dir === 'end') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      alignItems: 'flex-end',
      width: '280px',
      height: '80px',
    });
    ['tall', 'mid', 'short'].forEach((l, i) => {
      const c = mkItem(l);
      c.style.height = [56, 38, 28][i] + 'px';
      inner.appendChild(c);
    });
  } else if (dir === 'between') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '300px',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'around') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '300px',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'evenly') {
    Object.assign(inner.style, {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '300px',
    });
    ['one', 'two', 'three'].forEach((l) => inner.appendChild(mkItem(l)));
  } else if (dir === 'grid') {
    inner.style.border = 'none';
    Object.assign(inner.style, {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '8px',
      width: '240px',
    });
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((l) => inner.appendChild(mkBox(l)));
  } else if (dir === 'grid2') {
    inner.style.border = 'none';
    Object.assign(inner.style, {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '8px',
      width: '220px',
    });
    ['A', 'B', 'C', 'D'].forEach((l) => inner.appendChild(mkBox(l)));
  } else if (dir === 'grid4') {
    inner.style.border = 'none';
    Object.assign(inner.style, {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '8px',
      width: '280px',
    });
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].forEach((l) =>
      inner.appendChild(mkBox(l)),
    );
  }
}

function showFlexGap(gapPx, dir) {
  shell.style.display = 'none';
  shellOuter.style.border = '1px dashed rgba(255,255,255,0.15)';
  inner.style.cssText = `
    font-family: var(--mono); font-size: 11px; color: #f2f2f0;
    border: 1px solid #1e1e1e; padding: 16px; transition: all 0.22s ease;
    display: flex; flex-direction: row; align-items: center; width: 280px; flex-wrap: wrap;
  `;
  inner.innerHTML = '';

  if (dir === 'y') {
    inner.style.flexDirection = 'column';
    inner.style.rowGap = gapPx + 'px';
    inner.style.width = 'auto';
    inner.style.alignItems = 'flex-start';
  } else if (dir === 'x') {
    inner.style.columnGap = gapPx + 'px';
  } else {
    inner.style.gap = gapPx + 'px';
  }

  ['item A', 'item B', 'item C'].forEach((l) => {
    const c = document.createElement('div');
    c.style.cssText =
      'background:rgba(255,255,255,0.1);padding:8px 14px;border-radius:2px;';
    c.textContent = l;
    inner.appendChild(c);
  });

  // draw gap indicator lines
  setTimeout(() => {
    const items = inner.querySelectorAll('div');
    items.forEach((el, i) => {
      if (i < items.length - 1) {
        const line = document.createElement('div');
        line.style.cssText = `
          background: rgba(255,200,100,0.25); border: 1px dashed rgba(255,200,100,0.4);
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; color: rgba(255,200,100,0.8);
          ${dir === 'y' ? `width:60px;height:${gapPx}px;` : `width:${gapPx}px;height:30px;`}
        `;
        line.textContent = gapPx + 'px';
        el.after(line);
      }
    });
  }, 0);
}

function showTransition(prop, dur) {
  shell.style.display = 'none';
  shellOuter.style.border = '1px dashed rgba(255,255,255,0.15)';
  inner.innerHTML = '';
  inner.style.cssText = `
    font-family: var(--mono); font-size: 12px; color: #f2f2f0;
    display: flex; flex-direction: column; align-items: center; gap: 12px;
  `;

  const label = document.createElement('div');
  label.style.cssText = 'font-size:10px;opacity:0.4;letter-spacing:0.1em;';
  label.textContent = `hover the box → ${prop} ${dur}ms`;
  inner.appendChild(label);

  const box = document.createElement('div');
  box.style.cssText = `
    width: 80px; height: 80px; background: #3b82f6; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; cursor: crosshair;
    transition: ${prop === 'colors' ? 'background-color' : prop === 'all' ? 'all' : prop} ${dur}ms cubic-bezier(0.4,0,0.2,1);
  `;
  box.textContent = 'hover';
  box.addEventListener('mouseenter', () => {
    if (prop === 'colors' || prop === 'all')
      box.style.backgroundColor = '#ef4444';
    if (prop === 'opacity' || prop === 'all') box.style.opacity = '0.2';
    if (prop === 'transform' || prop === 'all')
      box.style.transform = 'scale(1.3) rotate(15deg)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = '#3b82f6';
    box.style.opacity = '1';
    box.style.transform = 'none';
  });
  inner.appendChild(box);
}

function renderCSS(raw) {
  return raw
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((d) => {
      const i = d.indexOf(':');
      return `<span class="css-p">${d.slice(0, i).trim()}</span><span class="css-c">: </span><span class="css-v">${d.slice(i + 1).trim()}</span><span class="css-s">;</span>`;
    })
    .join('<br>');
}

rows.forEach((row) => {
  row.addEventListener('mouseenter', () => {
    rows.forEach((r) => r.classList.remove('active'));
    row.classList.add('active');
    shellOuter.style.border = '1px dashed rgba(255,255,255,0.15)';

    const type = row.dataset.type;
    const css = row.dataset.css;

    if (type === 'spacing') {
      showSpacing(parseInt(row.dataset.px), row.dataset.axis);
    } else if (type === 'margin') {
      showMargin(parseInt(row.dataset.px), row.dataset.axis);
    } else if (type === 'style') {
      const styles = JSON.parse(row.dataset.styles);
      const text =
        row.dataset.text !== undefined
          ? row.dataset.text
          : row.querySelector('.util-name').textContent;
      showStyle(styles, text);
    } else if (type === 'flex') {
      showFlex(row.dataset.dir);
    } else if (type === 'flex-gap') {
      showFlexGap(parseInt(row.dataset.gap), row.dataset.dir);
    } else if (type === 'transition') {
      showTransition(row.dataset.prop, row.dataset.dur);
    }

    cssOut.innerHTML = renderCSS(css);
  });
});
