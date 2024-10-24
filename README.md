# Flight Tracking Application - README

## Overview

The **Flight Tracking Application** is a web-based platform built with **React** and **Redux**, designed to provide users with real-time flight status updates. It allows users to search for flights, view detailed flight information, and easily navigate through different sections of the application.

## Presentation

Watch the demo of the application here: https://youtu.be/vSmf5MtJNqc

## Installation and Usage

To run the Flight Tracking Application locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/parveenbarak/Travellopia-takehome.git
cd Travelopia-takehome/travellopia-flight
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`.

### 4. Build the Application
To generate the production-ready build:
```bash
npm run build
```
The build files will be located in the `build` directory.

## Project Structure

The project structure is organized as follows:

```
Travelopia-takehome/
├── travellopia-flight/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FlightSummary.tsx
│   │   │   ├── FlightList.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Menu.tsx
│   │   ├── pages/
│   │   │   ├── FlightInfo.tsx
│   │   │   ├── PageNotFound.tsx
│   │   ├── redux/
│   │   │   ├── actions.ts
│   │   │   ├── reducer.ts
│   │   │   ├── store.ts
│   │   ├── utils/
│   │   │   ├── timeFormatter.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── package.json
│   ├── README.md
```

### Key Directories and Files

- **src/**: Contains the application's source code.
- **components/**: Reusable React components:
  - `FlightSummary.tsx`: Displays a summary of individual flights.
  - `FlightList.tsx`: Lists available flights.
  - `Header.tsx`: The application header.
  - `Menu.tsx`: The navigation menu.
- **pages/**: Pages like:
  - `FlightInfo.tsx`: Shows detailed flight information.
  - `PageNotFound.tsx`: Displays when the user navigates to an invalid route.
- **redux/**: Contains Redux configuration:
  - `actions.ts`: Defines Redux actions.
  - `reducer.ts`: Manages the flight data in the Redux store.
  - `store.ts`: Configures the Redux store.
- **utils/**: Utility functions:
  - `timeFormatter.ts`: Helper function to format time data.
- **App.tsx**: The root component that sets up routing and the application structure.
- **main.tsx**: The application's entry point.

## Pages and Components

### 1. **Navbar**
   - **Purpose**: Provides a search bar for users to find flights by flight number or airline name.
   - **Features**:
     - Real-time search with dynamic results.
     - API calls triggered as users type.

### 2. **Sidebar**
   - **Purpose**: Provides navigation links to different sections of the application.
   - **Links**:
     - **Home**: Redirects to the flight listing page.
     - **History**: Displays flight history (upcoming feature).
     - **Tickets**: Shows user ticket information (upcoming feature).

### 3. **FlightSummary**
   - **Purpose**: Displays a summary of individual flights.
   - **Features**:
     - Displays airline, status, origin, destination, and departure time.
     - Color-coded indicators for flight status.

### 4. **FlightList**
   - **Purpose**: Renders a table of available flights.
   - **Features**:
     - Clickable flight numbers leading to detailed flight information.
     - Displays flight number, airline, origin, destination, departure time, and status.

### 5. **FlightInfo**
   - **Purpose**: Displays in-depth information about a selected flight.
   - **Features**:
     - Shows flight duration, detailed departure/arrival times, and flight route visualization.

## Redux Integration

### State Management

The application uses **Redux** for managing global state, making it easier to handle flight data and application state.

- **State**:
  - Flight data: All flight information available in the system.
  - Recent flight data: Stores recently fetched flight statuses.

### Actions

- `SET_FLIGHT_DATA_Info`: Updates the global flight data.
- `SET_RECENT_FLIGHT_DATA_info`: Updates recent flight data.

### Action Creators

- `dataUpdateInfo(data: dataType[])`: Dispatches an action to update flight data.
- `currentStatusDataUpdateInfo(data: dataType[])`: Dispatches an action to update recent flight data.

### Reducer

The `flightReducer` function handles actions related to flight data and updates the state accordingly.

### Store Configuration

The Redux store is created using the `createStore` function, with the flight status reducer managing the state.

## Utilities

- **timeFormatter.ts**: Contains utility functions to format flight departure times and dates, ensuring a user-friendly display.

## Conclusion

The **Flight Tracking Application** utilizes modern React and Redux features for effective state management, offering a reliable and user-friendly platform for tracking flights. Future updates will include a flight history section and ticket management features to enhance the user experience.
