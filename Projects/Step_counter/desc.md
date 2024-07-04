This project is my final project for my thesis. It is a step counter device that detects the user's movement and estimates the distance covered.

# MPU6050

Step recognition is done by analyzing the accelerometer and gyroscope data provided by the MPU6050 sensor. This sensor is a 6-axis accelerometer with a small FIFO onboard to which the data are sent after being acquired. The sensor also has a Digital Motion Processor (DMP) that calculates the quaternion based on the sampled data and saves them in the FIFO as well.

# Data Reading

The ESP32 receives an interrupt every time a sample is acquired. This allows the microcontroller to know how many samples are in the FIFO. When there are enough samples, an I2C burst communication is initiated to read all the available data.

# Step Recognition

Step recognition is done by analyzing the received data after the gravitational influence is removed using the quaternions. A magnitude is calculated from the values of each accelerometer axis and filtered using a low-pass digital FIR filter with a cut-off frequency of 3Hz.