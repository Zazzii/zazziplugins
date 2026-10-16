/*
  Punti sul plugin della home: ognuno apre una scheda che spiega quella parte di TUNE.
  data-x / data-y sono coordinate dentro la finestra di TUNE (1000 × 640), come le disegna
  embed/tune.html: la finestra sta al centro dell'iframe, scalata con il margine di 16px che TUNE
  tiene attorno a sé.
*/
(() => {
  const root = document.getElementById('hotspots');
  if (!root) return;
  const frame = root.parentElement;
  const iframe = frame.querySelector('iframe');
  const spots = [...root.querySelectorAll('.hs')];
  let open = null;

  function place() {
    const W = frame.clientWidth, H = frame.clientHeight;
    const s = Math.min((W - 32) / 1000, (H - 32) / 640, 1.4);
    // piccoli quando la finestra è piccola, ma ancora da toccare col dito
    root.style.setProperty('--hs-size', `${Math.round(Math.min(22, Math.max(14, 22 * s)))}px`);
    spots.forEach((hs) => {
      hs.style.left = `${W / 2 + (hs.dataset.x - 500) * s}px`;
      hs.style.top = `${H / 2 + (hs.dataset.y - 320) * s}px`;
    });
    if (open) aim(open);
  }

  // la scheda va dal lato dove c'è più spazio e resta dentro il riquadro in larghezza
  function aim(hs) {
    const pop = hs.querySelector('.hs-pop');
    const W = frame.clientWidth, H = frame.clientHeight;
    const x = hs.offsetLeft, y = hs.offsetTop, pw = pop.offsetWidth, ph = pop.offsetHeight;
    let left = x < W * 0.55 ? x + 18 : x - 18 - pw;
    left = Math.min(Math.max(left, 8), W - pw - 8);
    let top = y > H * 0.6 ? y - ph + 16 : y - 16;
    top = Math.min(Math.max(top, 8), Math.max(8, H - ph - 8));
    pop.style.left = `${left - x}px`;
    pop.style.top = `${top - y}px`;
  }

  function close() {
    if (!open) return;
    open.classList.remove('on');
    open.querySelector('.hs-dot').setAttribute('aria-expanded', 'false');
    open.querySelector('.hs-pop').hidden = true;
    open = null;
  }

  function show(hs) {
    close();
    open = hs;
    hs.classList.add('on');
    hs.querySelector('.hs-dot').setAttribute('aria-expanded', 'true');
    hs.querySelector('.hs-pop').hidden = false;
    aim(hs);
  }

  spots.forEach((hs) => {
    hs.querySelector('.hs-dot').addEventListener('click', (e) => {
      e.stopPropagation();
      if (open === hs) close(); else show(hs);
    });
  });
  document.addEventListener('click', (e) => { if (open && !open.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) { const dot = open.querySelector('.hs-dot'); close(); dot.focus(); }
  });
  // i clic dentro il plugin non arrivano a questa pagina: chiude anche quelli
  // in GRAPH il plugin cambia faccia: si vedono i punti dell'editor delle note
  let watched = null;
  function hook() {
    try {
      const win = iframe.contentWindow, plug = win.document.getElementById('plugin');
      if (!plug || plug === watched) return;
      watched = plug;
      win.addEventListener('pointerdown', close);
      const sync = () => {
        const view = plug.classList.contains('graph') ? 'graph' : 'main';
        if (root.dataset.view !== view) { close(); root.dataset.view = view; }
      };
      new win.MutationObserver(sync).observe(plug, { attributes: true, attributeFilter: ['class'] });
      sync();
    } catch (err) { /* altra origine */ }
  }
  iframe.addEventListener('load', hook);
  hook();

  if ('ResizeObserver' in window) new ResizeObserver(place).observe(frame);
  else addEventListener('resize', place);
  place();
})();
