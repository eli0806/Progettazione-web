**Web caching:** Si usa nelle reti locale e serve per ridurre il tempo di "ricezione" di un messaggio provenendo da un server esterno , sfruttando una memoria cache interna con i siti più visistati. 
Se il sito non è presente nella cache si esce comunque dalla rete locale. 
E' semplicemente necessario un calcolatore in più per fare web caching ( non costa tanto).
40% dei casi c'è 
60% devo andare comunque su internet 
1) **Buy a faster access link:** riduce il tempo di un $\frac{1}{100}$ $\to$ RItardo da minuti a secondi



Il browser può emettere delle **conditional GET**: se il dato è stato aggiornato , mandalo anche se lo ho già in cache 



**Quali sono i miglioramenti introdotti dalle versioni successive del protocollo HTTP?**
Problemi da risolvere:
- Head-of-line blocking: Oggetti piccoli legati all'oggetto grande 
- Ritrasmissioni TCP
HTTP2:
Più flessibile : 
- No per forza metodo FCFS
- Gli oggetti possono essere divisi in blocchi : prendono il nome di **frames** 
Non per forza devono essere trasferiti di seguito tutti i frames di un oggetto $\to$ Metodo **round robin**(trasferimento di un blocco per ciascun oggetto diverso , fino al termine di esso)


**Rimane però un problema: Un unica connessione TCP per i trasferimenti dei frame** $\to$ Il blocco di un frame **blocca ancora tutti i frame dopo di lui** 


Allora nasce HTTP3 : prevede più stream(connessioni) $\implies$ Il blocco su uno stream non causa il blocco sugli altri stream 
Abbiamo inoltre il protoccolo QUIC (che sfrutta il protocollo UDP)

