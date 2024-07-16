Questo progetto ha lo scopo di utilizzare una scheda ESP32 per controllare una pompa di irrigazione esterna durante l'estate. La scheda si connette a una rete WiFi per ottenere informazioni meteo locali e impostare un RTC (Real Time Clock).

Tramite un'applicazione sviluppata in Flutter, è possibile configurare tutti i parametri della pompa tramite BLE (Bluetooth Low Energy).

# Programma ESP32
Il programma utilizza la libreria Preferences di ESP32 per memorizzare i valori anche oltre la sessione corrente (nel caso in cui il dispositivo venga spento). Alla prima accensione (o se i dati vengono danneggiati o eliminati), la scheda entra in modalità di scansione WiFi e aggiorna continuamente i valori del BLE per comunicare i risultati all'esterno.

Una volta ricevuti una password e il nome della rete, viene effettuata la connessione WiFi e impostato l'RTC.

Lo scambio dei valori di tempo di accensione e durata avviene tramite BLE.

Quando arriva il tempo di accensione, viene effettuata una chiamata HTTP alle [API di meteo](https://open-meteo.com/) per ottenere informazioni riguardanti piogge e probabilità di precipitazioni. Viene osservata la probabilità nelle ore precedenti e successive per determinare se avviare o meno l'irrigazione.

Al termine dell'irrigazione, il programma entra in modalità standby fino alla prossima attivazione.

# Applicazione

L'applicazione è scritta in Flutter e utilizza la libreria [Flutter_blue_plus](https://pub.dev/packages/flutter_blue_plus) per creare un'interfaccia con il microcontrollore. Tramite l'applicazione è possibile impostare:
    - Soglia di probabilità di pioggia
    - Numero di ore successive in cui osservare la probabilità di pioggia
    - Numero di ore precedenti in cui osservare la probabilità di pioggia
    - L'orario di attivazione dell'erogazione
    - La durata dell'erogazione

È inoltre possibile avviare o fermare manualmente un'irrigazione, senza seguire il programma impostato.

## Meteo
Per minimizzare la quantità di dati trasmessi tramite BLE e le risorse di memoria occupate dalla scheda, quest'ultima non salva le previsioni ottenute tramite API. L'app effettua la stessa chiamata API per ottenere gli stessi risultati e mostrare le previsioni per le prossime 12 ore.