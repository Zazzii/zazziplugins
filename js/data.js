/*
  Catalogo del sito. Modifica qui nomi, prezzi, testi e immagini.
  - image: screenshot dell'interfaccia del plugin (JPG/PNG/SVG, qualsiasi proporzione)
  - wide: true fa occupare alla card due colonne (adatto alle interfacce molto larghe)
  - checkoutUrl: incolla qui il link di pagamento (es. Stripe Payment Link). Finché è "#" il
    pulsante mostra solo un avviso.
*/
window.ZZ = {
  bundle: {
    name: 'All Access',
    monthly: 12.99,
    yearly: 119,
    checkout: { monthly: '#', yearly: '#' },
  },

  plugins: [
    {
      slug: 'forge',
      name: 'Forge',
      category: 'Saturazione',
      color: '#F5A524',
      price: 49,
      version: '0.3.1',
      isNew: true,
      image: 'assets/plugins/forge.jpg',
      checkoutUrl: '#',
      tagline: 'Saturazione multibanda, sotto controllo.',
      short: 'Satura e clippa fino a sei bande separate. Densità e calore senza impastare le basse.',
      description:
        'Forge divide il segnale fino a sei bande e su ognuna scegli carattere, drive e clip. Cinque macro muovono tutto insieme, e un clipper finale tiene il picco sotto il ceiling.',
      features: [
        { title: 'Fino a sei bande', text: 'Crossover regolabili: saturi il basso in un modo e le alte in un altro, senza che si sporchino a vicenda.' },
        { title: 'Cinque macro', text: 'Punch, Density, Crush, Warmth e Loud. Un fader per ogni direzione, quando non vuoi entrare nei dettagli.' },
        { title: 'Clipper in uscita', text: 'Clip finale con drive, ceiling e gain. Auto gain e Delta per sentire solo quello che Forge aggiunge.' },
      ],
      controls: [
        { name: 'Drive', text: 'Quanto spingi la banda dentro la saturazione.' },
        { name: 'Character', text: 'Il tipo di saturazione della banda.' },
        { name: 'Amount', text: 'Quanta saturazione entra nella banda.' },
        { name: 'Clip', text: 'Soglia di clip per banda, con curva selezionabile.' },
        { name: 'Tone · Even', text: 'Colore della banda e quantità di armoniche pari.' },
        { name: 'Macro', text: 'Punch, Density, Crush, Warmth, Loud.' },
        { name: 'Output clip', text: 'Clipper finale con drive, ceiling e gain.' },
      ],
    },
    {
      slug: 'fet',
      name: 'FET',
      category: 'Dinamica',
      color: '#3B82F6',
      price: 29,
      version: '1.2',
      wide: true,
      image: 'assets/plugins/fet.jpg',
      checkoutUrl: '#',
      tagline: 'Il limiting amplifier a transistor.',
      short: 'Compressore FET in stile classico: quattro ratio, il tasto All e il VU della gain reduction.',
      description:
        'FET riprende il limiting amplifier a transistor che si trova in ogni studio. Input e output, attack e release, ratio 4, 8, 12 e 20 e il modo All per la compressione più aggressiva. Il VU mostra la gain reduction mentre lavori.',
      features: [
        { title: 'Quattro ratio e All', text: 'Da 4:1 per dare corpo a 20:1 per limitare, più tutti i tasti premuti insieme per spremere batterie e voci.' },
        { title: 'Attack e release', text: 'Decidi quanto transiente passa e quanto velocemente il segnale torna su.' },
        { title: 'VU di gain reduction', text: 'Un VU vero, con ago e balistica, per leggere la compressione a colpo d\'occhio.' },
      ],
      controls: [
        { name: 'Input', text: 'Quanto segnale entra: più input, più compressione.' },
        { name: 'Output', text: 'Il livello in uscita dopo la compressione.' },
        { name: 'Attack', text: 'Velocità con cui il compressore interviene.' },
        { name: 'Release', text: 'Velocità con cui il compressore rilascia.' },
        { name: 'Ratio', text: '4, 8, 12 o 20 a 1.' },
        { name: 'All', text: 'Tutti i ratio insieme, per il suono più aggressivo.' },
      ],
    },
    {
      slug: 'syne',
      name: 'Syne',
      category: 'EQ',
      color: '#A78BFA',
      price: 59,
      version: '0.19',
      image: 'assets/plugins/syne.jpg',
      checkoutUrl: '#',
      tagline: 'L\'EQ che ascolta prima di tagliare.',
      short: 'EQ dinamico con layer spettrale, Assist e Match. Toglie asprezza e fango solo quando ci sono.',
      description:
        'Syne unisce bande dinamiche e un processore spettrale che leviga solo le risonanze che danno fastidio. Parti da un preset per voce, batteria, basso o master, oppure lascia che Assist e Match ti suggeriscano la curva.',
      features: [
        { title: 'Bande dinamiche', text: 'Ogni banda ha threshold, range e sidechain, e può seguire l\'intonazione della voce.' },
        { title: 'Layer spettrale', text: 'Ammorbidisce le risonanze in una zona che scegli tu, con intensity, attack, release e sensibilità.' },
        { title: 'Assist, Match e preset', text: 'Suggerimenti automatici, match su un riferimento e preset per voce, dialoghi, batteria, basso, mix, master e repair.' },
      ],
      controls: [
        { name: 'Bande', text: 'Frequenza, gain, Q, tipo e pendenza per ogni banda.' },
        { name: 'Threshold · Range', text: 'Quando la banda interviene e di quanto può muoversi.' },
        { name: 'Follow pitch', text: 'La banda segue la nota della voce.' },
        { name: 'Spectral', text: 'Intensity, threshold, amount, attack, release, sens e select.' },
        { name: 'Assist · Match', text: 'Suggerimenti automatici e match su una traccia di riferimento.' },
        { name: 'Delta', text: 'Ascolti solo quello che Syne sta togliendo.' },
      ],
    },
    {
      slug: 'opto',
      name: 'Opto',
      category: 'Dinamica',
      color: '#E9D8A6',
      price: 29,
      version: '1.2',
      image: 'assets/plugins/opto.jpg',
      checkoutUrl: '#',
      tagline: 'Livellamento ottico, morbido e musicale.',
      short: 'Compressore ottico a due manopole. Peak Reduction, Gain, e la voce si mette a posto.',
      description:
        'Opto è un leveling amplifier ottico: la compressione reagisce in modo morbido e segue il materiale. Due manopole principali, Limit o Comp, ed Emphasis per decidere quanto le alte guidano la compressione.',
      features: [
        { title: 'Due manopole', text: 'Peak Reduction per la compressione, Gain per il livello. Nient\'altro da capire.' },
        { title: 'Limit o Comp', text: 'Un interruttore per passare da un livellamento dolce a un limiting più deciso.' },
        { title: 'Emphasis', text: 'Regola quanto le frequenze alte guidano la compressione: utile su voci brillanti e sibilanti.' },
      ],
      controls: [
        { name: 'Peak Reduction', text: 'Quanta compressione applichi.' },
        { name: 'Gain', text: 'Il livello in uscita.' },
        { name: 'Limit · Comp', text: 'Limiting deciso o compressione morbida.' },
        { name: 'Emphasis', text: 'Quanto le alte pesano sulla compressione.' },
        { name: 'Meter', text: 'Il VU mostra gain reduction oppure uscita a +4 e +10.' },
      ],
    },
    {
      slug: 'chords',
      name: 'Chords',
      category: 'Utility',
      color: '#FACC15',
      price: 19,
      version: '0.1',
      image: 'assets/plugins/chords.jpg',
      checkoutUrl: '#',
      tagline: 'Gli accordi di un loop, pronti in MIDI.',
      short: 'Trascina un loop: Chords riconosce gli accordi e te li consegna da trascinare come MIDI.',
      description:
        'Chords analizza un loop e scrive la progressione battuta per battuta, con tonalità, gradi e BPM. Passi da triadi ad accordi estesi, vedi le note sulla tastiera e trascini il MIDI direttamente nella DAW.',
      features: [
        { title: 'Accordi riconosciuti', text: 'Tonalità, BPM, numero di battute e progressione con i gradi, da un semplice file audio.' },
        { title: 'Triadi o estesi', text: 'Scegli se leggere la progressione essenziale o con settime e estensioni.' },
        { title: 'Drag MIDI', text: 'Trascini la progressione nella DAW come MIDI, oppure la copi con un click.' },
      ],
      controls: [
        { name: 'Drop', text: 'Accetta WAV, AIFF, MP3, M4A e FLAC.' },
        { name: 'Triads · Extended', text: 'Accordi essenziali o estesi.' },
        { name: 'Tastiera', text: 'Le note dell\'accordo selezionato.' },
        { name: 'Copy', text: 'Copia la progressione.' },
        { name: 'Drag MIDI', text: 'Trascina gli accordi nella DAW.' },
      ],
    },
    {
      slug: 'passive-eq',
      name: 'Passive EQ',
      category: 'EQ',
      color: '#94A3B8',
      price: 29,
      version: '1.1',
      wide: true,
      image: 'assets/plugins/passive-eq.jpg',
      checkoutUrl: '#',
      tagline: 'Boost e taglio insieme, come sul banco.',
      short: 'Program equalizer passivo: boost e attenuazione sulla stessa frequenza, per basse piene e alte d\'aria.',
      description:
        'Passive EQ riprende il program equalizer passivo. Sulle basse alzi e attenui la stessa frequenza insieme, per un basso pieno ma controllato. Sulle alte scegli il boost con la sua larghezza e un taglio separato.',
      features: [
        { title: 'Il trucco delle basse', text: 'Boost e attenuazione insieme sulla stessa frequenza: il basso cresce senza diventare fangoso.' },
        { title: 'Alte con bandwidth', text: 'Boost sulle alte da stretto a largo, e un taglio indipendente a 5, 10 o 20 kHz.' },
        { title: 'Tutto a passi fissi', text: 'Frequenze selezionabili come sull\'hardware: scegli a orecchio, non a numeri.' },
      ],
      controls: [
        { name: 'Low Boost · Atten', text: 'Boost e taglio sulle basse, da 0 a 10.' },
        { name: 'Low Frequency', text: '20, 30, 60 o 100 Hz.' },
        { name: 'High Boost', text: 'Boost sulle alte, con Bandwidth da sharp a broad.' },
        { name: 'High Frequency', text: 'Da 3 a 16 kHz.' },
        { name: 'High Atten', text: 'Taglio sulle alte a 5, 10 o 20 kHz.' },
        { name: 'Output', text: 'Guadagno d\'uscita, ±12 dB.' },
      ],
    },
    {
      slug: 'signal',
      name: 'Signal',
      category: 'Utility',
      color: '#5EEAD4',
      price: 15,
      version: '0.2',
      image: 'assets/plugins/signal.jpg',
      checkoutUrl: '#',
      tagline: 'Tonalità e BPM, in un secondo.',
      short: 'Trascina un brano o un beat: Signal ti dice tonalità, codice Camelot e BPM.',
      description:
        'Trascini dentro un file e Signal trova tonalità, relativa, codice Camelot e BPM, con metà e doppio tempo. Se due tonalità sono vicine ti segnala anche l\'alternativa. Un click su un valore e lo hai copiato.',
      features: [
        { title: 'Tonalità e Camelot', text: 'Tonalità, relativa e codice Camelot, pronti per il mix armonico.' },
        { title: 'BPM, metà e doppio', text: 'Il tempo del brano con half e double time, per non sbagliare il doppio tempo della trap.' },
        { title: 'Click per copiare', text: 'Ogni valore si copia con un click, da incollare nella DAW o nel nome del file.' },
      ],
      controls: [
        { name: 'Drop', text: 'Accetta WAV, AIFF, MP3, M4A e FLAC.' },
        { name: 'Key', text: 'Tonalità, relativa e codice Camelot.' },
        { name: 'Close call', text: 'L\'alternativa quando due tonalità sono vicine.' },
        { name: 'BPM', text: 'Tempo, con metà e doppio.' },
      ],
    },
  ],

  faq: [
    {
      q: 'Che differenza c\'è tra comprare un plugin e All Access?',
      a: 'Il plugin singolo lo paghi una volta e resta tuo per sempre, con tutti gli aggiornamenti della stessa versione. All Access è un abbonamento: hai tutti i plugin del catalogo, compresi quelli che usciranno, finché resti abbonato.',
    },
    {
      q: 'Su quanti computer posso installarli?',
      a: 'Ogni licenza vale per due computer insieme. Puoi spostare l\'attivazione su un altro computer quando vuoi dal tuo account.',
    },
    {
      q: 'Funzionano sulla mia DAW?',
      a: 'Sì, se la tua DAW carica plugin VST3 o AU: Logic Pro, Ableton Live, FL Studio, Cubase, Studio One, Reaper, Bitwig e le altre. Su Mac girano in nativo su Apple Silicon.',
    },
    {
      q: 'Posso disdire All Access quando voglio?',
      a: 'Sì, in qualsiasi momento dal tuo account. L\'accesso resta attivo fino alla fine del periodo già pagato.',
    },
    {
      q: 'Se disdico All Access, perdo i progetti?',
      a: 'I progetti restano tuoi. Senza abbonamento i plugin si aprono in modalità bypass finché non li riattivi o non compri la licenza singola.',
    },
    {
      q: 'C\'è una prova gratuita?',
      a: 'Ogni plugin ha una demo completa di 14 giorni. Scaricala dalla pagina del plugin, senza carta di credito.',
    },
  ],
};
