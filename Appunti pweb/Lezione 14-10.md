Nel **javascript** moderno le variabili vengono gestite con **let e const** (e non var, che presenta problemi)

let serve per la dichiarazione (senza tipo per caratteristica del linguaggio )

**Ulteriori meccanismi di uscita:**
- document.write(): solo fase iniziale , poi lo abbandoneremo $\to$ genera righe di codice (anche HTML) $\to$ E' basato su stringhe ma non permette di esercitare dei controlli $\to$ Noi useremo delle funzioni che cu permettereanno di creare nuovi elementi
- console.log() $\to$ Lo useremo sempre, lo troviamo nella finestra degli **strumenti per sviluppatori** $\to$ TENERE APERTO "CONSOLE" (se ci fosse un errore lì si vede, in modalità utente invece no)


**Ci sono due tipi:**
- Primitivi : booleani, numeri, stringhe, NULL(vale solo null), undefined(vale sono undefined), symbol (che possiamo tranquillamente trascurare).
  E' come se "ospitassero al loro interno il valore"
- Riferimento: Assomigliano a dei puntatori di cui noi non possiamo conoscere il contenuto (inteso come indirizzo di memoria)

Nel caso di const , ciò che è costante dipende dal tipo:

- Per i primitivi è il valore **che non può cambiare** . 
  Per gli array , non possiamo cambiare array associati ma piuttosto i valori da loro contenuti
- Per i riferimenti è il riferimento che non può cambiare. 

Ad un riferimento può essere associato un **oggetto vuoto**.


Simbolo $===$: Prende il nome di strict equal e restituisce true **se e solo se** igli oggeti hanno **lo sesso tipo e lo stesso valore.**

Valori che corrispondo a vero $\to$ Truthy 
Valori che corrispondono a falso $\to$ Falsy $\to$ false , null, undefined .....



**Array:**
L'array vuoto è $[]$.
Possiamo scrivere gli array attraverso un array attraverso un costruttore (non molto furbo):

const name =new Array(value1 , value2...)

**Se avessi messo un solo valore intero , l'array avrebbe preso la lunghezza del numero inserito.** 


Per iterare negli array $\to$ Usiamo uno specifico ciclo for(let ... of ...)



**Gli oggetti possono esistere anche senza classi** $\to$ Posso creare oggetti per copia 