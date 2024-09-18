const projects = {
  "personal_web_site": {
    "name": "Personal web with github pages",
    "banner": "personal-web-site.webp",
    "completed": true,
    "last-update": "12/09/2024",
    "descriptionLocation": "/personal_web_site/desc.md",
    "tags": [],
    "documets": [],
    "repository": [
      {
        "name": "DanielePedrazzoli.github.io",
        "link": "https://github.com/DanielePedrazzoli/DanielePedrazzoli.github.io",
        "main_language": "HTML",
        "platform": "Web",
        "framework": "none"
      }
    ],
    "briefDescription": "This is the project for my personal website, published on my public GitHub page. The site is entirely written in HTML, CSS, and JavaScript, and uses an internal database system based on JSON and Markdown files. No external libraries or frameworks are used.\r\n\r\n# Database\r\n\r\nThe database is static and does not involve the use of API calls. All projects are saved in the \"Projects\" folder and are merged into a single JSON file using a script written in Node.js. The database is updated whenever a new..."
  },
  "Pump_erogation": {
    "name": "Pump erogation",
    "banner": "pump_erogation.webp",
    "completed": false,
    "last-update": "05/07/2024",
    "descriptionLocation": "/Pump_erogation/desc.md",
    "tags": [],
    "documets": [],
    "repository": [
      {
        "name": "ESP32 pump controll",
        "link": "https://github.com/DanielePedrazzoli/ESP32-pump-control-ble",
        "main_language": "C++",
        "platform": "Espressif ESP32",
        "framework": "Arduino"
      },
      {
        "name": "Weather app with ble pump controll",
        "link": "https://github.com/DanielePedrazzoli/pump-action-app",
        "main_language": "Dart",
        "platform": "Adroid",
        "framework": "Flutter"
      }
    ],
    "briefDescription": "This project aims to use an ESP32 board to control an external irrigation pump during the summer. The board connects to a WiFi network to obtain local weather information and set up an RTC (Real-Time Clock).\r\n\r\nUsing an application developed in Flutter, it is possible to configure all the pump parameters via BLE (Bluetooth Low Energy).\r\n\r\n# ESP32 Program\r\nThe program uses the ESP32 Preferences library to store values beyond the current session (in case the device needs to be turned off). On the ..."
  },
  "Serial_plotter": {
    "name": "Serial plotter",
    "banner": "/Serial_plotter/data-reciving.webp",
    "completed": false,
    "last-update": "12/09/2024",
    "descriptionLocation": "/Serial_plotter/desc.md",
    "tags": [],
    "documets": [],
    "repository": [
      {
        "name": "Serial plotter",
        "link": "https://github.com/DanielePedrazzoli/Serial-plotter",
        "main_language": "Dart",
        "platform": "Windows/MacOS/Linux",
        "framework": "Flutter"
      }
    ],
    "briefDescription": "This project is a \"Serial Plotter\" capable of graphically displaying data received from a serial device connected to the computer (e.g., a microcontroller).\r\n\r\n# Application\r\n\r\nThe application was developed using Flutter and leverages the following libraries:\r\n- ##### [Flutter_libserialport](https://pub.dev/packages/flutter_libserialport)\r\nUsed for scanning, connecting, and communicating with the computer's serial ports.\r\n\r\n- ##### [syncfusion_flutter_charts](https://pub.dev/packages/syncfusion_..."
  },
  "Step_counter": {
    "name": "Step counter",
    "banner": "step_counter.webp",
    "completed": false,
    "last-update": "05/07/2024",
    "descriptionLocation": "/Step_counter/desc.md",
    "tags": [],
    "documets": [],
    "repository": [
      {
        "name": "ESP32 step counter",
        "link": "",
        "main_language": "C++",
        "platform": "Espressif ESP32",
        "framework": "Arduino"
      },
      {
        "name": "Step counter app",
        "link": "",
        "main_language": "Dart",
        "platform": "Adroid/IOS",
        "framework": "Flutter"
      },
      {
        "name": "Step counter visualizer",
        "link": "",
        "main_language": "Dart",
        "platform": "Windows/MacOS/Linux",
        "framework": "Flutter"
      }
    ],
    "briefDescription": "This project is my final project for my thesis. It is a step counter device that detects the user's movement and estimates the distance covered.\r\n\r\n# MPU6050\r\n\r\nStep recognition is done by analyzing the accelerometer and gyroscope data provided by the MPU6050 sensor. This sensor is a 6-axis accelerometer with a small FIFO onboard to which the data are sent after being acquired. The sensor also has a Digital Motion Processor (DMP) that calculates the quaternion based on the sampled data and saves..."
  }
}