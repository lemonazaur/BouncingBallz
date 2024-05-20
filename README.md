# Bouncing Ballz

Bouncing Ballz is a micro physics simulator built using HTML5 Canvas and TypeScript. The simulation allows users to spawn ballz that obey realistic gravity, moving vertically and bouncing upon hitting the bottom of the screen. The gravity can be adjusted to simulate different planets. The simulation includes sound effects for bouncing balls. 

## Features

- Realistic physics simulation with gravity and dampening effects.
- Sound effects for bouncing balls.
- Adjustable gravity settings to simulate different planets.
- Randomised ball creation (color and size)
- Responsive page and UI.
- Limit on 15 ballz for optimization.

## Two options to start
1. Go to my hosted page [here](https://lemonazaur.github.io/BouncingBallz/)
2. Run it locally on your machine. Follow the instructions below.

## Setup and Execution Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)
- TypeScript (installed globally)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/bouncing-ballz.git
   cd bouncing-ballz
2. **Install TypeScript:**
   If TypeScript is not installed globally, install it using npm:
   ```bash
   npm install -g typescript
3. **Compile TypeScript if you edit code, otherwise continue (default .ts is already compiled and included -> script.js)**
   ```bash
   tsc script.ts --outFile script.js
4. **Run the Simulation**
   Open the index.html file in your web browser:
   You can open the file directly by double-clicking on it 


### Usage
1. Spawn Ballz: Click anywhere on the canvas to spawn a new ball.
2. Adjust Gravity: Use the buttons at the top of the screen to change the gravity setting.
   - MOON: 1.62 m/s²
   - MARS: 3.71 m/s²
   - EARTH: 9.8 m/s²
   - JUPITER: 24.8 m/s²
   - SUN: 274 m/s²
3. Clear Ballz: refresh to remove all ballz from the screen (Command+R or Windows+R).


## Tools
This project uses the HTML5 Canvas API for rendering and TypeScript for writing type-safe simulation logic.

## Author
Sergey Hakobyan - lemonazaur 
