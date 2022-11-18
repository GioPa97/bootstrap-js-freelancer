/*PARTE JAVASCRIPT
A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
CONSIDERAZIONI FINALI e BONUS:
Mentre come bonus javascript dovete far diventare il codice sconto inserito di colore rosso, qualora quello inserito non sia valido.
Inoltre se il codice fornito è valido, eliminare quel codice dall’elenco dei codici sconto disponibili, il codice sconto non sarà più usabile.
Avete tutta la giornata a disposizione, fino alle 18: quello che viene committato dopo le 18 non verrà valutato. Ricordatevi di pushare frequentemente per consegnare il lavoro in modo incrementale. Se vi trovate in difficoltà potete aprire ticket: fino alle 13 a dalle 15 alle 18 avete il supporto degli insegnanti.
Buon lavoro!
Super Bonus: Creare una struttura dati adeguata per contenere tutte le informazioni relative ai progetti presenti nella sezione “Portfolio”. Rimuovere quindi le card dal markup nel file html e stamparle in pagina dinamicamente tramite l’utilizzo di JavaScript.*/


//Scrivo un Array di oggetti; gli oggetti sono i servizi proposti con il prezzo indicato; (X);
let servizioOfferto = [
    {
        prezzo: 20.50,
    },
    {
        prezzo: 15.30,
    },
    {
        prezzo: 33.60,
    },

];

//Scrivo una variabile dove salvare le ore indicate dall'utente; (Y);
/*let ore = prompt("inserisci le ore"); */



//Scrivo un Array di oggetti; gli oggetti sono i codici promozionali con valore sconto del 25%; (Z);
const arrayCodiciPromozionali = [
    {
        codice: `YHDNU32`,
        sconto: 0.75
    },
    {
        codice: `JANJC63`,
        sconto: 0.75
    },
    {
        codice: `PWKCN25`,
        sconto: 0.75
    },
    {
        codice: `SJDPO96`,
        sconto: 0.75
    },
    {
        codice: `POCIE24`,
        sconto: 0.75
    },

];










//Funzioni Dichiarate===========================================================
//Dichiaro una funzione calcolo base: x sarà il servizio, y le ore, z lo sconto
function calcolaPrezzo(x, y, z) {
    let prezzoDaArrotondare = x * y 
    let prezzoArrotondato = prezzoDaArrotondare.toFixed(2);
    let prezzoFinale = prezzoArrotondato - (prezzoArrotondato * z);
    return prezzoFinale;
};


//===============================================================================