This project aims to use an ESP32 with both WiFi and BLE connectivity. The board communicates with the application via BLE, requesting information for WiFi connectivity as well as settings for dispensing.

The idea originated from the need to activate a garden pump periodically while the owners were away (on vacation). Additionally, the functionality to connect to weather APIs has been implemented, allowing the device to know if it has rained, is raining, or rain is forecasted. In such cases, the water pump activation is suspended.

# Application

The application allows connecting to the board via BLE, enabling both WiFi network setup and manual control of the pump. To inform the user about the parameters the ESP32 board is working on, the same weather APIs are used, but additional information is saved. From the dispensing settings, it is possible to choose whether to retry a dispensing operation skipped due to weather conditions or to retry it the next day.

# Weather API

Open-Meteo has been used for the weather API, which allows free access without a key but imposes a maximum limit of 10,000 calls per day. Neither the board nor the application requires that many calls: the application makes a call every minute, while the board makes sporadic calls when the time for dispensing approaches.

# Activation

The activation time can be set via BLE or obtained from the internet through WiFi connectivity. As the dispensing time approaches, API calls are made to verify three conditions:
- It hasn't rained during the day.
- It isn't currently raining.
- There isn't a high probability of rain within the set number of hours (default: 4 hours).

If all conditions are met, the dispensing occurs at the scheduled time. During the dispensing period (which defaults to 5 minutes but is adjustable), the weather is continuously monitored to check for rain. If it starts raining, the dispensing is interrupted.

