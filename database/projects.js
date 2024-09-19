const projects = {
  "personal_web_site": {
    "name": "Personal web with github pages",
    "banner": "personal-web-site.webp",
    "completed": true,
    "last-update": "19/09/2024",
    "descriptionLocation": "/personal_web_site/desc.md",
    "briefDescriptionLocation": "brief-description.md",
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
    "briefDescription": "This project is my personal website, hosted on GitHub. Built using HTML, CSS, and JavaScript, it features an internal database that stores project data in JSON and Markdown files.\r\n\r\nAs the site evolved, I enhanced the user experience by adding dynamic SVG animations with a Figma extension. Projects are displayed in a dynamic card layout using JavaScript, and the project database is managed by a custom Node.js script, which automatically updates through GitHub Actions."
  },
  "Pump_erogation": {
    "name": "Pump erogation",
    "banner": "pump_erogation.webp",
    "completed": false,
    "last-update": "05/07/2024",
    "descriptionLocation": "/Pump_erogation/desc.md",
    "briefDescriptionLocation": "brief-description.md",
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
        "platform": "Android",
        "framework": "Flutter"
      }
    ],
    "briefDescription": "This project uses an ESP32 board to control an irrigation pump during summer. The board connects to WiFi to fetch weather data and set an RTC (Real-Time Clock). Pump settings are configured via BLE using a Flutter app.\r\nThe ESP32 stores data and scans for WiFi on the first startup. Irrigation timing is based on weather forecasts via an API. The Flutter app lets users set rain thresholds, irrigation times, and manually control the pump."
  },
  "Serial_plotter": {
    "name": "Serial plotter",
    "banner": "/Serial_plotter/data-reciving.webp",
    "completed": false,
    "last-update": "12/09/2024",
    "descriptionLocation": "/Serial_plotter/desc.md",
    "briefDescriptionLocation": "brief-description.md",
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
    "briefDescription": "This project is a \"Serial Plotter\" built with Flutter to graphically display data from serial devices (e.g., microcontrollers) connected to a computer. Inspired by the Arduino Serial Monitor tool, it connects to serial ports, reads data, and plots it. All messages are stored, but only those starting with a specific character are plotted. The rest are saved for reference. This tool provides a simple and efficient way to visualize real-time data from serial communication."
  },
  "Step_counter": {
    "name": "Step counter",
    "banner": "step_counter.webp",
    "completed": false,
    "last-update": "05/07/2024",
    "descriptionLocation": "/Step_counter/desc.md",
    "briefDescriptionLocation": "brief-description.md",
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
    "briefDescription": "This project is my thesis final, featuring a step counter device. It uses the MPU6050 sensor to detect user movement and estimate distance. The MPU6050, a 6-axis accelerometer and gyroscope, sends data to the ESP32 via I2C. The ESP32 processes this data, leveraging its Digital Motion Processor (DMP) to recognize steps by analyzing and filtering the accelerometer data, while removing gravitational effects for accurate step detection."
  }
}