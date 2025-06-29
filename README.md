# Multi-UAV Task Offloading and Simulation Project

The surge in the use of multi-UAV systems in monitoring, disaster management, and wireless network communications increases the need for efficient balancing of the operational load and resource-aware task separation to maximize performance and system lifetime. Impaired task allocation may cause overuse of power, congestion of the network, and low overall efficiency. This paper suggests an intelligent balancing of load framework which combines energy-directed task placement, heuristic trajectory planning of UAVs, and resource-aware management. Using high-level algorithms and real-time optimization approaches allows for improvement in UAV coordination, energy preservation, and equity in task distribution. The approach seeks to achieve improved reliability of networks, increased flight time of UAVs, and enhanced system survivability under dynamic resource-poor conditions.

---

## Features

### Python-Based Simulation (Tkinter GUI)
- Deploy and visualize multiple UAVs and IoT nodes
- Dynamic UAV movement via threading
- Smart task offloading using proximity and energy criteria
- Real-time simulation of data transfer paths
- Energy consumption comparison (single vs multi-UAV access)
- Matplotlib-based energy graph plotting

### Web-Based Visualization (HTML + JS)
- Animated UAV movement using Canvas
- User-selectable number of requests
- UAV signal dispatch and collision avoidance
- 2D simulation of UAV communication with IoT devices
- Realistic 3D-ish axis representation

---

## File Structure

```
UAV-Offloading-Project/
├── UAVOffloading.py         # Python GUI simulation
├── simulation.js            # Web animation logic
├── index.html               # Web interface and visualization
└── README.md                # Project documentation
```

---

## Requirements

### Python Environment:
- Python 3.x
- tkinter
- matplotlib
- numpy

To install dependencies:
```bash
pip install matplotlib numpy
```

---

## How to Run

### Run Python Simulation:
```bash
python UAVOffloading.py
```
Steps:
1. Input number of IoT nodes
2. Select a node ID for offloading
3. Click "Generate IoT Network" to deploy UAVs and nodes
4. Click "IoT Task Offloading" to begin simulation
5. Use "Energy Graph" to visualize energy consumption comparison

### Run Web Visualization:
1. Open `index.html` in any modern browser
2. Choose number of UAVs (requests)
3. Click "Send Signal" to trigger simulation

---

## Simulation & Methodology

### Architecture Diagram
<img src="Screenshots/Architecture-Diagram.jpg"/>

### UAV-Based Simulation Flow
The system implements the following core methodologies:

#### A. Data Preprocessing
- Noise filtering from UAV sensor logs (e.g., CQI reports)
- Normalizing power consumption across different UAVs
- Interpolating missing telemetry values

#### B. Feature Extraction
- Battery consumption rate
- Task processing time
- Communication latency between UAV and base stations

#### C. Load Balancing Algorithms
- **Dynamic Load Balancing Algorithm**: Allocates tasks based on live telemetry
- **Reinforcement Learning-Based Allocation**: Improves over time
- **Genetic Algorithm**: Optimizes UAV path for minimal energy usage

| Algorithm      | Key Feature              | Load Distribution | Energy Efficiency | Scalability | Computational Cost | Learning Capability       |
|----------------|--------------------------|-------------------|--------------------|-------------|---------------------|---------------------------|
| Dynamic        | Real-time reallocation   | Adaptive          | High               | High        | Moderate            | None                      |
| RL-Based       | Self-learning allocation | Optimal over time | High               | High        | High                | Learns from experience    |
| Genetic        | Energy-aware routing     | Adaptive          | Low                | High        | Higher              | None                      |

#### D. Communication Protocols
- **LEACH**: Low Energy Adaptive Clustering Hierarchy
- **TDMA**: Time Division Multiple Access protocol for collision-free communication

---

## Result Analysis

### A. IoT & UAV Movement Simulation
- Random IoT nodes are placed within defined boundaries
- UAVs move and offload tasks based on proximity and energy status

<p align="center"><img src="UAV_Signal_and_Collision_Avoidance_Simulation.gif" width="400"/> <img src="Screenshots/Trajectory.jpg" width="400"/></p>

### B. Energy Consumption Comparison

| Number of Offloads | Existing Single UAV (J) | Proposed Multi UAV (J) | Energy Reduction (%) |
|---------------------|--------------------------|--------------------------|------------------------|
| 0                   | 70                       | 35                       | 50.00%                 |
| 1–3                 | 70                       | 35                       | 50.00%                 |
| 4–8                 | 50                       | 30                       | 40.00%                 |
| 9                   | 49                       | 29                       | 40.82%                 |

### C. Energy & Latency Models
- **Energy (E)** = Pt × T  
- **Multi-UAV Energy (E_multi)** = E_single / n
- **Latency (L)** = D / R  
- **Multi-UAV Latency (L_multi)** = D / (R1 + R2 + ... + Rn)

### D. Performance Graphs
- Energy Comparison Graph  
  <p align="center"><img src="Screenshots/Energy_Consumption.jpg" width="300"/></p>

- Latency Reduction Graph  
  <p align="center"><img src="Screenshots/Latency.jpg" width="300" height="188"/></p>

- Task Completion Efficiency Graph  
  <p align="center"><img src="Screenshots/Task_Completion.jpg" width="300"/></p>

---

## Conclusion
The proposed multi-UAV framework significantly outperforms the traditional single UAV approach. It ensures:
- Better task allocation
- Energy-efficient operations
- Lower latency in task delivery
- High scalability in dynamic environments

It is ideal for use cases such as disaster recovery, smart surveillance, and autonomous logistics.

---

## License
This project is licensed under the MIT License.

---

## Author
**Pranjal Gautam**  
Feel free to reach out for contributions, improvements, or queries related to simulations and optimizations in UAV systems.
