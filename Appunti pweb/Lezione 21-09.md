**Cos'è internet?**
Internet è composta da **miliardi di host** ( dispositivi periferici)  $\to$ Prendono il nome di **periferia della rete**

**Router e switch:** inoltrano pacchetti 

E' possibile identificare delle reti ( *autonomous sistem* , se li consideriamo sulla scala globale ( come vodafone , ma anche google ))

**Autonomous sistem:** reti gestite in modo unitario secondo i propri router 

ISP: Internet Service Provider

Internet: Rete composta da un insieme di reti 

Protocollo: Regola i pacchetti al fine di garantire la comunicazione tra dispositivi diversi 

**Standardizzazione della rete internet:**
- RFC: Request For Comments
- IETF: Internet For Engeineering Task Force

(sono documenti )

Possiamo vedere internet anche come **infrastruttura** che permette la **distribuzione di applicazioni.** 

I **protocolli** definiscono il formato dei messaggi e le azioni per il loro invio.

host $\to$ rete di accesso (o periferica): possono essere sia cablate che senza fili (attraverso dei cavi ethernet)

DSL $\to$ DSL access multiplier : Uso delle linee telefoniche


**Ma il nostro router di casa ?**
- E' un modem 
- E' un router 
- Fornisce anche **funzionalità di access point**

**Cosa fa un host quando invia un messaggio ?**
- Trasmettere dati in **blocchi IP** chiamati pacchetti $\to$ Hanno lunghezza L 
I pacchetti vengono trasmessi su reti di trasmissione R

Pacchetti in un determianto tempo : $\frac{L}{R}$

Termine **fowarding**: azione di **istradamento** eseguita sul singolo router 
"              " **routing**: Fa riferimento all'intero processo di invio attraverso i router di uno specifico pacchetto 

**Queueing:** Mette "in coda " i pacchetti provenienti da più host $\to$ Tasso massimo di 1,5 mb/s 
$\to$ Problema di **corss taffic**

Può succedere che **il buffer si riempia** $\implies$ I pacchetti vengono buttati $\to$ motivo per cui si perdono i pacchetti nella rete internet 

( Con la fibra ottica è molto più difficile )

I livelli di livello trasporto come TCP risolvono ,  limitando la qualità dell'informazione

IL circuito fra due host viene mantenuto **anche se due dispositivi non comunicano più** , insomma rimane a loro dedicato . $\to$ comunicazione basata sui circuiti

Infatti non avviene nella comunicazione basata sui pacchetti $\to$ Si basa sui link!

Abbiamo la necessità di mettere in comunicazioni più reti esistenti:
- tutte reti di accesso connesse
- solo un ISP unito 
- Più ISP che svolgono il lavoro di routing $\to$ Devono assolutamente parlare tra loro 


Ultima soluzione : usano un **internet exchange point**, una rete locale a cui si vanno a connettere tutti i vari ISP

Questo modello è nato intorno ai primi anni 2000 e si è affermato principalmente in europa ( e dopo negli Stati Uniti)$

Esistono ISP regionali $\to$ Distanza di una nazione o poco più 

Ultimamente si sono affiancate ulteriori reti $\to$ reti di fornitori di contnìenuti ( come google).

**IXP:** hanno come problema la distanza fisica

I fornitori di contenuti (data center) spingono i propri contenuti  vicino ai propri utenti (agi IXP)

**Gestione indirizzi IP:**

Indirzzo : sequenza di 32 bit divisi in sequenza da 8 $\to$ valori compresi tra 0 a 255

**Chi ce lo dà l'indirizzo IP?**

L'internet sever provider ne ha un paio a disposizione , li divide in sottoblocchi 

Ha un primo tot di bit **fissato** 

**Come fa un ISP a contenere un blocco di indirizzi IP?

Li ottiene da un organizzazione chiamata **ICANN** , attravero 5 registri regionali (RRs) che gestiscono **parti diverse del globo**

In europa è la RIPECC nei paesi basi (controlla meglio)

Ipv6 lunghezza 128 bit $\to$ Perchè sono eseuriti gli indirizzi ip dell'ipv4

Escamotage per usre di più gli ipv4 $\to$ NAT

**Cosa fa un router con un pacchetto?**
1) Guarda l'IP del router di destinazione 
2) Osserva la sua routing table e trova il next hop per raggiungere l'host desiderato 
3) così via per ogni router.

**CI si organizza nella tabella di routing secondo i prefissi** $\to$ cerco l'entrata che condivide l'IP più lungo 

**Nel pacchetto ci sono codici di controloo degli errori** 

I tempi accumulati in un router sono nell'ordine dei microsecondi ... tranne quelli della coda oer essere trasferiti sul link di uscita ( e alla presenza di traffico generato dall'utente )

