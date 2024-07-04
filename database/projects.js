const projects = {
  "personal_web_site": {
    "info": {
      "name": "Personal web with github pages",
      "banner": "personal-web-site.webp",
      "compleated": false,
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
      ]
    },
    "description": "This is the project for my personal website, published on my public GitHub page. The site is entirely written in HTML, CSS, and JavaScript, and uses an internal database system based on JSON and Markdown files. No external libraries or frameworks are used.",
    "paragraphs": {
      "Database": "The database is static and does not involve the use of API calls. All projects are saved in the \"Projects\" folder and are merged into a single JSON file using a script written in Node.js. The database is updated whenever a new commit is pushed to GitHub.",
      "Projects": "The projects are the most dynamic part of the site. Each project has a description in the <i>desc.md</i> file and a JSON file (<i>info.json</i>) that contains all the brief information. These projects are stored in the file created by the Node.js script and loaded on the projects page. On this page, each project is separated into completed projects and projects in progress, using dynamically created card elements. Each card contains a banner, a title, and a brief description of the project. A button allows the user to view the project's details.",
      "Project Details": "A single page dynamically loads the project (based on the URL) for a more detailed view. On this page, you can see the full project description along with all the repositories that make up the project (if there is more than one)."
    }
  },
  "Pump_erogation": {
    "info": {
      "name": "Pump erogation",
      "banner": "pump_erogation.webp",
      "compleated": false,
      "tags": [],
      "documets": [],
      "repository": [
        {
          "name": "ESP32 pump controll",
          "link": "",
          "main_language": "C++",
          "platform": "Espressif ESP32",
          "framework": "PlatformIO"
        },
        {
          "name": "Weather app with ble pump controll",
          "link": "",
          "main_language": "Dart",
          "platform": "Adroid/IOS",
          "framework": "Flutter"
        }
      ]
    },
    "description": "This project aims to use an ESP32 with both WiFi and BLE connectivity. The board communicates with the application via BLE, requesting information for WiFi connectivity as well as settings for dispensing.\n\nThe idea originated from the need to activate a garden pump periodically while the owners were away (on vacation). Additionally, the functionality to connect to weather APIs has been implemented, allowing the device to know if it has rained, is raining, or rain is forecasted. In such cases, the water pump activation is suspended.",
    "paragraphs": {
      "Application": "The application allows connecting to the board via BLE, enabling both WiFi network setup and manual control of the pump. To inform the user about the parameters the ESP32 board is working on, the same weather APIs are used, but additional information is saved. From the dispensing settings, it is possible to choose whether to retry a dispensing operation skipped due to weather conditions or to retry it the next day.",
      "Weather API": "Open-Meteo has been used for the weather API, which allows free access without a key but imposes a maximum limit of 10,000 calls per day. Neither the board nor the application requires that many calls: the application makes a call every minute, while the board makes sporadic calls when the time for dispensing approaches.",
      "Activation": "The activation time can be set via BLE or obtained from the internet through WiFi connectivity. As the dispensing time approaches, API calls are made to verify three conditions:\n- It hasn't rained during the day.\n- It isn't currently raining.\n- There isn't a high probability of rain within the set number of hours (default: 4 hours).\nIf all conditions are met, the dispensing occurs at the scheduled time. During the dispensing period (which defaults to 5 minutes but is adjustable), the weather is continuously monitored to check for rain. If it starts raining, the dispensing is interrupted."
    }
  },
  "Step_counter": {
    "info": {
      "name": "Step counter",
      "banner": "step_counter.webp",
      "compleated": false,
      "tags": [],
      "documets": [],
      "repository": [
        {
          "name": "ESP32 step counter",
          "link": "",
          "main_language": "C++",
          "platform": "Espressif ESP32",
          "framework": "PlatformIO"
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
      ]
    },
    "description": "This project is my final project for my thesis. It is a step counter device that detects the user's movement and estimates the distance covered.",
    "paragraphs": {
      "MPU6050": "Step recognition is done by analyzing the accelerometer and gyroscope data provided by the MPU6050 sensor. This sensor is a 6-axis accelerometer with a small FIFO onboard to which the data are sent after being acquired. The sensor also has a Digital Motion Processor (DMP) that calculates the quaternion based on the sampled data and saves them in the FIFO as well.",
      "Data Reading": "The ESP32 receives an interrupt every time a sample is acquired. This allows the microcontroller to know how many samples are in the FIFO. When there are enough samples, an I2C burst communication is initiated to read all the available data.",
      "Step Recognition": "Step recognition is done by analyzing the received data after the gravitational influence is removed using the quaternions. A magnitude is calculated from the values of each accelerometer axis and filtered using a low-pass digital FIR filter with a cut-off frequency of 3Hz."
    }
  }
}