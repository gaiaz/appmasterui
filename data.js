const references = [
  {
    "id": 1,
    "territory": "quiet",
    "finalist": true,
    "app": "one year",
    "title": "Adding a memory",
    "url": "https://mobbin.com/flows/0febe13a-5e7b-4c07-88e7-e333f2ce4779",
    "why": "Campo di scrittura, tastiera e pulsante lasciano posto al ricordo scritto, libero nello spazio. Il contenuto sopravvive alla scomparsa dei controlli.",
    "steal": "Sottrazione dopo la conferma · continuità del contenuto · spazio vuoto"
  },
  {
    "id": 2,
    "territory": "quiet",
    "finalist": true,
    "app": "Life Reset",
    "title": "Take a deep breath and relax",
    "url": "https://mobbin.com/screens/56db6f17-71e3-4810-af30-6967d242450c",
    "why": "Una piccola frase bianca, sostenuta da una forma morbida su fondo quasi nero, occupa tutta l’attenzione disponibile. La dominanza nasce dall’assenza di concorrenti.",
    "steal": "Gerarchia per isolamento · contrasto · silenzio visivo"
  },
  {
    "id": 3,
    "territory": "quiet",
    "finalist": true,
    "app": "Matter",
    "title": "Risposta di Co-Reader",
    "url": "https://mobbin.com/screens/1cf6a8b8-8af1-4e9a-b7d5-7a3935032218",
    "why": "Il testo serif occupa quasi interamente la superficie: il contenuto definisce ritmo e struttura. Per immaginare un’intenzione che si legge e si abita.",
    "steal": "Contenuto come interfaccia · ritmo tipografico · riduzione dei controlli"
  },
  {
    "id": 4,
    "territory": "quiet",
    "finalist": false,
    "app": "Oura",
    "title": "Player — A Restful Place",
    "url": "https://mobbin.com/screens/3b2948a4-734e-4c08-a403-2c6ae0d5d1f7",
    "why": "La fotografia del deserto riempie lo schermo; titolo e comandi restano contenuti. Un singolo contenuto acquisisce un ambiente riconoscibile.",
    "steal": "Gerarchia fra atmosfera e controlli · fotografia a tutto schermo"
  },
  {
    "id": 5,
    "territory": "quiet",
    "finalist": false,
    "app": "TIDE",
    "title": "Player — Body Scan",
    "url": "https://mobbin.com/screens/846b3938-cc38-41e8-991b-749879975248",
    "why": "Il centro è lasciato quasi vuoto, mentre titolo e azioni si raccolgono in basso. La sessione si percepisce senza dover continuamente leggere informazioni.",
    "steal": "Controlli periferici · palette tonale · spazio centrale libero"
  },
  {
    "id": 6,
    "territory": "quiet",
    "finalist": false,
    "app": "Noom",
    "title": "Based on your answers, Sam…",
    "url": "https://mobbin.com/screens/0e0d7b71-e11d-4871-8ccc-3864a0954ea5",
    "why": "Una frase personale in serif, su fondo crema, diventa l’intero stato dell’interfaccia. Un passaggio essenziale fra raccolta e risposta personale.",
    "steal": "Intermezzo testuale · personalizzazione · economia degli elementi"
  },
  {
    "id": 7,
    "territory": "typographic",
    "finalist": true,
    "app": "Rodeo",
    "title": "Wrangle your non-work life",
    "url": "https://mobbin.com/screens/0918d7b7-2c6f-4848-b8dd-6ffd632674bd",
    "why": "Il messaggio domina con caratteri grandi, righe corte e una variazione in corsivo. La frase possiede una forma riconoscibile prima di essere letta interamente.",
    "steal": "Testo come composizione · scala · alternanza tondo/corsivo"
  },
  {
    "id": 8,
    "territory": "typographic",
    "finalist": true,
    "app": "pliability",
    "title": "Starting is the first step…",
    "url": "https://mobbin.com/screens/f7f0ec2e-89bf-4361-a9f3-ee19a8cd43bc",
    "why": "Una frase grande, allineata a sinistra, alterna parole bianche e grigie su fondo scuro. Il contrasto crea una seconda gerarchia dentro la frase stessa.",
    "steal": "Enfasi selettiva sulle parole · ritmo delle righe · contrasto semantico"
  },
  {
    "id": 9,
    "territory": "typographic",
    "finalist": true,
    "app": "ElevenReader",
    "title": "Where My Heart Learned to Belong",
    "url": "https://mobbin.com/screens/c41e48df-72ad-45aa-bff6-cb7cdbf796e1",
    "why": "Il titolo si distribuisce in grandi blocchi su più righe; sotto, una porzione del testo è evidenziata. Due scale dell’attenzione: la frase complessiva e il segmento da seguire.",
    "steal": "Interruzioni di riga · scala estrema · evidenziazione locale"
  },
  {
    "id": 10,
    "territory": "typographic",
    "finalist": false,
    "app": "Noom",
    "title": "Your reflection of the week",
    "url": "https://mobbin.com/screens/c373eed9-0c29-460f-a724-3c7f2a34e21e",
    "why": "Una domanda in grande serif si sovrappone a un’immagine pittorica, con una sola azione in basso. Il prompt assume il tono di un invito editoriale.",
    "steal": "Domanda protagonista · rapporto testo–immagine · tono contemplativo"
  },
  {
    "id": 11,
    "territory": "typographic",
    "finalist": false,
    "app": "Blinkist",
    "title": "Introduzione — The Psychology of Money",
    "url": "https://mobbin.com/screens/fad5d4f8-f197-4523-ac11-60054232890b",
    "why": "La domanda iniziale in sans bold si distingue dal testo serif sottostante. Utile per separare visivamente l’intenzione dalla motivazione che la sostiene.",
    "steal": "Contrasto fra famiglie tipografiche · gerarchia domanda/spiegazione"
  },
  {
    "id": 12,
    "territory": "typographic",
    "finalist": false,
    "app": "Me+",
    "title": "Affermazione — Motivation",
    "url": "https://mobbin.com/screens/d75040dc-34d6-46c5-8873-e773fbeaa07b",
    "why": "Una frase isolata al centro di un fondo acquerellato costituisce quasi tutto il contenuto. Una variante delicata della tipografia protagonista.",
    "steal": "Centralità della frase · atmosfera cromatica · controlli marginali"
  },
  {
    "id": 13,
    "territory": "immersive",
    "finalist": true,
    "app": "Tiimo",
    "title": "Tune in",
    "url": "https://mobbin.com/flows/aaef5a12-2e0f-4376-8a7e-0eba55a0d5e9",
    "why": "La sequenza mostra l’apertura delle opzioni sonore e poi il loro raccoglimento in una piccola barra con la selezione attiva. Molte possibilità → una scelta → le alternative scompaiono.",
    "steal": "Riduzione dopo la scelta · progressive disclosure · persistenza della selezione"
  },
  {
    "id": 14,
    "territory": "immersive",
    "finalist": true,
    "app": "Forest",
    "title": "Ambiente immersivo con personaggio e cuffie",
    "url": "https://mobbin.com/screens/231ee6c3-7945-4f26-bb73-2e5ecca50f42",
    "why": "Una scena ambientale con un personaggio centrale e pochi comandi in basso. L’attività acquisisce una presenza visiva, quasi un piccolo luogo personale.",
    "steal": "Metafora ambientale · oggetto centrale · coinvolgimento emotivo"
  },
  {
    "id": 15,
    "territory": "immersive",
    "finalist": true,
    "app": "Calm Sleep",
    "title": "Breathe In",
    "url": "https://mobbin.com/screens/9967cbc6-63a4-4389-8d14-8e336e156ac6",
    "why": "Cerchi, luce diffusa e una breve istruzione organizzano l’intera superficie. La geometria rende immediatamente leggibile il tipo di esperienza in corso.",
    "steal": "Stato espresso da forma e colore · istruzione minima · immersione"
  },
  {
    "id": 16,
    "territory": "immersive",
    "finalist": false,
    "app": "Noom",
    "title": "Soothe yourself",
    "url": "https://mobbin.com/screens/5062aaba-7824-44a5-b568-8a2af6a85fc2",
    "why": "Cerchi concentrici occupano un player color acqua con pochissimi controlli. La forma principale comunica più dell’apparato di navigazione.",
    "steal": "Geometria dominante · coerenza cromatica · controlli subordinati"
  },
  {
    "id": 17,
    "territory": "immersive",
    "finalist": false,
    "app": "Breathwrk",
    "title": "Preparazione dell’esercizio Calm",
    "url": "https://mobbin.com/screens/26c2dd5b-469f-4f45-befd-10d14b193864",
    "why": "Start è un grande cerchio luminoso; durata e impostazioni restano piccoli elementi satelliti. L’avvio acquista una soglia visiva molto chiara.",
    "steal": "Gerarchia dell’azione iniziale · luce come richiamo · opzioni periferiche"
  },
  {
    "id": 18,
    "territory": "immersive",
    "finalist": false,
    "app": "Structured",
    "title": "Starting focus mode",
    "url": "https://mobbin.com/flows/c066e250-e74d-40ba-a63f-5816a663d348",
    "why": "Dal dettaglio dell’attività si passa a uno stato dominato dal tempo restante. Una modalità diversa riorganizza la gerarchia conservando l’identità dell’attività.",
    "steal": "Cambio di gerarchia fra stati · continuità cromatica · azioni di conclusione"
  },
  {
    "id": 19,
    "territory": "ritual",
    "finalist": true,
    "app": "ABY Journal",
    "title": "Scelta — Future plans",
    "url": "https://mobbin.com/screens/eefc20ac-316b-4ab1-a2e6-7e2858c226ab",
    "why": "Le opzioni sono frammenti di linguaggio personale, presentati come etichette viola, con possibilità di aggiungere le proprie parole. La selezione diventa un modo per esprimersi.",
    "steal": "Scelta come completamento di frase · suggerimenti modificabili · tono personale"
  },
  {
    "id": 20,
    "territory": "ritual",
    "finalist": true,
    "app": "Oura",
    "title": "Your element is Earth",
    "url": "https://mobbin.com/screens/329a46cc-cab4-415a-b7be-642ebb759f23",
    "why": "Il riepilogo associa il percorso a un elemento naturale, con fotografia immersiva e un grande nome serif. Una memoria del periodo costruita attraverso un’immagine e un significato.",
    "steal": "Sintesi simbolica · restituzione narrativa · memoria visiva"
  },
  {
    "id": 21,
    "territory": "ritual",
    "finalist": true,
    "app": "TIDE",
    "title": "Citazione del giorno e navigazione per data",
    "url": "https://mobbin.com/screens/86b31d49-6c3b-43e7-8ed8-a4e9612d97c1",
    "why": "Una fila compatta di giorni permette di raggiungere una pagina dominata da fotografia, data e frase. Il tempo diventa una raccolta di momenti visivamente distinti.",
    "steal": "Archivio per giorni · identità del singolo momento · navigazione discreta"
  },
  {
    "id": 22,
    "territory": "ritual",
    "finalist": false,
    "app": "Deepstash",
    "title": "Tap & Hold to Read",
    "url": "https://mobbin.com/screens/c2c79b39-0360-44a1-b76e-8db0aaa98dd2",
    "why": "Il prompt propone una pressione prolungata per leggere una citazione. Il gesto può trasformare l’accesso al contenuto in un piccolo atto intenzionale.",
    "steal": "Gesto deliberato · attenzione prima della lettura · ritualizzazione"
  },
  {
    "id": 23,
    "territory": "ritual",
    "finalist": false,
    "app": "Finch",
    "title": "Pagina di riflessione del sabato",
    "url": "https://mobbin.com/screens/aab675a1-f7f7-446c-aa46-2f6f5175ee44",
    "why": "Un invito a parlarsi con affetto precede uno spazio semplice per obiettivi e riflessioni. Il tono prepara emotivamente l’azione di scrivere.",
    "steal": "Linguaggio di cura · invito non giudicante · risposta personale"
  },
  {
    "id": 24,
    "territory": "ritual",
    "finalist": false,
    "app": "Open",
    "title": "Daily Practice — citazione e Done",
    "url": "https://mobbin.com/screens/cff9bea5-009e-49cc-afdb-27c2a2389a23",
    "why": "Una citazione centrale su fondo nero accompagna un indicatore di pratica e Done. La conclusione viene associata a un pensiero da portare via.",
    "steal": "Chiusura riflessiva · riconoscimento discreto · continuità del rituale"
  }
];