(E' comunque una versione semplificata di HTTP2( che però è più sicura))


**Stabilire una connessione QUIC.**
- scelta del **protocollo crittografico** che riteniamo più sicuro 
- 2 roundtrip time 
- MA se abbiamo avuto una precedente connessione

**Il DNS:** 
E' un protocollo distribuito e viene implementato sono nella parte periferica della rete. 
**Nomi alias** $\to$ tradotti in nome canonico $\to$ Tradotti in IP (una lista)


Questo server **aiuta nella distribuzione del carico**. 



Client $\to$ DNS $\to$ Gruppo di indirizzi $\to$ Il client solitamente prende il primo 


Più client diversi presentano la stessa lista ma in ordine ruotato


Il sistema DNS è oragnizzato **in modo gerarchico:**
- root DNS server(13, ma sono macchine replicate. Il nostro è il server k): Associano al top-level-domain un indirizzo IP (tipo il .it è a pisa)
- top-level-domain:  insieme di indirizzi IP
- Autoritativi:Nome di dominio, indirizzo IP del dominio che si deve raggiungere

Funziona solo se c'è un caching effetivamente spinto.

Il nostro DNS locale è situato fuori dalla gerarchia , ma la usa al fine di ottenere velocemente l'infronazione da noi richiesta . (Ovviamente più step)
Può essere un processo **iterativo:**

(vedere slide)

o **ricorsivo:**

(vedere slide)

**Entrate memorizzate dai DNS:**
Prendono il nome di **record:**
- A= Da nome simbolico a IP
- CNAME= Usa il nome canonico
- NS 

## HTML

HTML: E' un linguaggio di markup (con annotazioni separate dal contenuto), è un file di testo semplice con annotazioni che danno inidicazioni sul codice. 

XHTML: era basata su XML ed era più fromale sul punto di vista della consistenza MA non era retrocompatibile e non fu ben vista dagli svilippatori , che allora WHATWG(Web Hypertext Application Technology Working Group) si misero a lavorare su HTML 5 .


HTML5: 
- Agigiunte allo standard $\to$ Alcune funzionalità non sono supportate da tutti i browser (vedere www.caniuseit.com) 


Validatori: permettono di capire se un codice HTML è corretto o no

Sintassi: 
Si costituisce di **elementi** delimitati da **tag**

I **tag** possono essere di apertura che di chiusura, e a loro interno possono contenere **attributi**

Essi sono delimitati dalle parentesi angolari <> 

Differenza XHTML e HTML5 : in XHTML abbiamo uno slash al termine dei tag senza tag di chiusura , che in  HTML5 non c'è.

Struttura dati gestita dal browser.: 

p= elemento paragrafo 


Vedere slide per differenza collegamento corretto e collegamento errato. 

Idea : in HTML5 si desiderava avere un HTML semantico, ma vogliamo mantenere in maniera completamente separato il modo in cui vogliamo che il nostro contenuto sia mostrato all'utente (in maniera anche da avere un codice file più facile da mantenere).
Altri vantaggi:
- E' più veloce l'uso di una stessa pagina CSS per più pagine ; essendo che essa non va scaricata più volte.
- Accessibilità: Ad esempio utente non vedente , sfrutta al posto dei file CSS(puramente estetici) solo il file HTML con riproduttore vocale.


Non è necessario specificare 5 nel $<!Doctype~html>$ 

Attributo lang: lingua del nostro documento

utf-8= metodo in cui una seguenza di caratteri viene trasformata in una sequenza di byte
In questa codifica, ad ogni carattere viene associato un numero (**code point**). (Ci sono tutti i caratteri di tutte le lingue del mondo), Ogni carattere (di dimensione 1 byte per codifica ASCII) viene rappresentato su 8 bit , tranne casi particolari.
Insomma è una codifica **compatta**.


Utf-16= Ogni carattere è rappresentato su 16 bit , tranne casi particolari

**Gli headings:**
Vanno da livello 1 a livello 6 , in ordine di importanza.

**I paragrafi:**
Sono semplici contenitori di testo. Lo sviluppo orizzontale di esso è basato sullo spazio disponibile sulla pagina web. 

Elementi inline= tutto sulla stessa riga 
Elementi blocco= uno di seguo all'altro 

**I div:**
Partizionano il codice 

**I link:**
Sono delimitati dal tag **a** e possono portare: 
- A siti web esterni  (href)
- A contenuti HTML diversi dal sito (href)
- A contenuti diversi da pagine HTML(href)
- Al nome di un punto di una pagina(name)


URL= sottocategoria degli URI ( Uniform Resource Identifier)
 $\to$ Ci dicono come raggiungere la risorsa (identifico e come sono in grado di raggiungerla)
 
**Gli URI:**
Non tutti gli URI sono URL . 
Esistono URN, che contengono il nome della ricerca(in maniera univoca) ma non permettono di raggiungerla 


**URL:**
Protocollo $\to$ Nome di dominio $\to$ Path$\to$ risorse



Se un url non inizia con http o https , si parla di un url relativo 




Si basano su unix : 
- / si usa per scorrere le cartelle
- ...

Possiamo creare dei path relativi che fanno comunque riferimento alla cartella di partenza, Se dobbiamo risalire a monte di un gruppo di sottocartelle usiamo  **..** . 


Per gestione cartelle vedere meglio slides 

/ viene tradotto dal webserver



Lista HTML elementi inline

$<cite>$ Per citare una fonte 
$<mark>$ Evidenziale
$<span>$ E' come un div ma riferito ad un blocco di testo 

....


**Immagini:**

Tag $<image>$ = Si usa solamente se l'immagine rappresenta un contenuto , e non un elemento decorativo (altrimeti lo troveremo nel foglio CSS)


**Liste:**
Possono essere : 
. **Ordinate:** Delimitate da tag $<ol>$ , gli elementi delimitati da $<li>$ 

**Commenti:**
$<!-- quellochevoglioscrivere>$ 


Esistono inoltre dei codici al fine di scrivere caratteri che non sempre sono presenti sulle tastiere

$<section>$ Può contenere più $<article>$ 

==Nota:== Vale anche il viceversa 

Elemento $<figure>$ : si usa per immagini che costituiscono un contenuto 
$<figcaption>$ Si usa per la descrizione delle immagini 

L'elemento $<nav>$ serve a racchiudere un menù di navigazione , la realizziamo attraverso una **unordered list** composta da **link**.

$<details>$ Contiene un $<summary>$ (caso in cui l'elemento sia compresso), se si clicca su ciò che c'è in summary , si arriva alla parte estesa di details


**Elemento address:** Viene utilizzato per specificare indirizzi 


La caratterizzazione estetica avviene solo n**attraverso codice CSS**

(L'appendice del pacchetto di slides , su altri elementi HTML si guarda da soli )

## CSS

Cascade Style Sheet: Ci permette di definire come le nostre pagine web devono apparire . 

E' separato da HTML e ha una sintassi molto semplice.

Esempio: Se vogliamo stampare una pagina, elimina gli elementi di background (rvariazioni di stampa rispetto a ciò che viene mostrato su uno schermo). 

Possiamo usarlo su più pagine diverse $\to$ **Consistenza**

E' uno standard composto da **moduli diversi**

Codice CSS: 
- Insieme di regole : margini , peso del font, colore del font ....(insomma delle specifiche estetiche)
	- Selettore : "Questa regoal si applica a tutti gli elementi "nomeElemento"
	- Blocco 
	- Dichiarazioni: coppie "proprietà-valore"


Esistono **diversi meccanismi di selezione:**
- Gruppi di elementi (stessa classe)
- Sulla base della posizione che occupano all'interno del nostro sito/ del nostro elemento


**Proprietà:**
- Sul font : famiglia, dimensione, peso, font erogati da terzi
- Sul testo: indentazione, sottolineatura, dimensione interlinea 
- Colori: sia del testo , che del bordo, che dello sfondo 
- Bordi: dove e come mettiamo i bordi
- Spaziatura(tra elementi): Padding(spazio vuoto dentro un elemento)
- Dimensioni: Altezza minima, massima, larghezza di un elemento 
- Liste 
- Animazioni 

**Che valori possono assumere le proprietà?**
Dipende dal tipo di proprietà scelta ( e dalla versione) e sono basati sulle:
- **keyworld** 
- Per i colori : **valori RGB**
- Per colori: **valori esadecimalin**
- Per i colori: **possiamo specificare la trasparenza


**Unità di misura :**
- relative: si basano su un' altra grandezza: 
	- em 
	- %: ad esempio rispetto all'elemento che lo contiene
	- ex: quanto largo un carattere x
	- ch: quanto largo carattere 0
	- rem: fare riferimento ad un'unità di misura radice(root)
- assolute: ci servono ad esempio quando vogliamo stampare un elemento 

**Commenti:**

/* il commento che voglio scrivere*/

Il codice **CSS** si fronisce in HTML: 
- Inline : Accanto all'elemento HTML andiamo ad inserire la specifica CSS (proprietà) che vogliamo  $\to$ Non conviene , **difficile manutenzione** 
- embedded : mettiamo le nostre regole tra i tag $<style>$
- FIle esterno (che useremo principalmente noi): La dobbiamo eseguire sempre , e avviene attraverso l'elemento link
- Combinato 

