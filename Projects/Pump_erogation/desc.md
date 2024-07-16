This project aims to use an ESP32 board to control an external irrigation pump during the summer. The board connects to a WiFi network to obtain local weather information and set up an RTC (Real-Time Clock).

Using an application developed in Flutter, it is possible to configure all the pump parameters via BLE (Bluetooth Low Energy).

# ESP32 Program
The program uses the ESP32 Preferences library to store values beyond the current session (in case the device needs to be turned off). On the first startup (or if the data gets corrupted or deleted), the board enters WiFi scanning mode and continuously updates the BLE values to communicate the results externally.

Once a password and network name are received, the WiFi connection is established and the RTC is set up.

The exchange of activation time and duration values occurs via BLE.

When the activation time arrives, an HTTP call is made to the [API di meteo](https://open-meteo.com/) to obtain information regarding rain and precipitation probability. The probability in the preceding and subsequent hours is observed to determine whether to start the irrigation.

After the irrigation is completed, the program goes into standby mode until the next activation.

# Application

The application is written in Flutter and uses the [Flutter_blue_plus](https://pub.dev/packages/flutter_blue_plus) library to create an interface with the microcontroller. Through the application, it is possible to set:
- Rain probability threshold
- Number of subsequent hours to observe rain probability
- Number of preceding hours to observe rain probability
- Irrigation activation time
- Irrigation duration

It is also possible to manually start or stop an irrigation session, overriding the scheduled program.

## Weather
To minimize the amount of data transmitted via BLE and the memory resources occupied by the board, it does not save the forecasts obtained via the API. Instead, the app makes the same API call to get the same results and display the forecasts for the next 12 hours.