JSON $\to$ Trasforma gli oggetti in stringhe favorendo il passaggio di dati tra più linguaggi 


Il metodo dell'oggetto predefinito si chiama **Parse** ma abbiamo anche il metodo duale **stringify** che ci mostra inoltre la rappresentazione stringa del nostro oggetto JSON. 

**Ma qual'è l'utilità rispetto alla resistuzione in pagine html?**

E' molto più facile il lavorare con i dati . 


**function** nomeFunzione(parametro1, ...){
	return valore;
}

**Non c'è il tipo perchè le conversioni vengono fatte a tempo di chiamata.**

Se passo un solo argomento dove ne servono due , durante il **runtime** , il risultato è "not a number (NAN)" .
Nonostante tutto possiamo comunque definire un valore di default.


Funzioni con numero variabile di argomenti  : $$...$$ Hoisting $\to$ E' un meccanismo che permette di portare all'inizio della funzione esterna, la funzione interna $\to$ Non funziona con gli assegnamenti

! Stare attenti al fatto che quando passiamo una funzione **non dobbiamo metterci accanto le parentesi tonde** (in quel caso ne passeremmo il risultato e non la vera e propria funzione)



**Possiamo dichiarare funzioni anonime**!



Oggetto **this** $\to$ Si riferisce all'oggetto corrente a cui è apposto $\to$ Si creano **assieme ad una new** 


Se troviamo una funzione di un ogetto , il this si riferisce all'oggetto dove la funzione è definita .


**Arrow funciton:** Hanno una sintassi diversa, hanno il corpo della funzione e i suoi argomenti **separati da una freccia**.

Esempio:
`() =>{
	codice
}` 

Il block scope level **aumenta la probabilità che ci siano collisioni tra i nomi delle funzioni**. 

Non è possibile, nella funzione esterna , usare variabili appartenenti alla funzione interna . 
Le visibilità delle variabili sono legate al blocco . 


Se definisco variabili esternamente dalle funzioni saranno **variabili globali** 



**Colsure:** E' l'associazione tra funzione e **proprio ambiente lessicale**. 
In pratica non si restituisce un valore ma **una funzione** . 
In questi casi le variabili locali della funzione rimangono in memoria e vengono talora aggiornate a successive iterazioni dello stesso oggetto.


**DOM:** Document Object Model

Codice html : Al vertice abbiamo document , che presenta vari nodi figli 

Vale per : 
- Elementi 
- Testo 
- Attributi


Il node name è diverso a seconda del tipo di nodo $\to$ E' rappresentato da un valore numero inserito in nodeType

Per gli elementi ci sono alcune proprietà aggiuntive:
- ClassName: é una stringa che corrisponde alla classe css di uno specifico elemento
- ClassList: è un oggetto manipolabile via medoti che può permette la manipolazione (compreso il toggle) di una classe.
- innerHTML: Non ci conviene usarla ,a ci permette di rappresentare i contenuti HTML. $\to$ Problemi di cross-side scripting
  Ma se usasso textContent il problema non è da porsi.

Inoltre: 
- A ha come proprietà href
- NAME (che si usa per gli elementi ontenuti in un form) $\to$ Ci permette di  nominare i campi di input
- value $\to$  capisco cosa un utente ha inserito in una determinata area del codice 



Iframe: E' come se fosse una pagina dentro una pagina , specificata dal programmatore 


**Modificare il DOM:**

I nomi composti (come background-color) vengono scritti insieme mettendo la prima lettera della seconda parola maiuscola 

