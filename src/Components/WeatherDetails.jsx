function WeatherDetails({ weather }) {

  return (

    <section className="details">

      <div className="detail-card">

        <span>🌡️</span>

        <p>Feels Like</p>

        <h3>
          {Math.round(
            weather.main.feels_like
          )}°C
        </h3>

      </div>


      <div className="detail-card">

        <span>💧</span>

        <p>Humidity</p>

        <h3>
          {weather.main.humidity}%
        </h3>

      </div>


      <div className="detail-card">

        <span>💨</span>

        <p>Wind Speed</p>

        <h3>
          {weather.wind.speed} m/s
        </h3>

      </div>


      <div className="detail-card">

        <span>🌡️</span>

        <p>Pressure</p>

        <h3>
          {weather.main.pressure} hPa
        </h3>

      </div>

    </section>

  );

}

export default WeatherDetails;