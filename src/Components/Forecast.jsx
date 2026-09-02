function Forecast({ forecast }) {

  const days =
    forecast.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );


  return (

    <section className="forecast">

      <h2>
        5-Day Forecast
      </h2>


      <div className="forecast-grid">

        {days.map((day) => {

          const date =
            new Date(day.dt * 1000);


          const dayName =
            date.toLocaleDateString(
              "en-US",
              {
                weekday: "short"
              }
            );


          return (

            <div
              className="forecast-card"
              key={day.dt}
            >

              <h3>
                {dayName}
              </h3>


              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />


              <h4>
                {Math.round(
                  day.main.temp
                )}°C
              </h4>


              <p>
                {day.weather[0].description}
              </p>


              <small>
                💧 {day.main.humidity}%
              </small>

            </div>

          );

        })}

      </div>

    </section>

  );

}

export default Forecast;