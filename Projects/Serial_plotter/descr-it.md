Questo progetto è un "Serial Plotter" che visualizza graficamente i dati ricevuti da un dispositivo seriale collegato al computer (ad esempio, un microcontrollore).

# Applicazione
L'applicazione è stata sviluppata utilizzando Flutter e sfrutta le seguenti librerie:

- ##### [Flutter_libserialport](https://pub.dev/packages/flutter_libserialport)
Utilizzata per la scansione, connessione e comunicazione con le porte seriali del computer.

- ##### [syncfusion_flutter_charts](https://pub.dev/packages/syncfusion_flutter_charts)
Utilizzata per la visualizzazione dei grafici in tempo reale.

Per semplificare l'implementazione, è stata utilizzata anche la libreria [circular_buffer](https://pub.dev/packages/circular_buffer/versions). Tuttavia, in futuro si prevede di rimuovere questa dipendenza per migliorare le prestazioni.

Il codice segue il modello MVC (Model-View-Controller).

# Configurazione

Per funzionare, il plotter deve essere configurato. Una volta connessi a un dispositivo, quest'ultimo deve inviare un comando di configurazione utilizzando il formato `--config-plot:` seguito dai nomi dei grafici che si desidera visualizzare.

Questo comando configura il plotter con le informazioni necessarie e imposta i valori predefiniti delle variabili interne.

Ogni campo deve essere separato dagli altri tramite il carattere `,` (questa impostazione è dinamica e in futuro potrà essere modificata). I campi possono contenere spazi al loro interno.

### Esempio

```
--config-plot:Nome_Grafico_1,NomeGrafico_2,nome grafico 3
```

# Data reciving

L'applicazione riceve i dati tramite seriale e li visualizza sul monitor alla destra della finestra. Se un comando inizia con la chiave `--plot:`, questo non verrà mostrato nel monitor ma verrà interpretato come un valore da aggiungere al grafico. La sintassi è identica ai comandi di configurazione:
- Ogni campo deve essere separato da una virgola
- Ogni campo può essere intero o float purché si utilizzi il carattere `.` come divisore decimale
- Non è necessario inviare esattamente il numero di valori configurati. Se sono configurati 4 grafici ma si inviano solo 2 valori, i primi 2 grafici riceveranno nuovi valori e gli altri 2 riceveranno uno 0. Al contrario, se si inviano 6 valori invece di 4, gli ultimi 2 verranno ignorati.

_**Nota**:_
Tutti i grafici si aggiornano simultaneamente, quindi ad ogni invio di un valore corrisponde sempre l'aggiunta di un valore ad ogni grafico.

### Esempio
```
--plot:0.2,5,90
```

# Data sending

L'invio dei dati avviene trasformando la stringa in caratteri ASCII e inviando l'array risultante.

# Todo list
ecco la lista di alcuni miglioramenti possibili o programmati:

- Modifica del carattere separatore dei valori (default: `,`)
- Pagina delle impostazioni
- Migliorare il feedback in relazione alle operazioni di connessione e disconnessione
- Possibilità di mettere in pausa il grafico e di analizzarne i punti
- Possibilità di esportare i dati in un file csv
- Possibilità di scegliere quanti punti avere nel grafico sull'asse X (default: 500)
- Migliorare la visualizzazione dei messaggi ricevuti
- Migliorare il tema e aggiungere colore nella schermata
- Eliminare la dipendenza dalla libreria _circular_buffer_ per ottimizzare il codice (forse usare la [ListQueue](https://api.flutter.dev/flutter/dart-collection/ListQueue-class.html) di flutter è più efficente)
