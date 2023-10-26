# React Blinkhub Demo

This project showcases the power and flexibility of the Blinkhub event emitter in a React application. Through this demo, we illustrate how a single event, emitted from one component, can be subscribed to and acted upon by multiple listeners in real-time.

## Table of Contents

1. [Features](#features)
2. [Setup and Running](#setup-and-running)
3. [Usage](#usage)
4. [Contributing](#contributing)

## Features

- **Search Input**: Located at the top-center, this input emits an event in real-time as you type.

- **Listener Boxes**: Six boxes are present below the search input. Each box is a subscriber to the `searchTermUpdated` event. When you type something in the search input, each box generates a unique message based on the emitted term.

## Setup and Running

1. Clone this repository:
   ```bash
   git clone https://github.com/valehasadli/blinkhub-react-example
   ```
   
2. Navigate into the project directory and install dependencies:
    ```bash
   cd react-blinkhub-demo
   ```
   
3. Run the project:
   ```bash
   npm install
   ```
   
4. Open your browser and visit http://localhost:3000.

## Usage
1. Type anything into the search input.
2. Observe that the text in the listener boxes updates in real-time, showcasing multiple components listening and responding to the same event.


## Contributing

Your contributions are always welcome! Please feel free to submit a pull request, open an issue, or provide feedback.