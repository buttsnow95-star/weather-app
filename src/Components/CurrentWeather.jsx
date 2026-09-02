function CurrentWeather({ weather }) {

  const weatherData =
    weather.weather[0];

  const icon =
    weatherData.icon;


  return (

    <section className="current-weather">

      <div className="location">

        <h2>
          📍 {weather.name}
        </h2>

        <p>
          {weather.sys.country}
        </p>

      </div>


      <div className="main-weather">

        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={weatherData.description}
        />


        <div>

          <h1>
            {Math.round(
              weather.main.temp
            )}°C
          </h1>

          <p className="condition">

            {weatherData.description}

          </p>

        </div>

      </div>

    </section>

  );

}

export default CurrentWeather;