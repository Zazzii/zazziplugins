(() => {
  const { plugins, bundle, faq } = window.ZZ;
  // VTUNE spento in data.js: le sue parti escono dalla pagina e la home diventa VSTREAM
  const showTune = window.ZZ.showTune !== false;
  if (!showTune) document.querySelectorAll('[data-tune-only]').forEach((el) => el.remove());
  // i pulsanti di VTUNE (Acquista, Prova 3 giorni) prendono i link scritti una volta in data.js
  const tuneLinks = window.ZZ.tune || {};
  document.querySelectorAll("[data-tune]").forEach((el) => {
    const url = tuneLinks[el.dataset.tune];
    if (url && url !== "#") el.setAttribute("href", url);
  });
  // e quelli di VSTREAM (data-vstream="checkoutUrl": il pagamento; "mac" o "windows": il file di quel sistema)
  const vstreamLinks = window.ZZ.vstream || {};
  document.querySelectorAll("[data-vstream]").forEach((el) => {
    const url = vstreamLinks[el.dataset.vstream];
    if (url && url !== "#") {
      el.setAttribute("href", url);
      if (el.dataset.vstream !== "checkoutUrl") el.setAttribute("download", "");
    }
  });
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const bySlug = Object.fromEntries(plugins.map((p) => [p.slug, p]));

  const money = (n) => '€' + (Number.isInteger(n) ? n : n.toFixed(2).replace('.', ','));
  const total = plugins.reduce((s, p) => s + p.price, 0);
  const yearlyMonth = Math.round((bundle.yearly / 12) * 100) / 100;
  const savePct = Math.round((1 - bundle.yearly / (bundle.monthly * 12)) * 100);

  const homeEl = $('#home');
  const detailEl = $('#detail');
  const vstreamEl = $('#vstream');
  const legalEl = $('#legal');
  const thanksEl = $('#thanks');
  // le pagine senza logica propria: si mostrano al posto della home
  const pages = {
    legal: { el: legalEl, prefix: 't-', title: { it: 'Termini e condizioni', en: 'Terms and conditions' } },
    thanks: { el: thanksEl, prefix: '', title: { it: 'Grazie', en: 'Thank you' } },
  };
  const hidePages = () => Object.values(pages).forEach((p) => { p.el.hidden = true; });

  /* ---------- Smooth scroll ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  // La rotella sopra il plugin della home finisce nell'iframe e lì si ferma (le manopole la
  // usano). Scorrere in verticale fa scendere la pagina; con Cmd/Ctrl o in orizzontale resta al plugin.
  const wheelFrame = $('.tune-frame iframe');
  const hookFrameWheel = () => {
    try {
      wheelFrame.contentWindow.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        e.stopPropagation();
        e.preventDefault();
        // stesso evento alla pagina: Lenis lo scorre come la rotella fuori dal plugin
        if (lenis) window.dispatchEvent(new WheelEvent('wheel', { deltaX: e.deltaX, deltaY: e.deltaY, deltaMode: e.deltaMode, cancelable: true }));
        else window.scrollBy(0, e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY);
      }, { capture: true, passive: false });
    } catch (err) { /* altra origine */ }
  };
  if (wheelFrame) {
    wheelFrame.addEventListener('load', hookFrameWheel);
    if (wheelFrame.contentDocument?.readyState === 'complete') hookFrameWheel();
  }
  const NAV_OFFSET = -110;
  // Le sezioni hanno molto padding sopra: si scorre fino al titolo
  const sectionTarget = (id) => {
    const el = id && document.getElementById(id);
    return el ? el.querySelector('.section-head') || el : null;
  };
  function scrollTo(target, immediate = false) {
    if (lenis) {
      lenis.scrollTo(target, { immediate, force: true, offset: typeof target === 'number' ? 0 : NAV_OFFSET, duration: 1.5 });
      return;
    }
    const y = typeof target === 'number' ? target : target.getBoundingClientRect().top + scrollY + NAV_OFFSET;
    window.scrollTo({ top: y, behavior: immediate || reduce ? 'instant' : 'smooth' });
  }

  /* ---------- View Transitions ---------- */
  let vtId = 0;
  function withVT(type, update) {
    if (!document.startViewTransition || reduce) { update(); return Promise.resolve(); }
    const id = ++vtId;
    root.dataset.vt = type;
    const t = document.startViewTransition(update);
    // Una transizione interrotta (resize, scheda nascosta) rifiuta "ready": il contenuto è comunque aggiornato
    t.ready.catch(() => {});
    t.finished.catch(() => {}).finally(() => { if (id === vtId) delete root.dataset.vt; });
    return t.updateCallbackDone.catch(() => {});
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  const observe = (scope = document) => $$('[data-reveal]:not(.in)', scope).forEach((el) => io.observe(el));

  /* ---------- Template ---------- */
  const arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // named: la card partecipa all'animazione dei filtri (solo nella griglia della home)
  function cardHTML(p, i, named) {
    const vt = named ? `;--vtn:card-${p.slug}` : '';
    return `
      <article class="card${named && p.wide ? ' card--wide' : ''}" style="--c:${p.color};--d:${i % 3};--vti:p-${p.slug}${vt}" data-cat="${p.category}" data-slug="${p.slug}" data-reveal>
        <a class="card-link" href="#/p/${p.slug}" aria-label="${p.name}: scopri di più"></a>
        <div class="card-media"><img src="${p.image}" alt="Interfaccia di ${p.name}" loading="lazy" decoding="async"></div>
        <div class="card-body">
          <div class="meta"><span class="dot"></span>${p.category}${p.isNew ? '<span class="badge-new">Nuovo</span>' : ''}</div>
          <h3>${p.name}</h3>
          <p>${p.short}</p>
          <div class="card-foot">
            <div class="price">${money(p.price)}<small>Una tantum</small></div>
            <a class="btn btn-light btn-sm buy" href="${p.checkoutUrl}" data-buy data-label="Checkout di ${p.name}">Acquista</a>
          </div>
        </div>
      </article>`;
  }

  /* ---------- Home: riempimento ---------- */
  const grid = $('#grid');
  grid.innerHTML = plugins.map((p, i) => cardHTML(p, i, true)).join('');

  $$('[data-count]').forEach((el) => { el.textContent = plugins.length; });
  $$('[data-total]').forEach((el) => { el.textContent = money(total); });
  $$('[data-min-price]').forEach((el) => { el.textContent = money(Math.min(...plugins.map((p) => p.price))); });
  $$('[data-bundle-name]').forEach((el) => { el.textContent = bundle.name; });
  $$('[data-bundle-from]').forEach((el) => { el.textContent = money(yearlyMonth); });
  $$('[data-bundle-yearly-month]').forEach((el) => { el.textContent = money(yearlyMonth); });
  $$('[data-save]').forEach((el) => { el.textContent = `−${savePct}%`; });
  $('#thumbs').innerHTML = plugins.map((p) => `<span style="--c:${p.color}" title="${p.name}"></span>`).join('');
  $('#year').textContent = new Date().getFullYear();

  $('#faqList').innerHTML = faq.map((f, i) => `
    <details data-reveal style="--d:${Math.min(i, 3)}">
      <summary>${f.q}<span class="plus" aria-hidden="true"></span></summary>
      <p class="faq-a">${f.a}</p>
    </details>`).join('');

  // Equalizzatore della CTA
  const eq = $('#eq');
  const nBars = 41;
  eq.innerHTML = Array.from({ length: nBars }, (_, i) => {
    const x = i / (nBars - 1) - 0.5;
    const h = 22 + 78 * Math.exp(-(x * x) / 0.06) * (0.55 + 0.45 * Math.abs(Math.sin(i * 1.7)));
    return `<i style="--h:${h.toFixed(1)}%;--dl:${(-((i * 0.37) % 1.4)).toFixed(2)}s"></i>`;
  }).join('');

  // Titolo hero: parole che salgono
  /* Coppie di lettere a spaziatura corretta nei titoli grandi (Geist 600, tracking -0.03em, senza
     crenatura): misurate sul vuoto vero tra le lettere, V-T si toccavano quasi, T-U, Z-a e a-z erano
     a metà dello spazio delle altre, U-N e N-E al doppio. In em, dopo la prima lettera della coppia */
  const KERN = { VT: 0.072, TU: 0.04, Za: 0.038, az: 0.035, UN: -0.036, NE: -0.046 };
  const esc = (c) => (c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c);
  const kernWord = (w) => [...w].map((c, i) => {
    const k = KERN[c + (w[i + 1] || '')];
    return k ? `<span style="margin-right:${k}em">${esc(c)}</span>` : esc(c);
  }).join('');
  $$('[data-split]').forEach((el) => {
    let i = 0;
    const wrap = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.append(' '); return; }
            const outer = document.createElement('span');
            outer.className = 'word';
            const inner = document.createElement('span');
            inner.innerHTML = kernWord(w);
            inner.style.setProperty('--i', i++);
            outer.append(inner);
            frag.append(outer);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) {
          wrap(n);
        }
      });
    };
    wrap(el);
    // Il gradiente va applicato a ogni parola, non al contenitore
    $$('.grad .word > span', el).forEach((s) => s.classList.add('grad'));
    $$('.grad', el).forEach((g) => { if (g.tagName === 'EM') g.classList.remove('grad'); });
  });

  /* ---------- Pillola animata (filtri + toggle) ---------- */
  function movePill(group) {
    const pill = $('.pill', group);
    const on = $('[aria-pressed="true"]', group);
    if (!pill || !on) return;
    pill.style.width = on.offsetWidth + 'px';
    pill.style.transform = `translateX(${on.offsetLeft}px)`;
    requestAnimationFrame(() => pill.classList.add('ready'));
  }

  /* ---------- Filtri ---------- */
  const filters = $('#filters');
  const cats = ['Tutti', ...new Set(plugins.map((p) => p.category))];
  filters.insertAdjacentHTML('beforeend', cats.map((c, i) =>
    `<button type="button" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join(''));
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-cat]');
    if (!b || b.getAttribute('aria-pressed') === 'true') return;
    $$('button', filters).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    movePill(filters);
    const cat = b.dataset.cat;
    withVT('filter', () => {
      $$('.card', grid).forEach((card) => {
        card.hidden = cat !== 'Tutti' && card.dataset.cat !== cat;
        if (!card.hidden) card.classList.add('in');
      });
    });
  });

  /* ---------- Prezzi: mensile / annuale ---------- */
  const period = $('#period');
  const amountEl = $('#planAmount');
  const perEl = $('#planPer');
  const subEl = $('#planSub');
  const planBuy = $('#planBuy');
  let swapAnim = null;

  function swapText(el, text, dir) {
    if (el.textContent === text) return;
    if (reduce || !el.animate || !el.textContent) { el.textContent = text; return; }
    if (swapAnim) swapAnim.cancel();
    const ease = 'cubic-bezier(.16,1,.3,1)';
    swapAnim = el.animate(
      [{ transform: 'none', opacity: 1, filter: 'blur(0)' }, { transform: `translateY(${-dir * 35}%)`, opacity: 0, filter: 'blur(6px)' }],
      { duration: 200, easing: 'cubic-bezier(.5,0,.75,0)' },
    );
    swapAnim.onfinish = () => {
      el.textContent = text;
      swapAnim = el.animate(
        [{ transform: `translateY(${dir * 35}%)`, opacity: 0, filter: 'blur(6px)' }, { transform: 'none', opacity: 1, filter: 'blur(0)' }],
        { duration: 650, easing: ease },
      );
    };
  }

  function setPeriod(which) {
    const yearly = which === 'yearly';
    $$('button', period).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.period === which)));
    movePill(period);
    swapText(amountEl, money(yearly ? bundle.yearly : bundle.monthly), yearly ? 1 : -1);
    perEl.textContent = yearly ? '/anno' : '/mese';
    subEl.textContent = yearly
      ? `${money(yearlyMonth)} al mese, fatturati una volta l'anno`
      : 'Fatturato ogni mese, disdici quando vuoi';
    planBuy.href = bundle.checkout[which];
    planBuy.dataset.label = `Checkout di ${bundle.name} ${yearly ? 'annuale' : 'mensile'}`;
  }
  period.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-period]');
    if (b) setPeriod(b.dataset.period);
  });
  setPeriod('yearly');

  /* ---------- Dettaglio ---------- */
  function renderDetail(p) {
    const idx = plugins.indexOf(p);
    const others = [1, 2, 3].map((k) => plugins[(idx + k) % plugins.length]).filter((x) => x !== p);
    const specs = {
      Formati: 'VST3 · AU',
      Sistema: 'macOS · Windows',
      'Apple Silicon': 'Nativo',
      Categoria: p.category,
      Versione: p.version,
      Licenza: 'Perpetua · 3 computer',
      ...p.specs,
    };
    detailEl.style.setProperty('--c', p.color);
    detailEl.innerHTML = `
      <div class="detail-glow" aria-hidden="true"></div>
      <div class="wrap">
        <a class="back" href="#/plugins" data-back>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m5 5-5-5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Tutti i plugin
        </a>

        <section class="d-hero">
          <div class="d-media"><img src="${p.image}" alt="Interfaccia di ${p.name}" style="view-transition-name:p-${p.slug}"></div>
          <div class="d-info">
            <div class="meta d-in" style="--d:1"><span class="dot"></span>${p.category} · v${p.version}${p.isNew ? '<span class="badge-new" style="margin-left:6px">Nuovo</span>' : ''}</div>
            <h1 class="d-in" style="--d:2">${p.name}</h1>
            <p class="d-tagline d-in" style="--d:3">${p.tagline}</p>
            <p class="d-desc d-in" style="--d:4">${p.description}</p>
            <div class="buybox d-in" style="--d:5" id="buybox">
              <div class="buy-row">
                <div class="d-price">${money(p.price)}<small>Una tantum · tuo per sempre</small></div>
                <div class="buy-actions">
                  <a class="btn btn-ghost" href="#" data-buy data-label="Download della demo di ${p.name}">Prova gratis</a>
                  <a class="btn btn-light" href="${p.checkoutUrl}" data-buy data-label="Checkout di ${p.name}" data-magnetic>Acquista</a>
                </div>
              </div>
              <a class="access-link" href="#/all-access">
                <span>Oppure incluso in <b>${bundle.name}</b>, con tutti gli altri plugin, da ${money(yearlyMonth)}/mese</span>${arrow}
              </a>
            </div>
            <ul class="trust d-in" style="--d:6"><li>VST3 · AU</li><li>macOS · Windows</li><li>Demo 3 giorni</li></ul>
          </div>
        </section>

        <section class="d-section">
          <div class="section-head" data-reveal>
            <div>
              <p class="kicker">Perché ${p.name}</p>
              <h2 class="h2">Tre cose che fa meglio.</h2>
            </div>
          </div>
          <div class="features">
            ${p.features.map((f, i) => `
              <div class="feat" data-reveal style="--d:${i}">
                <span class="num">0${i + 1}</span>
                <h3>${f.title}</h3>
                <p>${f.text}</p>
              </div>`).join('')}
          </div>
        </section>

        <section class="d-section split">
          <div class="section-head" data-reveal>
            <p class="kicker">Controlli</p>
            <h2 class="h2">Pochi comandi.<br>Quelli giusti.</h2>
          </div>
          <div class="controls" data-reveal style="--d:1">
            ${p.controls.map((c) => `<div class="ctl"><b>${c.name}</b><span>${c.text}</span></div>`).join('')}
          </div>
        </section>

        <section class="d-section">
          <div class="section-head" data-reveal>
            <div>
              <p class="kicker">Specifiche</p>
              <h2 class="h2">Tecnico, in breve.</h2>
            </div>
          </div>
          <dl class="specs" data-reveal style="--d:1">
            ${Object.entries(specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
          </dl>
        </section>

        <section class="d-section">
          <div class="section-head" data-reveal>
            <div>
              <p class="kicker">Altri plugin</p>
              <h2 class="h2">Completa la catena.</h2>
            </div>
            <a class="btn btn-ghost btn-sm" href="#/plugins">Vedi tutti</a>
          </div>
          <div class="grid">${others.map((o, i) => cardHTML(o, i, false)).join('')}</div>
        </section>
      </div>

      <div class="buybar" id="buybar" aria-hidden="true">
        <div class="buybar-name"><span class="dot"></span><span>${p.name}</span><span>${money(p.price)}</span></div>
        <a class="btn btn-light btn-sm" href="${p.checkoutUrl}" data-buy data-label="Checkout di ${p.name}" tabindex="-1">Acquista ${money(p.price)}</a>
      </div>`;

    // Entrata del testo dell'hero
    $$('.d-in', detailEl).forEach((el) => {
      el.setAttribute('data-reveal', '');
    });

    // Barra d'acquisto: appare quando il box d'acquisto esce dallo schermo
    const bar = $('#buybar', detailEl);
    const barIO = new IntersectionObserver(([e]) => {
      const show = !e.isIntersecting && e.boundingClientRect.top < 0;
      bar.classList.toggle('show', show);
      bar.setAttribute('aria-hidden', String(!show));
      $('a', bar).tabIndex = show ? 0 : -1;
    });
    barIO.observe($('#buybox', detailEl));
    detailEl._barIO?.disconnect();
    detailEl._barIO = barIO;
  }

  /* ---------- Router ---------- */
  let current = null;
  let homeY = 0;
  let fromHome = false;
  let viaClick = false;

  function parse() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts[0] === 'p' && bySlug[parts[1]]) return { view: 'detail', slug: parts[1] };
    if (parts[0] === 'vstream') return { view: 'vstream', section: parts[1] || null };
    if (parts[0] === 'termini' || parts[0] === 'terms') return { view: 'legal', section: parts[1] || null };
    if (parts[0] === 'grazie' || parts[0] === 'thanks') return { view: 'thanks', section: null };
    if (!showTune && parts[0] !== 'faq') return { view: 'vstream', section: null };
    return { view: 'home', section: parts[0] || null };
  }

  function afterRender(scope) {
    observe(scope);
    bindTilt(scope);
    bindMagnetic(scope);
  }

  // Solo l'immagine della card coinvolta fa il morph verso/da la pagina del plugin
  function markMorph(scope, slug) {
    $$('.card.vt-active').forEach((c) => c.classList.remove('vt-active'));
    if (slug) $(`.card[data-slug="${slug}"]`, scope)?.classList.add('vt-active');
  }

  function route(first = false) {
    const next = parse();
    const prev = current;
    current = next;

    if (next.view === 'detail') {
      if (prev && prev.view === 'detail' && prev.slug === next.slug) return;
      fromHome = !!prev && prev.view === 'home';
      if (fromHome) homeY = scrollY;
      const p = bySlug[next.slug];
      markMorph(prev?.view === 'detail' ? detailEl : homeEl, next.slug);
      const go = () => {
        renderDetail(p);
        homeEl.hidden = true;
        vstreamEl.hidden = true;
        hidePages();
        detailEl.hidden = false;
        document.title = `${p.name} · Vault Plugins`;
        scrollTo(0, true);
      };
      if (first) { go(); afterRender(detailEl); return; }
      withVT('route', go).then(() => afterRender(detailEl));
      return;
    }

    // La pagina di VSTREAM: già scritta in index.html, si mostra al posto della home
    if (next.view === 'vstream') {
      const target = () => sectionTarget(next.section && 'vs-' + next.section) || 0;
      if (prev && prev.view === 'vstream') { scrollTo(target()); return; }
      if (prev && prev.view === 'home') homeY = scrollY;
      markMorph(homeEl, null);
      const go = () => {
        detailEl._barIO?.disconnect();
        homeEl.hidden = true;
        detailEl.hidden = true;
        hidePages();
        detailEl.innerHTML = '';
        vstreamEl.hidden = false;
        document.title = 'VSTREAM · Vault Plugins';
        scrollTo(target(), true);
      };
      if (first) { go(); afterRender(vstreamEl); return; }
      withVT('route', go).then(() => afterRender(vstreamEl));
      return;
    }

    // Termini e condizioni (in italiano e in inglese, il CSS mostra la lingua del sito) e la pagina
    // dopo il pagamento: già scritte in index.html
    const page = pages[next.view];
    if (page) {
      const target = () => sectionTarget(next.section && page.prefix + next.section) || 0;
      if (prev && prev.view === next.view) { scrollTo(target()); return; }
      if (prev && prev.view === 'home') homeY = scrollY;
      markMorph(homeEl, null);
      const go = () => {
        detailEl._barIO?.disconnect();
        homeEl.hidden = true;
        detailEl.hidden = true;
        vstreamEl.hidden = true;
        detailEl.innerHTML = '';
        hidePages();
        page.el.hidden = false;
        document.title = page.title[root.lang === 'en' ? 'en' : 'it'] + ' · Vault Plugins';
        scrollTo(target(), true);
      };
      if (first) { go(); afterRender(page.el); return; }
      withVT('route', go).then(() => afterRender(page.el));
      return;
    }

    const section = sectionTarget(next.section);
    if (prev && prev.view === 'home') {
      scrollTo(section || 0);
      return;
    }
    const restore = !first && !viaClick;
    markMorph(homeEl, prev?.slug);
    const go = () => {
      detailEl._barIO?.disconnect();
      detailEl.hidden = true;
      vstreamEl.hidden = true;
      hidePages();
      homeEl.hidden = false;
      detailEl.innerHTML = '';
      document.title = 'Vault Plugins';
      if (restore) scrollTo(homeY, true);
      else if (section) scrollTo(section, true);
      else scrollTo(0, true);
      // Le card già passate sullo schermo restano visibili al ritorno
      $$('.card', grid).forEach((c) => c.classList.add('in'));
    };
    if (first) {
      go();
      afterRender(document);
      return;
    }
    withVT('route', go).then(() => afterRender(homeEl));
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a) return;
    if ('back' in a.dataset && fromHome && current?.view === 'detail') {
      e.preventDefault();
      viaClick = false;
      history.back();
      return;
    }
    if (a.getAttribute('href') === location.hash) {
      e.preventDefault();
      scrollTo(sectionTarget(parse().section) || 0);
      return;
    }
    viaClick = true;
  });
  addEventListener('hashchange', () => { route(); viaClick = false; });

  // i termini si stampano o si salvano in PDF dal pulsante in cima alla pagina
  document.addEventListener('click', (e) => { if (e.target.closest('[data-print]')) print(); });

  /* ---------- Acquisto (design: nessun pagamento collegato) ---------- */
  const toastEl = $('#toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-buy]');
    if (!b) return;
    const href = b.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      toast(`${b.dataset.label}: ${document.documentElement.lang === 'en' ? 'not connected yet' : 'non ancora collegato'}`);
    }
  });

  /* ---------- Tilt + bagliore sulle card ---------- */
  function bindTilt(scope = document) {
    if (!finePointer || reduce) return;
    $$('.card', scope).forEach((card) => {
      if (card._tilt) return;
      card._tilt = true;
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', `${x * 100}%`);
        card.style.setProperty('--my', `${y * 100}%`);
        card.style.setProperty('--rx', `${(0.5 - y) * 5}deg`);
        card.style.setProperty('--ry', `${(x - 0.5) * 7}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  }

  /* ---------- Pulsanti magnetici ---------- */
  function bindMagnetic(scope = document) {
    if (!finePointer || reduce) return;
    $$('[data-magnetic]', scope).forEach((el) => {
      if (el._mag) return;
      el._mag = true;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--tx', `${(e.clientX - r.left - r.width / 2) * 0.22}px`);
        el.style.setProperty('--ty', `${(e.clientY - r.top - r.height / 2) * 0.32}px`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--tx', '0px');
        el.style.setProperty('--ty', '0px');
      });
    });
  }

  /* ---------- Nav ---------- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Il plugin dell'hero: fermo mentre la pagina scorre o quando non si vede ---------- */
  const tuneIframe = $('.tune-frame iframe');
  if (tuneIframe) {
    let scrolling = false, inView = true, stopT = 0, sent = null;
    const hold = () => {
      const h = scrolling || !inView;
      if (h !== sent) { sent = h; tuneIframe.contentWindow?.postMessage({ tunePause: h }, location.origin === 'null' ? '*' : location.origin); }
    };
    addEventListener('scroll', () => {
      scrolling = true; hold();
      clearTimeout(stopT);
      stopT = setTimeout(() => { scrolling = false; hold(); }, 140);
    }, { passive: true });
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; hold(); }).observe(tuneIframe);
    tuneIframe.addEventListener('load', () => { sent = null; hold(); });
  }

  /* ---------- Plugin e telefono di VSTREAM: fermi quando non si vedono ---------- */
  $$('.vs-plugin iframe, .vs-shot iframe').forEach((frame) => {
    let seen = false;
    const tell = () => frame.contentWindow?.postMessage({ streamPause: !seen || document.hidden }, location.origin === 'null' ? '*' : location.origin);
    new IntersectionObserver(([e]) => { seen = e.isIntersecting; tell(); }).observe(frame);
    document.addEventListener('visibilitychange', tell);
    frame.addEventListener('load', tell);
  });
  // il telefono è disegnato a 390 px di larghezza: si scala alla sua cornice
  const phoneShot = $('.vs-shot');
  if (phoneShot) new ResizeObserver(() => phoneShot.style.setProperty('--k', phoneShot.clientWidth / 390)).observe(phoneShot);

  /* ---------- Barra di VTUNE: compare quando il plugin dell'hero si vede tutto (e resta oltre) ---------- */
  const tuneBar = $('.tune-bar'), tuneFrame = $('.tune-frame');
  if (tuneBar && tuneFrame) {
    let barTick = 0;
    const showBar = () => {
      barTick = 0;
      const show = tuneFrame.getBoundingClientRect().bottom <= innerHeight + 1;
      tuneBar.classList.toggle('show', show);
      tuneBar.setAttribute('aria-hidden', String(!show));
      $$('a', tuneBar).forEach((a) => { a.tabIndex = show ? 0 : -1; });
    };
    const queueBar = () => { if (!barTick) barTick = requestAnimationFrame(showBar); };
    addEventListener('scroll', queueBar, { passive: true });
    addEventListener('resize', queueBar);
    showBar();
  }

  /* ---------- Avvio ---------- */
  const relayout = () => { movePill(filters); movePill(period); };
  addEventListener('resize', relayout);
  route(true);
  bindTilt(grid);
  bindMagnetic(document);
  relayout();
  document.fonts?.ready.then(relayout);

  const start = () => setTimeout(() => root.classList.add('is-loaded'), 40);
  if (document.fonts?.status === 'loaded') start();
  else Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 600))]).then(start);

  if (current.view !== 'detail' && current.section) {
    const id = (current.view === 'vstream' ? 'vs-' : pages[current.view]?.prefix ?? '') + current.section;
    setTimeout(() => scrollTo(sectionTarget(id) || 0, true), 50);
  }
})();
