let uavs = [];
let numUAVs;

function setup() {
    createCanvas(600, 400);
    background(255);
}

function startSimulation() {
    numUAVs = document.getElementById("numUAVs").value; // Get the number of UAVs
    uavs = []; // Reset UAVs

    // Create UAVs with random positions and random velocities
    for (let i = 0; i < numUAVs; i++) {
        let x = random(width);
        let y = random(height);
        let angle = random(TWO_PI);  // Random direction
        let speed = random(1, 3);
        uavs.push(new UAV(x, y, angle, speed));
    }

    loop(); // Start animation
}

function draw() {
    background(255, 255, 255, 50);  // Fade trail effect
    
    // Update and display each UAV
    for (let uav of uavs) {
        uav.update();
        uav.display();
    }
}

// UAV class that defines each UAV's behavior
class UAV {
    constructor(x, y, angle, speed) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = speed;
    }

    update() {
        // Move in the current direction
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);

        // Bounce off the edges of the canvas
        if (this.x < 0 || this.x > width) this.angle = PI - this.angle;
        if (this.y < 0 || this.y > height) this.angle = -this.angle;
    }

    display() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.x, this.y, 10, 10); // UAV as a small circle
    }
}
