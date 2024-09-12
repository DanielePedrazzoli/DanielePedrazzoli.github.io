This project is a "Serial Plotter" capable of graphically displaying data received from a serial device connected to the computer (e.g., a microcontroller).

# Application

The application was developed using Flutter and leverages the following libraries:
- ##### [Flutter_libserialport](https://pub.dev/packages/flutter_libserialport)
Used for scanning, connecting, and communicating with the computer's serial ports.

- ##### [syncfusion_flutter_charts](https://pub.dev/packages/syncfusion_flutter_charts)
Used for real-time chart visualization.

To simplify implementation, the [circular_buffer](https://pub.dev/packages/circular_buffer/versions) library was also used. However, future plans include removing this dependency to improve performance.

The code follows the MVC (Model-View-Controller) pattern.

# Configuration
Older versions of this plotter required manual configuration, but newer versions automatically adjust based on received data.

# Connecting 
The application scans for connected devices capable of serial communication. On the initial page, you can select the port and baud rate for the communication.

# Data Receiving
Once a successful connection is established, the application begins listening to the serial port. Messages starting with # are interpreted as chart values, while other data is stored without special processing. All communication history is saved in an internal buffer and can be exported.

# Multiple plots
In this new version you can now add multiple plots on the same chart page. The application can recognize multiple data streams and display each as a separate plot. 
To add a new plot, right-click on the existing plot.

# Signal Analysis
The new version includes an FFT feature for signal analysis, allowing you to identify specific frequencies in your signal. 
This is useful for designing filters or experimenting with signal processing.
Note that this feature is still under development and may not be entirely stable.

# Export value
All received values can be exported to a .csv file. The export menu simplifies this process and includes options to:

- Edit the separator character
- Display the number of values to be exported
- Show a preview of the data
- Separate non-chart values
- Collapse multiple spaces in messages (e.g., "A lazy dog" becomes "A lazy dog")
- Choose between exporting as .txt or .csv file