C'è inoltre il traffico da trasmissione $d_{trans}=\frac{L}{R}$ 
e di propagazione dovuto alle distanze fisiche e la velocità di trasmissione  $\to$ Distanza di propagazione

**tracerout:** Inviare probes (pacchetti di piccole dimensioni ) per scroprire l'identita dei router intermedi e il delay dell'invio di un messaggio per mezzo di essi.

! NON È DETTO CHE I PACCHETTI TRA DUE ROUTER FACCIANO LA STESSA STRADA ALL'ANDATA E AL RITORNO 

! ESISTONO ANCHE ROUTER CHE NON RISPONDO $\to$ Sono contrassegnati da asterischi 


**Qual'è il modello di riferimento per lo step protocollare di internet?**
Modello stratificato $\to$ Risolvere i problemi **uno alla volta** $\to$ Indipendenza tra gli strati (alla modifica) a patto di non modificare l'interfaccia tra più strati . 


1) Applicazioni : HTTP, IMAP, SMTP, DNS
2) Trasporto: processo a processo $\to$ TCP E UDP $\to$ Si occupa dei casi di perdita dei dati 
3) Rete: IP $\to$ comunicazione tra host e hostl $\to$ Protocollo IP, protocollo routing 
4) Link: comunicazione tra elemtni di rete ravvicinati 
5) FIsico: livello fisico dell'elemento di rete 

! Solitamente link e fisico a livello reale li troviamo combinati assieme 


Livello applicazione PARLA CON livello applicazione

Messaggio applicativo viene incapsulato con un header $H_t$ per essere compreso dal livello trasporto ( in TCP il pacchetto si chiama **segmento**)

Messaggio trasporto viene incapsulato con un header$H_n$ per essere compresso dal livello rete (prende il nome di **frame**)

Mesaggio rete viene incapsulato con un header $H_L$ per essere compreso dal livello Link 


Al contrario si "spacchetta" in ordine inverso 


!IL CORE DELLA RETE DEVE ESSERE **un core semplice** quindi gli elementi intemerdi devono essere **SEMPLICI**

**Scrviere un app che funziona su internet:**
Complessità spostata sugli end system 


Socket : strutture dati che ci permettono di gestire le connessioni , rappresentano insomma connessioni 


**Paradigma client-server**

! Il client non è sempre connesso e potrebbe avere sempre indirizzi ip quando connesso 

I server sono **sempre connessi** e hanno **sempre lo stesso indirizzo IP**

**Paradigma peer-to-peer**

Tutti i nodi sono **sia client che server**.

La gestione di questo paradigma è più complesso da gestire.


**Come fanno due processi a comunicare ?**
- All'interno dello stesso dispositivo: attraverso comunicazionin fornite dal sistema operativo
	- Memoria condivisa 
- Sistema distribuito: scambio di messaggi  $\to$ attraverso il meccanismo dei socket 


**numeri di porta:** Numeri interi espressi in numero di bit 
- **porta ben nota:** come il web ( porta 80)
- **senza importanza che si conosca:** una qualsiasi porta



**Il meccanismo NAT (Network Address Traslation)**

Il nostro ISP ci fornisce **un unico indirizzo IP pubblico** .
La comunicazione avviene attraverso "il nostro router" , possono essere utilizzati tutti gli indirizzi privati senza richiesta all'ISP a patto che non si esca in rete con quelli. 



Allora il NAT esegue sostiutzioni "al volo" sui pacchetti entranti e uscenti dalla rete . 
Tutti i pacchetti usano l'unico indirizzo IP pubblico che abbiamo acquistato 


anche il numero di porta viene modificato al fine di garantire l'identificazione del destinatario della ricezione di un messaggio .


**PROBLEMA:** Se a casa abbiamo un web server , esso non viene identificato (magari si ha l'ip ma non il numero di porta $\to$ Necessaria una configurazione specifica )



Livello trasporto $\to$ Funzionalità
Applicazioni $\to$ Hanno bisogno di un servizio 


**Protocolli a livello applicativo:**
- **Chiusi:** non si conosco i dettagli , come zoom (protocollo di videoconferenza)



I protocolli di livello trasporto introducono: 
- **TCP:** Arrcorgimento della perdita e ritrasmissione del dato, controllo del flusso, controllo della congestione ( agisce negli elementi intermedi della rete $\to$ evita le code  $\to$ ridurre i tassi di invio) $\to$ Essendo orientato alla connesione  è un flusso di dati 
- **UDP**: Non fornisce nessuna garanzia nè di ricezione dei pacchetti , ne dei ritardi ,  ma permette il **multiplexing**.