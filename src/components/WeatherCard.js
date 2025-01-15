import React from "react";

function WeatherCard({
  title,
  temperature,
  condition,
  icon,
  windSpeed,
  humidity,
  cloudiness,
}) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-center justify-between mt-4">
        <img src={icon} alt={condition} className="w-16 h-16" />
        <div>
          <p className="text-4xl font-bold">{temperature}°C</p>
          <p>{condition}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Wind Speed:{windSpeed} Km/h</p>
        <p>Humidity: {humidity}%</p>
        <p>Cloudiness: {cloudiness}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
