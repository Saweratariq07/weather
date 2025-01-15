"use client";
import React, { useEffect, useState } from "react";

function App() {
  const savedNumber = localStorage.getItem("city");
  const [city, setCity] = useState(savedNumber ?? "");   
  const searchedWeather = JSON.parse(localStorage.searched ?? '[]');
  const [submittedCity , setSubmittedCity] = useState(savedNumber ?? "")
  const [forecast, setForecast] = useState(searchedWeather);
  const [error, setError] = useState(null);
  const apiKey = "fd7499f7bd7e76ea6e3ccbc366873a88";

  useEffect(() => {
    localStorage.setItem('searched', JSON.stringify(forecast));
  }, [forecast]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "200") {
        const today = new Date();
        const todayString = today.toISOString().split("T")[0];

        const filteredForecast = data.list
          .map((item) => {
            const date = new Date(item.dt_txt);
            return {
              ...item,
              dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
              dayShortName: date.toLocaleDateString("en-US", {
                weekday: "short",
              }),
              day: date.getDate(),
              monthName: date.toLocaleDateString("en-US", { month: "long" }),
              year: date.getFullYear(),
            };
          })
          .filter((item) => {
            const itemDate = item.dt_txt.split(" ")[0];
            return itemDate >= todayString && item.dayShortName !== "Wed";
          });

        const uniqueDays = [];
        const daysSet = new Set();

        for (const day of filteredForecast) {
          if (!daysSet.has(day.dayShortName)) {
            uniqueDays.push(day);
            daysSet.add(day.dayShortName);
          }
          if (uniqueDays.length === 4) break;
        }

        setForecast(uniqueDays.reverse());
        setError(null);
      } else {
        setError(data.message);
        setForecast([]);
      }
    } catch (error) {
      setError("Something went wrong");
      setForecast([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
    localStorage.setItem("city", city);
    handleSearch();
  };

  const todayForecast =
    forecast.find((day) => day.dayShortName === "Thu") || forecast[0];

  const todayDayName = new Date().toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className="weather-card w-full max-w-[40rem] h-[450px] bg-[#222931] rounded-2xl size-16 m-2.5 flex justify-between items-center gap-2.5">
      <div className="display flex justify-between align-middle flex-col text-center text-white gap-10 w-full">
        {forecast.length > 0 && (
          <>
            <h1 className="font-extrabold text-lg">{todayForecast.dayName}</h1>
            <p>
              {todayForecast.day} {todayForecast.monthName} {todayForecast.year}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${todayForecast.weather[0].icon}@4x.png`}
              alt={todayForecast.weather[0].description}
              height={"200px"}
              width={"200"}
            />
            <h1 className="font-bold1">
              {Math.round(todayForecast.main?.temp)}°C
            </h1>
            <p className="capitalize-first-letter font-bold">
              {todayForecast.weather[0].description}
            </p>
          </>
        )}
        {error && <p>{error}</p>}
      </div>

      {/* Search and Forecast */}
      <div className="dataset">
        <form
          onSubmit={handleSubmit} 
          className="relative flex items-center w-full mt-8"
        >
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            className="px-4 py-2 focus:outline-none w-full"
            style={{
              borderRadius: "4px",
              height: "40px",
              paddingRight: "42px",
            }}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 pt-2 bottom-0 bg-[#3651a8] text-white flex items-center justify-center"
            style={{
              width: "62px",
              borderRadius: "0 4px 4px 0",
              padding: 2,
              paddingTop: 2,
              border: "4px solid #3651a8",
            }}
          >
            Search
          </button>
        </form>

        {forecast.length > 1 && (
          <ul>
            <li>
              <strong>NAME</strong> {submittedCity} 
            </li>
            <li>
              <strong>TEMP</strong> {Math.round(forecast[0].main.temp)}°C
            </li>
            <li>
              <strong>HUMIDITY</strong> {forecast[0].main.humidity}%
            </li>
            <li>
              <strong>WIND SPEED</strong> {forecast[0].wind.speed} Km/h
            </li>
          </ul>
        )}

        <div className="weekly-weather flex flex-col gap-5 shadow-2xl rounded-md">
          {forecast.map((day, index) => (
            <div
              className={`day-card flex flex-col items-center p-2 rounded-2xl h-24 w-24 ${
                day.dayShortName === todayDayName 
                  ? "bg-white text-black"
                  : day.dayShortName === "Sun" 
                  ? "bg-transparent text-white"
                  : "bg-transparent text-white"
              }`}
              key={day.dt}
            >
              {day && (
                <>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                    width={"40px"}
                  />
                  <p className="text-sm">{day.dayShortName}</p>
                  <p className="text-sm">{Math.round(day.main.temp)}°C</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div>City name: {submittedCity}</div> 
      </div>
    </div>
  );
}

export default App;
