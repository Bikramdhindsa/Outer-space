# Outer Space

Outer Space is a React-based web application that brings the wonders of space exploration to your fingertips. Using APIs from NASA and SpaceX, this project offers a unique glimpse into the cosmos and recent space missions.

## Features

- NASA's Astronomy Picture of the Day
- Interactive Moon surface map
- Mars imagery
- SpaceX latest launch information
- Complete SpaceX launch history

## Technologies Used

- React
- Vite
- npm
- SCSS
- Leaflet.js (for Moon map)

## APIs Used

- NASA APOD API: `https://api.nasa.gov/planetary/apod`
- SpaceX Latest Launch API: `https://api.spacexdata.com/v5/launches/latest`
- SpaceX All Launches API: `https://api.spacexdata.com/v5/launches`
- Moon Surface Imagery: `https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png`
- Mars Surface Imagery: `https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png`

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add your NASA API key:
VITE_NASA_API_KEY=your_api_key_here
Copy4. Run `npm run dev` to start the development server

## Components

### Picture of the Day

Fetches and displays NASA's Astronomy Picture of the Day. Users can select any date to view that day's featured image and description.

### Moon Surface

### Mars Surface

### SpaceX Launches
Displays information about SpaceX launches, including:

Latest launch details
Mission patch
Launch date
Rocket used
Mission success status
Link to launch broadcast

### All SpaceX Launches
Provides a comprehensive list of all SpaceX launches, featuring:

Mission name
Launch date
Success status
Mission patch
Link to launch broadcast

Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.
