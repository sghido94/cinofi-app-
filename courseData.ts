import type { Chapter } from '../types';

export const courseData: Chapter[] = [
  {
    id: 1,
    title: "La relazione con il cane",
    subtitle: "Capire il Presente per Costruire il Futuro",
    modules: [
      {
        id: 1,
        title: "La Metamorfosi del Rapporto Uomo-Cane",
        objective: "Comprendere il contesto storico e culturale della relazione con il cane, riconoscendo come il passaggio da una società rurale a una urbana abbia profondamente trasformato il ruolo e la percezione del nostro più antico alleato.",
        lessons: [
          {
            id: "1.1",
            title: "Un Sodalizio Antico",
            points: [
              "La relazione con il cane ha accompagnato la storia dell'umanità fin quasi dalle sue origini, molto prima di ogni altro processo di domesticazione.",
              "È scorretto pensare che solo oggi il rapporto sia valorizzato; un tempo esisteva uno spirito di dipendenza collaborativa molto forte, specialmente nella società rurale."
            ]
          },
          {
            id: "1.2",
            title: "Il Passaggio alla Cultura Urbana",
            points: [
              "Il grande cambiamento nel rapporto è avvenuto con il passaggio da una cultura rurale a una urbana, specialmente nel secondo dopoguerra.",
              "Nella concezione urbana, il cane ha subito una diminuzione di ruolo, e l'uomo sente meno il bisogno delle sue prestazioni.",
              "Questo ha portato a una svalutazione della sua importanza e all'emergere di un approccio \"pietistico\", basato sulla tutela più che su una vera attribuzione di valore.",
              "La relazione moderna è diventata principalmente \"affiliativa\", con l'integrazione del cane nel nucleo familiare e la condivisione di spazi intimi."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 1",
          questions: [
            {
              id: 1,
              questionText: "Cosa si intende per \"spirito di dipendenza collaborativa\" tipico della società rurale?",
              answerText: "Si intende un rapporto in cui l'uomo sentiva di dipendere dalle prestazioni e dall'aiuto del cane per le sue attività, come la caccia o la pastorizia."
            },
            {
              id: 2,
              questionText: "Quale grande cambiamento sociale ha trasformato la relazione con il cane?",
              answerText: "Il passaggio da una cultura rurale, basata sulle prestazioni, a una cultura urbana, basata sull'affettività."
            },
            {
              id: 3,
              questionText: "Qual è la conseguenza principale della \"diminuzione di ruolo\" del cane nella società urbana?",
              answerText: "Ha portato a una svalutazione della sua importanza e all'adozione di un approccio \"pietistico\" e tutelativo, piuttosto che basato su un reale valore collaborativo."
            }
          ]
        }
      },
      {
        id: 2,
        title: "I Tre Volti del Cane Moderno",
        objective: "Distinguere e analizzare i tre modelli concettuali che descrivono il cane nel suo rapporto con l'uomo: il \"cane-utile\", il \"cane-pet\" e il \"cane-compagno\".",
        lessons: [
          {
            id: "2.1",
            title: "Il \"Cane-Utile\" e il \"Cane-Pet\"",
            points: [
              "Cane-Utile: Tipico della cultura rurale, il suo valore era legato alla sua prestazione specifica (caccia, guardia). L'apprendistato era focalizzato su obbedienza e capacità performativa.",
              "Cane-Pet: Emerso con la cultura urbana, ha una funzione prevalentemente affettiva. Viene spesso infantilizzato e usato per soddisfare bisogni relazionali della persona (figlio, base sicura, confidente)."
            ]
          },
          {
            id: "2.2",
            title: "Il \"Cane-Compagno\" e le Nuove Sfide",
            points: [
              "Cane-Compagno: È un modello emerso dalla fine degli anni '90, che accompagna la persona in tutte le dimensioni del vivere, sia privato che pubblico.",
              "Questa nuova concezione può assumere varie forme: il cane che ci affianca nella vita di tutti i giorni, quello con cui fare attività (sport, pet therapy), o il \"cane libero\" dotato di autonomia.",
              "Questo modello, pur offrendo un contesto espressivo più ampio, richiede al cane doti di adattamento e concertazione molto più accentuate."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 2",
          questions: [
            {
              id: 1,
              questionText: "Qual è la principale differenza tra il \"cane-utile\" e il \"cane-pet\"?",
              answerText: "Il \"cane-utile\" era valutato per le sue prestazioni lavorative; il \"cane-pet\" è valutato per la sua capacità di dare e ricevere affetto."
            },
            {
              id: 2,
              questionText: "Elenca due dei ruoli \"sostitutivi\" che il cane-pet assume nella famiglia.",
              answerText: "Due ruoli sono: surrogato di un figlio a cui dare cure e quello di base sicura a cui chiedere conferme affettive."
            },
            {
              id: 3,
              questionText: "Cosa richiede in più al cane il modello del \"cane-compagno\" rispetto a quello del \"cane-pet\"?",
              answerText: "Richiede doti di adattamento, integrazione, autocontrollo e resilienza molto più accentuate e complesse."
            }
          ]
        }
      },
      {
        id: 3,
        title: "Ruolo e Statuto, la Contraddizione Urbana",
        objective: "Analizzare il posizionamento del cane nella società contemporanea attraverso i concetti di \"ruolo\" e \"statuto\", per comprendere la contraddizione fondamentale del nostro rapporto con lui.",
        lessons: [
          {
            id: "3.1",
            title: "Definizione di Ruolo e Statuto",
            points: [
              "Per valutare l'inserimento del cane nella società si usano due parametri:",
              "Ruolo: Il tipo di integrazione sociale, i compiti assegnati e l'importanza attribuita al cane.",
              "Statuto: La considerazione morale, i diritti assegnati e i limiti che l'uomo si pone nei suoi confronti."
            ]
          },
          {
            id: "3.2",
            title: "La Metamorfosi e la Contraddizione",
            points: [
              "Nella società rurale: il cane aveva un alto ruolo (era fondamentale per le attività umane) ma un basso statuto (era spesso trattato come uno strumento).",
              "Nella società urbana: il cane ha un basso ruolo (ha perso la sua importanza performativa) ma un alto statuto (è riconosciuto come soggetto, con diritti e attenzioni).",
              "Questa è la grande contraddizione: una svalutazione del suo significato pratico, unita a un maggior bisogno di risorse per realizzare gli obiettivi di tutela e riconoscimento che il suo nuovo statuto impone."
            ]
          },
          {
            id: "3.3",
            title: "Le Due Forme di Maltrattamento",
            points: [
              "Il rapporto strumentale della società rurale portava a un maltrattamento di tipo fisico.",
              "Il rapporto surrogatorio della società urbana, mascherato da amorevoli premure, porta a un maltrattamento più sotterraneo, di tipo psicologico."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 3",
          questions: [
            {
              id: 1,
              questionText: "Spiega la differenza tra \"ruolo\" e \"statuto\" del cane.",
              answerText: "Il ruolo riguarda l'importanza pratica e i compiti del cane nella società. Lo statuto riguarda la sua considerazione morale e i diritti che gli vengono riconosciuti."
            },
            {
              id: 2,
              questionText: "Descrivi la principale contraddizione del rapporto con il cane nella società urbana.",
              answerText: "Il cane ha perso la sua importanza pratica (basso ruolo), ma allo stesso tempo gli viene riconosciuta una maggiore dignità e importanza morale (alto statuto), creando un conflitto tra la svalutazione del suo contributo e le crescenti esigenze di tutela."
            },
            {
              id: 3,
              questionText: "In che modo il rapporto tipico della società urbana può essere considerato una forma di \"maltrattamento psicologico\"?",
              answerText: "Perché, negando la specificità e la diversità del cane (antropomorfismo), lo si costringe in ruoli surrogatori che non gli appartengono, privandolo della possibilità di esprimere i suoi talenti naturali e la sua vera identità."
            }
          ]
        }
      },
      {
        id: 4,
        title: "Gli Ostacoli a una Relazione Autentica",
        objective: "Riconoscere i tre principali ostacoli culturali (banalizzazione, pietismo, iconomorfismo) che impediscono lo sviluppo di una relazione sana e consapevole con il cane.",
        lessons: [
          {
            id: "4.1",
            title: "I Tre Ostacoli della Cultura Urbana",
            points: [
              "La cultura urbana, pur con buone intenzioni, pone tre grandi ostacoli a una relazione corretta:",
              "Banalizzazione: Una visione spontaneista e superficiale che impedisce un approccio di umiltà e un reale interesse a capire il cane. Porta a non sentire la necessità di una consulenza professionale.",
              "Pietismo: Considerare il cane un'entità minore, sfortunata, solo da tutelare. Questo impedisce un rapporto di reciprocità e favorisce atteggiamenti paternalistici e morbosità.",
              "Iconomorfismo: Relazionarsi a un'immagine stereotipata del cane (mediata da film, cartoni, etc.) invece che all'animale reale. Questo crea una falsa apparenza di conoscenza e può portare a pregiudizi."
            ]
          },
          {
            id: "4.2",
            title: "La Negazione del Cane",
            points: [
              "Questi tre ostacoli, uniti alla tendenza antropomorfica, portano alla negazione del cane nelle sue caratteristiche autentiche.",
              "L'antropomorfismo non consiste nel riconoscere tratti comuni (come provare emozioni), ma nel pretendere che il cane ragioni, comunichi e si interessi alle stesse cose di un essere umano."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 4",
          questions: [
            {
              id: 1,
              questionText: "Definisci brevemente i tre ostacoli culturali: banalizzazione, pietismo e iconomorfismo.",
              answerText: "Banalizzazione: approccio superficiale che impedisce di approfondire la conoscenza. Pietismo: considerare il cane un essere inferiore solo da tutelare, impedendo la reciprocità. Iconomorfismo: relazionarsi a un'immagine stereotipata del cane anziché all'animale reale."
            },
            {
              id: 2,
              questionText: "Perché il pietismo è dannoso per la relazione con il cane?",
              answerText: "Perché impedisce una relazione basata sulla reciprocità e sulla collaborazione, relegando il cane a un ruolo passivo e infantile che contrasta con la sua natura sociale."
            },
            {
              id: 3,
              questionText: "Spiega la differenza tra \"riconoscere connotati condivisi\" e \"antropomorfismo\".",
              answerText: "\"Riconoscere connotati condivisi\" significa accettare che, in quanto mammiferi, abbiamo tratti in comune (es. il gioco, le emozioni di base). L'\"antropomorfismo\" è la pretesa che il cane ragioni, comunichi e abbia gli stessi interessi e la stessa struttura sociale dell'uomo, negandone la diversità."
            }
          ]
        }
      },
      {
        id: 5,
        title: "L'Esigenza dell'Educazione Cinofila",
        objective: "Comprendere perché le trasformazioni e le criticità del rapporto moderno rendano indispensabile un percorso di \"educazione alla relazione\", che è il vero focus dell'educazione cinofila.",
        lessons: [
          {
            id: "5.1",
            title: "Il Concetto del \"Cane Liquido\"",
            points: [
              "La tendenza moderna è quella di volere un \"cane liquido\", svuotato dei suoi contenuti intrinseci per fargli assumere l'identità che il contesto o il proprietario gli impone.",
              "Questa pretesa di conformità totale, che ignora le resistenze e i bisogni propri del cane, è una delle forme più grandi di maltrattamento contemporaneo.",
              "Il cane non è un'entità liquida; una relazione adeguata deve mediare tra le esigenze umane e le caratteristiche etologiche del cane, non azzerare queste ultime."
            ]
          },
          {
            id: "5.2",
            title: "L'Educazione alla Relazione",
            points: [
              "Di fronte alle criticità e alle opportunità del rapporto moderno, emerge l'importanza di un'\"educazione alla relazione\".",
              "L'educazione cinofila non è (solo) educazione del cane, ma un'educazione relazionale che si ripercuote indirettamente sia sul cane che sul proprietario.",
              "Il focus è sulla relazione, specialmente nel primo anno di vita, perché questa influenza in modo decisivo la traiettoria evolutiva del cucciolo.",
              "Il vero educatore del cane è chi vive quotidianamente con lui; l'educatore cinofilo è colui che indirizza la relazione per dare, indirettamente, un indirizzo al processo formativo del cucciolo."
            ]
          }
        ],
        exam: {
          title: "Esame Finale - Modulo 5",
          questions: [
            {
              id: 1,
              questionText: "Cosa si intende con la metafora del \"cane liquido\"?",
              answerText: "È l'idea che il cane sia un contenitore vuoto, privo di contenuti propri, che possa essere modellato per conformarsi perfettamente ai desideri e allo stile di vita del proprietario."
            },
            {
              id: 2,
              questionText: "Qual è, secondo il testo, il vero focus dell'educazione cinofila?",
              answerText: "Il vero focus non è l'educazione del cane, ma l'educazione alla relazione. L'intervento è sulla relazione, che a sua volta influenza lo sviluppo del cane e il comportamento del proprietario."
            },
            {
              id: 3,
              questionText: "Spiega la frase: \"il vero educatore del cane resta, a tutti gli effetti, chi vive quotidianamente con il cucciolo\".",
              answerText: "Significa che l'influenza più profonda e costante sulla formazione del cane non viene dall'educatore professionista, ma dalla persona (il proprietario) che condivide la quotidianità con il cane e che, con le sue azioni e interazioni, ne modella l'identità giorno dopo giorno."
            }
          ]
        }
      }
    ],
    glossary: [
        { term: "Metamorfosi", definition: "Trasformazione profonda e significativa; nel testo, si riferisce ai cambiamenti nel modo di concepire il ruolo del cane nella relazione umana." },
        { term: "Sodalizio fondativo", definition: "Un'alleanza molto antica e fondamentale, in questo contesto, l'alleanza tra uomo e cane che risale a decine di migliaia di anni fa." },
        { term: "Cane-utile", definition: "Concezione del cane prevalente nella cultura rurale, dove la sua presenza era legata principalmente a funzioni ausiliarie e prestazioni specifiche (caccia, guardia, pastorizia)." },
        { term: "Cane-pet", definition: "Concezione del cane emersa con la cultura urbana, dove è ricercato principalmente per la compagnia e l'affetto, integrato nella dimensione domestica." },
        { term: "Cane-compagno", definition: "Concezione più recente (fine anni '90, XXI secolo) in cui il cane accompagna la persona in tutte le dimensioni della vita (privata e pubblica), con un rapporto più paritetico e basato sulla convergenza." },
        { term: "Relazione affiliativa", definition: "Relazione che comporta l'integrazione del cane nel nucleo familiare, con condivisione degli spazi e delle abitudini intime." },
        { term: "Antropomorfismo", definition: "L'attribuzione di caratteristiche, comportamenti o sentimenti umani agli animali; nel testo, è visto come un ostacolo alla comprensione della specificità del cane." },
        { term: "Proiettività", definition: "La tendenza a proiettare sul cane le proprie disposizioni, aspettative o interpretazioni umane, ignorando le sue reali caratteristiche." },
        { term: "Ruolo", definition: "Il tipo di integrazione sociale del cane, i compiti assegnati, il grado di importanza attribuito e le risorse investite." },
        { term: "Statuto", definition: "Il tipo di considerazione e le attenzioni tributate al cane, la rilevanza morale delle azioni condotte verso di lui e i diritti riconosciutigli." },
        { term: "Reificatorio/Strumentale", definition: "Relazione in cui il cane è visto come un oggetto o uno strumento, privo di soggettività." },
        { term: "Surrogatorio", definition: "Relazione in cui il cane va a sostituire relazioni umane mancanti, perdendo le sue caratteristiche autentiche." },
        { term: "Pietismo", definition: "Un atteggiamento di compassione eccessiva che considera il cane un'entità minore, sfortunata, solo da tutelare, e incapace di reciprocazione, portando a una relazione sbilanciata." },
        { term: "Iconomorfismo", definition: "Una visione del cane basata su immagini, stereotipi, semplificazioni o modelli mediati dalla cultura e dai mass media, piuttosto che sulla conoscenza diretta e concreta." },
        { term: "Banalizzazione", definition: "La tendenza a sottovalutare la complessità della relazione e le esigenze specifiche del cane, spesso dovuta a ignoranza o pretesa di trasformarlo a propria immagine." },
        { term: "Cane liquido", definition: "Un concetto che descrive la pretesa di svuotare il cane dei suoi contenuti intrinseci per fargli assumere l'identità espressiva imposta dal contesto o dai desideri umani." },
        { term: "Educazione cinofila", definition: "Nel contesto del testo, si riferisce all'educazione della relazione tra uomo e cane, focalizzata sulla comprensione delle esigenze del cane e la costruzione di un rapporto equilibrato." },
        { term: "Etologia", definition: "La scienza che studia il comportamento animale nel suo ambiente naturale; il testo ne sottolinea l'importanza per comprendere le caratteristiche specie-specifiche del cane." },
        { term: "Zooantropologia", definition: "Disciplina che studia la relazione tra l'essere umano e gli altri animali, inclusa la sua evoluzione e le sue dinamiche." },
        { term: "Identità individuale", definition: "Il modo specifico in cui un cane esprime la sua natura di specie attraverso l'esperienza e l'educazione, non un allontanamento dal suo profilo specie-specifico." }
    ]
  },
  {
    id: 2,
    title: "La formazione",
    subtitle: "La Quotidianità come Palestra",
    modules: [
      {
        id: 1,
        title: "La Scuola della Vita, l'Apprendimento nella Quotidianità",
        objective: "Comprendere il principio fondamentale che la formazione del cane non avviene primariamente durante gli esercizi, ma è un processo continuo che si svolge nella vita di tutti i giorni.",
        lessons: [
          {
            id: "1.1",
            title: "La Risposta Fondamentale",
            points: [
              "Alla domanda \"in quali occasioni il cane impara con più facilità?\", la risposta è semplice: il cane apprende soprattutto nella quotidianità.",
              "Il suo apparato cognitivo è conformato per adattare il suo profilo di specie (l'innato) alle effettive condizioni ambientali, sociali e situazionali in cui si trova a vivere."
            ]
          },
          {
            id: "1.2",
            title: "L'Innato come Materiale di Costruzione",
            points: [
              "Il cucciolo non nasce come un'entità già finita, ma con delle disposizioni innate che sono come un \"materiale di costruzione\" o una \"lastra di marmo\".",
              "Questa \"materia prima\" viene organizzata e modellata giorno dopo giorno in un profilo identitario unico, a seconda delle esposizioni e delle esperienze che il cane vive.",
              "La quotidianità è importante perché agisce continuamente sul carattere del cane attraverso la ripetizione e offrendo un contesto di applicazione pratica all'apprendimento."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 1",
          questions: [
            { id: 1, questionText: "Qual è il luogo e il tempo principale in cui un cane apprende?", answerText: "Il cane apprende soprattutto nella quotidianità, nella sua vita di tutti i giorni." },
            { id: 2, questionText: "Spiega la metafora della \"lastra di marmo\" usata per descrivere l'innato.", answerText: "Significa che il patrimonio innato del cane non è una statua già finita, ma un blocco di marmo grezzo che l'esperienza quotidiana scolpisce, dando vita a un'identità individuale unica e irripetibile." },
            { id: 3, questionText: "In quali tre modi principali l'esperienza quotidiana agisce sulle dotazioni comportamentali del cane?", answerText: "I tre modi sono: 1) facendo crescere i tratti più stimolati dal contesto; 2) associando diverse dotazioni in base al loro successo e al piacere che procurano; 3) costruendo nuove conoscenze a partire da quelle già possedute." }
          ]
        }
      },
      {
        id: 2,
        title: "La Relazione Speciale, la Predisposizione del Cane all'Uomo",
        objective: "Capire perché il cane sia un animale unico, dotato di caratteristiche ereditarie che lo predispongono in modo speciale a costruire una relazione e a imparare dall'essere umano.",
        lessons: [
          {
            id: "2.1",
            title: "Cane vs. Lupo, Differenze Innate",
            points: [
              "Anche se allevati in condizioni identiche, cani e lupi mostrano notevoli differenze nel rapporto con l'uomo, suggerendo una base genetica.",
              "Rispetto al lupo, il cane ha una maggiore tendenza a:",
              "Cercare lo sguardo dell'uomo.",
              "Seguire le indicazioni fornite da una persona.",
              "Condividere un oggetto con l'uomo piuttosto che con un conspecifico.",
              "Osservare il volto delle persone e riconoscerne gli stati emozionali.",
              "Richiedere l'aiuto della persona nelle situazioni di difficoltà."
            ]
          },
          {
            id: "2.2",
            title: "Tratti Condivisi che Facilitano l'Incontro",
            points: [
              "Oltre alle differenze, ci sono fattori che facilitano l'incontro tra cane e uomo:",
              "Entrambi hanno caratteristiche sociali compatibili.",
              "Entrambi hanno una forte connotazione parentale e una predisposizione a dare cure.",
              "Entrambi hanno una predisposizione ai comportamenti cooperativi e al lavoro di gruppo.",
              "Per questi motivi, il cane che vive con noi è portato a costruire una relazione con l'uomo che supera quella con i suoi conspecifici."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 2",
          questions: [
            { id: 1, questionText: "Elenca tre differenze comportamentali innate tra cane e lupo nel rapporto con l'uomo.", answerText: "Tre differenze sono: la tendenza del cane a cercare lo sguardo umano, la sua capacità di seguire le indicazioni umane e la sua maggiore disponibilità a condividere oggetti con l'uomo." },
            { id: 2, questionText: "Qual è uno degli aspetti sociali che uomo e cane hanno in comune e che facilita la loro relazione?", answerText: "La predisposizione ai comportamenti cooperativi, al lavoro di gruppo e alla concertazione operativa." },
            { id: 3, questionText: "Cosa dimostrano gli studi comparati tra cani e lupi allevati in modo simile?", answerText: "Dimostrano che esistono differenze significative e innate tra le due specie, e che la disponibilità del cane a costruire un rapporto con l'essere umano ha una forte base genetica." }
          ]
        }
      },
      {
        id: 3,
        title: "I Fattori d'Influenza (Parte 1): Vicinanza, Condivisione e Ricompense",
        objective: "Analizzare i primi e più diretti fattori relazionali che influenzano la formazione del cucciolo, legati all'affetto, alle attività e ai premi.",
        lessons: [
          {
            id: "3.1",
            title: "La Vicinanza",
            points: [
              "Il grado di vicinanza (tempo trascorso insieme, contatto fisico, intimità) è un fattore di influenza potentissimo.",
              "Può essere benefica, ma rischia di diventare morbosità ansiogena se la relazione è troppo chiusa, inattiva o se la persona ha un eccessivo bisogno di conferme affettive.",
              "Una scarsa vicinanza, d'altro canto, riduce l'influenza del proprietario, lasciando più spazio ad altri fattori come l'ambiente o le propensioni innate del cane."
            ]
          },
          {
            id: "3.2",
            title: "La Condivisione",
            points: [
              "La condivisione riguarda le attività fatte insieme e il livello di coinvolgimento reciproco.",
              "È un parametro complementare alla vicinanza, utile per evitare la morbosità.",
              "Una condivisione è ricca e adeguata quando è in linea con i talenti e i bisogni del cane. Una condivisione povera (poche attività ripetitive) o inadeguata (non in linea con le doti del cane) crea problemi."
            ]
          },
          {
            id: "3.3",
            title: "Le Ricompense",
            points: [
              "Molte abitudini del cane sono il frutto di ricompense, consapevoli o meno, che gli abbiamo dato.",
              "Le ricompense non sono solo il bocconcino, ma anche la carezza, il \"bravo!\", il dare attenzione, l'oggetto di scambio (giocattolo) o l'ossetto.",
              "L'efficacia di una ricompensa non è assoluta, ma dipende dalle caratteristiche del cane, dal non essere stata \"inflazionata\", dalla situazione specifica e dall'obiettivo che si vuole raggiungere."
            ]
          }
        ],
        exam: {
            title: "Esame di Preparazione - Modulo 3",
            questions: [
                { id: 1, questionText: "In quali casi la \"vicinanza\" rischia di diventare \"morbosità\"?", answerText: "Quando la relazione è chiusa, inattiva e basata solo sull'intimità domestica, o quando la persona ha un forte bisogno di ricevere conferme affettive dal cane." },
                { id: 2, questionText: "Qual è la differenza tra \"vicinanza\" e \"condivisione\"?", answerText: "La vicinanza si riferisce al contatto e al tempo passato insieme, anche in modo passivo. La condivisione si riferisce specificamente al fare attività piacevoli insieme, con un coinvolgimento reciproco attivo." },
                { id: 3, questionText: "Oltre al bocconcino, elenca altri tre tipi di ricompensa.", answerText: "Tre altri tipi di ricompensa sono: la carezza (conferma sociale), il \"bravo!\" (conferma sociale) e un giocattolo (oggetto di scambio sociale)." }
            ]
        }
      },
      {
        id: 4,
        title: "I Fattori d'Influenza (Parte 2): Abitudini, Sicurezza e Regole",
        objective: "Esaminare i fattori relazionali che strutturano l'ambiente di vita del cane, creando prevedibilità, sicurezza e confini chiari.",
        lessons: [
            {
                id: "4.1",
                title: "Le Abitudini",
                points: [
                    "Il cane è un animale abitudinario e si plasma sulle consuetudini della famiglia, che includono orari, attività specifiche, modalità di svolgimento e percorsi.",
                    "Le abitudini scandiscono la vita del cane, gli forniscono indicazioni chiare e creano rituali e aspettative."
                ]
            },
            {
                id: "4.2",
                title: "Il Senso di Sicurezza",
                points: [
                    "Il proprietario è per il cane un punto di riferimento, una zona di conforto e una base sicura.",
                    "Dare sicurezza significa prima di tutto essere coerenti e affidabili, mostrando al cane di potersi prendere cura di lui e di essere in grado di risolvere i problemi del mondo.",
                    "Un solido senso di sicurezza favorisce l'equilibrio, l'esplorazione, la socievolezza e la resilienza del cane."
                ]
            },
            {
                id: "4.3",
                title: "Le Regole",
                points: [
                    "Ogni rapporto si fonda su un tacito accordo di regole, ovvero di aperture e chiusure che incentivano o disincentivano certi comportamenti.",
                    "L'approccio corretto è invertire la tendenza comune: bisogna dare attenzione e premiare i comportamenti giusti, e non concentrarsi solo sullo sgridare quelli sgraditi.",
                    "Per gestire i comportamenti problematici, la prevenzione (es. togliere oggetti che non deve mordere) e le chiusure adeguate (es. interposizione, anticipazione) sono più efficaci delle punizioni dirette."
                ]
            }
        ],
        exam: {
            title: "Esame di Preparazione - Modulo 4",
            questions: [
                { id: 1, questionText: "In che modo le abitudini familiari influenzano la formazione del cane?", answerText: "Il cane, essendo abitudinario, si plasma completamente su di esse. Le abitudini scandiscono la sua giornata, creano aspettative e definiscono cosa è concesso e cosa no, strutturando i suoi comportamenti." },
                { id: 2, questionText: "Quali sono i due aspetti fondamentali per infondere sicurezza in un cane?", answerText: "Mostrare al cane che ci si prende cura di lui e che si è in grado di risolvere con fermezza ed efficacia i problemi del mondo." },
                { id: 3, questionText: "Qual è l'errore più comune che le persone fanno nell'applicare le regole?", answerText: "Ignorare e dare per scontati i comportamenti corretti e, al contrario, dare attenzione (anche se negativa, sgridando) solo ai comportamenti che non piacciono." }
            ]
        }
      },
      {
        id: 5,
        title: "I Fattori d'Influenza (Parte 3): Gioco e Struttura della Relazione",
        objective: "Analizzare il ruolo formativo del gioco e della struttura complessiva della relazione, sintetizzando come tutti i fattori interagiscano nel definire l'identità del cane.",
        lessons: [
            {
                id: "5.1",
                title: "Il Gioco come Dimensione Formativa",
                points: [
                    "Il gioco non è un semplice passatempo, ma la vera dimensione di apprendimento per ogni cucciolo di mammifero.",
                    "È fondamentale, perché è proprio giocando che il cucciolo imposta il proprio carattere, le tendenze espressive e il modo di relazionarsi.",
                    "A seconda di come si gioca, di quali giochi si fanno e con quali oggetti, si daranno al cane indirizzi di crescita molto specifici."
                ]
            },
            {
                id: "5.2",
                title: "La Struttura della Relazione",
                points: [
                    "Questo aspetto riassume tutti gli altri e riguarda i \"termini\" del rapporto. Si valuta attraverso:",
                    "L'adeguatezza della relazione: valuta la congruità, la consapevolezza, l'equilibrio e la responsabilità del proprietario.",
                    "Le dimensioni di relazione: analizza i ruoli che cane e persona si scambiano (es. genitore-figlio, compagni di gioco) e le attività prevalenti.",
                    "I momenti clou: i rituali come il pasto, il ricongiungimento e la passeggiata, che hanno un impatto educativo fortissimo.",
                    "Una relazione ben bilanciata, che esplora più dimensioni e non si chiude in un unico ruolo, è fondamentale per una crescita sana."
                ]
            }
        ],
        exam: {
            title: "Esame Finale - Modulo 5",
            questions: [
                { id: 1, questionText: "Perché il gioco è definito la \"vera dimensione di apprendimento\"?", answerText: "Perché è attraverso il gioco che il cucciolo imposta il proprio carattere, impara le modalità di comportamento e il modo di relazionarsi con gli altri." },
                { id: 2, questionText: "Elenca due dei quattro parametri di \"adeguatezza\" di una relazione.", answerText: "Due parametri sono: la congruità (rispettare la diversità del cane) e la responsabilità (assumersi il carico dell'adozione)." },
                { id: 3, questionText: "Cosa si intende per \"relazione sbilanciata\"?", answerText: "È una relazione dove prevalgono poche o una sola \"dimensione\" (es. solo coccole, o solo gioco), chiudendo il cane in un unico ruolo e impedendogli di esprimere la sua complessità." }
            ]
        }
      }
    ],
    glossary: [
        { term: "Neocorteccia", definition: "Un'area altamente sviluppata del cervello dei mammiferi, fondamentale per l'apprendimento e l'adattamento alle condizioni ambientali." },
        { term: "Apprendimento nella quotidianità", definition: "Il concetto secondo cui il cane apprende principalmente attraverso le esperienze e le interazioni che avvengono regolarmente nella sua vita di tutti i giorni." },
        { term: "Profilo di specie", definition: "L'insieme delle caratteristiche innate e genetiche che rendono un cane riconoscibile come appartenente alla sua specie." },
        { term: "Dotazioni innate", definition: "Le predisposizioni comportamentali con cui un cane nasce, suddivise in disposizioni (ciò che muove) e cognizioni (strumenti di interazione)." },
        { term: "Esposizioni", definition: "Gli eventi che accadono intorno al cane e il livello di stimolazioni che riceve, influenzando la sua formazione." },
        { term: "Esperienze", definition: "L'interazione attiva del cane con la realtà esterna, che contribuisce a plasmare il suo profilo identitario." },
        { term: "Consuetudine", definition: "Le abitudini e i rituali che si ripetono nella quotidianità del cane, agendo sulla sua mente attraverso la ripetizione e l'applicazione pratica." },
        { term: "Periodo ad alta sensibilità (Primo anno di vita)", definition: "Una fase cruciale nella vita del cane in cui le influenze del contesto agiscono in modo particolarmente incisivo sul suo carattere." },
        { term: "Rotta comportamentale", definition: "La direzione definita dalle disposizioni e cognizioni innate del cane nella realtà esterna, che viene corretta in base ai risultati ricevuti." },
        { term: "Crescita differenziale", definition: "Il processo per cui le disposizioni innate si sviluppano in modo diverso a seconda del principio di attivazione." },
        { term: "Specificazione modale", definition: "Il processo per cui le disposizioni innate si indirizzano verso specifici target (es. verso quali target è diretto il predatorio)." },
        { term: "Processi di accomodamento", definition: "Le trasformazioni delle cognizioni innate per migliorare la loro efficacia adattativa." },
        { term: "Caratteristiche ereditarie/Genetiche", definition: "Connotati del cane che non fanno parte del bagaglio esperienziale individuale, ma sono innati." },
        { term: "Neotenia", definition: "Mantenimento di tratti giovanili in età adulta." },
        { term: "Docilità", definition: "Propensione all'addestramento e all'interazione amichevole con l'uomo." },
        { term: "Vicino/Vicinanza", definition: "Aspetti della relazione tra proprietario e cane che creano contatto piacevole che persiste nel tempo (es. carezze, stare vicini), distinguendola dalla morbosità." },
        { term: "Condivisione", definition: "L'atto di svolgere attività piacevoli insieme al cane, promuovendo il reciproco coinvolgimento e l'affiliazione." },
        { term: "Ricompense", definition: "Elementi che producono piacere e soddisfazione nel cane, utilizzati per premiare comportamenti specifici (es. bocconcino, carezza, attenzione)." },
        { term: "Abitudini", definition: "I riti e le consuetudini che si svolgono nella quotidianità, scandendo la giornata del cane e stabilendo aspettative." },
        { term: "Senso di sicurezza", definition: "La condizione in cui il cane si sente a proprio agio e protetto in presenza del proprietario, che agisce come punto di riferimento, zona di conforto e base sicura." },
        { term: "Incoerenza del comportamento del proprietario", definition: "Mancanza di prevedibilità nelle azioni del proprietario, che genera precarietà e stress nel cane." },
        { term: "Accreditamento", definition: "Il processo per cui il cane considera il proprietario in grado di risolvere determinate situazioni, portandolo ad affidarsi a lui." },
        { term: "Regole", definition: "Le aperture e le chiusure che il proprietario instaura nel ménage quotidiano, incentivando o disincentivando certi comportamenti nel cane." },
        { term: "Prevenzione (nel contesto delle regole)", definition: "Agire in anticipo per evitare che il cane metta in atto comportamenti indesiderati, mettendo in ombra il comportamento problema e accendendo l'attenzione su altro." },
        { term: "Interventi di chiusura", definition: "Strategie attive per interrompere o reindirizzare un comportamento indesiderato (es. anticipazione, splitting, prendere in carico)." },
        { term: "Gioco", definition: "Una dimensione fondamentale di apprendimento per il cucciolo, basata sull'interazione ludica, la finzione e il divertimento." },
        { term: "Cornice ludica", definition: "L'insieme delle tipologie e modalità di gioco, oggetti utilizzati e la struttura generale dell'interazione ludica tra cane e proprietario." },
        { term: "Adeguatezza della relazione", definition: "Come la relazione soddisfa le esigenze sia del cane che del proprietario, basata su congruità, consapevolezza, equilibrio e responsabilità." },
        { term: "Dimensioni di relazione", definition: "I diversi ruoli e tipi di attività condivise che compongono il rapporto tra cane e proprietario (es. epimeletica, ludica, collaborativa)." },
        { term: "Momenti clou della relazione", definition: "Periodi particolarmente importanti e influenti nella quotidianità del cane, in cui acquisisce norme comportamentali (es. alimentazione, passeggiata)." }
    ]
  },
  {
    id: 3,
    title: "L'educazione",
    subtitle: "Lavorare sulla Relazione",
    modules: [
      {
        id: 1,
        title: "Il Cuore dell'Educazione, la Relazione",
        objective: "Comprendere che l'educazione cinofila non è l'addestramento del singolo cane, ma un intervento sulla relazione tra il cane e il suo gruppo umano, con benefici per tutti i soggetti coinvolti.",
        lessons: [
          {
            id: "1.1",
            title: "Definire l'Educazione Cinofila",
            points: [
              "L'educazione cinofila può essere definita come un indirizzo della relazione tra l'essere umano e il cane.",
              "Il campo d'intervento dell'educatore è sempre la relazione.",
              "L'obiettivo è ottenere risultati migliorativi per tre entità:",
              "Il cane: riceve benefici adattativi e di maturazione.",
              "Il proprietario: vive meglio il rapporto, evitando problemi e delusioni.",
              "La relazione stessa: diventa più solida, equilibrata e congrua."
            ]
          },
          {
            id: "1.2",
            title: "Relazione Forte non è Dipendenza",
            points: [
              "Lavorare sulla relazione non significa accrescere la dipendenza del cane dal proprietario o rinchiuderlo in essa.",
              "Al contrario, l'educazione lavora per favorire lo sviluppo in pienezza dell'autonomia del cane e la sua capacità di avere relazioni sociali che vadano oltre quella con la persona.",
              "Una relazione è veramente forte se non c'è morbosità e se il cane matura la sua autonomia, senza cadere in stati di panico al più piccolo distacco."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 1",
          questions: [
            { id: 1, questionText: "Qual è il campo d'intervento principale dell'educatore cinofilo?", answerText: "Il campo d'intervento è sempre la relazione tra il cane e il suo gruppo umano." },
            { id: 2, questionText: "Chi sono i tre \"soggetti\" che beneficiano di un corretto intervento educativo?", answerText: "I tre soggetti sono: il cane, il proprietario e la relazione stessa." },
            { id: 3, questionText: "Una relazione forte, secondo il testo, si basa sulla dipendenza o sull'autonomia del cane?", answerText: "Si basa sull'autonomia. Una relazione forte è quella in cui il cane è sicuro e autonomo, non morbosamente dipendente." }
          ]
        }
      },
      {
        id: 2,
        title: "Gli Ambiti di Lavoro dell'Educatore",
        objective: "Comprendere che il lavoro dell'educatore non si limita a dare consigli, ma richiede un'analisi pratica e approfondita sia del cane che del suo contesto di vita.",
        lessons: [
          {
            id: "2.1",
            title: "Non solo Parole, non solo Azioni",
            points: [
              "Bisogna evitare due fraintendimenti sul ruolo dell'educatore:",
              "Non è un meccanico che \"mette a posto\" il cane: l'intervento educativo si realizza nella quotidianità del rapporto, non in poche sedute risolutive.",
              "Non si limita a dare consigli: il suo è un compito pratico che va oltre le semplici raccomandazioni."
            ]
          },
          {
            id: "2.2",
            title: "Valutare il Cane e il suo Mondo",
            points: [
              "L'educatore deve svolgere un'attenta valutazione che comprende:",
              "Il cucciolo: analizzando i suoi talenti e le sue fragilità, il livello di maturazione e il suo gradiente adattativo.",
              "Il contesto: valutando sia l'ambiente fisico che la sistemica familiare.",
              "Il mondo abituale del cane (spazi, situazioni, oggetti, abitudini, relazioni) è ciò che crea le condizioni espressive e ne incentiva certi comportamenti."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 2",
          questions: [
            { id: 1, questionText: "Spiega uno dei due \"fraintendimenti\" sul ruolo dell'educatore descritti nel testo.", answerText: "Un fraintendimento è credere che l'educatore \"mette a posto\" il cane come un meccanico, mentre il vero cambiamento avviene nella quotidianità. L'altro è pensare che si limiti a dare consigli, mentre il suo è un ruolo molto pratico." },
            { id: 2, questionText: "Quali sono i due grandi ambiti che un educatore deve valutare?", answerText: "I due ambiti sono: il cane stesso (talenti, maturazione, ecc.) e il contesto in cui vive (ambiente fisico e sistema familiare)." },
            { id: 3, questionText: "Perché è così importante analizzare il \"mondo abituale\" del cane?", answerText: "Perché è il mondo abituale, con i suoi spazi, le sue situazioni e le sue relazioni, che forma il cane, incentivando o meno certi comportamenti." }
          ]
        }
      },
      {
        id: 3,
        title: "Il Metodo della Triangolazione",
        objective: "Apprendere il metodo di lavoro pratico dell'educatore, che si basa su una \"relazione triangolativa\" tra educatore, cane e proprietario, seguendo un processo strutturato.",
        lessons: [
          {
            id: "3.1",
            title: "Cos'è la Relazione Triangolativa?",
            points: [
              "L'intervento pratico dell'educatore si manifesta in una relazione a tre che comprende l'educatore, il cane e il proprietario (la figura referenziale).",
              "L'educatore deve evitare di rivolgersi esclusivamente al cane e di creare un rapporto troppo stretto (non professionale) con il proprietario."
            ]
          },
          {
            id: "3.2",
            title: "Le Cinque Fasi dell'Attività di Triangolazione",
            points: [
              "Un'attività evolutiva si svolge tipicamente in cinque momenti:",
              "L'educatore crea confidenza e osserva la relazione tra cane e proprietario.",
              "L'educatore mostra al proprietario una particolare attività che realizza insieme al cane.",
              "L'educatore spiega al proprietario lo scopo dell'attività e le attenzioni da porre.",
              "Il proprietario prova a sua volta l'attività, con il supporto e le correzioni dell'educatore.",
              "Si definisce un obiettivo da raggiungere per l'incontro successivo.",
              "Questo processo richiede di costruire una forte compliance (alleanza, complicità) con il proprietario."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 3",
          questions: [
            { id: 1, questionText: "Chi sono i tre vertici della \"relazione triangolativa\"?", answerText: "I tre vertici sono: l'educatore cinofilo, il cane e il proprietario (figura referenziale)." },
            { id: 2, questionText: "Qual è il primo passo che compie l'educatore durante un'attività di triangolazione?", answerText: "Il primo passo è creare confidenza e osservare la dinamica relazionale che esiste tra cane e proprietario, senza intervenire." },
            { id: 3, questionText: "Perché è importante che sia il proprietario a provare l'esercizio?", answerText: "Perché l'intervento educativo si realizza nella quotidianità, ed è quindi il proprietario che deve acquisire le competenze pratiche per portare avanti il lavoro con il proprio cane." }
          ]
        }
      },
      {
        id: 4,
        title: "Essere Educatore, Qualità e Responsabilità",
        objective: "Comprendere le qualità umane e professionali e il senso di responsabilità che devono caratterizzare la figura dell'educatore cinofilo.",
        lessons: [
          {
            id: "4.1",
            title: "Le Qualità Intellettuali e Umane",
            points: [
              "L'educatore svolge un ruolo intellettuale che richiede qualità precise:",
              "Umiltà Socratica: il \"so di non sapere\", ovvero la consapevolezza della complessità della materia.",
              "Curiosità: il costante desiderio di approfondire e aggiornarsi.",
              "Apertura al confronto: evitare atteggiamenti dogmatici o settari.",
              "Fermezza: avere chiari i propri presupposti e portarli avanti con esempi concreti."
            ]
          },
          {
            id: "4.2",
            title: "L'Importanza dell'Esemplarità",
            points: [
              "L'educatore deve essere prima di tutto un modello. La sua trasmissione non passa tanto da ciò che dice, ma da ciò che fa e da come si relaziona.",
              "L'esemplarità si manifesta nello stile complessivo, nella capacità di ascolto e nelle buone maniere (es. raccogliere le deiezioni, prevenire situazioni problematiche)."
            ]
          },
          {
            id: "4.3",
            title: "La Responsabilità Professionale",
            points: [
              "L'educatore si assume la responsabilità del futuro del cane e della sua famiglia, lavorando con una cultura della prevenzione.",
              "Deve conoscere i propri limiti e costruire progetti su misura (\"come un sarto\"), non vendere modelli preconfezionati."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 4",
          questions: [
            { id: 1, questionText: "Spiega cosa si intende per \"umiltà socratica\" nel contesto di un educatore.", answerText: "Significa avere piena consapevolezza della complessità della materia e non dare nulla per scontato, mantenendo un atteggiamento di apertura e continua ricerca." },
            { id: 2, questionText: "Perché l'esemplarità (essere un modello) è così importante per un educatore?", answerText: "Perché la sua capacità di trasmettere concetti e valori dipende più dal suo comportamento e dalla sua coerenza che dalle sue parole. Non si può insegnare una relazione corretta se non si è i primi a incarnarla." },
            { id: 3, questionText: "Cosa significa lavorare con una \"cultura della prevenzione\"?", answerText: "Significa non attendere che un problema si manifesti, ma agire d'anticipo, vigilando sulla crescita del cucciolo e impostando la relazione in modo da prevenire future criticità." }
          ]
        }
      },
      {
        id: 5,
        title: "La Missione, Colmare la Distanza e Costruire un Rapporto Autentico",
        objective: "Sintetizzare il fine ultimo dell'educazione cinofila: aiutare proprietario e cane a costruire una relazione autentica, superando l'ignoranza e lo spontaneismo per valorizzare i talenti e colmare le lacune.",
        lessons: [
          {
            id: "5.1",
            title: "Colmare il \"Gap\" tra Uomo e Cane",
            points: [
              "Il compito dell'educatore è colmare il gap che separa la persona dal suo cane.",
              "Questo si fa aiutando il proprietario a scoprire il proprio cane in tre aspetti:",
              "Cosa significa in generale \"essere-cane\".",
              "Cosa significa la \"memoria genetica\" o tendenza di razza.",
              "Quali sono le caratteristiche specifiche del suo cane (talenti e fragilità)."
            ]
          },
          {
            id: "5.2",
            title: "L'Indirizzo Evolutivo Contro il Caos",
            points: [
              "Se lasciato a se stesso, lo sviluppo del cucciolo segue un'evoluzione \"caotica\", influenzata casualmente da ambiente, relazione e carattere.",
              "L'intervento dell'educatore trasforma questa condizione caotica in un indirizzo evolutivo, un percorso guidato verso obiettivi precisi.",
              "L'educazione consiste nel \"portare fuori\" (e-ducere) i talenti del cane, aiutandoli a germogliare e indirizzandoli nella giusta direzione."
            ]
          },
          {
            id: "5.3",
            title: "La Relazione Autentica",
            points: [
              "L'educazione non toglie spontaneità, ma la arricchisce e le dà autenticità, perché la rende biunivoca, ovvero di beneficio anche per il cane.",
              "Lo spontaneismo, al contrario, non aiuta: trasforma le doti in manie, non corregge gli errori del proprietario e non predispone un ambiente adeguato.",
              "L'educatore è quindi un consulente che aiuta a costruire questa relazione autentica, basata sulla conoscenza e sul rispetto reciproco."
            ]
          }
        ],
        exam: {
          title: "Esame Finale - Modulo 5",
          questions: [
            { id: 1, questionText: "Quali sono i tre livelli di conoscenza che l'educatore deve aiutare il proprietario a scoprire nel suo cane?", answerText: "I tre livelli sono: 1) le caratteristiche della specie \"cane\"; 2) le tendenze della sua razza specifica; 3) le caratteristiche uniche di quell'individuo (talenti e fragilità)." },
            { id: 2, questionText: "Spiega la differenza tra uno sviluppo \"caotico\" e un \"indirizzo evolutivo\".", answerText: "Uno sviluppo caotico è guidato dal caso e dalle prevalenze non indirizzate. Un indirizzo evolutivo è un percorso guidato consapevolmente verso obiettivi educativi precisi." },
            { id: 3, questionText: "Perché la spontaneità non è sufficiente a costruire una relazione autentica?", answerText: "Perché lo spontaneismo tende a far emergere e a rinforzare gli sbilanciamenti già presenti, trasformando i talenti in problemi e non correggendo gli errori relazionali del proprietario. Una relazione autentica richiede invece consapevolezza e un lavoro di indirizzo." }
          ]
        }
      }
    ],
    glossary: [
      { term: "Educazione cinofila", definition: "Un intervento che indirizza la relazione tra cane e proprietario per ottenere benefici per entrambi e per la relazione stessa." },
      { term: "Relazione", definition: "Il legame tra il cane e il suo gruppo umano, che è il campo d'intervento principale dell'educazione." },
      { term: "Autonomia", definition: "La capacità del cane di essere indipendente e sicuro, senza dipendenza morbosa dal proprietario. Una relazione forte la promuove." },
      { term: "Morbosità", definition: "Una dipendenza eccessiva e ansiosa del cane dal proprietario, che una buona educazione mira a prevenire." },
      { term: "Contesto", definition: "L'ambiente fisico e sociale (spazi, situazioni, abitudini, famiglia) in cui vive il cane, che ne influenza profondamente il comportamento." },
      { term: "Relazione Triangolativa", definition: "Il metodo di lavoro pratico dell'educatore, che coinvolge attivamente l'educatore, il cane e il proprietario per raggiungere obiettivi comuni." },
      { term: "Compliance", definition: "L'alleanza e la complicità che l'educatore deve costruire con il proprietario per garantire il successo dell'intervento educativo." },
      { term: "Umiltà Socratica", definition: "La consapevolezza da parte dell'educatore della complessità della materia, che porta a un approccio di continua ricerca e apertura (\"so di non sapere\")." },
      { term: "Esemplarità", definition: "La qualità fondamentale dell'educatore di essere un modello coerente; la sua efficacia dipende più da ciò che fa che da ciò che dice." },
      { term: "Cultura della prevenzione", definition: "Un approccio proattivo che mira a impostare la relazione e la crescita del cucciolo in modo da prevenire l'insorgere di problemi futuri." },
      { term: "Indirizzo evolutivo", definition: "Il processo guidato e consapevole con cui l'educatore trasforma lo sviluppo \"caotico\" del cucciolo in un percorso mirato a valorizzarne i talenti." },
      { term: "e-ducere", definition: "Termine latino che significa \"portare fuori\", usato per descrivere il compito dell'educazione di far emergere e coltivare i talenti innati del cane." },
      { term: "Relazione Autentica", definition: "Un rapporto biunivoco, basato sulla conoscenza e sul rispetto reciproco, dove la spontaneità è arricchita dalla consapevolezza e porta beneficio anche per il cane." },
      { term: "Spontaneismo", definition: "Un approccio basato sulla sola spontaneità, che risulta insufficiente perché tende a rinforzare gli sbilanciamenti e non corregge gli errori relazionali." }
    ]
  },
  {
    id: 4,
    title: "Linee guida dell'educazione",
    subtitle: "Un Progetto per la Vita",
    modules: [
      {
        id: 1,
        title: "La Missione dell'Educatore Cinofilo",
        objective: "Comprendere che l'educazione cinofila moderna non è un semplice addestramento, ma un servizio di consulenza globale che mira a valorizzare la relazione e a far emergere la vera natura del cane.",
        lessons: [
          {
            id: "1.1",
            title: "Un Servizio di Consulenza Globale",
            points: [
              "L'educazione cinofila è definita come un servizio di consulenza globale finalizzata a valorizzare la relazione.",
              "Il suo compito è promuovere una corretta integrazione del cane nella società, partendo dal suo nucleo adottivo, le persone che ne hanno la responsabilità.",
              "L'educatore deve educare il cucciolo, ma allo stesso tempo educare il proprietario, per arrivare a una convergenza di stili che porti a un benessere condiviso."
            ]
          },
          {
            id: "1.2",
            title: "Far Emergere il Cane",
            points: [
              "Il primo obiettivo dell'educatore è far emergere il cane, cercando di portare in secondo piano le idee e le aspettative che le persone proiettano sull'animale.",
              "Il cane deve diventare per il proprietario un \"centro di interesse\", un \"prossimo\" che va capito nelle sue caratteristiche di soggettività e diversità.",
              "Questo non significa assecondare ogni sua manifestazione, ma partire dai suoi comportamenti naturali per impostare corrette prassi di relazione. Non si può negare la sua natura (es. predatoria), ma la si deve indirizzare su target adeguati."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 1",
          questions: [
            { id: 1, questionText: "Come viene definita l'educazione cinofila in questo capitolo?", answerText: "È definita come un servizio di consulenza globale finalizzata a valorizzare la relazione." },
            { id: 2, questionText: "Qual è il primo obiettivo dell'educatore secondo la lezione 1.2?", answerText: "È quello di far emergere il cane, aiutando il proprietario a vederlo per quello che è, al di là delle proprie proiezioni e aspettative." },
            { id: 3, questionText: "Perché l'educatore deve educare anche il proprietario?", answerText: "Perché solo arrivando a una convergenza di stili si può ottenere un benessere condiviso nello stare insieme." }
          ]
        }
      },
      {
        id: 2,
        title: "I Tre Principi Guida del Progetto Educativo",
        objective: "Imparare i tre principi fondamentali che devono guidare ogni progetto educativo, ponendo il cane al centro del processo in ogni sua fase.",
        lessons: [
          {
            id: "2.1",
            title: "Principio 1 - Il Cane come Punto di Partenza",
            points: [
              "Questo principio ci ricorda che bisogna sempre partire dalle caratteristiche del cane: la sua natura etologica, i suoi talenti di razza e le sue peculiarità individuali.",
              "L'educazione non deve partire dalle aspettative del proprietario, ma dai talenti, dai bisogni e dalle fragilità del cane."
            ]
          },
          {
            id: "2.2",
            title: "Principio 2 - Il Cane come Itinerario",
            points: [
              "Questo principio sottolinea l'importanza di considerare lo sviluppo del cucciolo come un percorso a tappe.",
              "Educare significa favorire e indirizzare questo processo di crescita, basandosi sui periodi di sensibilità dell'età evolutiva e sapendo che certe esperienze rappresentano appuntamenti fissi da rispettare."
            ]
          },
          {
            id: "2.3",
            title: "Principio 3 - Il Cane come Meta",
            points: [
              "Questo principio impone di considerare l'intero progetto educativo come un investimento per il futuro del cane.",
              "Mettere il cane al centro non significa assecondarlo, ma fortificare il suo carattere in una logica adattativa, predisponendo esperienze utili per lui."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 2",
          questions: [
            { id: 1, questionText: "Spiega con parole tue \"Il cane come punto di partenza\".", answerText: "Significa che ogni progetto educativo deve basarsi sulle reali caratteristiche etologiche, di razza e individuali del cane, e non sulle aspettative del proprietario." },
            { id: 2, questionText: "Cosa significa che l'educazione è un \"itinerario\"?", answerText: "Significa che lo sviluppo del cane è un percorso con tappe e periodi sensibili ben precisi, che l'educazione deve rispettare e guidare." },
            { id: 3, questionText: "Qual è lo scopo finale dell'educazione secondo il principio \"Il cane come meta\"?", answerText: "Lo scopo finale è fortificare il carattere del cane e dargli gli strumenti per un futuro di benessere, in una logica adattativa." }
          ]
        }
      },
      {
        id: 3,
        title: "Le Discipline dell'Educatore (Parte 1): Le Scienze Descrittive",
        objective: "Conoscere le principali discipline scientifiche e descrittive che forniscono all'educatore le conoscenze di base sul cane e sulla relazione.",
        lessons: [
          {
            id: "3.1",
            title: "Le Discipline per Conoscere il Cane",
            points: [
              "Etologia: Studia le caratteristiche comportamentali di una specie e ne definisce il catalogo espressivo (etogramma). Fornisce la \"carta d'identità\" del cane.",
              "Zootecnia: Studia le selezioni operate dall'uomo per ottenere specifiche prestazioni. È fondamentale per capire la \"memoria di razza\" e i talenti innati del cucciolo.",
              "Psicologia dell'Apprendimento: Studia come si sviluppa l'individuo attraverso l'esperienza, analizzando processi come l'attaccamento, la socializzazione e le modalità con cui il cane impara.",
              "Fisiologia: Studia i meccanismi corporei (ormonali, metabolici, neurobiologici) che sono alla base del comportamento e del benessere fisico."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 3",
          questions: [
            { id: 1, questionText: "Quale disciplina studia l'etogramma di una specie?", answerText: "L'etologia." },
            { id: 2, questionText: "Perché la zootecnia è importante per un educatore cinofilo?", answerText: "Perché permette di comprendere la \"memoria di razza\", ovvero i talenti e le propensioni innate che derivano dalla selezione artificiale operata dall'uomo." },
            { id: 3, questionText: "Di cosa si occupa la psicologia dell'apprendimento?", answerText: "Si occupa di come un individuo si sviluppa (ontogenesi) attraverso le esperienze, studiando i processi di attaccamento, socializzazione e le modalità di apprendimento." }
          ]
        }
      },
      {
        id: 4,
        title: "Le Discipline dell'Educatore (Parte 2): Le Scienze Prescrittive e Applicative",
        objective: "Conoscere le discipline che guidano l'educatore nella definizione degli obiettivi e nell'applicazione pratica del suo lavoro.",
        lessons: [
          {
            id: "4.1",
            title: "Le Discipline per Guidare l'Azione",
            points: [
              "Zooantropologia: Studia il rapporto tra l'uomo e le altre specie, analizzandone le specificità, le influenze reciproche e le diverse \"dimensioni di relazione\".",
              "Pedagogia: Non si occupa del come si impara, ma definisce gli obiettivi educativi, ovvero quale indirizzo si vuole dare allo sviluppo del cucciolo. I suoi due assi fondativi sono: \"valorizza i talenti\" e \"colma le lacune\".",
              "Bioetica: Studia i valori e le conseguenze morali della nostra condotta verso gli animali. Pone dei limiti all'azione, ricordando che il cane è un \"paziente morale\" senziente, portatore di interessi propri.",
              "Didattica: È la disciplina operativa, che si occupa delle metodologie di lavoro e dei modi per raggiungere gli obiettivi fissati dalla pedagogia. Studia il \"come apprendere\"."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 4",
          questions: [
            { id: 1, questionText: "Qual è l'oggetto di studio della zooantropologia?", answerText: "Studia il rapporto tra l'uomo e le altre specie, analizzando le specificità, le influenze reciproche e le dimensioni di tale relazione." },
            { id: 2, questionText: "Qual è la differenza tra pedagogia e didattica?", answerText: "La pedagogia definisce gli obiettivi dell'educazione (\"cosa\" si vuole raggiungere). La didattica studia i metodi per raggiungere quegli obiettivi (\"come\" si fa ad apprendere)." },
            { id: 3, questionText: "Perché la bioetica è importante nel lavoro di un educatore?", answerText: "Perché il cane è un essere senziente e un \"paziente morale\". La bioetica stabilisce i limiti etici alla nostra condotta, ricordandoci di rispettare la soggettività e il benessere dell'animale in ogni nostra azione." }
          ]
        }
      },
      {
        id: 5,
        title: "Approccio e Metodo, la Via Cognitiva",
        objective: "Comprendere la differenza tra un \"approccio\" interpretativo e un \"metodo\" applicativo, e conoscere i principi della didattica cognitiva, che mette il cane e i suoi moventi interni al centro del processo di apprendimento.",
        lessons: [
          {
            id: "5.1",
            title: "Approccio vs. Metodo",
            points: [
              "Approccio: È un modello interpretativo che cerca di spiegare un fenomeno (es. approccio behaviorista o cognitivo).",
              "Metodo: È il modo di lavorare che trasforma un approccio in linee guida applicative (es. metodo gentile)."
            ]
          },
          {
            id: "5.2",
            title: "Didattica Behaviorista vs. Didattica Cognitiva",
            points: [
              "Didattica Behaviorista: Si basa sul movente esterno. L'apprendimento è guidato da stimoli, esche e rinforzi che l'operatore fornisce dall'esterno per modellare un comportamento. Il soggetto è relativamente passivo.",
              "Didattica Cognitiva: Si basa sul movente interno. L'educatore lavora per attivare le componenti motivazionali ed emozionali del cane, rendendolo protagonista del suo apprendimento. Il rinforzo non è il motore, ma la conseguenza naturale della soluzione di un problema che il cane era motivato ad affrontare."
            ]
          },
          {
            id: "5.3",
            title: "La Didattica Cognitiva in Pratica",
            points: [
              "L'educatore che usa un approccio cognitivo:",
              "Crea un ingaggio motivazionale per attivare il cane.",
              "Attiva le emozioni positive (curiosità, interesse) per \"illuminare\" il campo esperienziale.",
              "Prepara un campo operativo con problemi e scacchi da risolvere.",
              "Lascia che sia il cane a trovare la soluzione, utilizzando le proprie doti e costruendo così le proprie conoscenze."
            ]
          }
        ],
        exam: {
          title: "Esame Finale - Modulo 5",
          questions: [
            { id: 1, questionText: "Qual è la differenza tra \"approccio\" e \"metodo\"?", answerText: "Un approccio è un modello teorico per interpretare un fenomeno. Un metodo è la traduzione pratica di quell'approccio in un modo di lavorare." },
            { id: 2, questionText: "Qual è la differenza fondamentale tra la didattica behaviorista e quella cognitiva?", answerText: "La didattica behaviorista si basa sul movente esterno (stimoli, rinforzi). La didattica cognitiva si basa sul movente interno (motivazioni ed emozioni del cane)." },
            { id: 3, questionText: "Nella didattica cognitiva, qual è il vero motore dell'apprendimento?", answerText: "Non è la ricompensa esterna, ma il coinvolgimento motivazionale ed emozionale del cane, che diventa protagonista del suo processo di apprendimento per risolvere uno scacco o raggiungere un obiettivo per lui significativo." }
          ]
        }
      }
    ],
    glossary: [
      { term: "Cultura Cinofila", definition: "Un insieme di conoscenze e pratiche necessarie per vivere con un cane, capace di rispondere ai suoi bisogni individuali e di razza e di trovare soluzioni integrate nella società." },
      { term: "Educatore Cinofilo", definition: "Una figura professionale il cui compito principale è promuovere una corretta integrazione del cane nella società, partendo dal nucleo adottivo, attraverso consulenze preadottive e post-adottive, valutazione della sistemica familiare e educazione del cucciolo." },
      { term: "Consulenza Globale", definition: "Un servizio offerto dall'educazione cinofila che va oltre il semplice addestramento del cane, mirato a valorizzare la relazione tra cane e proprietario e a fornire le giuste coordinate di gestione." },
      { term: "Far Emergere il Cane", definition: "L'obiettivo primario dell'educatore cinofilo di portare in primo piano la vera natura etologica del cane, superando le proiezioni umane, e di aiutarlo a costruire un incontro autentico e profondo con il proprietario." },
      { term: "Principi dell'Educazione Cinofila", definition: "I tre pilastri su cui si fonda l'educazione: il cane come punto di partenza (natura e talenti individuali), il cane come itinerario (adeguare esperienze all'età evolutiva) e il cane come meta (investimento per il futuro del cane)." },
      { term: "Cucciolo (Entità Evolutiva)", definition: "Descritto come virtuale (con forti potenzialità di sviluppo) e fragile (molto sensibile agli errori), sottolineando l'importanza delle esperienze giovanili per la strutturazione del carattere." },
      { term: "Discipline Descrittive (Scientifiche)", definition: "Discipline come l'etologia o la zooantropologia che si occupano di illustrare un fenomeno e spiegarne le cause in modo oggettivo, non influenzate da metodologie o valori." },
      { term: "Discipline Prescrittive", definition: "Discipline come la bioetica e la pedagogia che si occupano di definire obiettivi da raggiungere e valori da considerare, influenzando la condotta e le scelte." },
      { term: "Approccio", definition: "Un modello interpretativo che cerca di formalizzare un certo processo o di spiegare un fenomeno (es. approccio behaviorista, approccio cognitivo). Non è un metodo di lavoro, ma un modo di interpretare." },
      { term: "Metodo", definition: "Trasforma un modello interpretativo (approccio) in un modo di lavorare e in linee guida applicative, indicando le metodologie e le applicazioni pratiche." },
      { term: "Approccio Behaviorista", definition: "Un modello di interpretazione del comportamento animale e dei processi di apprendimento basato sul modello atomico associativo, che si concentra su stimoli esterni, risposte e rinforzi. La didattica behaviorista è basata sul movente esterno." },
      { term: "Approccio Cognitivo", definition: "Un modello di interpretazione del comportamento animale che considera la mente come un'entità sistemica che presiede e produce le istanze comportamentali, basato su un modello connessionista a schema. La didattica cognitiva si basa sul movente interno del cane." },
      { term: "Etologia", definition: "Disciplina che studia le caratteristiche comportamentali di una specie, fornendo il suo \"etogramma\" e basandosi sulla filogenesi e l'apprendimento innato e sociale." },
      { term: "Zootecnia", definition: "Disciplina che studia le selezioni operate dall'uomo sugli animali domestici per raggiungere risultati specifici, includendo la selezione artificiale delle razze basata su caratteristiche morfologiche e comportamentali." },
      { term: "Psicologia dell'Apprendimento", definition: "Disciplina che studia le caratteristiche delle fasi evolutive, i processi di formazione identitaria (attaccamento, socializzazione), i fattori contestuali che favoriscono l'apprendimento e le modalità di realizzazione dei processi di apprendimento nel cane." },
      { term: "Zooantropologia", definition: "Disciplina che studia il rapporto tra l'uomo e le altre specie, analizzandone il carattere relazionale e referenziale, e l'asimmetria intrinseca della relazione." },
      { term: "Fisiologia", definition: "Disciplina che studia il funzionamento dell'organismo e i meccanismi biologici (es. endocrini, neurobiologici) che sono alla base del comportamento, considerandolo espressione di uno stato interiore corporeo." },
      { term: "Pedagogia", definition: "Disciplina che si occupa degli obiettivi educativi da raggiungere e dell'indirizzo evolutivo da impostare, valorizzando i talenti naturali e colmando le lacune del soggetto." },
      { term: "Bioetica", definition: "Disciplina che studia i valori e le conseguenze morali implicati nella condotta umana verso gli animali, considerando il cane un essere senziente e un \"paziente morale\" che richiede rispetto della sua autonomia e dei suoi interessi." },
      { term: "Didattica", definition: "La disciplina operativa dell'educazione cinofila, che studia le metodologie di lavoro e di predisposizione dei contesti di apprendimento e delle modalità di trasmissione, influenzata dalle considerazioni etologiche, zootecniche, psicologiche, fisiologiche e pedagogiche." },
      { term: "Senzienza", definition: "La capacità di un essere vivente di provare sensazioni, emozioni (dolore, piacere, paura, gioia, ecc.), implicando considerazioni etiche nella relazione con esso." },
      { term: "Paziente Morale", definition: "Un soggetto che, per le sue caratteristiche intrinseche (come la senzienza), pone delle limitazioni alla condotta umana, rendendo alcune azioni tecnicamente possibili eticamente inaccettabili." }
    ]
  },
  {
    id: 5,
    title: "L'identità come processo",
    subtitle: "un Processo di Costruzione",
    modules: [
      {
        id: 1,
        title: "Le Tappe della Formazione Identitaria",
        objective: "Comprendere che l'identità di un cane non è un dato di fatto alla nascita, ma il risultato di un processo di formazione che attraversa tappe ben precise, dall'eredità genetica fino alle esperienze post-natali.",
        lessons: [
          {
            id: "1.1",
            title: "L'Identità non è Statica",
            points: [
              "Ogni cane è un individuo unico e irripetibile, con un proprio profilo specifico.",
              "Questa individualità si costruisce attraverso un processo che inizia molto prima della nascita."
            ]
          },
          {
            id: "1.2",
            title: "Le Tre Tappe Fondamentali",
            points: [
              "L'identità del cane è determinata da tre tappe successive:",
              "Il Concepimento: Stabilisce il patrimonio ereditario del soggetto (informazione genetica ed epigenetica).",
              "Il Periodo di Gestazione (Prenatale): È il primo momento formativo, in cui il corpo si organizza e il feto inizia a interagire con il mondo attraverso la madre.",
              "L'Età Evolutiva (Postnatale): Dura circa due anni ed è il periodo in cui si definiscono il carattere e le conoscenze di base del cane, attraverso processi come l'attaccamento e la socializzazione."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 1",
          questions: [
            { id: 1, questionText: "Elenca le tre tappe che determinano l'identità di un cane.", answerText: "Le tre tappe sono: il concepimento, il periodo di gestazione (prenatale) e l'età evolutiva (postnatale)." },
            { id: 2, questionText: "Qual è la durata approssimativa dell'età evolutiva nel cane?", answerText: "L'età evolutiva dura nel suo complesso circa due anni." },
            { id: 3, questionText: "In quale tappa si definisce il patrimonio ereditario di un cane?", answerText: "Si definisce al momento del concepimento." }
          ]
        }
      },
      {
        id: 2,
        title: "Le Radici dell'Identità, il Patrimonio Ereditario",
        objective: "Analizzare le diverse componenti del patrimonio ereditario del cane, comprendendo come questo non determini rigidamente il suo carattere, ma rappresenti una \"promessa genetica\" da cui partire.",
        lessons: [
          {
            id: "2.1",
            title: "Le Componenti dell'Eredità",
            points: [
              "Il lascito ereditario di un cane comprende diversi ambiti di influenza:",
              "Caratteristiche filogenetiche di base: l'essere mammifero, carnivoro, canide.",
              "Caratteristiche della domesticazione: i tratti che lo differenziano dal lupo.",
              "Caratteristiche zootecniche: la \"memoria di razza\", ovvero le attitudini e le doti caratteriali selezionate dall'uomo.",
              "Caratteristiche di pedigree: l'ascendenza parentale specifica."
            ]
          },
          {
            id: "2.2",
            title: "La \"Promessa Genetica\"",
            points: [
              "È un errore pensare a un determinismo genetico rigido. Il rapporto tra gene e comportamento è complesso a causa di fenomeni come la poligenia (più geni per un carattere) e il pleiotropismo (un gene per più caratteri).",
              "È più corretto parlare di una \"promessa genetica\": il patrimonio ereditario fornisce gli \"ingredienti\" di base, ma il modo e la misura in cui si esprimeranno dipendono molto dall'ambiente."
            ]
          },
          {
            id: "2.3",
            title: "La Predisposizione",
            points: [
              "I fattori ereditari creano delle predisposizioni, che si manifestano come:",
              "Tendenze a esprimere certi comportamenti.",
              "Bisogni espressivi che, se non assolti, creano disagio.",
              "Vulnerabilità a specifici problemi o traumi."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 2",
          questions: [
            { id: 1, questionText: "Elenca i quattro ambiti di influenza che compongono il lascito ereditario.", answerText: "I quattro ambiti sono: caratteristiche filogenetiche di base, caratteristiche della domesticazione, caratteristiche zootecniche (memoria di razza) e caratteristiche di pedigree." },
            { id: 2, questionText: "Spiega cosa si intende con l'espressione \"promessa genetica\".", answerText: "Significa che la genetica fornisce gli \"ingredienti\" di base e le propensioni, ma non determina in modo rigido il carattere finale. La sua realizzazione dipende dall'interazione con l'ambiente." },
            { id: 3, questionText: "Oltre a creare tendenze, in quali altri due modi si manifesta una predisposizione?", answerText: "Si manifesta creando bisogni espressivi e vulnerabilità specifiche." }
          ]
        }
      },
      {
        id: 3,
        title: "La Formazione Prima della Nascita, il Periodo Prenatale",
        objective: "Comprendere l'importanza cruciale del periodo di gestazione come prima fase formativa, in cui il benessere della madre e l'ambiente uterino influenzano direttamente lo sviluppo del cucciolo.",
        lessons: [
          {
            id: "3.1",
            title: "Le Due Fasi della Gestazione",
            points: [
              "Il periodo prenatale nel cane dura circa 60 giorni e si divide in due momenti principali:",
              "Fase embrionale (primi 40 giorni circa): È il momento di costruzione del piano morfologico e funzionale dell'organismo.",
              "Fase fetale (dal 40° giorno in poi): È il momento di \"finissaggio\" del corpo, in cui i feti già manifestano comportamenti interattivi tra loro."
            ]
          },
          {
            id: "3.2",
            title: "I Fattori d'Influenza Prenatale",
            points: [
              "Durante la gravidanza, il cucciolo è influenzato da:",
              "Trasmissioni metaboliche ed endocrine dalla madre.",
              "Lo stile di vita della madre (alimentazione, stress).",
              "Interazioni con i fratelli nell'utero.",
              "L'ambiente esterno mediato dalla madre (es. carezze sulla pancia, rumori)."
            ]
          },
          {
            id: "3.3",
            title: "L'Importanza del Benessere Materno",
            points: [
              "È fondamentale curare il benessere della cagna in gravidanza, evitando stress, paure e noia.",
              "Una dieta corretta, un ambiente sereno e interazioni positive (come massaggiare il fianco) possono favorire una precoce tolleranza alla manipolazione e influenzare positivamente il carattere dei cuccioli."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 3",
          questions: [
            { id: 1, questionText: "Qual è la differenza tra la fase embrionale e quella fetale?", answerText: "La fase embrionale è quella della costruzione della struttura base del corpo. La fase fetale è quella del \"finissaggio\" e della prima interattività." },
            { id: 2, questionText: "Elenca tre fattori che influenzano lo sviluppo del cucciolo durante la gravidanza.", answerText: "Tre fattori sono: le trasmissioni ormonali dalla madre, il suo stile di vita e l'interazione con i fratelli nell'utero." },
            { id: 3, questionText: "Come può un proprietario influenzare positivamente i cuccioli prima ancora che nascano?", answerText: "Curando il benessere generale della madre (alimentazione corretta, ambiente sereno, assenza di stress) e interagendo positivamente con lei, per esempio accarezzandole il fianco per abituare i feti al contatto." }
          ]
        }
      },
      {
        id: 4,
        title: "I Primi Passi nel Mondo, dal Neonato all'Autonomia",
        objective: "Seguire le tappe dello sviluppo post-natale, dal periodo neonatale fino al distacco, comprendendo la progressiva emergenza dell'individualità attraverso la relazione con la madre.",
        lessons: [
          {
            id: "4.1",
            title: "Il Periodo Neonatale, una Gestazione Esterna",
            points: [
              "Le prime due settimane di vita sono definite di \"esogestazione\".",
              "Il cucciolo ha una ridotta capacità di interfaccia con il mondo (occhi e orecchie chiusi) ed è in una condizione di \"gemellaggio osmotico\" con la madre, da cui dipende per il calore, il cibo e la stimolazione.",
              "I sistemi sensoriali attivi sono quello termotattile, olfattivo, feromonale e gustativo."
            ]
          },
          {
            id: "4.2",
            title: "Il Periodo di Transizione e l'Attaccamento",
            points: [
              "A partire dalla terza settimana, con l'apertura di occhi e orecchie, inizia il periodo di transizione.",
              "Il rapporto con la madre passa da una coniugazione stretta a una basata sull'interazione e la dipendenza affettiva. Nasce il processo di attaccamento.",
              "La madre diventa un \"centro referenziale\", un mediatore esperienziale che il cucciolo usa come base sicura per iniziare a esplorare il mondo."
            ]
          },
          {
            id: "4.3",
            title: "L'Emergere dell'Individualità",
            points: [
              "Dopo i primi mesi, con il processo di distacco (intorno al quarto mese), si mettono le basi per l'autonomia e l'inserimento sociale del cucciolo.",
              "La formazione dell'identità individuale si realizza quindi non in isolamento, ma sempre attraverso la relazione con la madre e, successivamente, con il nuovo gruppo sociale."
            ]
          }
        ],
        exam: {
          title: "Esame di Preparazione - Modulo 4",
          questions: [
            { id: 1, questionText: "Perché il periodo neonatale è definito di \"esogestazione\"?", answerText: "Perché, pur essendo fuori dall'utero, il cucciolo ha ancora capacità di interazione e autonomia molto limitate e dipende quasi totalmente dalla madre, come se la gestazione proseguisse all'esterno." },
            { id: 2, questionText: "Cosa segna l'inizio del periodo di transizione?", answerText: "È segnato dall'apertura degli occhi (e successivamente delle orecchie), che permette al cucciolo un'interfaccia a distanza con il mondo." },
            { id: 3, questionText: "Qual è il ruolo della madre durante la fase di attaccamento?", answerText: "La madre diventa un \"centro referenziale\" e una \"base sicura\", che permette al cucciolo di iniziare a esplorare il mondo sentendosi protetto e rassicurato." }
          ]
        }
      },
      {
        id: 5,
        title: "Il Ruolo dell'Educatore, Guidare il Processo Formativo",
        objective: "Comprendere come l'educatore debba agire tenendo conto delle basi ereditarie e delle fasi di sviluppo del cane, impostando condizioni educative corrette fin dai primi momenti.",
        lessons: [
          {
            id: "5.1",
            title: "Partire dall'Innato per Costruire l'Appreso",
            points: [
              "Un approccio educativo corretto (cognitivo) deve partire dalle caratteristiche innate del cane (etologiche e di razza) e dal suo grado di maturità.",
              "È un grave errore considerare il cucciolo una \"tabula rasa\" e basare l'educazione solo sui premi (la \"didattica del bocconcino\"), ignorando le sue predisposizioni."
            ]
          },
          {
            id: "5.2",
            title: "Creare le Corrette Condizioni Educative",
            points: [
              "Il lavoro dell'educatore non è solo insegnare comandi, ma predisporre le \"condizioni educative\" adatte. Questo significa:",
              "Predisporre il contesto di vita (ambientale e relazionale).",
              "Impostare attività disciplinate (con ingaggio, svolgimento e chiusura).",
              "Costruire un percorso di esperienze basato su gradualità e propedeuticità."
            ]
          },
          {
            id: "5.3",
            title: "L'Importanza della Precocità dell'Intervento",
            points: [
              "Le esperienze fatte nei primi mesi di vita sono le più incisive e difficili da modificare in seguito.",
              "Per questo sarebbe fondamentale l'intervento di un educatore fin dal momento dell'adozione, per aiutare il proprietario a impostare correttamente la relazione e l'ambiente, prevenendo problemi futuri."
            ]
          }
        ],
        exam: {
          title: "Esame Finale - Modulo 5",
          questions: [
            { id: 1, questionText: "Qual è l'errore principale dell'approccio behaviorista secondo il testo?", answerText: "Quello di dare scarsa importanza alle caratteristiche ereditarie e innate, considerando il cucciolo una \"tabula rasa\" da modellare solo con i rinforzi." },
            { id: 2, questionText: "Cosa si intende per \"condizione educativa\"?", answerText: "È l'insieme delle condizioni che l'educatore predispone per favorire un corretto sviluppo. Si basa sulla preparazione del contesto, sulla proposta di attività disciplinate e su un percorso di esperienze graduale." },
            { id: 3, questionText: "Perché è così importante che l'intervento educativo inizi il prima possibile?", answerText: "Perché le esperienze vissute nei primi mesi di vita sono quelle che formano le fondamenta del carattere e sono le più difficili da correggere in seguito." }
          ]
        }
      }
    ],
    glossary: [
        { term: "Patrimonio ereditario", definition: "L'insieme delle componenti genetiche ed epigenetiche definite al concepimento, che include caratteristiche filogenetiche, di domesticazione, zootecniche e di pedigree." },
        { term: "Promessa genetica", definition: "Il concetto che l'eredità genetica fornisce gli 'ingredienti' di base ma non determina rigidamente il carattere, la cui espressione dipende dall'ambiente." },
        { term: "Predisposizione", definition: "La tendenza innata a manifestare certi comportamenti, bisogni espressivi o vulnerabilità specifiche, derivante dal patrimonio ereditario." },
        { term: "Periodo prenatale", definition: "La fase di gestazione (circa 60 giorni) che rappresenta il primo momento formativo, in cui il feto è influenzato dallo stato della madre e dall'ambiente uterino." },
        { term: "Esogestazione", definition: "Le prime due settimane di vita post-natale, in cui il cucciolo è quasi totalmente dipendente dalla madre, come una gestazione che prosegue all'esterno." },
        { term: "Periodo di transizione", definition: "La fase che inizia alla terza settimana di vita, con l'apertura di occhi e orecchie, segnando il passaggio a una relazione interattiva con la madre." },
        { term: "Attaccamento", definition: "Il processo che trasforma la madre in un 'centro referenziale' o 'base sicura', da cui il cucciolo parte per esplorare il mondo." },
        { term: "Distacco", definition: "Il processo, intorno al quarto mese, in cui si pongono le basi per l'autonomia del cucciolo dal nucleo materno." },
        { term: "Condizioni educative", definition: "L'insieme delle predisposizioni di contesto, attività e percorsi di esperienza che l'educatore crea per guidare lo sviluppo del cucciolo." }
    ]
  }
];