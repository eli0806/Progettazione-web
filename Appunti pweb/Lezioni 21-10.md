# Gestione degli eventi in javascript

## Idea:
Definire un **event handler** (è una funziona), va assoicato alla sorgente di eventi attraverso la **registrazione.** (Ossia ad esempio se clicckiamo un bottone o altro)

## Comandi: 
oggetto.addEventListener("Click", simpleHandler)


Ciò ci fa notare che è necessario definire il tipo di evento e la funzione che viene scatenata


==Nota:== Possiamo passare anche funzioni anonime e arrow function

I riferimenti si ottengono con querySelectorAll

Nelle liste, dobbiamo scorrere tutti gli elementi al fine di ottenere l'effetto desiderato


## Tipi di eventi: 

- Load : è associato alle finestre $\to$ Bisogna attendere che **tutta la pagina sia stata caricata**
- DOMContentLoaded: è associato al solo caricamento della pagina HTML $\to$ Più veloce del caso precedente



## Oggetto evento: 
Di solito lo chiamiamo e, ma è solo una convenzione



Gestione delle coordinate: clientX e clientY


## Modo in cui gli eventi vengono propagati 

2 fasi: 
- Capturing: si va dal **contenitore** al **contenuto**
- Bubbling: si va dal **contenuto** al **contenitore**

Ma solo per natura storica $\to$ Sono rilevanti quando elementi sono contenuti in altri elementi 

==🔴Può essere un problema:== 
Se noi generiamo un evento all'interno di più elementi contenitori , esso viene propagato anche "all'esterno". 


Per evitarlo si usa **oggetto.stopPropagation**()


Però la **propagazione può essere utile se:**

- Lavoriamo con un gestore delle immagini 



Possiamo creare un eventHandler anche per il solo contenitore. 
1) Vedere se il target è definito 
2) Usare il nome dell'elemento di cui vogliamo gestire l'evento


Attraverso le proprietà **dataset** possiamo affiancare dei valori ad un elemento , per poi recuperarli successivamente con codice Javascript


## Tipi di eventi generati :
- Dagli elementi di un form :
  - Blur quando smetto di cliccare una determinata componenete
  - submit: "controllare" l'inserimento di tutti i dati di un form 
- Mouse
- Tastiera 
- Dai frame 


## Meccanismo di Lazy loading: 
Usa i dataset per caricare , a seconda di come l'utente scorre una pagina , un determinato numero di immagini o eventuale testo alternativo. 


L'immagine viene caricata quando **finisce nella parte visibile del documento**



Uso Javascript $\to$ E' spesso connaturato alla validazione



(Per la validazione dei numeri possiamo usare anche html.)