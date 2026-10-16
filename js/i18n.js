/*
  Lingua del sito: l'italiano è nell'HTML, qui c'è l'inglese.
  Ogni chiave è un testo italiano così com'è nella pagina (un nodo di testo, spazi esclusi);
  il valore è la sua traduzione. Un testo nuovo senza traduzione resta in italiano.
*/
(() => {
  const EN = {
    // nav, hero, footer
    'presenta': 'presents',
    'Negative Retune Speed, Crack Repair e Natural Riffs': 'Negative Retune Speed, Crack Repair and Natural Riffs',
    "La prossima evoluzione dell'intonazione vocale. Scopri cosa sa fare VTUNE.":
      'The next evolution of vocal tuning. Discover what VTUNE can do.',
    'Acquista VTUNE': 'Buy VTUNE',
    'Prova 3 giorni': '3-day trial',
    'Supporto': 'Support',
    'Fatto in Italia, per le cuffie di tutti.': 'Made in Italy, for everyone\'s headphones.',
    // marquee
    'Apple Silicon nativo': 'Native Apple Silicon',
    'Licenza a vita': 'Lifetime license',
    '3 attivazioni': '3 activations',
    'Demo 3 giorni': '3-day demo',
    'Preset inclusi': 'Presets included',
    // VTUNE
    'VTUNE · correzione dell\'intonazione': 'VTUNE · pitch correction',
    'Intonata.': 'In tune.',
    'E ancora tua.': 'Still yours.',
    'VTUNE corregge la voce mentre canti, dal ritocco che non si sente all\'hard tune. Poi accendi REC e modifichi le note una per una, come in Melodyne.':
      'VTUNE corrects your voice as you sing, from a touch nobody hears to hard tune. Then hit REC and edit the notes one by one, like in Melodyne.',
    'Prezzo': 'Price',
    'da $437': 'from $437',
    'Correzione in tempo reale': 'Real-time correction',
    'Sì': 'Yes',
    'Modalità a bassa latenza': 'Low-latency mode',
    'Sì, circa 1 ms': 'Yes, about 1 ms',
    'Sì, sotto 1 ms (Live)': 'Yes, under 1 ms (Live)',
    'Editor delle note': 'Note editor',
    'Sì, nello stesso plugin': 'Yes, in the same plugin',
    'No, è in Waves Tune, venduto a parte': 'No, it\'s in Waves Tune, sold separately',
    'No, è in Auto-Tune Pro 11, venduto a parte': 'No, it\'s in Auto-Tune Pro 11, sold separately',
    'Correzione delle formanti': 'Formant correction',
    'Sì (Formant Designer)': 'Yes (Formant Designer)',
    'Riff e abbellimenti lasciati come cantati': 'Riffs and ornaments kept as sung',
    'Sì (Natural Riffs)': 'Yes (Natural Riffs)',
    'Riparazione delle note incrinate': 'Repair of cracked notes',
    'Sì (Crack Repair)': 'Yes (Crack Repair)',
    'Cori che seguono la voce principale': 'Backing vocals that follow the lead',
    'Sì (Follow Lead)': 'Yes (Follow Lead)',
    'Formati': 'Formats',
    'Retune negativo': 'Negative retune',
    'Sì (ULTRA · Pitch)': 'Yes (ULTRA · Pitch)',
    'Sì (Speed negativa)': 'Yes (negative Speed)',
    'No, per scelta: niente editor grafico': 'No, by design: no graphic editor',
    'No, minimo 0,1 ms': 'No, 0.1 ms minimum',
    'No, minimo 0 ms': 'No, 0 ms minimum',
    'In parte (Note Transition)': 'Partly (Note Transition)',
    'In parte (Flex Tune)': 'Partly (Flex Tune)',
    'In parte (Note Stabilizer, solo in mix)': 'Partly (Note Stabilizer, mixing only)',
    'In parte: segue una melodia via MIDI': 'Partly: follows a melody via MIDI',
    'In parte (AutoKey 2: stessa tonalità su tutte le istanze)': 'Partly (AutoKey 2: same key on every instance)',
    'In parte (Groups: stesse impostazioni su più tracce)': 'Partly (Groups: same settings across tracks)',
    'Le funzioni degli altri plugin sono quelle descritte nei manuali, nelle pagine dei produttori e nelle recensioni a ottobre 2026: "No" vuol dire che lì non risultano, "In parte" che c\'è una funzione vicina ma diversa. I prezzi sono quelli della licenza perpetua presso i rivenditori. Waves Tune è un marchio di Waves Audio Ltd.; Auto-Tune è un marchio di Antares Audio Technologies; MetaTune è un marchio di Slate Digital. Zazzi non è affiliato a nessuno di loro.':
      'Features of the other plugins are as described in their manuals, makers\' pages and reviews as of October 2026: "No" means it isn\'t listed there, "Partly" means a related but different feature. Prices are for a perpetual license at retailers. Waves Tune is a trademark of Waves Audio Ltd.; Auto-Tune is a trademark of Antares Audio Technologies; MetaTune is a trademark of Slate Digital. Zazzi is not affiliated with any of them.',
    'Voice Print Analysis, Predictive Pitch e Live Mode a 0,25 ms':
      'Voice Print Analysis, Predictive Pitch and a 0.25 ms Live Mode',
    'Le tecnologie di VTUNE':
      'The technology inside VTUNE',
    'Ascolta. Prevede.':
      'It listens. It looks ahead.',
    'Poi corregge.':
      'Then it tunes.',
    'Non il solito autotune: VTUNE prima capisce come canti, poi decide come intonarti.':
      'Not just another autotune: VTUNE first learns how you sing, then decides how to tune you.',
    'Ti ascolta prima di toccarti.':
      'It listens before it touches you.',
    'Premi ASSIST e canta per 20 secondi. VTUNE segue la tua intonazione 200 volte al secondo, misura come canti e simula la correzione sulla tua voce prima di applicarla. Poi imposta tutto per il suono che scegli, e sotto ogni valore ti dice perché.':
      'Press ASSIST and sing for 20 seconds. VTUNE follows your pitch 200 times a second, measures how you sing and simulates the correction on your own voice before applying it. Then it sets everything for the sound you pick, and tells you why under every value.',
    'caratteristiche della tua voce, misurate in 20 secondi':
      'traits of your voice, measured in 20 seconds',
    'Non insegue la nota. Ci arriva prima.':
      'It doesn\'t chase the note. It gets there first.',
    'Gli autotune in tempo reale reagiscono quando la nota è già iniziata. ULTRA guarda avanti nella traccia e porta la correzione sulla nota nuova prima della voce: cambi di nota netti, senza l\'effetto in ritardo.':
      'Real-time autotunes react once the note has already started. ULTRA looks ahead in the track and lands the correction on the new note before the voice does: clean note changes, without the late, lagging effect.',
    'di anticipo sul cambio di nota':
      'ahead of the note change',
    'Automatico e nota per nota. Insieme.':
      'Automatic and note by note. Together.',
    'Le note che non tocchi le intona VTUNE da solo. Quelle da perfezionare le apri come in un editor professionale: altezza, vibrato, deriva, transizione, volume, tempo. Il grafico ti mostra in anteprima la voce come uscirà.':
      'The notes you leave alone, VTUNE tunes by itself. The ones you want to perfect, you open as in a professional editor: pitch, vibrato, drift, transition, level, timing. The graph previews the voice exactly as it will come out.',
    'strumenti di editing, nello stesso plugin':
      'editing tools, in the same plugin',
    'Pronto per il palco.':
      'Ready for the stage.',
    'Una modalità a latenza minima per cantare con la correzione in cuffia o dal vivo, senza sentire nessun ritardo. Per registrare in studio c\'è Low Latency, a 1,4 ms.':
      'A minimal-latency mode to sing with the correction in your headphones or live, without hearing any delay. For recording in the studio there\'s Low Latency, at 1.4 ms.',
    'di latenza in Live':
      'of latency in Live',
    'I tuoi riff restano tuoi.':
      'Your riffs stay yours.',
    'Abbellimenti, note di passaggio e run passano come li hai cantati, intonati con la nota che li circonda. Niente scalini robotici.':
      'Ornaments, passing notes and runs come through as you sang them, tuned with the note around them. No robotic steps.',
    'Corretta, non trasformata.':
      'Corrected, not transformed.',
    'Il timbro resta il tuo anche con le correzioni più grandi: niente voce da cartone animato, e nessuna latenza in più.':
      'Your tone stays yours even with the biggest corrections: no cartoon voice, and no extra latency.',
    'Le stecche spariscono.':
      'Cracks disappear.',
    'Dove la voce si incrina su una nota tenuta, VTUNE suona al suo posto i cicli sani appena prima.':
      'Where the voice cracks on a held note, VTUNE plays the healthy cycles just before it instead.',
    'Prova 3 giorni gratis':
      'Try it free for 3 days',
    'Acquista VTUNE · €39':
      'Buy VTUNE · €39',
    'Sì, 0,25 ms (Live)':
      'Yes, 0.25 ms (Live)',
    'Dal naturale all\'hard tune': 'From natural to hard tune',
    'Scegli quanto deve essere veloce la correzione. I preset spiegano cosa fanno, da Melodic Rap all\'Hard Tune anni 2000.':
      'Choose how fast the correction is. Each preset explains what it does, from Melodic Rap to 2000s Hard Tune.',
    'Le note, una per una': 'Every note, one by one',
    'VTUNE ascolta la voce e disegna le note. Le sposti, le tagli, le unisci; regoli vibrato, attacco e volume. Quelle che non tocchi restano come le hai registrate.':
      'VTUNE listens to the voice and draws the notes. Move them, split them, join them; shape vibrato, attack and level. The ones you leave alone stay as you recorded them.',
    'I riff restano riff': 'Riffs stay riffs',
    'Abbellimenti, passaggi veloci e run passano come li hai cantati: si sposta solo la nota che li contiene. Senza Natural Riffs, lo scatto robotico.':
      'Ornaments, fast passages and runs come through as you sang them: only the note around them moves. Without Natural Riffs, the robotic snap.',
    'Dove la voce si incrina o cede su una nota tenuta, VTUNE suona al suo posto i cicli sani appena prima. Finali e consonanti restano intatti.':
      'Where the voice cracks or gives way on a held note, VTUNE plays the healthy cycles just before it instead. Endings and consonants stay untouched.',
    'Il timbro non cambia': 'The tone stays the same',
    'Le formanti restano dove le aveva la voce, anche spostandola lontano. Voice Auto riconosce da solo basso, tenore, contralto o soprano.':
      'Formants stay where the voice had them, however far you move it. Voice Auto tells bass, tenor, alto or soprano on its own.',
    'Un secondo VTUNE sui cori prende le note dalla voce principale e le canta nella sua ottava. Dove il lead tace, decide la scala.':
      'A second VTUNE on the backing vocals takes its notes from the lead and sings them in its own octave. Where the lead is silent, the scale decides.',
    'Formati e DAW': 'Formats & DAWs',
    'e': 'and',
    'E ogni altra DAW che carica plugin AU o VST3. Pro Tools no: VTUNE non è AAX. Vuoi provarlo nella tua?':
      'And any other DAW that loads AU or VST3 plugins. Not Pro Tools: VTUNE isn\'t AAX. Want to try it in yours?',
    'Prova 3 giorni gratis.': 'Free 3-day trial.',
    'Requisiti di sistema': 'System requirements',
    'macOS 11 (Big Sur) o più recente': 'macOS 11 (Big Sur) or later',
    'Apple Silicon nativo o Intel': 'Native Apple Silicon or Intel',
    'DAW a 64 bit con AU o VST3': '64-bit AU or VST3 host',
    ': macOS 11 (Big Sur) o più recente, Apple Silicon nativo o Intel': ': macOS 11 (Big Sur) or later, native Apple Silicon or Intel',
    ': Windows 10 o 11 a 64 bit': ': 64-bit Windows 10 or 11',
    'DAW a 64 bit con VST3 (o AU su Mac)': '64-bit DAW with VST3 (or AU on Mac)',
    'Una licenza vale su Mac e Windows: fino a 3 computer.': 'One license works on Mac and Windows: up to 3 computers.',
    'macOS e Windows': 'macOS and Windows',
    'Licenza valida su 3 computer': 'License for 3 computers',
    'macOS 11+ · Apple Silicon e Intel': 'macOS 11+ · Apple Silicon and Intel',
    'Low latency per registrare': 'Low latency for recording',
    // punti sul plugin
    'Punti di partenza pronti, da Natural a Hard fino a Ultra. Ognuno ha la sua velocità di correzione: accendi ? e passaci sopra per leggere cosa fa.':
      'Ready starting points, from Natural to Hard and Ultra. Each has its own correction speed: turn on ? and hover over one to read what it does.',
    'Per registrare: la voce torna con circa 1 ms di ritardo. Per il mix spegnilo: tornano Natural Riffs e Crack Repair, che hanno bisogno di ascoltare in anticipo.':
      'For recording: the voice comes back about 1 ms late. Turn it off for mixing: Natural Riffs and Crack Repair come back, since they need to listen ahead.',
    'Tonalità e scala': 'Key and scale',
    'Scegli tonalità e scala: VTUNE porta ogni nota sulla nota della scala più vicina. Sul piano clicchi una nota per toglierla o rimetterla.':
      'Pick the key and scale: VTUNE takes every note to the nearest note of the scale. Click a note on the keyboard to remove it or put it back.',
    'Voice e Follow': 'Voice and Follow',
    'Voice Auto capisce da solo se canta un basso, un tenore, un contralto o un soprano e cerca solo lì: meno errori di ottava. Follow fa prendere a un coro le note della voce principale.':
      'Voice Auto works out by itself whether a bass, tenor, alto or soprano is singing and only searches there: fewer octave mistakes. Follow lets a backing vocal take its notes from the lead.',
    "L'anello": 'The ring',
    'Le dodici note in cerchio: la scia è la voce, la perla è la nota su cui VTUNE la porta. Al centro la nota, lo scarto in centesimi e la frequenza.':
      'The twelve notes on a ring: the trail is the voice, the bead is the note VTUNE takes it to. In the middle: the note, how far off it is in cents, and the frequency.',
    'Quanto in fretta la voce arriva sulla nota: lento resta umano, a zero è hard tune. Oltre lo zero c\'è ULTRA: la nota cambia prima della voce, il suono del retune negativo.':
      'How fast the voice reaches the note: slow stays human, zero is hard tune. Past zero is ULTRA: the note changes before the voice does, the negative-retune sound.',
    'Riffs lascia abbellimenti e run come li hai cantati. Repair ripara le stecche sulle note tenute. Formant tiene il timbro al suo posto anche spostando molto la voce.':
      'Riffs keeps ornaments and runs as you sang them. Repair fixes cracks on held notes. Formant keeps the tone where it was, even when the voice moves far.',
    'Pitch e Graph': 'Pitch and Graph',
    'Grigio: la voce come l\'hai cantata. Rosa: come esce corretta. Passa a GRAPH per vedere le note e modificarle una per una.':
      'Grey: the voice as you sang it. Pink: as it comes out tuned. Switch to GRAPH to see the notes and edit them one by one.',
    "Torna alla correzione automatica e alla vista principale con l'anello.":
      'Back to automatic correction and the main view with the ring.',
    'Accendi REC e registra, o premi play: VTUNE ascolta la voce e disegna le note. Spegnilo quando hai finito: le note restano.':
      "Turn on REC and record, or press play: VTUNE listens and draws the notes. Turn it off when you're done: the notes stay.",
    'Seleziona e sposta, vibrato, drift, attacco, volume, taglia e unisci: uno strumento per ogni cosa che vuoi cambiare in una nota.':
      'Select and move, vibrato, drift, attack, level, split and glue: one tool for each thing you want to change in a note.',
    'Le note che sposti atterrano solo sulle note della scala. Con Alt le muovi libere.':
      'Notes you move land only on the notes of the scale. Hold Alt to move them freely.',
    'Raddrizza il lento ondeggiare delle note prima che VTUNE le intoni.':
      'Straightens the slow wandering of the notes before VTUNE tunes them.',
    "Reset riporta le note com'erano. Re-listen fa riascoltare un tratto come nuovo. Clear dimentica la voce sentita finora.":
      'Reset puts the notes back as they were. Re-listen hears a stretch again as new. Clear forgets the voice heard so far.',
    'Tiene la testina sempre in vista mentre la traccia suona.':
      'Keeps the playhead in view while the track plays.',
    'Clicca una nota per sentirla, trascinala su o giù per spostarla. Doppio clic la rimette sulla scala. Quelle che non tocchi suonano come le hai registrate.':
      'Click a note to hear it, drag it up or down to move it. Double-click puts it back on the scale. The ones you leave alone sound as you recorded them.',
    'Strumenti': 'Tools',
    'Le note': 'The notes',
    // FAQ
    'Domande frequenti.': 'Frequently asked questions.',
    'Quanto costa VSTREAM?': 'How much is VSTREAM?',
    '€2,99, una volta sola, IVA inclusa. La licenza è tua per sempre, con gli aggiornamenti gratuiti della versione. Nessun abbonamento.':
      '€2.99, once, VAT included. The licence is yours for good, with free updates of the version. No subscription.',
    'Come ricevo la licenza?': 'How do I get the licence?',
    'Subito dopo il pagamento ti arriva un\'email con il codice, il file VSTREAM.lic e i link per scaricare il plugin. Apri VSTREAM, clicca Licence in basso a destra e trascina il file o incolla il codice.':
      'Right after payment you get an email with the code, the VSTREAM.lic file and the links to download the plugin. Open VSTREAM, click Licence at the bottom right and drop the file or paste the code.',
    'Su quanti computer posso usarlo?': 'How many computers can I use it on?',
    'Su tre computer alla volta, Mac e Windows insieme. Per passare a un altro computer disattivalo su uno di quelli attivi, dal pulsante nel plugin.':
      'Three computers at a time, Mac and Windows together. To move to another computer, deactivate it on one of the active ones with the button in the plugin.',
    'Funziona sulla mia DAW?': 'Does it work in my DAW?',
    'Sì, se la tua DAW carica plugin VST3 o AU: Logic Pro, Ableton Live, FL Studio, Cubase, Studio One, Reaper, Bitwig e le altre. Su Mac gira in nativo su Apple Silicon. Pro Tools no: VSTREAM non è AAX.':
      'Yes, if your DAW loads VST3 or AU plugins: Logic Pro, Ableton Live, FL Studio, Cubase, Studio One, Reaper, Bitwig and the rest. On Mac it runs natively on Apple Silicon. Not Pro Tools: VSTREAM is not AAX.',
    'Serve un\'app sul telefono?': 'Do I need an app on my phone?',
    'No. Inquadri il QR con la fotocamera e il telefono apre una pagina web. Telefono e computer devono stare sulla stessa rete Wi-Fi.':
      'No. Scan the QR code with the camera and the phone opens a web page. Phone and computer must be on the same Wi-Fi network.',
    'C\'è una prova gratuita?': 'Is there a free trial?',
    'No, VSTREAM non ha una prova gratuita. In compenso hai 14 giorni per ripensarci: ti rimborsiamo tutto.':
      'No, VSTREAM has no free trial. Instead you have 14 days to change your mind: we refund you in full.',
    'Posso avere un rimborso?': 'Can I get a refund?',
    'Sì, entro 14 giorni dall\'acquisto, anche se l\'hai già attivata. Rispondi all\'email della licenza: ti rimborsiamo tutto e la licenza si disattiva.':
      'Yes, within 14 days of purchase, even if you have already activated it. Reply to the licence email: we refund you in full and the licence is deactivated.',
    // VSTREAM (#/vstream)
    'Dal DAW al telefono, senza app': 'From your DAW to your phone, no app',
    'Il tuo mix,': 'Your mix,',
    'sul telefono.': 'on your phone.',
    'Metti VSTREAM sul master, inquadra il QR e ascolti il DAW dal telefono mentre lavori. Senza app, senza cavi, senza esportare. Velocissimo.':
      'Put VSTREAM on the master, scan the QR code and hear your DAW on your phone while you work. No app, no cables, no bouncing. Super fast.',
    'Scarica per Mac': 'Download for Mac',
    'Scarica per Windows': 'Download for Windows',
    'Scarica VSTREAM': 'Download VSTREAM',
    'Come funziona': 'How it works',
    'Ascolta dal telefono': 'Listen on your phone',
    'Inquadra con la fotocamera': 'Scan it with the camera',
    'In ascolto': 'Listening',
    'telefoni': 'phones',
    'Dal tuo DAW': 'From your DAW',
    'Minimo': 'Minimum',
    'Normale': 'Normal',
    'Stabile': 'Stable',
    'ritardo 50 ms': 'delay 50 ms',
    'Nessuna app': 'No app',
    'Fino a 96 kHz': 'Up to 96 kHz',
    'Più telefoni insieme': 'Many phones at once',
    'Tre passi.': 'Three steps.',
    'Il terzo è play.': 'The third is play.',
    'Mettilo sul master': 'Put it on the master',
    'VSTREAM lascia passare l\'audio identico e ne manda una copia ai telefoni. Nel DAW non aggiunge latenza e non cambia niente.':
      'VSTREAM lets the audio through untouched and sends a copy to the phones. It adds no latency in the DAW and changes nothing.',
    'Inquadra il QR': 'Scan the QR code',
    'Telefono e PC sulla stessa rete Wi-Fi: la fotocamera apre la pagina di VSTREAM. Niente app da installare, niente account.':
      'Phone and computer on the same Wi-Fi: the camera opens the VSTREAM page. No app to install, no account.',
    'Ascolta mentre lavori': 'Listen while you work',
    'Il DAW suona e il telefono ascolta. Sposti un fader, cambi un EQ: lo senti subito, senza esportare niente.':
      'The DAW plays and the phone listens. Move a fader, change an EQ: you hear it right away, without bouncing anything.',
    'Le tecnologie di VSTREAM': 'The technology inside VSTREAM',
    'Veloce. Pulito.': 'Fast. Clean.',
    'Sempre a tempo.': 'Always in time.',
    'Un piccolo server dentro il plugin, una pagina web sul telefono e niente in mezzo.':
      'A small server inside the plugin, a web page on the phone and nothing in between.',
    'Telefono': 'Phone',
    'Latenza minima': 'Minimal latency',
    'Lo senti mentre lo cambi.': 'Hear it as you change it.',
    'Scegli tu quanto ritardo tenere. Minimo per lavorare con il telefono in mano, Normale per tutti i giorni, Stabile quando il Wi-Fi è affollato. Il telefono mostra il ritardo vero, rete compresa.':
      'You choose how much delay to keep. Minimum to work with the phone in your hand, Normal for every day, Stable when the Wi-Fi is crowded. The phone shows the real delay, network included.',
    'di buffer in Minimo, il ritardo più basso': 'of buffer in Minimum, the lowest delay',
    '44,1 kHz': '44.1 kHz',
    'Qualità piena': 'Full quality',
    'Il mix com\'è. Non un MP3.': 'The mix as it is. Not an MP3.',
    'Niente compressione: VSTREAM manda audio PCM a 16 bit, stereo, alla frequenza del tuo progetto. Il passaggio a 16 bit ha il suo dither. Quello che senti sul telefono è il mix, non una sua copia schiacciata.':
      'No compression: VSTREAM sends 16-bit stereo PCM at your project\'s sample rate, dithered on the way to 16 bit. What you hear on the phone is the mix, not a squashed copy of it.',
    'PCM non compresso, alla frequenza del DAW': 'uncompressed PCM, at the DAW\'s sample rate',
    'Un\'ora dopo, ancora a tempo.': 'An hour later, still in time.',
    'Il PC e il telefono hanno due orologi che si allontanano piano piano. VSTREAM legge l\'audio un pelo più veloce o più lento, al massimo dello 0,15%: il ritardo resta quello scelto e l\'intonazione non si muove.':
      'The computer and the phone run on two clocks that slowly drift apart. VSTREAM reads the audio a hair faster or slower, by 0.15% at most: the delay stays where you set it and the pitch does not move.',
    '< 3 cent': '< 3 cents',
    'di correzione, sotto quello che l\'orecchio sente': 'of correction, below what the ear can hear',
    'Sorgenti': 'Sources',
    'Voce': 'Vocals',
    'Tutta la stanza ascolta.': 'The whole room listens.',
    'Si collegano più telefoni insieme, e il plugin ti dice chi sta ascoltando. Metti VSTREAM anche su un bus o su una traccia: dal telefono scegli cosa sentire, ognuna con il nome che le dai.':
      'Many phones can connect at once, and the plugin shows who is listening. Put VSTREAM on a bus or a track too: on the phone you pick what to hear, each with the name you give it.',
    'Come lo sentirà la gente.': 'How people will hear it.',
    'Un interruttore somma sinistro e destro, come l\'altoparlante di un telefono. Senti subito se la voce o il basso spariscono.':
      'One switch sums left and right, like a phone speaker. You hear right away if the vocal or the bass disappears.',
    'Spegni quando vuoi.': 'Switch it off any time.',
    'Un tasto ferma l\'invio a tutti i telefoni. Il DAW continua a suonare come prima.':
      'One button stops sending to every phone. The DAW keeps playing as before.',
    'Come un\'app, senza esserlo.': 'Like an app, without being one.',
    'Su iPhone: Condividi, poi Aggiungi a Home. La volta dopo VSTREAM si apre con un tocco, a schermo intero.':
      'On iPhone: Share, then Add to Home Screen. Next time VSTREAM opens with one tap, full screen.',
    'Quando ti serve': 'When you need it',
    'Il mix fuori': 'The mix away',
    'dalle casse da studio.': 'from the studio monitors.',
    'Quasi tutti ascolteranno la tua musica da un telefono. VSTREAM te lo fa sentire prima di esportare.':
      'Most people will hear your music on a phone. VSTREAM lets you hear that before you bounce.',
    '02 · Altra stanza': '02 · Another room',
    'Il test dell\'altoparlante': 'The speaker test',
    'Voce, basse e kick sull\'altoparlante vero, mentre il progetto è ancora aperto. Correggi e risenti in un secondo.':
      'Vocals, low end and kick on a real phone speaker, while the project is still open. Fix it and hear it again in a second.',
    'Il mix dal divano': 'The mix from the couch',
    'Allontanati dalla scrivania e ascolta da un\'altra stanza, con le cuffie del telefono. Le orecchie fresche sentono di più.':
      'Step away from the desk and listen from another room, with your phone\'s earphones. Fresh ears hear more.',
    'Il cliente ascolta': 'The client listens',
    'Chi è venuto a sentire il pezzo ascolta dal suo telefono mentre lavori, senza passarsi le cuffie.':
      'Whoever came to hear the track listens on their own phone while you work, no headphones passed around.',
    'E ogni altra DAW che carica plugin AU o VST3. Pro Tools no: VSTREAM non è AAX.':
      'And any other DAW that loads AU or VST3 plugins. Not Pro Tools: VSTREAM is not AAX.',
    'Cosa serve': 'What you need',
    ': Mac con macOS 11 o più recente, o Windows 10 e 11 a 64 bit': ': a Mac with macOS 11 or later, or 64-bit Windows 10 or 11',
    'PC': 'Computer',
    ': iPhone o Android, con Safari o Chrome': ': iPhone or Android, with Safari or Chrome',
    'PC e telefono sulla': 'Computer and phone on the',
    'stessa rete': 'same network',
    ', anche l\'hotspot del telefono': ', the phone\'s hotspot works too',
    'Il plugin ascolta sulla porta 7171. Se è occupata, prende la prima libera fino alla 7180.':
      'The plugin listens on port 7171. If it is taken, it uses the first free one up to 7180.',
    'Scopri VTUNE': 'Discover VTUNE',
    // termini e condizioni: la pagina ha la sua versione inglese, qui solo i link
    'Termini e condizioni': 'Terms and conditions',
    'Acquistando o scaricando accetti i': 'By buying or downloading you accept the',
    'Licenza a vita · 3 computer · Mac e Windows ·': 'Lifetime licence · 3 computers · Mac and Windows ·',
    'Acquista VSTREAM · €2,99': 'Buy VSTREAM · €2.99',
    // dopo il pagamento (#/grazie)
    'Pagamento ricevuto': 'Payment received',
    'Grazie.': 'Thank you.',
    'La licenza è in arrivo.': 'Your licence is on its way.',
    'Ti abbiamo mandato un\'email con il codice di licenza, il file VSTREAM.lic e i link per scaricare VSTREAM. Di solito arriva entro un minuto: se non la vedi, controlla anche lo spam.':
      'We sent you an email with your licence code, the VSTREAM.lic file and the links to download VSTREAM. It usually arrives within a minute: if you can\'t see it, check your spam folder too.',
    'Installa VSTREAM sul tuo computer.': 'Install VSTREAM on your computer.',
    'Aprilo nella DAW, sul master o su una traccia.': 'Open it in your DAW, on the master or on any track.',
    'Clicca Licence in basso a destra e trascina VSTREAM.lic, o incolla il codice.': 'Click Licence at the bottom right and drop VSTREAM.lic, or paste the code.',
    'L\'email non è arrivata dopo 10 minuti? Scrivi a': 'No email after 10 minutes? Write to',
    'con l\'indirizzo che hai usato per pagare.': 'from the address you paid with.',
  };
  const ATTR_EN = {
    'Download di VSTREAM': 'VSTREAM download',
    'Checkout di VTUNE': 'VTUNE checkout',
    'Contatto supporto': 'Support contact',
    'Checkout di VSTREAM': 'VSTREAM checkout',
    'Download di VSTREAM per Mac': 'VSTREAM download for Mac',
    'Download di VSTREAM per Windows': 'VSTREAM download for Windows',
    'Prova di VTUNE': 'VTUNE trial',
    'Menu dei preset di VTUNE, da Natural a Hard': 'VTUNE preset menu, from Natural to Hard',
    'Editor delle note di VTUNE con una ripresa registrata': 'VTUNE note editor with a recorded take',
    'Interruttore RIFFS e voce cantata e corretta a confronto': 'RIFFS switch and the voice as sung and as tuned',
    'Interruttore REPAIR di VTUNE con la sua spiegazione': 'VTUNE REPAIR switch with its explanation',
    'Sezione Voice di VTUNE con il riconoscimento automatico': 'VTUNE Voice section with automatic detection',
    'Menu Follow di VTUNE con la voce principale scelta': 'VTUNE Follow menu with the lead vocal selected',
    'ASSIST di VTUNE: cosa ha sentito nella voce e perché ha scelto ogni impostazione': 'VTUNE ASSIST: what it heard in the voice and why it chose each setting',
    'Retune Speed di VTUNE in ULTRA, 14 ms di anticipo': 'VTUNE Retune Speed in ULTRA, 14 ms ahead',
    'GRAPH di VTUNE: le note, la voce cantata e come uscirà': 'VTUNE GRAPH: the notes, the voice as sung and as it will come out',
    'Menu Latency di VTUNE: Normal, Low latency 1,4 ms, Live 0,25 ms': 'VTUNE Latency menu: Normal, Low latency 1.4 ms, Live 0.25 ms',
  };
  // il titolo della scheda delle pagine che lo cambiano (il router lo scrive già nella lingua del sito)
  const TITLE_EN = {
    'Termini e condizioni · Vault Plugins': 'Terms and conditions · Vault Plugins',
    'Grazie · Vault Plugins': 'Thank you · Vault Plugins',
  };
  const META_EN = 'VTUNE: vocal pitch correction, from a natural touch to hard tune, with a note editor.';

  const KEY = 'zz-lang';
  const btn = document.getElementById('langToggle');
  const meta = document.querySelector('meta[name="description"]');
  const metaIt = meta.content;
  const texts = [];
  const attrs = [];

  function collect() {
    texts.length = 0;
    attrs.length = 0;
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = walk.nextNode(); n; n = walk.nextNode()) {
      const it = n._it ?? n.nodeValue.trim();
      if (EN[it]) { n._it = it; texts.push(n); }
    }
    document.querySelectorAll('[data-label], [aria-label], img[alt]').forEach((el) => {
      ['data-label', 'aria-label', 'alt'].forEach((a) => {
        const v = el.getAttribute(a);
        if (v && ATTR_EN[el[`_it_${a}`] ?? v]) { el[`_it_${a}`] ??= v; attrs.push([el, a]); }
      });
    });
  }

  function apply(lang) {
    const en = lang === 'en';
    collect();
    texts.forEach((n) => {
      const lead = n.nodeValue.match(/^\s*/)[0], tail = n.nodeValue.match(/\s*$/)[0];
      n.nodeValue = lead + (en ? EN[n._it] : n._it) + tail;
    });
    attrs.forEach(([el, a]) => el.setAttribute(a, en ? ATTR_EN[el[`_it_${a}`]] : el[`_it_${a}`]));
    meta.content = en ? META_EN : metaIt;
    const titleIt = Object.keys(TITLE_EN).find((k) => TITLE_EN[k] === document.title) ?? document.title;
    document.title = en ? TITLE_EN[titleIt] ?? titleIt : titleIt;
    document.documentElement.lang = lang;
    btn.textContent = en ? 'IT' : 'EN';
    btn.setAttribute('aria-label', en ? 'Passa all\'italiano' : 'Switch to English');
    try { localStorage.setItem(KEY, lang); } catch (e) { /* solo comodità */ }
  }

  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* niente */ }
  // senza una scelta salvata il sito parte in inglese
  const start = saved || 'en';
  apply(start);
  btn.addEventListener('click', () => apply(document.documentElement.lang === 'en' ? 'it' : 'en'));
})();
