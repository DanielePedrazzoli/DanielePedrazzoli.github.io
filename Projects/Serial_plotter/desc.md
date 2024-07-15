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

To function, the plotter must be configured.Once connected to a device, the device must send a configuration command using the format `--config-plot:` followed by the names of the charts to be displayed.

This command configures the plotter with the necessary information and sets default values for internal variables.

Each field must be separated by a comma `,` (this setting is dynamic and can be changed). Fields can contain spaces.

### Examples

```
--config-plot:Chart_Name_1,ChartName_1,chart name 3
```


# Data Receiving

The application receives data via serial and displays it on the monitor to the right of the window. If a command starts with the key `--plot:`, it will not be shown on the monitor but will be interpreted as a value to be added to the chart. The syntax is identical to configuration commands:
- Each field must be separated by a comma
- Each field can be an integer or a float, provided the `.` is used as the decimal separator
- It is not necessary to send the exact number of configured values. If 4 charts are configured but only 2 values are sent, the first 2 charts will receive new values, and the other 2 will receive a 0. Conversely, if 6 values are sent instead of 4, the last 2 will be ignored.

_**Note**:_ All charts update simultaneously, so each time a value is sent, it corresponds to adding a value to each chart.

### Example
```
--plot:0.2,5,90
```

# Data Sending

Data is sent by converting the string to ASCII characters and sending the resulting array.

# Todo list
Here are some possible or planned improvements:

- Modify the value separator character (default: `,`)
- Settings page
- Improve feedback for connection and disconnection operations
- Ability to pause the chart and analyze points
- Ability to export data to a csv file
- Ability to choose the number of points on the X-axis of the chart(default: 500)
- Improve the visualization of received messages on serial monitor
- Enhance the theme and add color to the screen
- Remove the dependency on the _circular_buffer_ library to optimize the code  (using Flutter's [ListQueue](https://api.flutter.dev/flutter/dart-collection/ListQueue-class.html) might be more efficient)