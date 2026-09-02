import { useState } from "react";

import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import WeatherDetails from "./Components/WeatherDetails";
import Forecast from "./Components/Forecast";
import Loader from "./Components/Loader";

import "./App.css";

function App() {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const API_KEY = "0f653933c777da488266485659ebca55";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const searchWeather = async () => {

    if (!city.trim()) {

      setError("Please enter a city name.");

      return;
    }

    setLoading(true);

    setError("");

    try {

      // Current weather API

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );


      if (!weatherResponse.ok) {

        throw new Error(
          "City not found. Please enter a valid city."
        );

      }


      const weatherData =
        await weatherResponse.json();


      // Forecast API

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );


      if (!forecastResponse.ok) {

        throw new Error(
          "Could not load forecast."
        );

      }


      const forecastData =
        await forecastResponse.json();


      setWeather(weatherData);

      setForecast(forecastData);

    }

    catch (err) {

      setWeather(null);

      setForecast(null);

      setError(err.message);

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <div className="app">

      <header className="header">

        <h1>
          🌤️ WeatherNow
        </h1>

        <p>
          Search weather anywhere in the world
        </p>

      </header>


      <main className="container">

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={searchWeather}
        />


        {loading && (
          <Loader />
        )}


        {error && !loading && (

          <div className="error">

            ❌ {error}

          </div>

        )}


        {weather && !loading && !error && (

          <>

            <CurrentWeather
              weather={weather}
            />


            <WeatherDetails
              weather={weather}
            />


            {forecast && (

              <Forecast
                forecast={forecast}
              />

            )}

          </>

        )}


        {!weather &&
          !loading &&
          !error && (

            <div className="welcome">

              <div className="weather-icon">
                ☀️
              </div>

              <h2>
                Search for a city
              </h2>

              <p>
                Enter a city name to see
                current weather and forecast.
              </p>

            </div>

          )}

      </main>


      <footer>

        <p>
          WeatherNow © 2026
        </p>

        <p>
          Built with React
        </p>

      </footer>

    </div>

  );
}

export default App;