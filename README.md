# E-Commerce (Blinkhub)

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
   git clone https://github.com/valehasadli/blinkhub-react-example blinkhub-ecommerce
   ```
   
2. Navigate into the project directory and install dependencies:
    ```bash
   cd blinkhub-ecommerce
   ```
   
3. Run the project:
   ```bash
   npm install
   ```
   or 
   ```bash
    yarn
    ```
   
4. Open your browser and visit http://localhost:3000.

## Setting Up the Backend Mock Server

Clone the backend mock server repository:
```bash
git clone https://github.com/valehasadli/blinkhub-ecommerce-json-server
```
Navigate into the server directory and install dependencies:
```bash
cd blinkhub-ecommerce-json-server
npm install
```
Run the mock server
```bash
npx json-server --watch db.json --port 8000
```


## Usage
This React application demonstrates a simple e-commerce platform utilizing the Blinkhub event emitter for efficient state management and cross-component communication. Here's how to explore its features:

1. **Explore the Product List**:
   - On the main page, you'll find a list of products.
   - Each product has an 'Add to Cart' button.

2. **Adding Products to the Basket**:
   - Click on the 'Add to Cart' button for any product.
   - Observe that the item is added to your basket. This action triggers a Blinkhub event.

3. **View the Basket**:
   - Navigate to the Basket page to view the items you've added.
   - Here, you'll see a list of products currently in your basket.

4. **Remove Items from the Basket**:
   - Next to each item in the basket, there's a 'Remove' button.
   - Clicking this button will remove the item from the basket, again utilizing Blinkhub to update the state across components.

5. **Real-time Updates Across Components**:
   - Notice how adding or removing items from the basket instantly updates the Basket page without needing to reload the page or refetch data from the server.
   - This showcases the real-time capabilities of Blinkhub in a React application.

6. **Responsive Basket Count**:
   - The application also includes a basket count feature, which updates in real time as you add or remove items.

Feel free to add and remove various items from the basket to see how Blinkhub facilitates seamless state updates across different components of the application.


## Contributing

Your contributions are always welcome! Please feel free to submit a pull request, open an issue, or provide feedback.
