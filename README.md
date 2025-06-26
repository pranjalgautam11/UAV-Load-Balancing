# 🚁 Multi-UAV Task Offloading Simulation

A simulation GUI for **task offloading and energy efficiency** using multiple UAVs (Unmanned Aerial Vehicles) in an IoT environment, designed for Mobile Edge Computing (MEC) scenarios.

### 🖥️ Proposed Architecture
<img src="Screenshots/Architecture-Diagram.jpg"/>

---

## 🧠 Project Summary

This simulation demonstrates:

- **IoT node deployment**
- **Trajectory optimization**
- **Intelligent task offloading**
- **Energy efficiency comparison** between:
  - Single UAV-based offloading
  - Proposed Multi-UAV offloading model
 

Developed using Python's `tkinter` for GUI and `matplotlib` for visualization.

---

## 🎥 Screenshots

### 🚀 UAV Movement & IoT Node Deployment
<p align="center"><img src="Screenshots/Trajectory.jpg" width="400"/></p>

### 📊 Energy Efficiency, Latency, Task Completion Graph
<p align="center">
  <img src="Screenshots/Energy_Consumption.jpg" width="300"/>
  <img src="Screenshots/Task_Completion.jpg" width="300"/>
  <img src="Screenshots/Latency.jpg" width="300" height="188"/> 
</p>

---

## ⚙️ Features

- Dynamic simulation of UAV movement
- Controlled deployment of IoT devices with no overlap
- Task offloading to nearest UAVs using distance-based logic
- Graphical energy comparison between single and multi-UAV models
- Real-time visualization of data transfer paths

---

## 🛠️ How to Run

### 📦 Requirements

Install dependencies:

```bash
pip install matplotlib numpy
```
