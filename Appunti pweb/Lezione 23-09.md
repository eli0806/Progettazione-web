TCP : ha un meccanismo di controllo delle congestioni 

protocollo di sicurezza orientato alla connessione 

de-multiplexing : permette di capire il destinatario di un pacchetto . 
	Ci si basa sui numeri di porta (abbiamo sia il sorgente che quello di destinazione)
	Segmento $\to$ è in un datagramma IP 

DIverso comportamento UDP  e TCP :
- UDP usa solo porta destinazione 
- TCP usa sia la porta che l'ip

multiplexing: applicazione diverse che generano dati e finiscono tutte al livello trasporto 


**Il web**

Nasce durante il 1990.

URL:  identificano le risorse 
HTTP: permette il trasporto delle risorse , basato su **richieste e risposte.**
HTML: definisce i documenti 

2 processi:
- CLIENT: solitamente il browser  $\to$ MA non è sempre così
- WEB-SERVER


W3C: wordl wide web consorzium , tecnologie **libere**


Primi siti web :  siti web statici $\to$ Il contenuto è sempre lo stesso , anche se l'utente cambia $\implies$ Tempi di risposta MOLTO rapidi ( ringraziando l'esistenza delle memoria cash)





Nuove esigenze $\to$ Contenuti dipendenti dagli utenti 

Non leggo dal disco ciò che è richiesto adall'utente $\to$ MA ciò che è generato da un programma



Non un solo web server ma stack$\to$ S.O + software + database + scripting



LAMP= Linux Apache MySQL PHP  è la soluzione più adoperata 


altrimenti WISA= Windows IIS ( di microsoft) SQL Server Database ASP.NET 


(node.jas)

Noi useremo il parchetto XAMP (scaricabile per diversi sistemi operativi ):
- Web server apache già configurato 


Struttura URL: qual'è la risorsa che vogliamo ottenere


Documento principale HTML che contiene altri oggetti , ognuno scaricato attraverso una diversa richiesta HTTP generata



HTTP $\to$ TCP livello trasporto 
- Apre connessione 
- Trasferisce connessione
- Chiude connessione 

Può essere considerato un problema per via della latenza dei dati 

E' stateless $\to$ Ogni richiesta è una richiesta a se stante (indipendenza) 

E' stato implementato così perchè in questo modo era più semplice



Inizialmente ( quello sovra spiegato) era non persistente 

RTT : RoundTripTime , è il tempo che un informazione imoiega per passare dalla sorgente al destinatario e tornare 


TEMPO DI TRASFERIMENTO + 2 RTT $


Possono essere molto maggiori del tempo di trasferimento dell'immagine stessa . 


Altro meccanismo usato in passato era quello di fare **più richieste HTTP* in contemporanea** (in parallelo) $\to$ MA ERA UN PROBLEMA, sia client che server dovevano allocare molta memoria 

**Messaggio di richiesta HTTP:

METODO/ nomefile.html HTTP/ versioen http \r\h

Linee di header $\to$ HOST: ci permette di capare a quale server virtuale è inoltrata la richiesta ( e quale risponderà )

Per il resto ci sono  altre informazioni (utili per la costumizzazione della risposta) $\to$ Utili quando i browser non erano compatibili tra di loro $\to$ Problema sparito con HTML5 

Sono informazioni inaffidabili poichè provengono dal lato client


Header accept : come voglio ottenre la rispsota (text/html = HTML5) $\to$ Possiamo identificare anche più formati 


Peso q : permette di dare pirorità alle possibili scelte 


compressa : gzip o deflate




Richieste HTTP = METODI 



GET = si usa per ottenere un oggetto , trasferire limitate quantità di dati da parte del server (query string appesa infondo all'url, introdotta da un carattere ?) ( NON VA BENE SE DOBBIAMO TRASFERIRE UN FILE O UN IMMAGINE)

POST= la usiamo quando abbaimo a che fare con FORM


HEAD= come una GET ma senza BODY del'oggetto $\to$ Ricevo solo l'header

PUT= Devo specificare l'identitificatore della richiesta che va creata o aggiornata 


Formato risposta HTTP:  
- se c'è stato un errore (OK altrimenti , dopo la funzione html )
- header (contiene le informazioni che descrivono il server ) $\to$ Last modified , rappresenta l'ultima modifica della risorsa , oppure Accept-ranges: bytes se si restituisce una risorsa non completa 


codici : 


200 OK 
301 Moved permanently  Client : aggiornare il nuovo url in maneira che punti alla nuova risorsa (puntato nel messaggio di errore)


(rivedi meglio le slides




Per mantenere lo stato in HTML : usiamo i cookies 

I cookies sono infromazioni che vengono trasferite dal server al client e possono essre adoperate per tenere traccia di una conversazione precedente ( un esempio può  essere l'identificatore univoco su amazon)
Questo identificatore rimarrà lo stesso nelle visite $\to$ Anche a distanza di tempo

Cosa facciamo lato server dipende DALL'APPLICAZIONE 

Li usiamo per: 
- carrello di un sito 
- preferenze di un utente 
- sessioni utente


Lo stato viene memorizzato :
- Nel web server
- All'interno del cookie stesso $\to$ Vengono usati anche per tracciare l'utente 

BANNER PUBBLICITARI $\to$ caricati da sorgente esterna ai siti 

capire cosa può ottimizzare l'esperienza all'utente

Sono cokie legittimi e si chiamano **first party cookies** $\to$ header prefer : da dove proviene  la richiesta ( nel banner c'è il cookie ) 
Insomma profilano l'utente 


third party cookies $\to$ Servono ad enti terzi per capire e seguire l'utente 

sono state regolate dal GDPR 


**Cookie di funzionamento :** Se li eliminiamo non funziona più il sito 



**Web chaces**
Meccanismi per il cahing di infromazioni nel web: 
- Pubbliche 
- Del browser stesso (locali ) $\to$ Vengono scaricate sul file system dell'utente stesso 
Vengono memorizzate delle richieste/risposte HTTP sul browser 

2 client diversi possono avere la stessa web cache 



Spesso accesso agli stessi siti ? WEBCACHE! (si velocizzano i tempi di risposta anche)




Cache-control: max-age=$<seconds>$ è un comando che mi permette di regolare il tempo di vita degli oggetti in cache 

Cache-Control: no-cache , per capire se ogni volta dobbiamo validare la cache 


no-store se non vogliamo che i dati intermedi vengano messi nella cache

Non serve quando RTT abbastanza basso 


utili quando pessimo troughput della rete 