# Weather Forecast Application

## Overview

This Weather Forecast Application allows users to search for the weather in any city worldwide. The application uses an API to fetch real-time weather data, including temperature, humidity, and weather conditions. It features a clean and responsive design powered by Tailwind CSS.

## Features

- **City Search**: Enter the name of any city to get current weather details.
- **Real-Time Data**: Displays accurate weather data including temperature, humidity, and conditions.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.

## Technologies Used

- **HTML**: Markup language for creating the structure of the application.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript**: For making API calls and handling dynamic content.
- **Weather API**: To fetch real-time weather information.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rajivkr8207/Weather_forecast.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather_forecast
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Open the application.
2. Enter the name of a city in the search bar.
3. Press the search button to retrieve and display the current weather information.

## Setup Instructions

1. **API Key**: Register and obtain an API key from a weather data provider like OpenWeatherMap.
2. **Environment Configuration**: Replace the placeholder API key in your JavaScript file with your actual API key.

    ```javascript
    const apiKey = '1b67615db12d368802bacd9b9da4b0a4';
    ```

3. **Tailwind CSS**: The project includes Tailwind CSS via a CDN link in the HTML file. Make sure you have an internet connection to fetch the styles.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for the weather API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) for styling guidance.
